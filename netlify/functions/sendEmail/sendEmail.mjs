// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler =  async function (event, context){
  try {
    if(event.httpMethod != 'POST'){
      console.log('Metodo no permitido')
      return{
        statusCode: 405,
        body : JSON.stringify({message: 'Metodo no permitido: Solo se permiten peticiones POST'})
      }
    }
    const formData = JSON.parse(event.body)
    console.log(formData)

    return({
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: 'Datos del fomulario recibidos correctamente'})
    })
  } catch (error) {
    console.log('Error: '+ error)
    return{
      statusCode: 500,
      body : JSON.stringify({message: 'Error interno del servidor'})
    }
  }
}
export { handler }