import React, { useState } from 'react';
import './mainstyle.css';
import { useNavigate } from 'react-router-dom';

function Bca() {
  const [selectedPage, setSelectedPage] = useState('home');
  const navigate = useNavigate();
  
  const handleCourseChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPage(selectedValue);
  
    // Navigate to the corresponding page based on the selected option
    if (selectedValue === 'class510') navigate('/class510');
    else if (selectedValue === 'puc') navigate('/puc');
    else if (selectedValue === 'ugCourses') navigate('/ugCourses');
    else if (selectedValue === 'competitiveExams') navigate('/competitiveExams');
  };
  const [currentSection, setCurrentSection] = useState('courseOverview');


  const showContent = (contentId) => {
    setCurrentSection(contentId);
  };


  return (
    <div className="bca-page">
      {/* Navbar Section */}
      <header>
        <h3>Student Guide</h3>
      </header>
      <nav>
        <a href="/home">HOME</a>
        <a href="#">
          SELECT COURSE
          <div className="dropdown-container">
            <form>
              <select onChange={handleCourseChange} defaultValue="">
                <option value="" disabled>Select option</option>
                <option value="class510">Class 5-10</option>
                <option value="puc">PUC</option>
                <option value="ugCourses">UG Courses</option>
                <option value="competitiveExams">Competitive Exams</option>
              </select>
            </form>
          </div>
        </a>
        <a href="/interests">INTERESTS</a>
        <a href="/help">HELP</a>
      </nav>

      <h1 className="page-title">Bachelor of Computer Applications (BCA)</h1>
     
      <div>
        <button onClick={() => showContent('courseOverview')}>Course Overview</button>
        <button onClick={() => showContent('specializations')}>Specializations</button>
        <button onClick={() => showContent('skills')}>Skills Gained</button>
        <button onClick={() => showContent('careerPaths')}>Career Paths</button>
        <button onClick={() => showContent('internship')}>Internships</button>
        <button onClick={() => showContent('projects')}>Projects</button>
        <button onClick={() => showContent('conclusion')}>Conclusion</button>
      </div>


      <div className="section" style={{ display: currentSection === 'courseOverview' ? 'block' : 'none' }}>
        <h2>Overview</h2>
        <p>The Bachelor of Computer Applications (BCA) is a 3-year undergraduate program that provides foundational knowledge in computer science and applications. This course is designed to develop students' programming, analytical, and problem-solving skills, preparing them for a career in IT and software development.</p>
        <h3>The curriculum typically includes:</h3>
        <ul>
          <li>Core programming languages like C, Java, Python</li>
          <li>Data structures and algorithms</li>
          <li>Database management systems (DBMS)</li>
          <li>Web development</li>
          <li>Operating systems</li>
          <li>Software engineering</li>
          <li>Mathematics and logic building</li>
        </ul>
      </div>


      <div className="section" style={{ display: currentSection === 'specializations' ? 'block' : 'none' }}>
        <h2>Specializations in BCA</h2>
        <p>The Bachelor of Computer Applications (BCA) is a 3-year undergraduate program that provides foundational knowledge in computer science and applications. This course is designed to develop students' programming, analytical, and problem-solving skills, preparing them for a career in IT and software development.</p>
        <ul>
          <li><strong>Data Science:</strong> Focus on data analysis, machine learning, and statistical methods.</li>
          <li><strong>Cybersecurity:</strong> Learn about network security, encryption, and ethical hacking.</li>
          <li><strong>Web Development:</strong> Gain expertise in front-end and back-end web technologies.</li>
          <li><strong>Artificial Intelligence:</strong> Explore AI principles, neural networks, and deep learning.</li>
          <li><strong>Cloud Computing:</strong> Study cloud architecture, AWS, Microsoft Azure, and virtualization.</li>
          <li><strong>Mobile Application Development:</strong> Develop skills for creating apps for iOS and Android platforms.</li>
        </ul>
      </div>


      <div className="section" style={{ display: currentSection === 'skills' ? 'block' : 'none' }}>
        <h2>Skills Gained During BCA</h2>
        <p>BCA students develop a variety of technical and soft skills that make them versatile and employable in the tech industry. Key skills include:</p>
        <ul>
          <li><strong>Programming:</strong> Proficiency in programming languages such as Java, Python, and C++.</li>
          <li><strong>Database Management:</strong> Knowledge of SQL, MySQL, and database handling.</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, and frameworks like React and Angular.</li>
          <li><strong>Software Development:</strong> Understanding software lifecycle, testing, and agile methodologies.</li>
          <li><strong>Problem-Solving:</strong> Analytical thinking and debugging capabilities.</li>
          <li><strong>Communication:</strong> Collaboration and effective communication in technical and non-technical terms.</li>
        </ul>
      </div>


      <div className="section" style={{ display: currentSection === 'careerPaths' ? 'block' : 'none' }}>
        <h2>Career Opportunities After BCA</h2>
        <p>Graduates of BCA can pursue various roles in the technology sector. Some popular career paths include:</p>
        <ul>
          <li><strong>Software Developer:</strong> Work on creating applications and software solutions.</li>
          <li><strong>Web Developer:</strong> Develop and maintain websites and web applications.</li>
          <li><strong>Data Analyst:</strong> Analyze data to aid business decision-making.</li>
          <li><strong>System Administrator:</strong> Manage and maintain IT infrastructure and systems.</li>
          <li><strong>Cybersecurity Analyst:</strong> Protect systems and data from cyber threats.</li>
          <li><strong>IT Consultant:</strong> Provide IT advice to organizations on system implementation and management.</li>
          <li><strong>Project Manager:</strong> Lead and coordinate tech projects within an organization.</li>
        </ul>
      </div>


      <div className="section" style={{ display: currentSection === 'internship' ? 'block' : 'none' }}>
        <h2>Internships</h2>
        <p>Internships are a critical part of the BCA program, allowing students to apply their learning in real-world scenarios. Internships can be in software development, data analysis, web design, and more.</p>
        <h3>Popular Internship Roles</h3>
        <ul>
            <li>Software Development Intern</li>
            <li>Web Development Intern</li>
            <li>Data Analysis Intern</li>
            <li>IT Support Intern</li>
            <li>Quality Assurance (QA) Intern</li>
        </ul>
        <p>Many BCA students complete internships at IT firms, tech startups, or in the IT departments of larger corporations, gaining hands-on experience in coding, testing, and deployment.</p>
      </div>


      <div className="section" style={{ display: currentSection === 'projects' ? 'block' : 'none' }}>
        <h2>Projects</h2>
        <p>Projects help students demonstrate their technical abilities. BCA students often create projects as part of their coursework, covering topics like:</p>
        <ul>
          <li><strong>Web Application Development:</strong> Build and deploy a full-stack web application.</li>
          <li><strong>Database Management System:</strong> Design a database and interface for specific needs, like a library management system.</li>
          <li><strong>Mobile App Development:</strong> Develop an Android or iOS application.</li>
          <li><strong>Data Analysis Project:</strong> Work on data visualization or machine learning models.</li>
          <li><strong>Networking:</strong> Create simulations of network setups, such as a virtual LAN.</li>
        </ul>
      </div>


      <div className="section" style={{ display: currentSection === 'conclusion' ? 'block' : 'none' }}>
        <h2>Conclusion</h2>
        <p>The BCA program is an excellent choice for students aiming to enter the tech industry. With skills in programming, web development, and data analysis, BCA graduates are well-prepared for a variety of roles in IT and beyond. They can further specialize through certifications or postgraduate studies, such as an MCA (Master of Computer Applications) or an MBA in IT, to broaden their career scope.</p>
        <h1>Thank You!</h1>
      </div>
    </div>
  );
}


export default Bca;