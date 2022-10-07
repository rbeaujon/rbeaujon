import './Skills.scss';

const react = '/assets/icons/react.svg';
const redux = '/assets/icons/redux.svg'
const ts = '/assets/icons/ts.svg'
const js = '/assets/icons/js.svg'
const css3 = '/assets/icons/css3.svg'
const sass = '/assets/icons/sass.svg'
const html5 = '/assets/icons/html5.svg'
const graphql = '/assets/icons/graphql.svg'
const mysql = '/assets/icons/mysql.svg'
const sql = '/assets/icons/sql.png'
const php = '/assets/icons/php.png'
const angularjs = '/assets/icons/angularjs.svg'
const docker = '/assets/icons/docker.svg'
const postgresql = '/assets/icons/postgresql.png'
const figma = '/assets/icons/figma.svg'
const git = '/assets/icons/git.svg'
const confluence = '/assets/icons/confluence.svg'
const slack = '/assets/icons/slack.svg'
const jira = '/assets/icons/jira.svg'





const Skills = () => {
	
	const root = "http://rbeaujon.com";
	return (
		<div>
			<div className="textBg">Skills</div>
			<div>
				<div id="experience">
					<span>Working experience</span>
					<span id="effect"></span>
					<div>
					<img src={root + react} alt=""/>
						<img src={root + redux} alt=""/>
						<img src={root + ts} alt="" />
						<img src={root + js} alt=""/>
						<img src={root + css3} alt=""/>
						<img src={root + sass} alt=""/>
						<img src={root + html5} alt=""/>
						<img src={root + graphql} alt=""/>
						<img src={root + mysql} alt=""/>
						<img src={root + sql} alt=""/>
						<img src={root + php} alt=""/>
					</div>
				</div>
				<div id="handsOn">
					<span>Hands-On Experience</span> 
					<div>
						<img src={root + angularjs} alt="" />
						<img src={root + docker} alt="" />
						<img src={root + postgresql} alt="" />
					</div>
				</div>
				<div id="others">
					<span>Others</span> 
					<div>
						<img src={root + figma} alt="" />
						<img src={root + git} alt=""  />
						<img src={root + confluence} alt="" />
						<img src={root + slack} alt=""  />
						<img src={root + jira} alt=""  />
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