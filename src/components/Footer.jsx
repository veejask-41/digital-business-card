import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <a href="#"> <FontAwesomeIcon icon={faTwitterSquare} /> </a>
            <a href="#"> <FontAwesomeIcon icon={faFacebookSquare} /> </a>
            <a href="#"> <FontAwesomeIcon icon={faInstagramSquare} /> </a>
            <a href="#"> <FontAwesomeIcon icon={faGithubSquare} /> </a>
        </footer>
    )
}