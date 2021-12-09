/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Widget from './Widget'

export default function Body() {
    return (
        <div className="body-wrapper">
            <Widget title = "Critical Error" content = "Critical errors are the issue that have the highest impact on your overall SEO perfomance" size = "24rem" number = "13" bgcolor = "red"/>
            <Widget title = "Warnings" content = "Warnings are less impactful errors to your overall SEO performance" size = "24rem" bgcolor = "orange" number = "9"/>
            <Widget title = "Notices" content = "Notices have litte impact on your SEO performance but are important to be aware of." size = "24rem" number = "28" bgcolor = "blue"/>
            <div className="card mb-3" style={{width: "95%", margin: "1rem"}}>
            <div className="card-body">
                <h4 className="card-title">Website Score</h4>
                <p><h1 style={{ display: 'inline-block' }}>81</h1> <h3 style={{ display: 'inline-block' }}>of 100</h3></p>
                <p className="card-text">x checks passed out of y</p>
                <progress id="file" value="77" max="100" style = {{width: "20rem", height: "1.5rem"}}> 77 </progress>
                <br />
                <button type="button" class="btn btn-primary">More details</button>
            </div>
        </div>
        </div>
    )
}
