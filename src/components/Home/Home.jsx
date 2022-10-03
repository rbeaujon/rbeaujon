import { useState } from "react";
import Menu from "../Menu/Menu";
import '../../styles.scss';
import './Home.scss';
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/footer"
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import About from "../About/About";
import me from '../../assets/pictures/me.png';
// import arrow from '../../assets/icons/arrowBottom.png';
import on from '../../assets/icons/on.png'
import off from '../../assets/icons/off.png'

function Home() {
  
  const [isLight, setIsLight] = useState({status:true});

  let styles = {
    class: "On",
    switch: off,
  }
  if(isLight.status === true){
    setIsLight(styles)
  } else if (isLight.status === false) {
    styles = {
      class: "Off",
      switch: on,
    }
    setIsLight(styles)
  }

  let welcome = "Welcome to my Portfolio"
  welcome =welcome.split('')
  return (
    <div className={"Main " + isLight.class}>
      <div className="menu"><Menu /></div>
      <div className={"Home " + isLight.class} id="home">
        <div className="welcome">
          { welcome.map(letter  =>  <span className={letter === " " ? "spanEmpty" : ""}>{letter}</span> )} 
        </div>
        <div id="picture"><img src={me} alt="Ricardo Beaujon"></img></div>
        <div id="circle"></div>
        <div id="name">Ricardo Beaujon</div>
        <div id="title">Full-Stack Developer</div>  
        <div id="switch"><img src={isLight.switch} onClick={() => isLight.switch === off ? setIsLight({status: false}) : setIsLight({status: true}) } alt="switch"></img></div> 
        {/* <div id="arrow">
          <img src={arrow} alt="next section"  onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} />
        </div> */}
      </div>
      <div className="About" id="about"> <About/> </div>
      <div className="Skills" id="skills"> <Skills/> </div>
     {/*  <div className="Portfolio" id="portfolio"> <Portfolio/> </div>
      <div className="Services" id="services"> <Services/> </div> */}
      <div className="Contact" id="contact"> <Contact/> </div>
      <div className="Footer" id="footer"><Footer/></div>
    </div>
  );
}

export default Home;
