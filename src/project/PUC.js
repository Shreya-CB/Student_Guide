import React, { useState } from "react";
import "./mainstyle.css"; // Ensure this matches your CSS file path
import { useNavigate } from 'react-router-dom';

const PUC = () => {
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
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
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
            <h1 style={{ textAlign: 'center', color: '#4b6584' }}>Pre-University (PU) Guidance</h1>

            <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#34495e' }}>
                <strong>Welcome to the Pre-University Guidance Page!</strong><br />
                This is your first step towards shaping your future. Whether you're exploring your interests or have
                already decided on a career path, this page will guide you in selecting the right stream and opportunities to excel.
            </p>

            <section style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2d98da' }}>Streams Available</h2>
                
                <h3 style={{ color: '#3867d6' }}>1. Science Stream</h3>
                <ul>
                    <li>Ideal for students with a strong interest in Physics, Chemistry, Mathematics, or Biology.</li>
                    <li>
                        <strong>Career Options:</strong> Engineering, Medicine, Research, IT & Data Science
                    </li>
                    <li>
                        <strong>Subjects Offered:</strong> PCMB (Physics, Chemistry, Mathematics, Biology), 
                        PCMC (Physics, Chemistry, Mathematics, Computer Science)
                    </li>
                </ul>

                <h3 style={{ color: '#3867d6' }}>2. Commerce Stream</h3>
                <ul>
                    <li>Suitable for students interested in business, finance, or accounting.</li>
                    <li>
                        <strong>Career Options:</strong> Chartered Accountancy (CA), Business Management, 
                        Banking & Finance, Economics
                    </li>
                    <li>
                        <strong>Subjects Offered:</strong> Accountancy, Business Studies, Economics, 
                        Mathematics/Statistics
                    </li>
                </ul>

                <h3 style={{ color: '#3867d6' }}>3. Arts/Humanities Stream</h3>
                <ul>
                    <li>For students passionate about social sciences, languages, or creative fields.</li>
                    <li>
                        <strong>Career Options:</strong> Journalism, Law, Psychology, Teaching, 
                        Design & Fine Arts
                    </li>
                    <li>
                        <strong>Subjects Offered:</strong> History, Political Science, Sociology, 
                        Psychology, Literature
                    </li>
                </ul>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2d98da' }}>Tips for Choosing a Stream</h2>
                <ul>
                    <li><strong>Assess Your Strengths:</strong> Identify the subjects you enjoy and excel in.</li>
                    <li><strong>Explore Your Interests:</strong> Think about your passions and hobbies.</li>
                    <li><strong>Research Careers:</strong> Understand the future scope and opportunities in different fields.</li>
                    <li><strong>Seek Guidance:</strong> Consult with teachers, counselors, and parents to make an informed decision.</li>
                </ul>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2d98da' }}>Resources and Opportunities</h2>
                <ul>
                    <li><strong>Career Counseling:</strong> Connect with expert counselors to help you plan your academic path.</li>
                    <li><strong>Scholarship Information:</strong> Explore scholarships available for PU students in various streams.</li>
                    <li><strong>Workshops & Seminars:</strong> Attend events to learn about industries and career prospects.</li>
                </ul>
            </section>

            <section style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2d98da' }}>FAQs</h2>
                <h3 style={{ color: '#3867d6' }}>Q: Can I switch streams after selecting one?</h3>
                <p>A: Stream switching is possible but depends on your school's policies. Consult your school counselor for details.</p>

                <h3 style={{ color: '#3867d6' }}>Q: Is Mathematics necessary for the Commerce stream?</h3>
                <p>A: Not mandatory, but it’s recommended for careers in Finance, Economics, or CA.</p>

                <h3 style={{ color: '#3867d6' }}>Q: What if I’m undecided about my future career?</h3>
                <p>A: Choose a stream that keeps your options open, like Science or Commerce, and explore interests along the way.</p>
            </section>

            <blockquote style={{ 
                marginTop: '20px', 
                padding: '10px', 
                fontStyle: 'italic', 
                backgroundColor: '#dff9fb', 
                borderLeft: '4px solid #4b7bec', 
                color: '#34495e' 
            }}>
                "The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt
            </blockquote>
        </div>
    );
};

export default PUC;
