import React from 'react'

export default function Info() {

    function mailBtn() {
        return window.open('mailto:jcerovsky8@gmail.com?subject=subject&body=body')
    }


    return (
        <div>
            <img src="images/me-img.JPG"/>
            <h3>Jakub Cerovsky</h3>
            <p className="developer-text">Frontend Developer</p>
            <div className="btns">
                <a className="email-btn" onClick={mailBtn}><i className="icon fa-solid fa-envelope"></i>Email</a>
                <a className="linked-btn" href="https://www.linkedin.com/in/jakub-cerovsky-288161173/" target='_blank'><i className="icon fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
        
    )}



