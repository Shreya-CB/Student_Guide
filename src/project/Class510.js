import React, { useState } from "react";
import "./mainstyle.css"; // Ensure this matches your CSS file path
import { useNavigate } from 'react-router-dom';

function Class510() {
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
    <div className="class5to10-container">
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
      <h1>Welcome to the Class 5-10 Page</h1>

      {/* Section: Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          This section provides resources and guidance for students from Class 5 to 10.
          Here, you'll find educational materials, tips for academic success, and links
          to competitive exams and extracurricular activities.
        </p>
      </section>

      {/* Section: Academic Resources */}
      <section>
        <h2>Academic Resources</h2>
        <ul>
          <li>
            <strong>NCERT Textbooks:</strong> Access free NCERT textbooks and solutions to excel in your studies.
            <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer"> Visit NCERT</a>
          </li>
          <li>
            <strong>Sample Papers:</strong> Download sample question papers to practice and prepare for exams.
            <a href="https://cbseacademic.nic.in/SQP_CLASSX_2024.html" target="_blank" rel="noopener noreferrer"> View Sample Papers</a>
          </li>
          <li>
            <strong>Online Learning:</strong> Explore educational platforms for interactive video lessons and quizzes.
            <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer"> Visit Khan Academy</a>
          </li>
        </ul>
      </section>

      {/* Section: Competitive Exams */}
      <section>
        <h2>Competitive Exams for Class 5-10</h2>
        <ul>
          <li>
            <strong>NTSE:</strong> The National Talent Search Examination identifies talented students for scholarships.
            <a href="https://www.education.gov.in/en/ntse" target="_blank" rel="noopener noreferrer"> Learn More</a>
          </li>
          <li>
            <strong>Olympiads:</strong> Participate in science, mathematics, and English Olympiads to enhance your skills.
            <a href="https://www.sofworld.org/" target="_blank" rel="noopener noreferrer"> Learn More</a>
          </li>
          <li>
            <strong>Navodaya Entrance:</strong> Jawahar Navodaya Vidyalaya Selection Test for admission to Navodaya schools.
            <a href="https://navodaya.gov.in/nvs/en/Home1" target="_blank" rel="noopener noreferrer"> Learn More</a>
          </li>
        </ul>
      </section>

      {/* Section: Extracurricular Activities */}
      <section>
        <h2>Extracurricular Activities</h2>
        <p>
          Participation in extracurricular activities is essential for overall growth. Explore opportunities in:
        </p>
        <ul>
          <li>Art and Craft Competitions</li>
          <li>Debates and Elocution Contests</li>
          <li>Science Exhibitions</li>
          <li>Sports and Athletics</li>
          <li>Music and Dance Programs</li>
        </ul>
      </section>

      {/* Section: Study Tips */}
      <section>
        <h2>Study Tips</h2>
        <p>Here are some tips to improve your study habits:</p>
        <ol>
          <li>Create a daily study schedule and stick to it.</li>
          <li>Focus on understanding concepts rather than rote learning.</li>
          <li>Take short breaks between study sessions to stay fresh.</li>
          <li>Practice previous year's question papers for better preparation.</li>
          <li>Seek help from teachers or online platforms if you face challenges.</li>
        </ol>
      </section>

      {/* Section: Important Links */}
      <section>
        <h2>Important Links</h2>
        <ul>
          <li>
            <a href="https://www.education.gov.in/en" target="_blank" rel="noopener noreferrer">Ministry of Education</a>
          </li>
          <li>
            <a href="https://diksha.gov.in/" target="_blank" rel="noopener noreferrer">Diksha - Learning Resources</a>
          </li>
          <li>
            <a href="https://byjus.com/" target="_blank" rel="noopener noreferrer">Byju's Learning App</a>
          </li>
        </ul>
      </section>

      {/* Section: Contact and Feedback */}
      <section>
        <h2>Contact and Feedback</h2>
        <p>
          Have questions or feedback? Reach out to us at{' '}
          <a href="mailto:studentguide@example.com">studentguide@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default Class510;