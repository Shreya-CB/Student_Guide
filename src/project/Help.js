import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Help() {
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

      {/* Help Content Section */}
      <section className="help-page">
        <h1>Help</h1>

        <div className="help-section">
          <h2>Getting Started</h2>
          <p>
            Welcome to the Student Guide website! This platform is designed to help you access educational resources, prepare for exams, and explore courses that suit your interests. Here’s a quick guide on how to use this site:
          </p>
          <ul>
            <li><strong>Home:</strong> Start here to get an overview of what our platform offers.</li>
            <li><strong>Select Course:</strong> Choose from various courses, including Class 5-10, Diploma, UG Courses, and Competitive Exams.</li>
            <li><strong>Interests:</strong> Discover resources based on your personal or academic interests.</li>
            <li><strong>Help:</strong> This page offers assistance with using the platform, troubleshooting issues, and more.</li>
          </ul>
        </div>

        <div className="help-section">
          <h2>Frequently Asked Questions</h2>
          <h3>General Questions</h3>
          <p><strong>Q:</strong> Do I need an account to use the resources?<br />
            <strong>A:</strong> No, most resources are accessible without an account. But some pages may require signup.</p>

          <h3>Accessing Resources</h3>
          <p><strong>Q:</strong> How do I find resources for my course?<br />
            <strong>A:</strong> Use the "Select Course" dropdown to navigate to your course, and click on the specific course name to view available materials.</p>

          <h3>Contact for Further Support</h3>
          <p><strong>Q:</strong> Who do I contact if I have more questions?<br />
            <strong>A:</strong> You can reach out to us through the "Contact Support" section below.</p>
        </div>

        <div className="help-section">
          <h2>Technical Support</h2>

          <h3>Troubleshooting Display Issues</h3>
          <p>If you encounter display issues, try refreshing the page or clearing your browser’s cache. If problems persist, try a different browser.</p>

          <h3>Loading Problems</h3>
          <p>If pages load slowly, check your internet connection and try refreshing the page. Switching to a different browser may also help.</p>
        </div>

        <div className="help-section">
          <h2>Contact Support</h2>
          <p>If you need further assistance, feel free to reach out to us via the following: <br />
            <strong>Email:</strong> <br />
            <a href="mailto:sparshamp7@gmail.com">sparshamp7@gmail.com</a><br />
            <a href="mailto:shreya12102005@gmail.com">shreya12102005@gmail.com</a><br />
            <a href="mailto:sinchanacsajjanashettar@gmail.com">sinchanacsajjanashettar@gmail.com</a><br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Help;
