import './Contact.scss';
import linkedin  from '../../assets/icons/linkedIn2.png'
import gmail  from '../../assets/icons/gmail.png'
import instagram  from '../../assets/icons/instagram.png'
import facebook  from '../../assets/icons/facebook2.png'
import ws  from '../../assets/icons/ws.png'


const Contact = () => {
	return (
		<div>
			<div className="textBg">Contacts</div>
			<div id="contacts">
				<a href="https://linkedin.com/in/rbeaujon/"  target="_blank"><img align="center" src={linkedin} alt="Ricardo Beaujon" /></a> 
				<a href="mailto:rbeaujon77@gmail.com " target="_blank"><img align="center" src={gmail} alt="Email"/></a> 
				<a href="https://www.instagram.com/rbeaujon/" target="_blank"><img align="center" src={instagram} alt="Instagram"/></a> 
				<a href="https://www.facebook.com/rbeaujon" target="_blank"><img align="center" src={facebook} alt="Facebook"/></a> 
				<a href="https://wa.me/+37253560174" target="_blank"><img align="center" src={ws} alt="Facebook"/></a>
			</div>
		</div>
		

		
	)
}
export default Contact