import React from 'react'
import "./team.scss";

export default function Team() {

    const styleObject = {
        "width" : "100%"
  }
    return (        
        <div className="team" id="team">
            <div class="about-section">
            <h1 className="teamh1">Our team</h1>
            <h2 className="teamh1">cool guys</h2>
            <h3 className="teamh1">our team</h3>
              </div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="assets/pics/LAP_4648.JPG" alt="Mike" style={styleObject}/>
      <div class="container1">
        <h2>shalva </h2>
        <p class="title">Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Lorem ipsum dolor.</p>
        <div class="overlay1">big boss</div>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
      <img src="assets/pics/LAP_4486.JPG" alt="Mike" style={styleObject}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
      <img src="assets/pics/LAP_4401.JPG" alt="Mike" style={styleObject}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  

  <div class="column">
    <div class="card">
      <img src="assets/pics/LAP_4331.JPG" alt="Mike" style={styleObject}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
      <img src="assets/pics/LAP_4426.JPG" alt="Mike" style={styleObject}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>


  

</div>

        </div>
    )
}
