import React from 'react'

export default function Widget(props) {

    const widgetSize = {width: props.size, margin: "1rem", display: "inline-block", color: "white", backgroundColor: props.bgcolor, minHeight: "10vh" };

    return (
        <div className="card mb-3" style={widgetSize}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p style={{ marginBottom: "none" }}><h1 style={{ display: 'inline-block' }}>{props.number}</h1> issues</p>
                <p className="card-text">{props.content}</p>
                <button style = {{opacity: "1", backgroundColor: props.bgcolor, color: "white"}} type="button" class="btn btn-light">More details</button>
            </div>
        </div>
    )
}
