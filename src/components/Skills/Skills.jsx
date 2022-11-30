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
// const git = '/assets/icons/git.svg'
const github = '/assets/icons/github.png'
const confluence = '/assets/icons/confluence.svg'
const slack = '/assets/icons/slack.svg'
const jira = '/assets/icons/jira.svg'
const python = '/assets/icons/python.png';
const django = '/assets/icons/django.png';
const node = '/assets/icons/node.png';
const aws = '/assets/icons/aws.png';





const Skills = () => {
	
	const root = "http://rbeaujon.com";
	return (
		<div>
			<div className="textBg">Skills</div>
			<div>
				<div id="experience">
					<span>Working experience</span>
					<span id="effect"></span>
					<div id="container">
						<div className='containerIcons'>
							<img src={root + react} alt="React"/>
							<div>REACT</div>
						</div>
						<div className='containerIcons'>
							<img src={root + redux} alt="Redux"/>
							<div>REDUX</div>
						</div>
						<div className='containerIcons'>
							<img src={root + ts} alt="TypeScript" />
							<div>TYPESCRIPT</div>
						</div>
						<div className='containerIcons'>
							<img src={root + js} alt="JavaScript"/>
							<div>JAVASCRIPT</div>
						</div>
						<div className='containerIcons'>
							<img src={root + php} alt="PHP"/>
							<div>PHP</div>
						</div>
						<div className='containerIcons'>
							<img src={root + css3} alt="CSS3"/>
							<div>CCS</div>
						</div>
						<div className='containerIcons'>
							<img src={root + sass} alt="SASS"/>							
							<div>SASS</div>
						</div>
						<div className='containerIcons'>
							<img src={root + html5} alt="HTML5"/>
							<div>HTML</div>
						</div>
						<div className='containerIcons'>
							<img src={root + graphql} alt="GraphQL"/>
							<div>GRAPHQL</div>
						</div>
						<div className='containerIcons'>
							<img src={root + mysql} alt="MySQL"/>
							<div>MYSQL</div>
						</div>
						<div className='containerIcons'>
							<img src={root + sql} alt="SQL"/>
							<div>SQL</div>
						</div>
					</div>
				</div>
				<div id="handsOn">
					<span>Hands-On Experience</span> 
					<div id="container">
						<div className='containerIcons'>
							<img src={root + angularjs} alt="" />
							<div>ANGULARJS</div>
						</div>
						<div className='containerIcons'>
							<img src={root + aws} alt="Python"/>
							<div>AWS</div>
						</div>
						<div className='containerIcons'>
							<img src={root + node} alt="Python"/>
							<div>NODE</div>
						</div>
						<div className='containerIcons'>
							<img src={root + python} alt="Python"/>
							<div>PYTHON</div>
						</div>
						<div className='containerIcons'>
							<img src={root + django} alt="Django"/>
							<div>DJANGO</div>
						</div>
						<div className='containerIcons'>
							<img src={root + docker} alt="" />
							<div>DOCKER</div>
						</div>
						<div className='containerIcons'>
							<img src={root + postgresql} alt="" />
							<div>POSTGRESQL</div>
						</div>
					</div>
				</div>
				<div id="others">
					<span>Others</span> 
					<div id="container">
						<div className='containerIcons'>
							<img src={root + figma} alt="" />
							<div>FIGMA</div>
						</div>
						<div className='containerIcons'>
							<img src={root + github} alt=""  />
							<div>GITHUB</div>
						</div>
						<div className='containerIcons'>
							<img src={root + confluence} alt="" />
							<div>CONFLUENCE</div>
						</div>
						<div className='containerIcons'>
							<img src={root + slack} alt=""  />
							<div>SLACK</div>
						</div>
						<div className='containerIcons'>
							<img src={root + jira} alt=""  />
							<div>JIRA</div>
						</div>
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