import React, { useState } from 'react';
import axios from 'axios';
import './interest1.css';

function IDiplomaUG() {
  const [discipline, setDiscipline] = useState([]);
  const [skills, setSkills] = useState([]);
  const [passion, setPassion] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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

  const handleCheckboxChange = (value, setState) => {
    setState(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/form/get-suggestions', {
      discipline,
      skills,
      passion,
      hobby
    });
      setSuggestions(res.data.suggestions);
    } catch (err) {
      console.error('❌ Failed to get suggestions', err);
    }
  };

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
              {option.charAt(0).toUpperCase() + option.slice(1).replace('&', ' and ')}
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
      <h2>Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="dropdown-section">
          <label className="section-title">Current Discipline:</label>
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
          label="Strengths and Skills"
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
        <div className="recommendations-box">
          <h3>Career Recommendations</h3>
          {suggestions.map((item, idx) => (
            <div key={idx} className="suggestion-card">
              {typeof item === 'string' ? (
                <h4>{item}</h4>
              ) : (
                <>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IDiplomaUG;
