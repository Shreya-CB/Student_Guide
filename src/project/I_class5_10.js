//src/project/I_class5_10.js
import React, { useState } from 'react';
import axios from 'axios';
import './interest1.css';

function I_class5_10() {
  // Changed all states to arrays for multiple selections
  const [strongest, setStrongest] = useState([]);
  const [interested, setInterested] = useState([]);
  const [passion, setPassion] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Options for each category
  const strongestOptions = ['physics', 'maths', 'chemistry', 'biology', 'history', 'geography', 'kannada', 'hindi', 'english'];
  const interestedOptions = ['physics', 'maths', 'chemistry', 'biology', 'history', 'geography', 'kannada', 'hindi', 'english'];
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
    
    // Validation: ensure at least one option is selected for each category
    /*if (strongest.length === 0 || interested.length === 0 || passion.length === 0 || hobby.length === 0) {
      alert('Please select at least one option for each category');
      return;
    }*/

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
      <h2>Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit}>
        
        <CheckboxGroup 
          label="Strongest Subject"
          options={strongestOptions}
          selectedValues={strongest}
          onChange={(value) => handleCheckboxChange(value, setStrongest)}
        />

        <CheckboxGroup 
          label="Subject You Are Interested In"
          options={interestedOptions}
          selectedValues={interested}
          onChange={(value) => handleCheckboxChange(value, setInterested)}
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
      </div>
      )}
    </div>
  );
}

export default I_class5_10;