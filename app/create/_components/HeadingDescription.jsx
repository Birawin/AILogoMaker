import React from "react";

function HeadingDescription({title, description}) {
    return (
        <div>
            <h2 className="text-3xl text-red-500 font-bold">{title}</h2>
            <p className= "text-gray-400 text-lg mt-2">{description}</p>
            
        </div>
    )
}

export default HeadingDescription