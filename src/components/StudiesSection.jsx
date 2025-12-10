import React, { forwardRef }  from "react";
import { studiesData } from "../data/studiesData";
import ListItem from "./ListItem";

const StudiesSection = forwardRef((props, ref)=>{
    return(
        <section ref={ref}>
            <h2>ESTUDIOS</h2>
            <ul>
                {
                    studiesData.map((studyData) =>{
                        return(
                            <ListItem 
                                key={studyData.id}
                                title={studyData.title}
                                content={studyData.content}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
})

export default StudiesSection;