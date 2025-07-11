import React, { useState } from 'react';
import './interest.css';

function Iclass510() {
    const [recommendations, setRecommendations] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({
      Study: [],
      interest: [],
      passion: [],
      hobbies: []
    });
    const [showRecommendations, setShowRecommendations] = useState(false); // Initialize as false
  
    const handleCheckboxChange = (event) => {
      const { name, value } = event.target;
      setSelectedOptions((prevState) => {
        const selected = prevState[name];
        if (selected.includes(value)) {
          return { ...prevState, [name]: selected.filter((item) => item !== value) };
        } else {
          return { ...prevState, [name]: [...selected, value] };
        }
      });
    };
  
    const handleRecommendation = () => {
      const recs = [];
  
      // Example recommendation logic based on selected options
      if (selectedOptions.Study.includes('maths')) {
        recs.push('Since you are strong in Mathematics, you might consider becoming:');
        recs.push('1.Mathematician: Requires Bachelor’s in Mathematics.');
        recs.push('2.Data Scientist: Requires Bachelor’s in Mathematics, Statistics, or Computer Science.');
      }
      if (selectedOptions.Study.includes('phy')) {
        recs.push('Since you are strong in physics, you might consider becoming:');
        recs.push('1.Physicist:For this you need to have  A Bachelor’s in Physics followed by a Masters and Ph.D. in Physics.');
        recs.push('2.Data Scientist:For this you need to have Bachelor’s in Physics, often followed by a Master’s in Data Science.');
      }
      if (selectedOptions.Study.includes('chem')) {
        recs.push('Since you are strong in chemistry, you might consider becoming:');
        recs.push('1.Chemical Engineer:This requires Bachelor in Chemical Engineering.');
        recs.push('2.Pharmacist:This requires Bachelor’s in Pharmacy or Chemistry, followed by graduate studies in Pharmacology.');
      }
      if (selectedOptions.Study.includes('bio')) {
        recs.push('Since you are strong in biology, you might consider becoming:');
        recs.push('1.Biotechnologist:Requires Bachelor’s in Biotechnology or Biology.');
        recs.push('2.Biomedical Scientist:Requires Bachelor’s in Biomedical Science or Biology.');
      }
      if (selectedOptions.Study.includes('history')) {
        recs.push('Since you are strong in history-civics, you might consider becoming:');
        recs.push('1. Historian: Rquires Bachelor’s in History, often followed by a Masters or Ph.D.');
        recs.push('2.Archaeologist: Requires Bachelor’s in Archaeology or History.');
      }
      if (selectedOptions.Study.includes('geography')) {
        recs.push('Since you are strong in geography, you might consider becoming:');
        recs.push('1.Geographer: Requires Bachelor’s in Geography.');
        recs.push('2.Cartographer: Requires Bachelor’s in Geography, Cartography.');
      }
      if (selectedOptions.Study.includes('kan') || selectedOptions.Study.includes('eng') || selectedOptions.Study.includes('hin') ) {
        recs.push('Since you are strong in languages, you might consider becoming:');
        recs.push('1.Writer/Author: Requires Bachelor’s in particular language, Creative Writing, or Journalism.(not required if you are talented enough)');
        recs.push('2.Translator: Requires Bachelor’s in a language or linguistics.');
      }
      
      if (selectedOptions.interest.includes('maths')) {
        recs.push('Since you seem to be interested in Mathematics, you might consider becoming:');
        recs.push('1.Mathematician: Requires Bachelor’s in Mathematics.');
        recs.push('2.Data Scientist: Requires Bachelor’s in Mathematics, Statistics, or Computer Science.');
      }
      if (selectedOptions.interest.includes('phy')) {
        recs.push('Since you seem to be interested in physics, you might consider becoming:');
        recs.push('1.Physicist:For this you need to have  A Bachelor’s in Physics followed by a Masters and Ph.D. in Physics.');
        recs.push('2.Data Scientist:For this you need to have Bachelor’s in Physics, often followed by a Master’s in Data Science.');
      }
      if (selectedOptions.interest.includes('chem')) {
        recs.push('Since you seem to be interested in chemistry, you might consider becoming:');
        recs.push('1.Chemical Engineer:This requires Bachelor in Chemical Engineering.');
        recs.push('2.Pharmacist:This requires Bachelor’s in Pharmacy or Chemistry, followed by graduate studies in Pharmacology.');
      }
      if (selectedOptions.interest.includes('bio')) {
        recs.push('Since you seem to be interested in biology, you might consider becoming:');
        recs.push('1.Biotechnologist:Requires Bachelor’s in Biotechnology or Biology.');
        recs.push('2.Biomedical Scientist:Requires Bachelor’s in Biomedical Science or Biology.');
      }
      if (selectedOptions.interest.includes('history')) {
        recs.push('Since you seem to be interested in history-civics, you might consider becoming:');
        recs.push('1. Historian: Rquires Bachelor’s in History, often followed by a Masters or Ph.D.');
        recs.push('2.Archaeologist: Requires Bachelor’s in Archaeology or History.');
      }
      if (selectedOptions.interest.includes('geography')) {
        recs.push('Since you seem to be interested in geography, you might consider becoming:');
        recs.push('1.Geographer: Requires Bachelor’s in Geography.');
        recs.push('2.Cartographer: Requires Bachelor’s in Geography, Cartography.');
      }
      if (selectedOptions.interest.includes('kan') || selectedOptions.Study.includes('eng') || selectedOptions.Study.includes('hin') ) {
        recs.push('Since you seem to be interested in languages, you might consider becoming:');
        recs.push('1.Writer/Author: Requires Bachelor’s in particular laguage, Creative Writing, or Journalism.(not required if you are talented enough)');
        recs.push('2.Translator: Requires Bachelor’s in a language or linguistics.');
      }

      if(selectedOptions.passion.includes('music')) {
        recs.push('Since you are passionate about music, you can choose to become:');
        recs.push('1.Musician or 2.Music Teacher:Requires Formal training in music (such as a Bachelor’s in Music or Music Performance) or self-taught proficiency in an instrument or voice.');
      }
      if(selectedOptions.passion.includes('dance')){
        recs.push('Since you are passionate about dance, you can choose to become:');
        recs.push('Professional Dancer or Choreographer:Requires Training in dance through formal education (e.g., Bachelors in Dance or Dance Performance) or by attending specialized dance academies.');
      }
      if(selectedOptions.passion.includes('art')){
        recs.push('Since you are passionate about art, you can choose to become:');
        recs.push('1.Artist: Requires A Bachelors in Fine Arts (BFA) or similar degree.');
        recs.push('2.Graphic Designer: Requires Bachelor’s in Graphic Design, Visual Arts, or a related field, with proficiency in design software like Adobe Illustrator, Photoshop, and InDesign.');
      }
      if(selectedOptions.passion.includes('sport')){
        recs.push('Since you are passionate about , you can choose to become:');
        recs.push('1.Professional Athlete: Requires Training in a specific sport, typically starting at a young age, along with consistent practice');
        recs.push('2.Sports coach: Requires Bachelor’s in Sports Science, Physical Education, or Coaching, with additional certifications or experience in coaching specific sports.');
      }
      if(selectedOptions.passion.includes('food')){
        recs.push('Since you are passionate about Cooking and Food, you can choose to become:');
        recs.push('1.Chef: Requires Culinary arts education (e.g., diploma or degree from a culinary school) along with experience working in kitchens to gain practical skills.');
        recs.push('2.Food critic: Requires A background in writing, journalism, or food studies, with a strong knowledge of food, culinary trends, and restaurant cultures.');
      }
      if(selectedOptions.passion.includes('read')){
        recs.push('Since you are passionate about , you can choose to become:');
        recs.push('Author or Editor: Requires A Bachelor’s in English, Literature, or Creative Writing. Developing a portfolio of written work, whether fiction, non-fiction, poetry, or essays.');
      }

      if(selectedOptions.hobbies.includes('draw&paint')){
        recs.push('Since your hobby is drawing and painting,You can become:');
        recs.push('1.Artist: Requires A Bachelors in Fine Arts (BFA) or similar degree.');
        recs.push('2.Graphic Designer: Requires Bachelor’s in Graphic Design, Visual Arts, or a related field, with proficiency in design software like Adobe Illustrator, Photoshop, and InDesign.');
      }
      if(selectedOptions.hobbies.includes('photography')){
        recs.push('Since photography is your hobby,You can become:');
        recs.push('1.Professional Photographer: Requires Formal training through a photography school or a degree in Photography, or developing skills through self-teaching and practice.');
        recs.push('2.Photojournalist: Requires Degree in Journalism, Photography, or related fields, with experience in news media.');
      }
      if(selectedOptions.hobbies.includes('cook')){
        recs.push('Since cooking is your hobby,You can become:');
        recs.push('1.Chef: Requires Culinary arts education (e.g., diploma or degree from a culinary school) along with experience working in kitchens to gain practical skills.');
        recs.push('2.Food critic: Requires A background in writing, journalism, or food studies, with a strong knowledge of food, culinary trends, and restaurant cultures.');
      }
      if(selectedOptions.hobbies.includes('sport')){
        recs.push('Since sports is your hobby,You can become:');
        recs.push('1.Professional Athlete: Requires Training in a specific sport, typically starting at a young age, along with consistent practice');
        recs.push('2.Sports coach: Requires Bachelor’s in Sports Science, Physical Education, or Coaching, with additional certifications or experience in coaching specific sports.');
      }
      if(selectedOptions.hobbies.includes('music')){
        recs.push('Since music is your hobby,You can become:');
        recs.push('1.Musician or 2.Music Teacher:Requires Formal training in music (such as a Bachelor’s in Music or Music Performance) or self-taught proficiency in an instrument or voice.');
      }
      if(selectedOptions.hobbies.includes('read')){
        recs.push('Since reading and literature is your hobby,You can become:');
        recs.push('Author or Editor: Requires A Bachelor’s in English, Literature, or Creative Writing. Developing a portfolio of written work, whether fiction, non-fiction, poetry, or essays.');
      }
      // Add additional conditions as needed
      
      if (recs.length === 0) {
        recs.push('Please select options to receive recommendations!!');
      }
  
      setRecommendations(recs);
      setShowRecommendations(true); // Show recommendations after clicking submit
    };
  

  return (
    <div className="interest"> {/* Unique class to target only this component */}
      <form method="post" action="abc.php"> 
        <h2>Tell us about yourself..!!</h2>

        <div className="section-title">What subjects are you good at studying?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="Study" value="maths" onChange={handleCheckboxChange} /> Mathematics</label>
          <label><input type="checkbox" name="Study" value="phy" onChange={handleCheckboxChange} /> Physics</label>
          <label><input type="checkbox" name="Study" value="chem" onChange={handleCheckboxChange} /> Chemistry</label>
          <label><input type="checkbox" name="Study" value="bio" onChange={handleCheckboxChange} /> Biology</label>
          <label><input type="checkbox" name="Study" value="history" onChange={handleCheckboxChange} /> History-Civics</label>
          <label><input type="checkbox" name="Study" value="geography" onChange={handleCheckboxChange} /> Geography</label>
          <label><input type="checkbox" name="Study" value="kan" onChange={handleCheckboxChange} /> Kannada</label>
          <label><input type="checkbox" name="Study" value="eng" onChange={handleCheckboxChange} /> English</label>
          <label><input type="checkbox" name="Study" value="hin" onChange={handleCheckboxChange} /> Hindi</label>
        </div>

        <div className="section-title">Which subject interests you the most?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="interest" value="maths" onChange={handleCheckboxChange} /> Mathematics</label>
          <label><input type="checkbox" name="interest" value="phy" onChange={handleCheckboxChange} /> Physics</label>
          <label><input type="checkbox" name="interest" value="chem" onChange={handleCheckboxChange} /> Chemistry</label>
          <label><input type="checkbox" name="interest" value="bio" onChange={handleCheckboxChange} /> Biology</label>
          <label><input type="checkbox" name="interest" value="history" onChange={handleCheckboxChange} /> History-Civics</label>
          <label><input type="checkbox" name="interest" value="geography" onChange={handleCheckboxChange} /> Geography</label>
          <label><input type="checkbox" name="interest" value="kan" onChange={handleCheckboxChange} /> Kannada</label>
          <label><input type="checkbox" name="interest" value="eng" onChange={handleCheckboxChange} /> English</label>
          <label><input type="checkbox" name="interest" value="hin" onChange={handleCheckboxChange} /> Hindi</label>
        </div>

        <div className="section-title">What's your passion?</div>
        <div className="checkbox-group"> 
          <label><input type="checkbox" name="passion" value="music" onChange={handleCheckboxChange}  /> Music</label>
          <label><input type="checkbox" name="passion" value="dance" onChange={handleCheckboxChange} /> Dance</label>
          <label><input type="checkbox" name="passion" value="art" onChange={handleCheckboxChange} /> Art</label>
          <label><input type="checkbox" name="passion" value="sport" onChange={handleCheckboxChange} /> Sports</label>
          <label><input type="checkbox" name="passion" value="food" onChange={handleCheckboxChange} /> Cooking and food</label>
          <label><input type="checkbox" name="passion" value="read" onChange={handleCheckboxChange} /> Reading and literature</label>
        </div>

        <div className="section-title">What are your hobbies?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="hobbies" value="read&write" onChange={handleCheckboxChange} /> Reading and writing</label>
          <label><input type="checkbox" name="hobbies" value="cook" onChange={handleCheckboxChange} /> Cooking</label>
          <label><input type="checkbox" name="hobbies" value="photography" onChange={handleCheckboxChange} /> Photography</label>
          <label><input type="checkbox" name="hobbies" value="draw&paint" onChange={handleCheckboxChange} /> Drawing and painting</label>
          <label><input type="checkbox" name="hobbies" value="sport" onChange={handleCheckboxChange} /> Sports</label>
          <label><input type="checkbox" name="hobbies" value="music" onChange={handleCheckboxChange} /> Music</label>
        </div>

        <button type="button" onClick={handleRecommendation}>Submit</button>
      </form>

      {showRecommendations && (
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

export default Iclass510;