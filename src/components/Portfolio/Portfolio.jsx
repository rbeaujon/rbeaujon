import React from 'react';

import './Portfolio.scss';
import matic from '../../assets/images/matic/matic.jpeg';
import nuestronorte from '../../assets/images/nuestronorte/nnelc.png';
import jrbs2007 from '../../assets/images/jrbs2007/home.png';
import perezbravo from '../../assets/images/perezbravo/perezbravo.png';
import yolo from '../../assets/images/yolo/ppal.png';
import wordle from '../../assets/images/wordle/won.jpg';
import sicca from '../../assets/images/sicca/ppal.png';
import positium from '../../assets/images/positium/ppal.png';
import plasticos from '../../assets/images/plasticos/plasticos.png';
import brainbase from '../../assets/images/brainbase/ppal.png';

const Portfolio = () => {
	return (
		<div>
			<div className="textBg">Portfolio</div>
			<span id="effect"></span>
			<div className='Folders'>
				<div className='container' id="matic" >
					<div className='front'> 
						<div><img id="matic" src={matic} alt="Matic"/></div>
					</div>
					<div className='back'> 			
					{/* <div className='close'>X</div> */}
						<div className='containerBack'>
							<p>This project is an application created in React version 18.2.0 to show 3 logic functions (Fibonacci, Count Words, FizzBuzz) and one SPA that handles one CRUD API.</p>
							<p>The App has unit testing for all modules with JEST using react-scripts: 5.0.1.</p>
							<p>API: https://www.api.recruitment.matic.io /docs/#/Articles/.</p>
							<p>the design was provided by Figma document and adapted for work on mobile with Middle and High Resolutions in portrait mode.</p>			
							<p>(2022)</p>	
						</div>
						<a href="https://aistica.com/matic" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="brainbase" >
					<div className='front'> 
						<div><img id="brainbase" src={brainbase} alt="brainbase"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>App created in Angular version 14.1.0 to get the opening and closing prices of 5 cryptocurrencies symbols on a certain day. </p>
							<p>API</p> 
							<p>https://polygon.io/ with APIKey;</p> 
							<p>Simple but informative design is maintained with colors when the currency rises or falls or if there is a connection failure, it is reported via a status bar</p>
							<p>Front-End: Angular, Typescript and CSS</p>
							<p>(2022)</p>		
						</div>
						<a href="https://aistica.com/positium" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="nuestronorte" >
					<div className='front'> 
						<div><img id="nuestronorte" src={nuestronorte} alt="nuestronorte"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>It's created in HTML, Javascript, CSS  and with a back-end, on PHP and MySQL.</p>
							<p>This one was working in an IntraNet to incentive the workers playing with the games on it</p> 
							<p>Like that they could win excellent awards while accumulating points throughout the month.</p>		
							<p>(2010)</p>
						</div>
						<a href="https://rbeaujon/nuestronorteeslacima/" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="wordle">
					<div className='front'> 
						<div><img id="wordle" src={wordle} alt="wordle"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>Game created from scratch by me.</p>
							<p>It's based and inspired by the popular game Wordle</p> 
							<p>The original game was created and developed by Welsh software engineer Josh Wardle, and owned and published by The New York Times.</p>	
							<p>Techologies used: React, Redux and CSS</p>	
							<p>Adapted to work in mobiles and Tables with responsive designs </p>
							<p>(2021)</p>	
						</div>
						<a href="https://aistica.com/wordle" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="yolo">
					<div className='front'> 
						<div><img id="yolo" src={yolo} alt="yolo"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>Project with Front-End React-Redux and SASS.</p>
							<p>responsive designs and Back-End (API's) on PHP and Mysql.</p>
							<p>The following project emulates the interaction between a gamer, the operator, and the games provider.</p> 
							<p>(2021)</p>		
						</div>
						<a href="https://aistica.com/yologroup/" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="sicca">
					<div className='front'> 
						<div><img id="sicca" src={sicca} alt="sicca"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>The next project is about the current weather in Estonia. It shows the temperature, feel like, the wind conditions, pressure, precipitation, visibility, UV rays, carbon dioxide, and Nitrogen dioxide in the atmosphere.</p>
							<p>Front-End: React-Redux and SASS with responsive designs Back-End: RESTFUL API on PHP and Mysql.</p> 
							<p>(2021)</p>		
						</div>
						<a href="https://aistica.com/positium" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="positium">
					<div className='front'> 
						<div><img id="positium" src={positium} alt="positium"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>The next project is about the current weather in Estonia.</p>
							<p>It shows the temperature, feel like, the wind conditions, pressure, precipitation, visibility, UV rays, carbon dioxide, and Nitrogen dioxide in the atmosphere.</p>
							<p>Technical details</p>
							<p>Front-End: React-Redux and SASS with responsive designs Back-End: RESTFUL API on PHP and Mysql.</p> 
							<p>Like that they could win excellent awards while accumulating points throughout the month.</p>		
							<p>(2021)</p>	
						</div>
						<a href="https://aistica.com/positium" rel="noreferrer"  target="_blank">Visit</a>

					</div>
				</div>
				<div className='container' id="jrbs2007">
					<div className='front'> 
						<div><img id="jrbs2007" src={jrbs2007} alt="jrbs2007"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>Created in HTML, Javascript, CSS, with back-end, on PHP and MySQL.</p>
							<p>This managed and controlled the client's subscriptions while it provided support and advisory services. </p> 
							<p>Focused on quality and the responsibility to provide a safe and highly reliable service for its time </p>
							<p>(2001)</p>		
						</div>
						<a href="http://jrbs2007.com/" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="perezbravo">
					<div className='front'> 
						<div><img id="perezbravo" src={perezbravo} alt="perezbravo"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>Adapted with HTML, Javascript, CSS.</p>
							<p>Business website for a Venezuelan law firm</p> 	
							<p>(2007)</p>	
						</div>
						<a href="https://perezbravo.com.ve" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>
				<div className='container' id="plasticos">
					<div className='front'> 
						<div><img id="plasticos" src={plasticos} alt="plasticos"/></div>
					</div>
					<div className='back'> 		
						<div className='containerBack'>
							<p>This used HTML, Javascript, CSS and with a back-end on PHP </p>
							<p>This is a simple business website to have an internet presence. </p> 
							<p>Which allows you to manage corporate emails and communication with your customers.</p>
							<p>(2008)</p>		
						</div>
						<a href="https://aistica.com/positium" rel="noreferrer"  target="_blank">Visit</a>
					</div>
				</div>

			</div>
		</div>

	)
	
}

export default Portfolio