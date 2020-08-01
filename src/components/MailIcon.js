import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export class MailIcon extends Component {
    render() {
        return (
           
            <a href="mailto:trevor@trevormearns.com"> <FontAwesomeIcon icon={faEnvelope}  /> </a>
           
        )
    }
}

export default MailIcon