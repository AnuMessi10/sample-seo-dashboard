import React from 'react'

export default function ListElement(props) {
    return (
        <div>
            <li><i class={props.icon}></i>{props.name}</li>
        </div>
    )
}
