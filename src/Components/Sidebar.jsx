import React from 'react'
import ListElement from './ListElement'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <img src="https://psyber.co/wp-content/uploads/2021/03/Psyber-Technologies_logo.png" alt="Psyber_Logo" />
            <div style = {{textAlign: 'center'}}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/036/943/non_2x/young-man-in-office-working-on-laptop-computer-and-phone-photo.jpg" style = {{height: "175px", width: "225px"}} alt="" />
                <strong>John Winston</strong>
                <p style = {{fontSize: "14px"}}>General Manager</p>
            </div>
            <ul className = "sidebar-list">
                <ListElement icon = "fas fa-columns" name="Dashboard"/>
                <ListElement icon = "fas fa-bullseye" name="Site Audit"/>
                <ListElement icon = "fas fa-tachometer-alt" name="Site Monitoring"/>
                <ListElement icon = "fas fa-chart-bar" name="Rank Tracking"/>
                <ListElement icon = "fas fa-link" name="Backlink Tracker"/>
                <ListElement icon = "fas fa-crosshairs" name="Strategy"/>
            </ul>
        </div>
    )
}
