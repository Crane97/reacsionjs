import React from "react";


const People = (props) => {
    return (
        <li>
            <h2>{props.name}</h2>
            <h2>{props.mass}</h2>
            <h2>{props.height}</h2>
        </li>
    )
}