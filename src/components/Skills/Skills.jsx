import './Skills.scss';
import react  from '../../assets/icons/react.svg';
import redux  from '../../assets/icons/redux.svg'
import ts  from '../../assets/icons/ts.svg'
import js  from '../../assets/icons/js.svg'
import css3  from '../../assets/icons/css3.svg'
import sass  from '../../assets/icons/sass.svg'
import html5  from '../../assets/icons/html5.svg'
import graphql  from '../../assets/icons/graphql.svg'
import mysql  from '../../assets/icons/mysql.svg'
import sql  from '../../assets/icons/sql.png'
import php  from '../../assets/icons/php.png'
import angularjs  from '../../assets/icons/angularjs.svg'
import docker  from '../../assets/icons/docker.svg'
import postgresql  from '../../assets/icons/postgresql.png'
import figma  from '../../assets/icons/figma.svg'
import git  from '../../assets/icons/git.svg'
import confluence  from '../../assets/icons/confluence.svg'
import slack  from '../../assets/icons/slack.svg'
import jira  from '../../assets/icons/jira.svg'





const Skills = () => {
	return (
		<div>
			<div className="textBg">Skills</div>
			<div>
				<div id="experience">
					<span>Working experience</span>
					<span id="effect"></span>
					<div>
					<img src={react} alt=""/>
						<img src={redux} alt=""/>
						<img src={ts} alt="" />
						<img src={js} alt=""/>
						<img src={css3} alt=""/>
						<img src={sass} alt=""/>
						<img src={html5} alt=""/>
						<img src={graphql} alt=""/>
						<img src={mysql} alt=""/>
						<img src={sql} alt=""/>
						<img src={php} alt=""/>
					</div>
				</div>
				<div id="handsOn">
					<span>Hands-On Experience</span> 
					<div>
						<img src={angularjs} alt="" />
						<img src={docker} alt="" />
						<img src={postgresql} alt="" />
					</div>
				</div>
				<div id="others">
					<span>Others</span> 
					<div>
						<img src={figma} alt="" />
						<img src={git} alt=""  />
						<img src={confluence} alt="" />
						<img src={slack} alt=""  />
						<img src={jira} alt=""  />
					</div>
				</div>
				<div id="network">
					<span>Network</span> 
					<div>
						* TCP/IP protocols,
						* VoIP,
						* CCTV / NVR,  
						* Structured cabling.
					</div>
				</div>
			</div>
		</div>
	
	)	
}

export default Skills