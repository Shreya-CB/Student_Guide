import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UgCourses = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPage(selectedValue);

    // Navigate to the corresponding page based on the selected option
    if (selectedValue === 'class510') navigate('/class510');
    else if (selectedValue === 'diploma') navigate('/diploma');
    else if (selectedValue === 'puc') navigate('/puc');
    else if (selectedValue === 'ugCourses') navigate('/ugCourses');
    else if (selectedValue === 'competitiveExams') navigate('/competitiveExams');
  };
  //const navigate = useNavigate();


  const handleCourseSelect = (e) => {
    const course = e.target.value;
    if (course) navigate(course);
  };


  return (
    <div>
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
      <h2>UG COURSES</h2>
      <h3>Select Your UG Course</h3>


      {/* Dropdown for selecting UG Course */}
      <select onChange={handleCourseSelect} defaultValue="">
        <option value="" disabled>Select UG Course</option>
        <option value="/engineering">Engineering</option>
        <option value="/medical">Medical</option>
        <option value="/bca">BCA</option>
      </select>


      {/* Overview Section */}
      <h3>Overview of UG Courses</h3>
      <p>
        Undergraduate (UG) courses are programs that students pursue after completing their higher secondary education (12th grade).
        These courses typically last for three to four years and provide students with foundational knowledge and skills in their chosen fields.
        Below are brief descriptions of some popular UG courses:
      </p>


      {/* Engineering Course Details */}
      <h4>1. Engineering</h4>
      <p>
        <strong>Bachelor of Engineering/Bachelor of Technology (BE/B.Tech)</strong><br />
        BE/B.Tech is a foundational degree for engineering students, covering various disciplines of engineering. This program prepares students for a wide range of careers in engineering and technology.
      </p>
      <h5>Key Features of BE/B.Tech</h5>
      <ul>
        <li>Course Duration: 4 years</li>
        <li>Practical and Theoretical Learning</li>
        <li>Internships and Projects</li>
      </ul>
      <p>
        Engineering is a field that applies science and mathematics to solve problems and design innovative solutions. It covers various branches, including Civil, Mechanical, Electrical, Electronics, and Computer Engineering. Students will engage in theoretical knowledge and practical applications through projects and labs.
      </p>


      {/* Medical Course Details */}
      <h4>2. Medical</h4>
      <p>
        <strong>Bachelor of Medicine, Bachelor of Surgery (MBBS)</strong><br />
        The MBBS program is a primary medical degree for students aiming to become doctors. It provides extensive knowledge in medical science and practical experience in patient care, diagnosis, and treatment.
      </p>
      <h5>Key Features of MBBS</h5>
      <ul>
        <li>Course Duration: 5.5 years (including a 1-year internship)</li>
        <li>In-depth study of human anatomy, physiology, and pathology</li>
        <li>Hands-on clinical experience and hospital internships</li>
      </ul>
      <p>
        Medical education prepares students for various healthcare careers, including roles as general practitioners, specialists, and surgeons. The curriculum emphasizes patient care, diagnostic skills, and ethical medical practices. The program combines classroom learning, laboratory work, and clinical rotations.
      </p>


      {/* BCA Course Details */}
      <h4>3. BCA (Bachelor of Computer Applications)</h4>
      <p>
        <strong>The BCA program</strong> is designed for students interested in pursuing a career in software development, data analysis, and IT consulting. The course provides a strong foundation in computer science and programming.
      </p>
      <h5>Key Features of BCA</h5>
      <ul>
        <li>Course Duration: 3 years</li>
        <li>Focus on programming languages, database management, and web development</li>
        <li>Opportunities for internships in software and IT companies</li>
      </ul>
      <p>
        BCA prepares students for entry-level roles in the IT industry and offers pathways to advanced studies in computer science. The curriculum includes subjects such as programming, data structures, database management, networking, and web development, along with practical lab sessions and projects.
      </p>
    </div>
  );
};


export default UgCourses;
