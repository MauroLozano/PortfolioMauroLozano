import React from "react";
import ListItem from "./ListItem";
import { experienceData } from "../data/experienceData";

function ExperienceSection(){
    return(
        <section id="experience">
            <h2>EXPERIENCIA</h2>
            <ul>
                {experienceData.map((experience)=>{
                    return(
                        <ListItem 
                            key={experience.id}
                            title={experience.title}
                            content={experience.content}
                        />
                    )
                })}
            </ul>
        </section>
    )
}
export default ExperienceSection;