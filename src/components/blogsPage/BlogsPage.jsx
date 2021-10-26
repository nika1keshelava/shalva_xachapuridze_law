import React from 'react';
import "./blogsPage.scss";
import { FaUserTie } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaRegShareSquare } from 'react-icons/fa';
import { BsFillArrowRightSquareFill } from 'react-icons/fa';


export default function BlogsPage() {
    return (
        <div className="BlogsPage" id="BlogsPage">
            <main>
            <section className="container">
        <div className="site-content">
          <div className="posts">
            <div className="post-content" data-aos="zoom-in" data-aos-delay={200}>
              <div className="post-image">
                <div id="video">
                  <iframe width="100%" height="600vh" src="https://www.youtube.com/embed/2roEaCJP6B4">
                  </iframe>
                </div>
                <div className="post-info flex-row">
                  <span><FaUserTie/>&nbsp;&nbsp;შალვა ხაჭაპურიძე</span>
                  <span><FaRegCalendarAlt/>&nbsp;&nbsp;January 14, 2021</span>
                  <span><FaRegShareSquare/> გააზიარეთ Facebook-ზე</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">Professional Practice Profile
                </a>
                <p id="video_desc" >"Khachapuridze &amp; Legal Company" will assist you in the start-up and development of your business in Georgia. It provies skilled consultation to produce local and international arrangements. It also represents your interests in court hearings and proceedings. With the vast experience of our legal services the company ensures an individual cost-effective approach to every individual matter.
                </p>
                <button><FaUserTie/>Read More &nbsp; <FaUserTie/></button>
              </div>
            </div>
            <hr />
          </div>
          <aside className="sidebar">
            <div className="popular-post">       
              <div className="post-content" data-aos="flip-up" data-aos-delay={200}>
                <div className="post-image">
                  <div>
                    <img src="./assets/popular-post/law1.jpg" className="img" alt="blog1" />
                  </div>
                  <div className="post-info flex-row">
                    <span><FaRegCalendarAlt/>&nbsp;&nbsp;January 14,
                      2021</span>
                    <span> <FaRegShareSquare/>share</span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">How successful has the law been post Covid in Georgia - The Economic Times</a>
                </div>
              </div>
              <div className="post-content" data-aos="flip-up" data-aos-delay={300}>
                <div className="post-image">
                  <div>
                    <img src="./assets/popular-post/strasbourg.jfif" className="img" alt="blog1" />
                  </div>
                  <div className="post-info flex-row">
                    <span><FaRegCalendarAlt/>&nbsp;&nbsp;January 14,
                      2021</span>
                    <i className="far fa-share-square" />                                    <span><FaRegShareSquare/>share</span>
                  </div>
                </div>
                <div className="post-title">
                  <a href="#">Three Georgian Candidates Presented to Strasbourg Court Rejected</a>
                </div>
                <div className="post-content" data-aos="flip-up" data-aos-delay={200}>
                  <div className="post-image">
                    <div>
                      <img src="./assets/popular-post/law1.jpg" className="img" alt="blog1" />
                    </div>
                    <div className="post-info flex-row">
                      <span><FaRegCalendarAlt/>&nbsp;&nbsp;January 14,
                        2021</span>
                      <i className="far fa-share-square" />                                    <span><FaRegShareSquare/>share</span>
                    </div>
                  </div>
                  <div className="post-title">
                    <a className="title" href="#">How successful has the law been post Covid in Georgia - The Economic Times</a>
                  </div>
                </div>
                </div>
                </div>
                </aside>
        </div>
      </section>
            </main>
      </div>
    )
}
