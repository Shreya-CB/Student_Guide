import React, { useState } from 'react';
import './interest.css';

function IDiploma() {
  const [recommendations, setRecommendations] = useState([]);
  
  const handleRecommendation = () => {
    const recs = [];
    const selectedDiscipline = document.querySelector("select").value;
    const selectedStrengths = Array.from(document.querySelectorAll("input[name='S&S']:checked")).map(el => el.value);
    const selectedPassion = Array.from(document.querySelectorAll("input[name='passion']:checked")).map(el => el.value);
    const selectedHobbies = Array.from(document.querySelectorAll("input[name='hobbies']:checked")).map(el => el.value);

    // Recommendations based on selected discipline
    switch (selectedDiscipline) {
        case 'B&M':
            recs.push('Since you are in Business and Management, consider careers like:');
            recs.push('1. Business Analyst: Requires a Bachelor’s in Business or Finance.');
            recs.push('2. Marketing Manager: Requires a Bachelor’s in Marketing or Business.');
            break;
    
        case 'CSE':
            recs.push('Since you are in Computer Science Engineering, consider careers like:');
            recs.push('1. Software Engineer: Requires a Bachelor’s in Computer Science.');
            recs.push('2. Data Scientist: Requires a Bachelor’s in Computer Science or Statistics.');
            break;
    
        case 'ECE':
            recs.push('Since you are in Electronics and Communication Engineering, consider careers like:');
            recs.push('1. Embedded Systems Engineer: Requires a Bachelor’s in ECE.');
            recs.push('2. Telecommunications Specialist: Requires a Bachelor’s in ECE.');
            break;
    
        case 'EEE':
            recs.push('Since you are in Electronics and Electrical Engineering, consider careers like:');
            recs.push('1. Electrical Engineer: Requires a Bachelor’s in Electrical Engineering.');
            recs.push('2. Power Systems Engineer: Requires a Bachelor’s in EEE.');
            break;
    
        case 'CE':
            recs.push('Since you are in Civil Engineering, consider careers like:');
            recs.push('1. Structural Engineer: Requires a Bachelor’s in Civil Engineering.');
            recs.push('2. Construction Manager: Requires a Bachelor’s in Civil Engineering or Construction Management.');
            break;
    
        case 'ME':
            recs.push('Since you are in Mechanical Engineering, consider careers like:');
            recs.push('1. Mechanical Engineer: Requires a Bachelor’s in Mechanical Engineering.');
            recs.push('2. Automotive Engineer: Requires a Bachelor’s in Mechanical or Automotive Engineering.');
            break;
    
        case 'H&M':
            recs.push('Since you are in Health and Medicine, consider careers like:');
            recs.push('1. Doctor: Requires an MBBS and postgraduate specialization.');
            recs.push('2. Nurse: Requires a Bachelor’s in Nursing.');
            break;
    
        case 'architecture':
            recs.push('Since you are in Architecture, consider careers like:');
            recs.push('1. Architect: Requires a Bachelor’s in Architecture (B.Arch).');
            recs.push('2. Urban Planner: Requires a degree in Urban Planning or a related field.');
            break;
    
        case 'L&C':
            recs.push('Since you are in Law and Criminology, consider careers like:');
            recs.push('1. Lawyer: Requires a Bachelor of Laws (LLB) and completion of bar examination.');
            recs.push('2. Criminologist: Requires a Bachelor’s in Criminology or Criminal Justice.');
            break;
    
        case 'agriculture':
            recs.push('Since you are in Agriculture, consider careers like:');
            recs.push('1. Agronomist: Requires a Bachelor’s in Agriculture or Agronomy.');
            recs.push('2. Agricultural Consultant: Requires a Bachelor’s in Agriculture or related field.');
            break;
    
        case 'journalism':
            recs.push('Since you are in Journalism, consider careers like:');
            recs.push('1. Journalist: Requires a Bachelor’s in Journalism or Communications.');
            recs.push('2. News Anchor: Requires a Bachelor’s in Journalism, Communications, or a related field.');
            break;
      
        default:
            break;
    }

    // Recommendations based on strengths
    if (selectedStrengths.includes('communication')) {
      recs.push('Your communication skills could lead to roles such as Public Relations Specialist or Sales Representative.');
    }
    if (selectedStrengths.includes('problem solving')) {
      recs.push('Your problem-solving skills are well-suited for careers like Software Developer or Business Analyst.');
    }
    if (selectedStrengths.includes('innovation')) {
      recs.push('Your innovative mindset could be valuable in careers like Product Designer or Entrepreneur.');
    }
    if (selectedStrengths.includes('L&T')) {
      recs.push('Your leadership and teamwork skills are great for roles such as Project Manager or Team Leader.');
    }
    if (selectedStrengths.includes('technical')) {
      recs.push('Your technical skills could lead you to become a Mechanical Engineer or IT Specialist.');
    }
    if (selectedStrengths.includes('marketing')) {
      recs.push('Your marketing skills are well-suited for roles like Marketing Manager or Brand Strategist.');
    }

    // Recommendations based on passion
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

    setRecommendations(recs);
  };

  return (
    <div className="interest">
      <form method="post" action="abc.php">
        <h2>Tell us about yourself..!!</h2>

        <div className="section-title">Which is your current discipline?</div>
        <div className="dropdown-group">
          <select defaultValue="">
            <option value="" disabled>Select discipline</option>
            <option value="B&M">Business and Management</option>
            <option value="CSE">Computer Science Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="EEE">Electronics and Electrical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="H&M">Health and Medicine</option>
            <option value="architecture">Architecture</option>
            <option value="L&C">Law and Criminology</option>
            <option value="agriculture">Agriculture</option>
            <option value="journalism">Journalism</option>
          </select>
        </div>

        <div className="section-title">What are your strengths and skills?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="S&S" value="communication" />Communication skills</label>
          <label><input type="checkbox" name="S&S" value="problem solving" />Problem-solving skills</label>
          <label><input type="checkbox" name="S&S" value="innovation" />Innovation</label>
          <label><input type="checkbox" name="S&S" value="L&T" />Leadership and Teamwork</label>
          <label><input type="checkbox" name="S&S" value="technical" />Technical skills</label>
          <label><input type="checkbox" name="S&S" value="marketing" />Marketing skills</label>
        </div>

        <div className="section-title">What's your passion?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="passion" value="music" />Music</label>
          <label><input type="checkbox" name="passion" value="dance" />Dance</label>
          <label><input type="checkbox" name="passion" value="art" />Art</label>
          <label><input type="checkbox" name="passion" value="sport" />Sports</label>
          <label><input type="checkbox" name="passion" value="food" />Cooking and Food</label>
          <label><input type="checkbox" name="passion" value="read" />Reading and Literature</label>
        </div>

        <div className="section-title">What are your hobbies?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="hobbies" value="read&write" />Reading and Writing</label>
          <label><input type="checkbox" name="hobbies" value="cook" />Cooking</label>
          <label><input type="checkbox" name="hobbies" value="photography" />Photography</label>
          <label><input type="checkbox" name="hobbies" value="draw&paint" />Drawing and Painting</label>
          <label><input type="checkbox" name="hobbies" value="sport" />Sports</label>
          <label><input type="checkbox" name="hobbies" value="music" />Music</label>
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

export default IDiploma;