/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainstyle.css';  // Apply this styling only to Interests.js
import Iclass510 from './I_class5_10';
import IDiplomaUG from './I_diploma_ug';
import IPu from './I_pu';

function Interests() {
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

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleDropdownChange = (event) => {
        const selectedPage = event.target.value;
        
        // Set the selected component based on the dropdown value
        if (selectedPage === "class5-10") {
            setSelectedComponent("class5-10");
        }
        else if(selectedPage === "DiplomaUG"){
            setSelectedComponent("DiplomaUG");
        }
        else if(selectedPage === "Pu"){
            setSelectedComponent("Pu");
        }
        else {
            setSelectedComponent(null);  // Reset if no valid option is selected
        }

        // Reset dropdown selection after choosing an option
        event.target.selectedIndex = 0;
    };

    return (
        <div>
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
                <a href="/chatbot">CHATBOT</a>
                <a href="/help">HELP</a>
            </nav>
            {!selectedComponent && (
                <div id="studyDropdown">
                    <form>
                        <label htmlFor="studyClass">What class are you studying in?</label>
                        <select id="studyClass" onChange={handleDropdownChange}>
                            <option value="" selected disabled>Select option</option>
                            <option value="class5-10">Class 5-10</option>
                            <option value="Pu">PU</option>
                            <option value="DiplomaUG">Diploma & UG Courses </option>
                        </select>
                    </form>
                </div>
            )}

            
            {selectedComponent === "class5-10" && <Iclass510 />}
            {selectedComponent === "DiplomaUG" && <IDiplomaUG />}
            {selectedComponent === "Pu" && <IPu />}
        </div>
    );
}

export default Interests;*/

//src/project/I_class5_10.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './interest1.css';

function Interests() {
  // Changed all states to arrays for multiple selections
  const [strongest, setStrongest] = useState([]);
  const [interested, setInterested] = useState([]);
  const [elective, setElective] = useState('');
  const [discipline, setDiscipline] = useState([]);
  const [skills, setSkills] = useState([]);
  const [passion, setPassion] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
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

  // Options for each category
  const strongestOptions = ['physics', 'maths', 'chemistry', 'biology', 'history', 'geography', 'kannada', 'hindi', 'english'];
  const interestedOptions = ['physics', 'maths', 'chemistry', 'biology', 'history', 'geography', 'kannada', 'hindi', 'english'];
  const electiveOptions = ['PCMB', 'PCMC', 'PCME', 'CEBA', 'SEBA', 'HEPS'];
  const disciplineOptions = [
  'Business and Management',
  'Computer Science Engineering',
  'Electronics and Communication Engineering',
  'Electronics and Electrical Engineering',
  'Civil Engineering',
  'Mechanical Engineering',
  'MBBS','B-Pharma','BNYS','Veterinary Science','BCA',
  'Architecture',
  'Law and Criminology',
  'Agriculture',
  'Journalism'
  ];
  const skillsOptions = [
  'Communication skills',
  'Problem-solving skills',
  'Innovation',
  'Leadership and Teamwork',
  'Technical skills',
  'Marketing skills'
  ];
  const passionOptions = ['music', 'dance', 'art', 'sport', 'food', 'designing'];
  const hobbyOptions = ['reading and writing', 'cooking', 'photography', 'drawing and painting', 'sports', 'music'];

  // Generic checkbox handler
  const handleCheckboxChange = (value, setState) => {
    setState(prev => {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter(item => item !== value);
      } else {
        // Add if not selected
        return [...prev, value];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/form/get-suggestions', {
        strongest,
        interested,
        passion,
        hobby
      });
      setSuggestions(res.data.suggestions);
    } catch (err) {
      console.error('❌ Failed to get suggestions', err);
    }
  };

  // Component to render checkbox group
  const CheckboxGroup = ({ label, options, selectedValues, onChange }) => (
    <div className="checkbox-section">
      <label className="section-title">{label}:</label>
      <div className="checkbox-group">
        {options.map(option => (
          <div key={option} className="form-check">
            <input
              type="checkbox"
              id={`${label}-${option}`}
              className="form-check-input"
              checked={selectedValues.includes(option)}
              onChange={() => onChange(option)}
            />
            <label htmlFor={`${label}-${option}`} className="form-check-label">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          </div>
        ))}
      </div>
      {selectedValues.length > 0 && (
        <div className="selected-items">
          <small>Selected: {selectedValues.join(', ')}</small>
        </div>
      )}
    </div>
  );

  return (
    <div className="form-container">
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
                <a href="/chatbot">CHATBOT</a>
                <a href="/help">HELP</a>
            </nav>
            <br/>
      <h2>Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit}>
        Fill this section if you are studying in class 10 or below *<br/>
        <CheckboxGroup 
          label="The subjects you are storng at  *"
          options={strongestOptions}
          selectedValues={strongest}
          onChange={(value) => handleCheckboxChange(value, setStrongest)}
        />

        <CheckboxGroup 
          label="Subject You Are Interested In *"
          options={interestedOptions}
          selectedValues={interested}
          onChange={(value) => handleCheckboxChange(value, setInterested)}
        />
        <br/>
        Fill this section if you are studying in your Pre-university **<br/>
        <div className="dropdown-section">
          <label className="section-title">Current Elective:**</label>
          <select
            value={elective}
            onChange={(e) => setElective(e.target.value)}
            className="form-select"
          >
            <option value="" disabled>Select elective</option>
            {electiveOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <br/>

        Fill this section if you are studying Diploma or UG courses ***<br/>
        <div className="dropdown-section">
          <label className="section-title">Current Discipline: ***</label>
          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className="form-select"
          >
            <option value="" disabled>Select discipline</option>
            {disciplineOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        
        <CheckboxGroup 
          label="Strengths and Skills ***"
          options={skillsOptions}
          selectedValues={skills}
          onChange={(value) => handleCheckboxChange(value, setSkills)}
        />

        <CheckboxGroup 
          label="Passion"
          options={passionOptions}
          selectedValues={passion}
          onChange={(value) => handleCheckboxChange(value, setPassion)}
        />

        <CheckboxGroup 
          label="Hobbies"
          options={hobbyOptions}
          selectedValues={hobby}
          onChange={(value) => handleCheckboxChange(value, setHobby)}
        />

        <button type="submit" className="submit-btn">Get Suggestions</button>
      </form>
      
      {suggestions.length > 0 && (
      <div>
      <h3>Career Recommendations</h3>
      {suggestions.map((item, idx) => (
        <div key={idx} className="suggestion-card">
          {typeof item === 'string' ? (
            <h4>{item}</h4>
          ) : (
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
      <p>Need more Recommendations? Use our Chatbot<button onClick={() => navigate('/chatbot')}>Chatbot</button></p>
      </div>
      )}
    </div>
  );
}

export default Interests;