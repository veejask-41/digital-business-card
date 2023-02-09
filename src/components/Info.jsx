import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Info() {
    return (
        <div className="info-div">
            <img src="/my-image.jpeg" alt="my image" />
            <h2>Sajeev Kugarajah</h2>
            <p className="description">CSE Undergraduate</p>
            <p className="small-text">University of Moratuwa</p>
            <div className="btn-div">
                <button className="info-btn btn-email">
                    <a href="#">
                        <FontAwesomeIcon className="btn-icon" icon={faEnvelope}></FontAwesomeIcon>
                        Email
                    </a>
                </button>
                <button className="info-btn btn-linkedin">
                    <a href="#">
                        <FontAwesomeIcon className="btn-icon" icon={faLinkedin}></FontAwesomeIcon>
                        Linkedin
                    </a>
                </button>
            </div>
        </div>
    )
}
