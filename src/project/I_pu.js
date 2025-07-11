import React, { useState } from 'react';
import './interest.css';

function IPu() {
  const [selectedElective, setSelectedElective] = useState("");
  const [selectedPassion, setSelectedPassion] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);  // New state to store recommendations

  const handleElectiveChange = (event) => {
    setSelectedElective(event.target.value);
  };

  const handlePassionChange = (event) => {
    const value = event.target.value;
    setSelectedPassion(prev => 
      prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]
    );
  };

  const handleHobbyChange = (event) => {
    const value = event.target.value;
    setSelectedHobbies(prev => 
      prev.includes(value) ? prev.filter(h => h !== value) : [...prev, value]
    );
  };

  const handleRecommendation = () => {
    const recs = [];

    // Recommendations based on elective
    switch (selectedElective) {
      case 'PCMB':
        recs.push('With PCMB, consider careers like:');
        recs.push('1. Doctor: Requires an MBBS degree after 12th in the science stream.');
        recs.push('2. Pharmacist: Requires a Bachelor’s in Pharmacy.');
        break;
      case 'PCMC':
        recs.push('With PCMC, consider careers like:');
        recs.push('1. Software Engineer: Requires a Bachelor’s in Computer Science or IT.');
        recs.push('2. Data Scientist: Requires a Bachelor’s in Data Science, Mathematics, or Statistics.');
        break;
      case 'PCME':
        recs.push('With PCME, consider careers like:');
        recs.push('1. Mechanical Engineer: Requires a Bachelor’s in Mechanical Engineering.');
        recs.push('2. Electrical Engineer: Requires a Bachelor’s in Electrical Engineering or Electronics.');
        break;
      case 'CEBA':
        recs.push('With CEBA, consider careers like:');
        recs.push('1. Economist: Requires a Bachelor’s in Economics, followed by a master’s for advanced roles.');
        recs.push('2. Business Analyst: Requires a Bachelor’s in Business, Economics, or a related field.');
        break;
      case 'SEBA':
        recs.push('With SEBA, consider careers like:');
        recs.push('1. Accountant: Requires a Bachelor’s in Commerce or Accounting.');
        recs.push('2. Financial Analyst: Requires a Bachelor’s in Finance, Business, or Economics.');
        break;
      case 'HEPS':
        recs.push('With HEPS, consider careers like:');
        recs.push('1. Historian: Requires a Bachelor’s in History, followed by a master’s for specialized roles.');
        recs.push('2. Political Scientist: Requires a Bachelor’s in Political Science, often followed by a master’s.');
        break;
      default:
        break;
    }
    
    // Recommendations based on passions
    if (selectedPassion.includes('music')) {
      recs.push('Since you are passionate about music, you can choose to become:');
      recs.push('1.Musician or 2.Music Teacher:Requires Formal training in music (such as a Bachelor’s in Music or Music Performance) or self-taught proficiency in an instrument or voice.');
    }
    if (selectedPassion.includes('art')) {
        recs.push('Since you are passionate about art, you can choose to become:');
        recs.push('1.Artist: Requires A Bachelors in Fine Arts (BFA) or similar degree.');
        recs.push('2.Graphic Designer: Requires Bachelor’s in Graphic Design, Visual Arts, or a related field, with proficiency in design software like Adobe Illustrator, Photoshop, and InDesign.');
    }
    if (selectedPassion.includes('dance')) {
        recs.push('Since you are passionate about dance, you can choose to become:');
        recs.push('Professional Dancer or Choreographer:Requires Training in dance through formal education (e.g., Bachelors in Dance or Dance Performance) or by attending specialized dance academies.');
    }
    if (selectedPassion.includes('sport')) {
        recs.push('Since you are passionate about , you can choose to become:');
        recs.push('1.Professional Athlete: Requires Training in a specific sport, typically starting at a young age, along with consistent practice');
        recs.push('2.Sports coach: Requires Bachelor’s in Sports Science, Physical Education, or Coaching, with additional certifications or experience in coaching specific sports.');
    }
    if (selectedPassion.includes('food')) {
        recs.push('Since you are passionate about Cooking and Food, you can choose to become:');
        recs.push('1.Chef: Requires Culinary arts education (e.g., diploma or degree from a culinary school) along with experience working in kitchens to gain practical skills.');
        recs.push('2.Food critic: Requires A background in writing, journalism, or food studies, with a strong knowledge of food, culinary trends, and restaurant cultures.');
    }
    if (selectedPassion.includes('read')) {
        recs.push('Since you are passionate about , you can choose to become:');
        recs.push('Author or Editor: Requires A Bachelor’s in English, Literature, or Creative Writing. Developing a portfolio of written work, whether fiction, non-fiction, poetry, or essays.');
    }
    // Add more for other passions...

      // Recommendations based on hobbies
      if (selectedHobbies.includes('photography')) {
        recs.push('Since photography is your hobby,You can become:');
        recs.push('1.Professional Photographer: Requires Formal training through a photography school or a degree in Photography, or developing skills through self-teaching and practice.');
        recs.push('2.Photojournalist: Requires Degree in Journalism, Photography, or related fields, with experience in news media.');
    }
    if (selectedHobbies.includes('read&write')) {
        recs.push('Since reading and literature is your hobby,You can become:');
        recs.push('Author or Editor: Requires A Bachelor’s in English, Literature, or Creative Writing. Developing a portfolio of written work, whether fiction, non-fiction, poetry, or essays.');
    }
    if (selectedHobbies.includes('draw&paint')) {
        recs.push('Since your hobby is drawing and painting,You can become:');
        recs.push('1.Artist: Requires A Bachelors in Fine Arts (BFA) or similar degree.');
        recs.push('2.Graphic Designer: Requires Bachelor’s in Graphic Design, Visual Arts, or a related field, with proficiency in design software like Adobe Illustrator, Photoshop, and InDesign.');
    }
    if (selectedHobbies.includes('cook')) {
        recs.push('Since cooking is your hobby,You can become:');
        recs.push('1.Chef: Requires Culinary arts education (e.g., diploma or degree from a culinary school) along with experience working in kitchens to gain practical skills.');
        recs.push('2.Food critic: Requires A background in writing, journalism, or food studies, with a strong knowledge of food, culinary trends, and restaurant cultures.');
    }
    if (selectedHobbies.includes('sport')) {
        recs.push('Since sports is your hobby,You can become:');
        recs.push('1.Professional Athlete: Requires Training in a specific sport, typically starting at a young age, along with consistent practice');
        recs.push('2.Sports coach: Requires Bachelor’s in Sports Science, Physical Education, or Coaching, with additional certifications or experience in coaching specific sports.');
    }
    if (selectedHobbies.includes('music')) {
        recs.push('Since music is your hobby,You can become:');
        recs.push('1.Musician or 2.Music Teacher:Requires Formal training in music (such as a Bachelor’s in Music or Music Performance) or self-taught proficiency in an instrument or voice.');
    }

  // Set the recommendations to display
    if (recs.length === 0) {
      recs.push('Please select options to receive recommendations!!');
    }
    setRecommendations(recs);  // Set the recommendations in state to display in the UI
  };

  return (
    <div className="interest">
      <form method="post" action="abc.php">
        <h2>Tell us about yourself..!!</h2>

        <div className="section-title">Which is your current elective?</div>
        <div className="dropdown-group">
          <select value={selectedElective} onChange={handleElectiveChange}>
            <option value="" disabled>Select elective</option>
            <option value="PCMB">PCMB</option>
            <option value="PCMC">PCMC</option>
            <option value="PCME">PCME</option>
            <option value="CEBA">CEBA</option>
            <option value="SEBA">SEBA</option>
            <option value="HEPS">HEPS</option>
          </select>
        </div>

        <div className="section-title">What's your passion?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="Passion" value="music" onChange={handlePassionChange} /> Music</label>
          <label><input type="checkbox" name="Passion" value="dance" onChange={handlePassionChange} /> Dance</label>
          <label><input type="checkbox" name="Passion" value="art" onChange={handlePassionChange} /> Art</label>
          <label><input type="checkbox" name="Passion" value="sport" onChange={handlePassionChange} /> Sports</label>
          <label><input type="checkbox" name="Passion" value="food" onChange={handlePassionChange} /> Cooking and food</label>
          <label><input type="checkbox" name="Passion" value="read" onChange={handlePassionChange} /> Reading and literature</label>
        </div>

        <div className="section-title">What are your hobbies?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="Hobbies" value="read&write" onChange={handleHobbyChange} /> Reading and writing</label>
          <label><input type="checkbox" name="Hobbies" value="cook" onChange={handleHobbyChange} /> Cooking</label>
          <label><input type="checkbox" name="Hobbies" value="photography" onChange={handleHobbyChange} /> Photography</label>
          <label><input type="checkbox" name="Hobbies" value="draw&paint" onChange={handleHobbyChange} /> Drawing and painting</label>
          <label><input type="checkbox" name="Hobbies" value="sport" onChange={handleHobbyChange} /> Sports</label>
          <label><input type="checkbox" name="Hobbies" value="music" onChange={handleHobbyChange} /> Music</label>
        </div>

        <button type="button" onClick={handleRecommendation}>Submit</button>
      </form>

      {recommendations.length > 0 && (
        <div className="recommendations-box">
          <h3>Career Recommendations</h3>
          {recommendations.map((rec, index) => (
            <p key={index}>{rec}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default IPu;