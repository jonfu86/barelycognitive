import React from 'react';
import './Resume.scss';
import work from './work.jpg';


const resume = props => {
	return (
		<div className="Resume">
			<div className="top_box">
				<div className="contact">
					<h1>Jonathan Fu</h1>			
					<p>Email: jonfu86@gmail.com</p>				
					<p>Phone: 408-841-6900</p>				
					<p>LinkedIn: <a href="http://www.linkedin.com/in/jonfu/">www.linkedin.com/in/jonfu/ </a></p>		
				</div>
				<img src={work} alt="profile_image"/>			
			</div>

			<div className="resume_content">			
				<div className="resume_main">				
					<h2>Professional Info</h2>				
					<p>After completing the Coding Dojo course, I have learned the basics of full-stack web development. I am continuing to learn new technologies to expand my skillset as I accept paid projects as a freelance web developer. I am very passionate about coding and would love to hear about your website, project idea, or employment opportunity.</p>				
					<h2>Work Experience</h2>

					<div className="entry">						
						<div className="entry_title">
							<h4>Software Engineer</h4><h5>August 2016 - May 2019</h5>
						</div>						
						<p>Kaazing - San Jose, CA</p>						
						<ul>
							<li>Worked on development for various professional-grade softwares</li>							
											
						</ul>					
					</div>	

					<div className="entry">						
						<div className="entry_title">
							<h4>Software Engineer</h4><h5>August 2014 - July 2016</h5>
						</div>						
						<p>Montage Studios - Santa Clara, CA</p>						
						<ul>
							<li>Helped in the development of several professional-grade software projects</li>							
											
						</ul>					
					</div>				
					
					<div className="entry">						
						<div className="entry_title">
							<h4>Payments Partner Support</h4><h5>May 2012 - April 2013</h5>
						</div>						
						<p>Google.com - Mtn View, CA</p>						
						<ul>
							<li>Provide quality customer and technical support to customers through inbound email requests.</li>							
							<li>Assist in developing efficient work-flows for investigating issues and escalation to tier-2 support teams.</li>							
							<li>Independently identify, troubleshoot, document, categorize and replicate customer problems and then escalate complex problems according to defined escalation procedures.</li>							
							<li>Provide input to internal escalation departments, though proper escalation procedures.</li>							
							<li>Retain ownership of individual help requests throughout the resolution process.</li>							
							<li>Report enhancement requests received from customer regarding hardware, application, or documentation.</li>							
							<li>Report bugs to engineering team and communicate bug fixes and new enhancements to customers.</li>							
							<li>Communicate policy changes as well as new features through proactive phone and email outreach.</li>						
						</ul>					
					</div>					
						
					<div className="entry">						
						<div className="entry_title">
							<h4>Tech Support &amp; Visual Media Support</h4><h5>January 2010 - December 2010</h5>
						</div>						
						<p>Raiden Technologies - El Monte, CA</p>						
						<ul>							
							<li>Provided customers with technical and customer service support through email and phone communication.</li>							
							<li>Facilitated the sale of thousands of dollars of merchandise on a weekly basis.</li>							
							<li>Trained several employees in technical aspects of our products and sales/customer service techniques.</li>							
							<li>Led and created original content for a technical support seminar for customer service staff to increase product awareness and basic troubleshooting abilities.</li>							
							<li>Featured in a series of instructional videos for repairs and maintenance of our products.</li>							
							<li>Directly contributed to a 20% reduction in technical service queries over a 6 month period.</li>							
							<li>Assisted in both online and real world product promotion through online social media community management and participating in promotional booths at various events.</li>						
						</ul>					
					</div>					
										

					<div className="entry">						
						<div className="entry_title">
							<h4>Marketing Consultant Intern</h4><h5>August 2008 - October 2008</h5>
						</div>						
						<p>Laszlo Systems - San Mateo, CA</p>						
						<ul>							
							<li>Analyzed customer database demographics using Salesforce and Excel.</li>							
							<li>Generated hundreds of quality leads through phone and email contact on a weekly basis.</li>							
							<li>Provided valuable research information on our major competitors and their products.</li>							
							<li>Provided basic market analysis and input on marketing strategy during weekly meetings.</li>						
						</ul>					
					</div>									

					<div className="entry">						
						<div className="entry_title">
							<h4>Marketing Consultant Intern</h4><h5>June 2008 - August 2008</h5>
						</div>						
						<p>eLooMobile - Beijing, China</p>						
						<ul>							
							<li>Conducted research projects regarding iPhone and Android SDK funding as well as applications.</li>							
							<li>Compiled several reports and gave multiple PowerPoint presentations to the local marketing team.</li>							
							<li>Familiarized marketing team with the newest and most popular cell phone applications.</li>						
						</ul>					
					</div>					
										

					<h2>Education</h2>					
					<div className="entry">						
						<div className="entry_title">
							<h4>Coding Dojo - Mountain View</h4><h5>November 2013 - February 2014</h5>
						</div>											
						<p>I have completed the Coding Dojo program to learn full stack web development. I have learned HTML, CSS, jQuery, Javascript, MYSQL, PHP, AJAX, CodeIgniter, and Ruby on Rails.</p>					
					</div>					
										

					<div className="entry">						
						<div className="entry_title">
							<h4>California State Polytechnic University - Pomona</h4><h5>2007-2011</h5>
						</div>						
						<p>Bachelor of Science, International Business and Marketing</p>											
						<p>Coursework in Business Marketing, Market Analysis/Research, Import/Export, Microeconomics, Macroeconomics, Financial Accounting, Operations Research, and Brand Promotion</p>					
					</div>					
										

					<div className="entry">						
						<div className="entry_title">
							<h4>Lynbrook High School</h4><h5>2000-2004</h5>
						</div>					
					</div>					
							
				</div>					
				<div className="sidebar">						
					<h2>Technologies</h2>										
					<ul>							
						<li>HTML/CSS</li>							
						<li>Javascript</li>		
						<li>ReactJS</li>
						<li>MontageJS</li>
						<li>Wordpress</li>
						<li>Docker</li>					
						<li>jQuery</li>							
						<li>MYSQL</li>							
						<li>PHP</li>							
						<li>Ruby on Rails</li>							
						<li>AJAX</li>						
					</ul>						
											

					<h2>Skills</h2>										
					<ul>							
						<li>Photoshop</li>
						<li>Video Editing</li>						
						<li>Salesforce</li>						
						<li>Mandarin Chinese</li>							
						<li>Customer Service</li>							
						<li>Lead Generation</li>						
					</ul>					
				</div>					
			</div>
		</div>
			
	)
}

export default resume;