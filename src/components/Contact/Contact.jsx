import './Contact.scss';
const linkedin = '/assets/icons/linkedIn2.png'
const gmail = '/assets/icons/gmail.png'
const instagram = '/assets/icons/instagram.png'
const facebook = '/assets/icons/facebook2.png'
const ws = '/assets/icons/ws.png'
const github = '/assets/icons/github.png'


const Contact = () => {

	const root = "http://rbeaujon.com";

	return (
		<div>
			<div className="textBg">Contacts</div>
			<div id="contacts">
				<a href="https://linkedin.com/in/rbeaujon/"  target="_blank"><img align="center" src={root + linkedin} alt="Ricardo Beaujon" /></a> 
				<a href="mailto:rbeaujon77@gmail.com " target="_blank"><img align="center" src={root + gmail} alt="Email"/></a> 
				<a href="https://www.instagram.com/rbeaujon/" target="_blank"><img align="center" src={root + instagram} alt="Instagram"/></a> 
				<a href="https://www.facebook.com/rbeaujon" target="_blank"><img align="center" src={root + facebook} alt="Facebook"/></a> 
				<a href="https://wa.me/+37253560174" target="_blank"><img align="center" src={root + ws} alt="Facebook"/></a>
				<a href="https://github.com/rbeaujon" target="_blank"><img align="center" src={root + github} alt="GitHub"/></a>
			</div>
		</div>
		

		
	)
}
export default Contact