import React, { useState } from "react";
import "./mainstyle.css"; // Ensure this matches your CSS file path
import { useNavigate } from 'react-router-dom';

const Medical = () => {
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
  const [activeSection, setActiveSection] = useState("courseDetails");


  const showContent = (contentId) => {
    setActiveSection(contentId);
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


      <h1 style={{ color: "rgb(255, 0, 153)" }}>Medical</h1>
      <button onClick={() => showContent("courseDetails")}>Course Details</button>
      <button onClick={() => showContent("mbbs")}>MBBS</button>
      <button onClick={() => showContent("bds")}>BDS</button>
      <button onClick={() => showContent("bams")}>BAMS</button>
      <button onClick={() => showContent("bhms")}>BHMS</button>
      <button onClick={() => showContent("nursing")}>Nursing</button>
      <button onClick={() => showContent("other")}>Other Courses</button>
      <button onClick={() => showContent("path")}>Career Path</button>
      <button onClick={() => showContent("internship")}>Internship</button>
      <button onClick={() => showContent("projects")}>Projects</button>
      <button onClick={() => showContent("conclusion")}>Conclusion</button>


      {/* Conditional Rendering Based on Active Section */}
      {activeSection === "courseDetails" && (
  <div id="courseDetails" className="section">
    <h2>Overview</h2>
    <p>
      The medical field is focused on diagnosing, treating, and preventing diseases and injuries. It includes a variety of specializations, including surgery, pediatrics, psychiatry, and more.
    </p>
    <p>
      The major branches of medical courses include:
    </p>
    <ul>
      <li>MBBS (Bachelor of Medicine and Bachelor of Surgery)</li>
      <li>BDS (Bachelor of Dental Surgery)</li>
      <li>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</li>
      <li>BHMS (Bachelor of Homeopathic Medicine and Surgery)</li>
      <li>Nursing</li>
      <li>Pharmacy (B.Pharm / D.Pharm)</li>
      <li>Physiotherapy (BPT)</li>
      <li>Occupational Therapy (BOT)</li>
      <li>Medical Laboratory Technology (BMLT)</li>
      <li>Radiology and Imaging Technology (B.Sc. Radiology)</li>
      <li>Optometry (BOptom)</li>
      <li>Veterinary Science (BVSc)</li>
    </ul>
    <h3>What to Expect During Your Medical Studies</h3>
    <p><strong>Year 1: Foundation Building</strong></p>
    <ul>
      <li>Core Subjects: Basic subjects like Anatomy, Physiology, and Biochemistry.</li>
      <li>Introduction to Medicine: Overview of the medical profession and clinical practices.</li>
      <li>Skills Development: Hands-on training in labs, anatomy dissection, and clinical skills.</li>
      <li>Extracurricular Activities: Participation in health camps, community outreach programs, and sports.</li>
    </ul>
    <p><strong>Year 2: Clinical Training and Exposure</strong></p>
    <ul>
      <li>Core Subjects: Pathology, Pharmacology, Microbiology, and medical ethics.</li>
      <li>Hospital Rotation: Students begin their rotations in hospitals to gain practical experience.</li>
      <li>Research: Begin research and clinical trials, focusing on case studies and health trends.</li>
    </ul>
    <p><strong>Year 3: Advanced Medical Concepts</strong></p>
    <ul>
      <li>Specialization: Students choose their field of interest like surgery, pediatrics, or psychiatry.</li>
      <li>Practical Exposure: More hospital rotations and supervised patient care.</li>
      <li>Internship Search: Begin looking for internship placements in hospitals or clinics.</li>
    </ul>
    <p><strong>Year 4: Final Preparation and Internship</strong></p>
    <ul>
      <li>Internship: Students work as interns in hospitals under the supervision of senior doctors.</li>
      <li>Final Examination: Completion of theoretical exams and practical evaluations.</li>
      <li>Career Preparation: Preparation for postgraduate studies or entry into the medical profession.</li>
    </ul>
  </div>
)}




{activeSection === "mbbs" && (
  <div id="mbbs" className="section">
    <h2>MBBS (Bachelor of Medicine and Bachelor of Surgery)</h2>
    <p>
      MBBS is a professional undergraduate medical degree program focused on diagnosing and treating diseases and disorders. It prepares students to become doctors.
    </p>
    <p><strong>Duration:</strong> 5.5 Years (including 1 year of internship)</p>
    <h3>Key Subjects in MBBS</h3>
    <ul>
      <li>Human Anatomy</li>
      <li>Physiology</li>
      <li>Biochemistry</li>
      <li>Pharmacology</li>
      <li>Pathology</li>
      <li>Microbiology</li>
      <li>Community Medicine</li>
      <li>Surgery</li>
      <li>Obstetrics and Gynecology</li>
      <li>Clinical Training</li>
    </ul>
    <h3>Career Opportunities</h3>
    <ul>
      <li>General Practitioner</li>
      <li>Surgeon</li>
      <li>Specialist (Orthopedics, Cardiology, etc.)</li>
      <li>Healthcare Administrator</li>
      <li>Researcher</li>
    </ul>
    <p>
      MBBS graduates can pursue postgraduate medical courses or work in hospitals, clinics, and health organizations.
    </p>
  </div>
)}


{activeSection === "bds" && (
  <div id="bds" className="section">
    <h2>BDS (Bachelor of Dental Surgery)</h2>
    <p>
      BDS is a degree program focused on dental science, aimed at preparing students to diagnose and treat dental diseases and disorders.
    </p>
    <p><strong>Duration:</strong> 5 Years (including 1 year of internship)</p>
    <h3>Key Subjects in BDS</h3>
    <ul>
      <li>Oral Anatomy</li>
      <li>Oral Pathology</li>
      <li>Dental Materials</li>
      <li>Conservative Dentistry</li>
      <li>Oral Surgery</li>
      <li>Orthodontics</li>
      <li>Periodontology</li>
      <li>Prosthodontics</li>
      <li>Pediatric Dentistry</li>
    </ul>
    <h3>Career Opportunities</h3>
    <ul>
      <li>General Dentist</li>
      <li>Orthodontist</li>
      <li>Periodontist</li>
      <li>Oral Surgeon</li>
      <li>Pedodontist</li>
    </ul>
    <p>
      BDS graduates can establish their own dental clinic or work in hospitals and healthcare settings.
    </p>
  </div>
)}




{activeSection === "bams" && (
  <div id="bams" className="section">
    <h2>BAMS (Bachelor of Ayurvedic Medicine and Surgery)</h2>
    <p>
      The Bachelor of Ayurvedic Medicine and Surgery (BAMS) is a professional degree in medicine that focuses on Ayurvedic principles and traditional Indian medicine. It is a comprehensive program that combines theoretical knowledge with practical training in Ayurvedic medicines, therapies, and surgical procedures.
    </p>
    <p>
      BAMS is an undergraduate program that integrates Ayurveda, an ancient system of medicine, with modern scientific knowledge. It prepares students to become practitioners of Ayurvedic medicine. The course typically lasts 5.5 years, including a one-year internship.
    </p>
    <p><strong>Duration:</strong> 5.5 Years (including 1 year of internship)</p>
    <h3>Key Topics Covered</h3>
    <ul>
      <li>Ayurvedic Principles</li>
      <li>Human Physiology</li>
      <li>Ayurvedic Pharmacology</li>
      <li>Rasa Shastra (Alchemy)</li>
      <li>Dravyaguna (Medicinal Plants)</li>
      <li>Kayachikitsa (General Medicine)</li>
      <li>Panchakarma (Detoxification)</li>
      <li>Clinical Practice</li>
    </ul>
    <h3>Career Opportunities</h3>
    <ul>
      <li>Ayurvedic Doctor</li>
      <li>Ayurvedic Consultant</li>
      <li>Ayurvedic Pharmacist</li>
      <li>Panchakarma Therapist</li>
      <li>Researcher in Ayurveda</li>
    </ul>
    <p>
      BAMS graduates can open their own Ayurvedic clinics, work in government or private healthcare centers, or engage in research in the field of Ayurveda.
    </p>
  </div>
)}




{activeSection === "bhms" && (
  <div id="bhms" className="section">
    <h2>BHMS (Bachelor of Homeopathic Medicine and Surgery)</h2>
    <p>
      BHMS is a professional undergraduate degree in Homeopathic Medicine and Surgery. This program focuses on the study of homeopathic treatment for various diseases based on the principle of 'like cures like'.
    </p>
    <p>
      BHMS is a medical degree program that focuses on homeopathic medicine. It combines theoretical studies with clinical practice, aiming to provide knowledge of holistic and natural healing techniques. The program lasts 5.5 years, including an internship year.
    </p>
    <p><strong>Duration:</strong> 5.5 Years (including 1 year of internship)</p>
    <h3>Key Topics Covered</h3>
    <ul>
      <li>Homeopathic Materia Medica</li>
      <li>Philosophy of Homeopathy</li>
      <li>Repertory of Homeopathic Medicines</li>
      <li>Human Anatomy</li>
      <li>Homeopathic Therapeutics</li>
      <li>Pathology and Microbiology</li>
      <li>Surgery and Obstetrics</li>
      <li>Clinical Homeopathy</li>
    </ul>
    <h3>Career Opportunities</h3>
    <ul>
      <li>Homeopathic Doctor</li>
      <li>Homeopathic Consultant</li>
      <li>Homeopathic Researcher</li>
      <li>Healthcare Educator</li>
    </ul>
    <p>
      BHMS graduates can set up private practices, work in hospitals, or research homeopathic treatments and remedies.
    </p>
  </div>
)}




{activeSection === "nursing" && (
  <div id="nursing" className="section">
    <h2>Nursing</h2>
    <p>
      The Nursing course prepares students for a career in healthcare as professional nurses. It involves learning the principles of patient care, medical procedures, and health science concepts.
    </p>
    <p>
      Nursing is a healthcare profession focused on caring for individuals, families, and communities to promote health and wellness. Nursing programs provide theoretical knowledge and hands-on clinical experience. Nursing courses usually take 3-4 years to complete.
    </p>
    <p><strong>Duration:</strong> 3-4 Years</p>
    <h3>Key Topics Covered</h3>
    <ul>
      <li>Human Anatomy and Physiology</li>
      <li>Microbiology</li>
      <li>Fundamentals of Nursing</li>
      <li>Pharmacology</li>
      <li>Medical-Surgical Nursing</li>
      <li>Pediatric Nursing</li>
      <li>Obstetrics and Gynecology Nursing</li>
      <li>Psychiatric Nursing</li>
      <li>Community Health Nursing</li>
    </ul>
    <h3>Career Opportunities</h3>
    <ul>
      <li>Registered Nurse</li>
      <li>Midwife</li>
      <li>Nurse Educator</li>
      <li>Healthcare Administrator</li>
      <li>Clinical Nurse Specialist</li>
    </ul>
    <p>
      Nursing graduates can work in hospitals, clinics, nursing homes, and can also specialize in different branches such as pediatrics, obstetrics, or psychiatry.
    </p>
  </div>
)}




{activeSection === "other" && (
  <div id="other" className="section">
    <h2>Other Medical Courses</h2>
    <p>
      In addition to MBBS, there are various specialized medical courses that prepare students for specific healthcare roles. These courses focus on different aspects of health and medicine, from drug regulation to physical therapy and veterinary care.
    </p>


    <h3>Pharmacy (B.Pharm / D.Pharm)</h3>
    <p>
      Pharmacy is a field of study focused on the preparation, dispensation, and regulation of drugs. Pharmacy students study the development of pharmaceutical products, drug formulations, and provide patient care regarding the use of medications.
    </p>
    <p><strong>Course Duration:</strong> 4 years for B.Pharm, 2 years for D.Pharm.</p>


    <h3>Physiotherapy (BPT)</h3>
    <p>
      Bachelor of Physiotherapy (BPT) is a healthcare program focusing on the rehabilitation of patients who suffer from physical disabilities or injuries. Physiotherapists help restore mobility and function using physical techniques and exercises.
    </p>
    <p><strong>Course Duration:</strong> 4 years</p>


    <h3>Occupational Therapy (BOT)</h3>
    <p>
      Bachelor of Occupational Therapy (BOT) is focused on helping patients regain or maintain their ability to perform daily activities. Students learn to assist people suffering from mental, physical, or developmental conditions.
    </p>
    <p><strong>Course Duration:</strong> 4 years</p>


    <h3>Medical Laboratory Technology (BMLT)</h3>
    <p>
      Medical Laboratory Technology (BMLT) is a specialized program that focuses on diagnosing diseases by testing body fluids and tissues in a laboratory. Students learn various techniques such as microscopy, blood analysis, and microbiology.
    </p>
    <p><strong>Course Duration:</strong> 3 years</p>


    <h3>Radiology and Imaging Technology (B.Sc. Radiology)</h3>
    <p>
      Bachelor of Science in Radiology is a course that focuses on diagnostic imaging techniques such as X-ray, MRI, CT scans, and ultrasound. Students learn how to operate medical imaging equipment and assist doctors in diagnosing various medical conditions.
    </p>
    <p><strong>Course Duration:</strong> 3 years</p>


    <h3>Optometry (BOptom)</h3>
    <p>
      Bachelor of Optometry (BOptom) is a program focused on training students to examine eyes, prescribe glasses and contact lenses, and diagnose visual disorders or eye diseases.
    </p>
    <p><strong>Course Duration:</strong> 4 years</p>


    <h3>Veterinary Science (BVSc)</h3>
    <p>
      Bachelor of Veterinary Science (BVSc) is a program designed for students who are passionate about animal health. It covers the diagnosis, treatment, and prevention of diseases in animals and the management of veterinary healthcare practices.
    </p>
    <p><strong>Course Duration:</strong> 5 years</p>
  </div>
)}




{activeSection === "path" && (
  <div id="path" className="section">
    <h2>Career Opportunities After Medical Studies</h2>
    <p>
      Medical studies open up a wide array of career paths within healthcare and medical sciences. Graduates can choose to specialize in numerous fields based on their interests and expertise. Below are some popular career options:
    </p>


    <ul>
      <li><strong>Doctor (General Practitioner):</strong> Provide primary healthcare to patients, diagnosing and treating various conditions.</li>
      <li><strong>Surgeon:</strong> Specialize in performing surgical procedures across areas such as cardiology, neurology, orthopedics, and more.</li>
      <li><strong>Medical Researcher:</strong> Conduct research on diseases, new treatments, and medical technologies to advance healthcare.</li>
      <li><strong>Pediatrician:</strong> Specialize in the medical care of infants, children, and adolescents.</li>
      <li><strong>Psychiatrist:</strong> Diagnose and treat mental health disorders through therapy and medication.</li>
      <li><strong>Oncologist:</strong> Specialize in the diagnosis and treatment of cancer, including chemotherapy and radiotherapy.</li>
      <li><strong>Cardiologist:</strong> Focus on diagnosing and treating cardiovascular diseases.</li>
      <li><strong>Pathologist:</strong> Study tissues, cells, and organs to diagnose diseases, often working in laboratories.</li>
      <li><strong>Anesthesiologist:</strong> Administer anesthesia and manage pain relief during surgeries.</li>
    </ul>
  </div>
)}




{activeSection === "internship" && (
  <div id="internship" className="section">
    <h2>Internship</h2>
    <p>
      Internships are an essential part of medical education, providing students with practical, hands-on experience in real-world settings. Each medical course includes an internship period where students work under the guidance of professionals in hospitals or healthcare facilities.
    </p>


    <h3>MBBS Internship</h3>
    <p>
      During the final year of MBBS, students undergo a mandatory one-year internship in hospitals, where they gain experience in various departments such as Surgery, Medicine, Obstetrics and Gynecology, Pediatrics, and more.
    </p>


    <h3>BDS Internship</h3>
    <p>
      In BDS, the final year also includes a compulsory internship of one year, where students work with senior dental surgeons to treat patients, perform dental procedures, and learn about oral healthcare management.
    </p>


    <h3>BAMS Internship</h3>
    <p>
      For BAMS students, the internship period lasts for 1 year, during which they gain practical experience in Ayurvedic hospitals and clinics, learning to treat patients using Ayurvedic principles and practices.
    </p>


    <h3>BHMS Internship</h3>
    <p>
      BHMS students are required to complete an internship in homeopathic hospitals or clinics during their final year. The internship helps them learn how to diagnose and treat patients using homeopathic remedies and therapies.
    </p>


    <h3>Nursing Internship</h3>
    <p>
      Nursing students usually have a 6-month to 1-year internship in hospitals or clinics. During this time, they work in various departments such as pediatrics, surgery, maternity, and emergency care to gain practical experience in patient care and nursing procedures.
    </p>
  </div>
)}




{activeSection === "projects" && (
  <div id="projects" className="section">
    <h2>Projects</h2>
    <p>
      In medical education, projects are an essential way for students to apply the theoretical knowledge they gain throughout their courses. These projects may involve research, case studies, or healthcare innovation.
    </p>


    <h3>MBBS Projects</h3>
    <p>
      MBBS students often work on projects related to medical research, such as epidemiological studies, clinical case reports, drug studies, or surgical innovations. Projects could also involve healthcare management and the development of health awareness programs.
    </p>
    <ul>
      <li>Research on emerging diseases and their prevention</li>
      <li>Clinical case studies on rare conditions</li>
      <li>Survey on healthcare access in rural areas</li>
      <li>Healthcare technology innovations (telemedicine, mobile apps)</li>
    </ul>


    <h3>BDS Projects</h3>
    <p>
      BDS students work on projects focusing on dental health, oral hygiene, dental surgery, and new treatments in dentistry. Research topics may include oral cancer studies, dental implants, or improvements in dental procedures.
    </p>
    <ul>
      <li>Development of new dental materials</li>
      <li>Oral health surveys and awareness campaigns</li>
      <li>Research on dental diseases and prevention methods</li>
      <li>Innovative orthodontic treatments</li>
    </ul>


    <h3>BAMS Projects</h3>
    <p>
      BAMS students may work on projects that explore the therapeutic potential of Ayurvedic practices in treating diseases, conducting research on medicinal plants, and studying the efficacy of Ayurveda in modern-day health issues.
    </p>
    <ul>
      <li>Research on the effectiveness of Ayurvedic treatments for chronic diseases</li>
      <li>Survey on Ayurvedic practices in modern medicine</li>
      <li>Study on herbal medicine and its effects on immunity</li>
      <li>Innovative Panchakarma treatments for specific conditions</li>
    </ul>


    <h3>BHMS Projects</h3>
    <p>
      BHMS students may explore projects related to homeopathic treatments for various diseases, patient case studies, and how homeopathy can be integrated into modern healthcare.
    </p>
    <ul>
      <li>Research on homeopathic remedies for chronic illnesses</li>
      <li>Case studies on homeopathic treatments for mental health disorders</li>
      <li>Development of new homeopathic treatments</li>
      <li>Comparative studies of homeopathy and conventional medicine</li>
    </ul>


    <h3>Nursing Projects</h3>
    <p>
      Nursing students may work on projects related to patient care, improving healthcare systems, nursing practices, or exploring healthcare issues such as infection control and health promotion.
    </p>
    <ul>
      <li>Development of patient care models</li>
      <li>Research on healthcare delivery systems</li>
      <li>Study on nursing practices in different healthcare settings</li>
      <li>Improvement in nursing protocols for specific diseases</li>
    </ul>
  </div>
)}




{activeSection === "conclusion" && (
  <div id="conclusion" className="section">
    <h2>Conclusion</h2>
    <p>
      Medical studies require dedication and perseverance. It is important for students to engage in internships and projects to build practical skills and enhance their knowledge.
    </p>
    <p>
      Graduates can work in hospitals, clinics, research centers, or even start their own practice. The medical field offers diverse career opportunities, and continuous learning is a key part of a successful career in healthcare.
    </p>
    <p>
      It is also important to develop communication skills, empathy, and a strong ethical foundation, as healthcare professionals work closely with patients and other professionals in the field.
    </p>
    <p>Thank You!</p>
  </div>
)}




      {/* Add similar sections for BDS, BAMS, etc. */}
    </div>
  );
};


export default Medical;