import { useState } from "react";

function Robot(props){
    return(
        <>
            <div>
                <p>Hello {props.name}! Meet Your Boss {props.bossName}</p>
                <p>{props.name}'s Age is {props.age}</p>
                <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default Robot;