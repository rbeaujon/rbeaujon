import Menu from "../Menu/Menu";
import '../../styles.scss';
import './Home.scss';
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/footer"
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import About from "../About/About";
import me from '../../assets/pictures/me.png'
import arrow from '../../assets/icons/arrowBottom.png';;


function Home() {
  let welcome = "Welcome to my Portfolio"
  welcome =welcome.split('')
  return (
    <div className="Main">
      <div className="menu"><Menu /></div>
      <div className="Home" id="home">
        <div className="welcome">
          { welcome.map(letter  =>  <span className={letter === " " ? "spanEmpty" : ""}>{letter}</span> )} 
        </div>
        <div id="picture"><img src={me} alt="Ricardo Beaujon"></img></div>
        <div id="circle"></div>
        <div id="name">Ricardo Beaujon</div>
        <div id="title">Full-Stack Developer</div>   
        <div id="arrow">
          <img src={arrow} alt="next section"  onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})} />
        </div>
      </div>
      <div className="About" id="about"> <About/> </div>
      <div className="Skills" id="skills"> <Skills/> </div>
      {/* <div className="Portfolio" id="portfolio"> <Portfolio/> </div>
      <div className="Services" id="services"> <Services/> </div> */}
      <div className="Contact" id="contact"> <Contact/> </div>
      <div className="Footer" id="footer"><Footer/></div>
    </div>
  );
}

export default Home;
