import React, { useState } from 'react';
import './interest.css';

function IUgCourses() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendation = () => {
    const recs = [];
    const selectedCourse = document.querySelector('select').value;
    const selectedStrengths = Array.from(document.querySelectorAll('input[name="S&S"]:checked')).map(input => input.value);
    const selectedPassion = Array.from(document.querySelectorAll('input[name="passion"]:checked')).map(input => input.value);
    const selectedHobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(input => input.value);


    // Course-based recommendations
    switch (selectedCourse) {
      case 'CSE':
        recs.push('With Computer Science Engineering, consider careers like:');
        recs.push('1. Software Developer: Requires a Bachelor’s in Computer Science Engineering.');
        recs.push('2. Data Scientist: Requires skills in data analysis and machine learning.');
        break;
      case 'ECE':
        recs.push('With Electronics and Communication Engineering, consider careers like:');
        recs.push('1. Embedded Systems Engineer: Requires knowledge of electronics and programming.');
        recs.push('2. Network Engineer: Requires skills in network infrastructure and security.');
        break;
      case 'EEE':
        recs.push('With Electronics and Electrical Engineering, consider careers like:');
        recs.push('1. Electrical Engineer: Requires skills in circuit design and power systems.');
        recs.push('2. Control Systems Engineer: Requires expertise in automation and control theory.');
        break;
      case 'CE':
        recs.push('With Civil Engineering, consider careers like:');
        recs.push('1. Structural Engineer: Requires knowledge of building materials and structural analysis.');
        recs.push('2. Construction Manager: Requires project management and on-site experience.');
        break;
      case 'ME':
        recs.push('With Mechanical Engineering, consider careers like:');
        recs.push('1. Mechanical Design Engineer: Requires CAD skills and engineering principles.');
        recs.push('2. Automotive Engineer: Requires expertise in vehicle systems and manufacturing.');
        break;
      case 'ISE':
        recs.push('With Information Science Engineering, consider careers like:');
        recs.push('1. Database Administrator: Requires knowledge of database management systems.');
        recs.push('2. IT Consultant: Requires strong analytical and consulting skills.');
        break;
      case 'AIML':
        recs.push('With Artificial Intelligence and Machine Learning, consider careers like:');
        recs.push('1. Machine Learning Engineer: Requires proficiency in algorithms and programming.');
        recs.push('2. Data Analyst: Requires statistical analysis and data visualization skills.');
        break;
      case 'MBBS':
        recs.push('With MBBS, consider careers like:');
        recs.push('1. General Practitioner: Requires medical residency after MBBS.');
        recs.push('2. Surgeon: Requires additional specialization after MBBS.');
        break;
      case 'B-P':
        recs.push('With a B-Pharma degree, consider careers like:');
        recs.push('1. Pharmacist: Requires licensure and knowledge of medications.');
        recs.push('2. Clinical Research Associate: Requires expertise in drug development.');
        break;
      case 'BNYS':
        recs.push('With BNYS, consider careers like:');
        recs.push('1. Naturopath: Requires expertise in natural therapies.');
        recs.push('2. Yoga Therapist: Requires training in therapeutic yoga practices.');
        break;
      case 'VS':
        recs.push('With Veterinary Science, consider careers like:');
        recs.push('1. Veterinarian: Requires clinical practice with animals.');
        recs.push('2. Animal Nutritionist: Requires knowledge of animal diet and health.');
        break;
      case 'BCA':
        recs.push('With a BCA degree, consider careers like:');
        recs.push('1. Software Developer: Requires programming skills and knowledge of software development.');
        recs.push('2. IT Support Specialist: Requires technical skills in IT infrastructure.');
        break;
      case 'BSc-A':
        recs.push('With a BSc in Agriculture, consider careers like:');
        recs.push('1. Agricultural Scientist: Requires research in crop production.');
        recs.push('2. Agronomist: Requires knowledge of soil science and crop management.');
        break;
      case 'Bsc-Py':
        recs.push('With a BSc in Psychology, consider careers like:');
        recs.push('1. Clinical Psychologist: Requires further specialization and certification.');
        recs.push('2. School Counselor: Requires skills in student guidance and counseling.');
        break;
      case 'BSc-FS':
        recs.push('With a BSc in Forensic Science, consider careers like:');
        recs.push('1. Forensic Scientist: Requires lab skills and knowledge of criminal investigation.');
        recs.push('2. Crime Scene Investigator: Requires skills in crime scene analysis.');
        break;
      case 'BSc-Fd':
        recs.push('With a BSc in Fashion Design, consider careers like:');
        recs.push('1. Fashion Designer: Requires creative design and trend analysis skills.');
        recs.push('2. Textile Designer: Requires knowledge of fabrics and design patterns.');
        break;
      default:
        break;
    }
    
    // Add more course-based recommendations similarly...


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

        <div className="section-title">Which is your current course?</div>
        <div className="dropdown-group">
          <select defaultValue="">
            <option value="" disabled>Select course</option>
            <option value="CSE">Computer Science Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="EEE">Electronics and Electrical Engineering</option>
            <option value="CE">Civil Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="ISE">Information Science Engineering</option>
            <option value="AIML">Artificial Intelligence and Machine Learning</option>
            <option value="MBBS">MBBS</option>
            <option value="B-P">B-Pharma</option>
            <option value="BNYS">BNYS</option>
            <option value="VS">Veterinary Science</option>
            <option value="BCA">BCA</option>
            <option value="BSc-A">BSc in Agriculture</option>
            <option value="Bsc-Py">BSc in Psychology</option>
            <option value="BSc-FS">BSc in Forensic Science</option>
            <option value="BSc-Fd">BSc in Fashion Design</option>
          </select>
        </div>

        <div className="section-title">What are your strengths and skills?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="S&S" value="communication" /> Communication skills</label>
          <label><input type="checkbox" name="S&S" value="problem solving" /> Problem-solving skills</label>
          <label><input type="checkbox" name="S&S" value="innovation" /> Innovation</label>
          <label><input type="checkbox" name="S&S" value="L&T" /> Leadership and Teamwork</label>
          <label><input type="checkbox" name="S&S" value="technical" /> Technical skills</label>
          <label><input type="checkbox" name="S&S" value="marketing" /> Marketing skills</label>
        </div>

        <div className="section-title">What's your passion?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="passion" value="music" /> Music</label>
          <label><input type="checkbox" name="passion" value="dance" /> Dance</label>
          <label><input type="checkbox" name="passion" value="art" /> Art</label>
          <label><input type="checkbox" name="passion" value="sport" /> Sports</label>
          <label><input type="checkbox" name="passion" value="food" /> Cooking and food</label>
          <label><input type="checkbox" name="passion" value="read" /> Reading and literature</label>
        </div>

        <div className="section-title">What are your hobbies?</div>
        <div className="checkbox-group">
          <label><input type="checkbox" name="hobbies" value="read&write" /> Reading and writing</label>
          <label><input type="checkbox" name="hobbies" value="cook" /> Cooking</label>
          <label><input type="checkbox" name="hobbies" value="photography" /> Photography</label>
          <label><input type="checkbox" name="hobbies" value="draw&paint" /> Drawing and painting</label>
          <label><input type="checkbox" name="hobbies" value="sport" /> Sports</label>
          <label><input type="checkbox" name="hobbies" value="music" /> Music</label>
        </div>

        <button type="button" onClick={handleRecommendation}>Submit</button>
      </form>

        {recommendations.length > 0 && (
          <div className="recommendations-box">
            <h3>Career Recommendations:</h3>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default IUgCourses;
