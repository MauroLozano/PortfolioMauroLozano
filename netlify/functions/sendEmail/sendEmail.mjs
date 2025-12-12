// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
import nodemailer from 'nodemailer'
const handler =  async function (event, context){
  try {
    //Requests validations
    if(event.httpMethod != 'POST'){
      console.error('Error 405: Metodo no permitido. Recibido: ' + event.httpMethod)
      return{
        statusCode: 405,
        body : JSON.stringify({message: 'Error: Metodo no permitido. Solo se permiten peticiones POST'})
      }
    }
    const formData = JSON.parse(event.body)
    if (!formData.name || !formData.lastname || !formData.email || !formData.subject || !formData.message){
      console.error('Error 400: Faltan campos obligatorios')
      return{
        statusCode: 400,
        body : JSON.stringify({message: 'Error: Faltan campos obligatorios'})
      }
    }
    //Connection to Brevo, structuring and sending the email.
    let transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, 
      auth: {
        user: process.env.BREVO_MAUROLOZ_IDENTIFIER,
        pass: process.env.BREVO_MAUROLOZ_PASSWORD,
      },
    })
    const senderName = `${formData.lastname} ${formData.name}`
    await transporter.sendMail({
      from: `${senderName} <mauroloz2006@gmail.com>`,
      replyTo: formData.email,
      to: 'mauroloz2006@gmail.com',
      subject: `${formData.subject} || Contacto desde Portfolio`,
      text: `Mensaje de ${formData.lastname} ${formData.name} - Asunto ${formData.subject}.\nMensaje: ${formData.message}`,
      html: `<p>De: ${formData.name} ${formData.lastname}</p><p>Asunto: ${formData.subject}</p><p>Mensaje: ${formData.message}</p>`
    })
    return({
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: 'Datos del fomulario enviados correctamente'})
    })
  } catch (error) {
    console.error('Error al enviar el correo: ' + error)
    return{
      statusCode: 500,
      body : JSON.stringify({message: 'Error interno del servidor'})
    }
  }
}
export { handler }