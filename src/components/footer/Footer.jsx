import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import "./footer.scss";

export default function Footer() {
    return (
        <div className="Footer" id="Footer">
            <footer className="footer">
        <div className="container">
          <div className="about-us" data-aos="fade-right" data-aos-delay={200}>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
              iure, autem nulla tenetur repellendus.</p>
          </div>
          <div className="newsletter" data-aos="fade-right" data-aos-delay={200}>
            <h2>Newsletter</h2>
            <p>Stay update with our latest</p>
            <div className="form-element">
              <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right" /></span>
            </div>
          </div>
          <div className="instagram" data-aos="fade-left" data-aos-delay={200}>
            <h2>Instagram</h2>
            <div className="flex-row">
              <img src="./assets/instagram/thumb-card3.png" alt="insta1" />
              <img src="./assets/instagram/thumb-card4.png" alt="insta2" />
              <img src="./assets/instagram/thumb-card5.png" alt="insta3" />
            </div>
            <div className="flex-row">
              <img src="./assets/instagram/thumb-card6.png" alt="insta4" />
              <img src="./assets/instagram/thumb-card7.png" alt="insta5" />
              <img src="./assets/instagram/thumb-card8.png" alt="insta6" />
            </div>
          </div>
          <div className="follow" data-aos="fade-left" data-aos-delay={200}>
            <h2>Follow us</h2>
            <p>Let us be Social</p>
            <div>
              <FaUserTie/>
              <FaUserTie/>
              <FaUserTie/>
            </div>
          </div>
        </div>
        <div className="rights flex-row">
          <h4 className="text-gray"> 
            © 2021 Khachapuridze  Co. All Rights Reserved 
            <a href="www.youtube.com/c/dailytuition" target="_black">Khachapuridze &amp; Co. </a> 
            <p> and its logo is a trade mark symbol of khachapuridze
            </p></h4>
        </div>
        <div className="move-up">
          <span><i className="fas fa-arrow-circle-up fa-2x" /></span>
        </div>
      </footer>
        </div>
    )
}
