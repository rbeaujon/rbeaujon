import React from "react";
import './menu.style.scss';

const Menu = () => {


	return (
		<div className='navigation'>
			<nav>
				<ul id="menu">
					<li><div onClick={()=> document.documentElement.scrollTo({top: 0, behavior: 'smooth'})}>Home</div></li>
					<li><div onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'}) +50 }>About</div></li>
					<li><div onClick={() => document.getElementById('skills').scrollIntoView({behavior: 'smooth'})}>Skills</div></li>
					<li><div onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>POrtfolio</div></li>
					<li><div onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}>Services</div></li>
					<li><div onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'}) +50 }>Contacts</div></li>	
				</ul>
			</nav>
	 	</div>
	)

}

export default  Menu