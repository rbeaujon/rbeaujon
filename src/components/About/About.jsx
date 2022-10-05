import './About.scss'
const venezuela = '/assets/icons/venezuela.png';
const estonia = '/assets/icons/estonia.png';


const About = () => {

	const root = "http://rbeaujon.com";

	return (
		<div>
			<div className="textBg">About</div>
			<div className='container'>
				<p>Venezuelan living in Estonia since 2017.</p>
				<p>Degree in Computer Science from Nueva Esparta University, Caracas, Venezuela (2009).</p>
				<p>I'm a proactive and energetic person who likes to learn, improve and use my skills in the best way possible.</p>
				<p>The jokes are part of my life, I like a lot joking around and by doing so give people positive energy.</p>
				<p>Communication, trust, and being humble are very important things for me. Hmmm yes, I hate lies.</p>
				<p>My hobbies are dancing and photography.</p>	
			</div>
			
			<img id="venezuela" src={root + venezuela} alt="Vnezuela"/>
			<div id="particle"></div>
			<img id="estonia" src={root + estonia} alt="Estonia"/>
			
		</div>

	)
}
export default About