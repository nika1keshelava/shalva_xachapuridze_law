import React from 'react'
import phone from './phone.svg';
import email from './emailme.svg';
import location from './location.svg';
import "./contactPage.scss";
import facebook from './facebook.svg'

function Tittle({title, span}) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}


function ContactItem({icon, text1, text2,title}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}

function ContactPage() {
    return (
        <div className="gverdi" >
            <div className="title">
            <Tittle title={'Contact us'} span={'Contact US'} />

            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.618504331671!2d44.77453132921407!3d41.71028919870228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd2ca43d37b%3A0xf2867e4cd04c625d!2s18-20%20Ateni%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1633545796589!5m2!1sen!2sge" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+995 598 71 92 01'} text2={'+995 598 71 92 01'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'lawyer.shalva@gmail.com'} text2={'lawyer.shalva@gmail.com'} title={'Email'}/>
                    
                    <ContactItem icon={facebook} text1={ <a href="https://www.facebook.com/shalva.khachapuridze.3"> Shalva Xachapuridze </a> } text2={'დაგვეკონტაქტეთ'} title={'Facebook'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;