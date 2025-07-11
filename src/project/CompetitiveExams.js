import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CompetitiveExams() {
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


  const [selectedExam, setSelectedExam] = useState(null); // Tracks the selected exam


  const handleEvent = (exam) => {
    setSelectedExam(exam); // Set the selected exam to display its content
  };


  const renderExamContent = () => {
    switch (selectedExam) {
      case 'navodaya_5':
        return (
          <div>
            <h3>Navodaya for 5th</h3>
            <h3>Information</h3>
            <p>
              The Jawahar Navodaya Vidyalaya Selection Test (JNVST) is an entrance exam for admission to
              Jawahar Navodaya Vidyalayas, providing <strong><u>Free Residential Education</u></strong> from
              <strong>Class 6th to 12th</strong> or <strong>Class 9th to 12th</strong>.
            </p>
            <p>
              <strong>Purpose:</strong> The JNVST is a merit-based test to select talented children from mainly from rural areas and some children from urban areas.
              <br />
              <strong>Subjects:</strong> Class 6 (Mental ability, math, regional language).
              <br />
              <strong>Format and Frequency:</strong> Objective test, held annually at national, block, and district levels.
              <br />
              <strong>Eligibility:</strong>  Candidates must meet the age criteria and pass the previous class.
              <br />
              <strong>Admission:</strong>  Admission is based on merit, with reservations for students from rural areas, Scheduled Castes (SCs), Scheduled Tribes (STs), girls, and disabled candidates.
              <br />
              <strong>Examiner:</strong> The Central Board of Secondary Education (CBSE) designs, develops, and conducts the JNVST.
              <br />
            </p>
            <h2>Resources</h2>
            <br />
            <h3>Main JNV Website</h3>
            <a href="https://navodaya.gov.in/nvs/en/Home1" target="_blank" rel="noopener noreferrer">Home</a>
            <h3>Syllabus</h3>
            <a href="https://www.adda247.com/school/jnv-syllabus/?srsltid=AfmBOop1nSj6k9XF1Fczy2iL8gCLszZ3e_xwa9jwbDQGXz3ytzAtjZcp" target="_blank" rel="noopener noreferrer">Website 1</a><br /><br />
            <a href="https://sainikschoolbhubaneswar.org/navodaya-jnvst-class-6-syllabus-pdf/" target="_blank" rel="noopener noreferrer">Website 2</a>
            <h3>Previous year question papers</h3>
            <a href="https://schools.aglasem.com/133831/" target="_blank" rel="noopener noreferrer">Website 1</a><br /><br />
            <a href="https://thedarshika.com/navodaya-previous-question-papers-pdf/#" target="_blank" rel="noopener noreferrer">Website 2</a><br /><br />
            <a href="https://www.selfstudys.com/scholarship-olympiad/navodaya-vidyalaya/exam/class-6th/previous-years-paper-pdf" target="_blank" rel="noopener noreferrer">Website 3</a>
            <h3>Mock test - Apps and links</h3>
            <a href="https://play.google.com/store/apps/details?id=com.sainikrmsnavodaya.classes" target="_blank" rel="noopener noreferrer">Kranthi keen app </a><br /><br />
            <a href="https://www.selfstudys.com/mcq/scholarship-olympiad/navodaya-vidyalaya/class-6th/mock-test" target="_blank" rel="noopener noreferrer">Mock test website 1</a><br /><br />
            <a href="https://navodayastudy.com/free-math-nonverbal-and-language-mock-test-for-all-entrance-exam-multi-language/" target="_blank" rel="noopener noreferrer">Mock test website 2</a><br /><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'nmms':
        return(
          <div>  
            <h3>NMMS Exam</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
              The NMMS (National Means-cum-Merit Scholarship) exam is for students in Class 8 from economically weaker sections. It aims to provide financial assistance for continued education.
              <br /><br />
              <strong>Eligibility:</strong>
              <br />
              <strong>Class:</strong> Must be in Class 8.
              <br />
              <strong>Income Limit:</strong> Family income ≤ ₹1.5 lakh/year.
              <br />
              <strong>Performance: </strong>Minimum 55% in Class 7 (50% for SC/ST).
              <br /><br />
              <strong>Exam Structure:</strong>
              <br />
              <strong>Mental Ability Test (MAT):</strong> Assesses reasoning skills.
              <br />
              <strong>Scholastic Aptitude Test (SAT):</strong> Covers subjects like Maths, Science, and Social Science.
              <br /><br />
              <strong>Scholarship:</strong>
              <br />
              <strong>Amount:</strong> ₹500–₹1,200 per month (varies by state).
              <br />
              <strong>Application:</strong>
              <br />
              Through the state education board, with necessary documents.
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main NMMS Website</h3>
            <a href="https://www.education.gov.in/nmms" target="_blank" rel="noopener noreferrer">Main NMMS Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://rajshaladarpan.nic.in/SD3/NMMS/exampattern.aspx" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://school.careers360.com/articles/nmms-syllabus" target="_blank" rel="noopener noreferrer">Website 1</a><br/><br/>
            <a href="https://www.adda247.com/school/nmms-syllabus/?srsltid=AfmBOorGC2NBLDWDAYVJT2Rp3xo4tywqsoZb2RraLR-P1QuUk-FijycA" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://rajshaladarpan.nic.in/SD3/NMMS/questionpapers.aspx" target="_blank" rel="noopener noreferrer">Website 1</a><br/><br/>
            <a href="https://www.adda247.com/school/nmms-question-paper/?srsltid=AfmBOopOsygntE5iJTzfhgkBqmkXkMZ6R6bvDJvsmyxK-x29Z0SflyoN" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://www.embibe.com/exams/nmms-sample-papers/" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.rankersadda.in/course/view.php?id=53" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br/><br/>
            <a href="https://toppersexam.com/UNIVERSITY-BOARD-EXAMS/NMMS-CLASS-8/free-test_4697.html?srsltid=AfmBOopsGrv6vlmcWhhMWIWAVkJD1_HToCHHhqHK4dow26xRIkZSqKA6#" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br />
            <a href="https://mocktest.aglasem.com/exam/nmms" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br />  
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'navodaya_9':
        return (
          <div>
            <h3>Navodaya for 8th</h3>
            <h3>Information</h3>
            <p>
              The Jawahar Navodaya Vidyalaya Selection Test (JNVST) is an entrance exam for admission to
              Jawahar Navodaya Vidyalayas, providing <strong><u>Free Residential Education</u></strong> from
              <strong>Class 6th to 12th</strong> or <strong>Class 9th to 12th</strong>.
            </p>
            <p>
              <strong>Purpose:</strong> The JNVST is a merit-based test to select talented children from mainly from rural areas and some children from urban areas.
              <br />
              <strong>Subjects:</strong> Class 9 (English, Hindi, math, general science).
              <br />
              <strong>Format and Frequency:</strong> Objective test, held annually at national, block, and district levels.
              <br />
              <strong>Eligibility:</strong>  Candidates must meet the age criteria and pass the previous class.
              <br />
              <strong>Admission:</strong>  Admission is based on merit, with reservations for students from rural areas, Scheduled Castes (SCs), Scheduled Tribes (STs), girls, and disabled candidates.
              <br />
              <strong>Examiner:</strong> The Central Board of Secondary Education (CBSE) designs, develops, and conducts the JNVST.
              <br />
            </p>
            <h2>Resources</h2>
            <br />
            <h3>Main JNV Website</h3>
            <a href="https://navodaya.gov.in/nvs/en/Home1" target="_blank" rel="noopener noreferrer">Home</a>
            <h3>Syllabus</h3>
            <a href="https://jnvstprep.com/jnvst-class-9th-syllabus/" target="_blank" rel="noopener noreferrer">Website 1</a><br /><br />
            <a href="https://school.careers360.com/articles/navodaya-vidyalaya-class-9th-syllabus" target="_blank" rel="noopener noreferrer">Website 2</a>
            <h3>Previous year question papers</h3>
            <a href="https://jnvstprep.com/jnvst-class-9th-syllabus/" target="_blank" rel="noopener noreferrer">Website 1</a><br /><br />
            <a href="https://www.selfstudys.com/scholarship-olympiad/navodaya-vidyalaya/exam/class-9th/previous-years-paper-pdf" target="_blank" rel="noopener noreferrer">Website 2</a><br /><br />
            <a href="https://navodayateacher.com/navodaya-vidyalaya-class-9-old-papers-with-solution-in-pdf/" target="_blank" rel="noopener noreferrer">Website 3</a>
            <h3>Mock test - Links</h3>
            <a href="https://www.selfstudys.com/mcq/scholarship-olympiad/navodaya-vidyalaya/class-9th/mock-test" target="_blank" rel="noopener noreferrer">Mock test website 1</a><br /><br />
            <a href="https://testseries.edugorilla.com/tests/2150/jawahar-navodaya-entrance-class-ix" target="_blank" rel="noopener noreferrer">Mock test website 2</a><br /><br />
            <a href="https://toppersexam.com/TEACHING-EXAMS/JNVST-CLASS-9/free-test_3731.html?srsltid=AfmBOordLDJb6DfqyJfcSvbGCU-v_O_eWtBZxPmfCTopy6e9lUUQ7Ytq" target="_blank" rel="noopener noreferrer">Mock test website 3</a><br /><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'ntse':
        return(
          <div>  
            <h3>NTSE Exam</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
              The National Talent Search Examination (NTSE) is a national-level scholarship program in India aimed at identifying and nurturing talented students.
              This is for students in Class 10 who are from economically weaker sections. It aims to provide financial assistance for continued education.
            <br /><br />
            <strong>Eligibility:</strong>
            <br />
            <strong>Class:</strong>NTSE is conducted for students in Class 10. Students from both government and private schools are eligible to apply.
            <br />
            <strong>Income Limit:</strong> There is no income limit to appear for NTSE, and scholarships are awarded purely on merit.
              <br />
              <strong>Passing Criteria: </strong> Students need to score a minimum cutoff mark in Stage 1 to qualify for Stage 2. Final selection is based on performance in Stage 2.
              <br /><br />
              <strong>Exam Structure:</strong>
              <br />
              The NTSE is conducted in <u>two stages</u>:
              <br />
              <strong>Stage 1:</strong> State-level (conducted by the state education boards)
              <br />
              <strong>Stage 2:</strong> National-level (conducted by NCERT)
              <br /><br />
              <strong>Mental Ability Test (MAT):</strong> Tests logical reasoning and analytical skills.
              <br />
              <strong>Scholastic Aptitude Test (SAT):</strong> Covers science, mathematics, social science, and language.
              <br /><br />
              <strong>Frequency: </strong> Annually, in two stages.
              <br /><br />
              <strong>Scholarship:</strong>
              <br />
              <strong>Class 11-12:</strong> ₹1,250 per month
              <br />
              <strong>Undergraduate and postgraduate:</strong> ₹2,000 per month
              <br />
              <strong>Further Studies:</strong> Scholarships are provided up to the Ph.D. level in certain fields.
              <br />
              <strong>Application Process:</strong>
              <br />
              <strong>Application Mode: </strong>Applications for Stage 1 are generally submitted through the respective state’s education department.
              <br />
              <strong>Application Fee:</strong> Varies by state for Stage 1; no fee for Stage 2
              <br />
              <strong>Documents required:</strong> Recent photograph, signature, and other details as specified by the state.
              <br />
              <br />
              <strong>Examiner:</strong> Stage 1 is conducted by the state or union territory, while Stage 2 is conducted by NCERT.
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main NTSE Website</h3>
            <a href="https://ncert.nic.in/national-talent-examination.php" target="_blank" rel="noopener noreferrer">Main NTSE Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://byjus.com/jee/ntse-exam-pattern/" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.shiksha.com/boards/ntse-board-syllabus">Website 1</a><br/><br/>
            <a href="https://byjus.com/jee/ntse-syllabus/" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://www.selfstudys.com/scholarship-olympiad/ntse/exam/books/all-states">Website 1</a><br/><br/>
            <a href="https://prepp.in/ntse-exam/practice-papers" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://byjus.com/jee/ntse-question-paper/" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.selfstudys.com/page/ntse-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br/><br/>
            <a href="https://www.ntseguru.in/ntse-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br />
            <a href="https://mocktest.aglasem.com/exam/ntse" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br />  
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'kcet':
        return(
          <div>  
            <h3>KCET</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            The Karnataka Common Entrance Test (KCET) is an annual state-level exam conducted by the Karnataka Examinations Authority (KEA) for admission into undergraduate
            programs in engineering, pharmacy, agriculture, and other professional undergraduate courses in Karnataka.
            <br /><br />
            <strong>Eligibility:</strong>Candidates must be Karnataka residents, having completed 10+2 or equivalent with required subjects (Physics, Chemistry, Math/Biology).
            <br /><br />
              <strong>Passing Criteria: </strong> Students need to score a minimum cutoff mark in Stage 1 to qualify for Stage 2. Final selection is based on performance in Stage 2.
              <br /><br />
              <strong>Exam Structure:</strong><br />
              <strong>Subjects:</strong><br/>
              Engineering: Physics, Chemistry, Mathematics<br/>
              Medical/Agricultural: Physics, Chemistry, Biology<br/><br />
              <strong>Exam Format:</strong><br/>
              Question Format: Multiple Choice Questions (MCQs)<br/>
              Total Questions: 180 (60 questions per subject)<br/>
              Marks: 1 mark per question, no negative marking<br/>
              Duration: 80 minutes per subject (3 subjects total)<br/>
              Language: English and Kannada<br/>
              <br />
              <strong>Syllabus:</strong> Based on Karnataka State Board class 11th and 12th
              <br /><br />
              <strong>Frequency: </strong> Annually
              <br /><br />
              <strong>Application Process:</strong>Online registration through KEA website, document submission, and fee payment.
              <br /><br />
              <strong>Application Fee:</strong> Varies based on category of the student.
              - General/OBC (Karnataka residents): ₹500<br />
              - SC/ST (Karnataka residents): ₹250<br />
              - Outside Karnataka: ₹750<br />
              - Outside India: ₹5,000<br />
              <br />
              <br />
              <strong>Examiner:</strong> Karnataka Examinations Authority (KEA)
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main KEA Website</h3>
            <a href="https://cetonline.karnataka.gov.in/kea/" target="_blank" rel="noopener noreferrer">Main KEA Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://www.shiksha.com/engineering/kcet-exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.pw.live/exams/state-exam/kcet-syllabus/">Website 1</a><br/><br/>
            <a href="https://collegedunia.com/exams/kcet/syllabus" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://byjus.com/kcet/kcet-question-papers/">Website 1</a><br/><br/>
            <a href="https://www.selfstudys.com/books/kcet-previous-year-paper" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://www.pw.live/exams/state-exam/kcet-previous-year-question-papers/" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="http://kea.kar.nic.in/vikasana/mock_test.html" target="_blank" rel="noopener noreferrer">Mock test papers from kea</a><br /><br/>
            <a href="https://www.pw.live/exams/state-exam/kcet-previous-year-question-papers/" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br/><br/>
            <a href="https://www.selfstudys.com/mcq/kcet/online/mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br />  
            <a href="https://testbook.com/kcet/test-series" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://engineering.careers360.com/articles/kcet-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />
            <a href="https://mocktest.aglasem.com/exam/kcet" target="_blank" rel="noopener noreferrer">Mock Test Website 5</a><br/><br />  
            <h3>Recommended Books:</h3>
            <p>
            -MTG Publications<br/>
            -Arihant Publications<br/>
            -Dinesh Publications<br/>    
            </p>        
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'jee_mains':
        return(
          <div>  
            <h3>JEE Mains</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            Joint Entrance Examination – Main (JEE-Main), formerly All India Engineering Entrance Examination (AIEEE), is an Indian standardized computer-based test for admission
             to various technical undergraduate programs in engineering, architecture, and planning across colleges in India.
            <br /><br />
            <strong>Eligibility:</strong>Completion of 10+2 or equivalent with Physics, Chemistry, and Mathematics. Candidates can attempt JEE Main up to three consecutive years.
            <br /><br />
              <strong>Exam Structure:</strong><br />
              <strong>Subjects and Marks Distribution:</strong><br />
              <strong>Paper 1 (B.E./B.Tech): </strong><br/>
              Subjects: Physics, Chemistry, Mathematics<br />
              Questions: 90 questions (30 per subject)<br />
              Marks: 300 total marks (4 marks per correct answer, -1 for incorrect answer in MCQs)<br />
              <strong>Paper 2A (B.Arch): </strong>Mathematics, Aptitude Test, Drawing Test<br />
              <strong>Paper 2B (B.Planning): </strong>Mathematics, Aptitude Test, Planning-Based Questions<br />
              <strong>Question Format:</strong> Multiple Choice Questions (MCQs) and Numerical Value-Based Questions<br />
              <strong>Language: </strong>Available in 13 languages, including English, Hindi, and regional languages.<br /><br />
              <strong>Subjects:</strong><br/>
              B.E / B.Tech(Paper 1): Physics, Chemistry, Mathematics<br/>
              B.Arch(Paper 2A): Mathematics, Aptitude Test, Drawing Test<br/>
              B.Planning(Paper 2B): Mathematics, Aptitude Test, Planning-Based Questions<br/><br />
              <strong>Exam Format:</strong><br/>
              Mode: Online (computer-based for all papers except the Drawing Test, which is pen-and-paper)<br/>
              Duration: 3 hours for each paper<br/><br/>
              <strong>Syllabus: </strong>Based on the CBSE syllabus for classes 11th and 12th
              <br /><br/>
              <strong>Frequency: </strong> Held twice a year (typically January and April sessions)
              <br /><br />
              <strong>Application Process:</strong> Online registration on the NTA’s official website, with document upload and fee payment.
              <br /><br />
              <strong>Application Fee:</strong><br/>
               - Indian Candidates: Varies by category and gender (e.g., ₹1000 for General male candidates, ₹500 for General female candidates per session).<br/>
               - Foreign Candidates: USD 75 per session for all categories.<br/>
              <br />
              <strong>Examiner:</strong> National Testing Agency (NTA).
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main NTA Website</h3>
            <a href="https://www.nta.ac.in/Engineeringexam" target="_blank" rel="noopener noreferrer">Main NTA Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://www.shiksha.com/engineering/jee-main-exam-pattern" alt="https://www.vedantu.com/jee-main/exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.vedantu.com/jee-main/syllabus">Website 1</a><br/><br/>
            <a href="https://www.shiksha.com/engineering/jee-main-exam-syllabus" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://www.selfstudys.com/books/jee-previous-year-paper">Website 1</a><br/><br/>
            <a href="https://www.vedantu.com/jee-main/previous-year-question-paper" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://www.pw.live/exams/jee/jee-main-previous-year-paper/" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.nta.ac.in/Student" target="_blank" rel="noopener noreferrer">NTA - Mock Test Registration</a><br/><br />  
            <a href="https://www.selfstudys.com/mcq/jee/online/mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br /><br/>
            <a href="https://www.shiksha.com/engineering/jee-main-exam-mocktest" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br/>
            <a href="https://www.pw.live/full-test-jee-mains" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://www.mockers.in/exam/jee-main-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />  
            <a href="https://www.vedantu.com/jee-main/mock-test-series" target="_blank" rel="noopener noreferrer">Mock Test Website 5</a><br/><br />
            <a href="https://www.embibe.com/exams/jee-main-mock-test-series/" target="_blank" rel="noopener noreferrer">Mock Test Website 6</a><br/><br />            
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'jee_advanced':
        return(
          <div>  
            <h3>JEE Advanced</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            Joint Entrance Examination -Advanced (JEE Advanced ) formerly known as the IIT-JEE. The exam is conducted to
            offer admission into the various courses in the IITs like Engineering, Science and Architecture.
            Scores from JEE Advanced are used for admission to Bachelor’s, Integrated Master’s, and Dual Degree programs in the Indian Institutes of Technology (IITs).
            <br /><br />
            <strong>Eligibility:</strong><br/>
            - <u>JEE Main Qualification:</u> Candidates must rank among the top 2.5 lakh JEE Main scorers.<br/>
            - <u>Attempts:</u> Candidates can attempt JEE Advanced a maximum of two times in two consecutive years.<br/>
            - <u>Academic Requirement:</u> Completion of 10+2 or equivalent with Physics, Chemistry, and Mathematics.
            <br /><br />
              <strong>Exam Structure:</strong><br />
              <strong>Papers:</strong> Two compulsory papers (Paper 1 and Paper 2), each with three sections.<br />
              <strong>Subjects for Both Papers:</strong> Physics, Chemistry, Mathematics<br />
              <strong>Question Format:</strong> Multiple-choice questions (MCQs), Numerical Value-Based Questions, and Match the Following questions. The question types and marking schemes vary by year, keeping candidates adaptive.<br />
              <strong>Marking Scheme:</strong> Varies by question type (includes partial marking, full marking, and negative marking for some questions).<br />
              <strong>Language:</strong> Available in English and Hindi.<br /><br />


              <strong>Exam Format:</strong><br/>
              Mode: Online (computer-based)<br/>
              Duration: 3 hours per paper (6 hours total for both papers)<br/><br/>
              <strong>Syllabus: </strong>Broadly based on the CBSE syllabus for classes 11 and 12 but often at a higher difficulty level, emphasizing in-depth understanding and analytical skills.
              <br /><br/>
              <strong>Frequency: </strong> Once a year
              <br /><br />
              <strong>Application Process:</strong> Online registration through the official JEE Advanced website, with document upload and fee payment.
              <br /><br />
              <strong>Application Fee:</strong><br/>
              - Indian Nationals: ₹2,800 (General), ₹1,400 (Female/SC/ST/PwD)<br/>
              - Foreign Nationals: USD 75 (SAARC) / USD 150 (Non-SAARC)<br/>
              <br />
              <strong>Examiner:</strong> National Testing Agency (NTA).
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main Website</h3>
            <a href="https://jeeadv.ac.in/" target="_blank" rel="noopener noreferrer">Main Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://www.shiksha.com/engineering/jee-advanced-exam-pattern" alt="https://engineering.careers360.com/articles/jee-advanced-exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.shiksha.com/engineering/jee-advanced-exam-syllabus">Website 1</a><br/><br/>
            <a href="https://www.vedantu.com/jee-advanced/syllabus" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://byjus.com/jee/jee-advanced-previous-year-papers/">Website 1</a><br/><br/>
            <a href="https://www.aakash.ac.in/jee-advanced-previous-year-question-papers" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://www.vedantu.com/jee-advanced/previous-year-question-paper" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.vedantu.com/jee-advanced/mock-test-series" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br /><br/>
            <a href="https://www.selfstudys.com/mcq/jee/online/mock-test/jee-advanced" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br/>
            <a href="https://dlp.allen.ac.in/aiot/jee-advanced-free-mock-test-paper-and-solutions.asp" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://test.sarthaks.com/online-course/jee-advanced/9" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />  
            <a href="https://www.embibe.com/exams/jee-advanced-mock-test/" target="_blank" rel="noopener noreferrer">Mock Test Website 5</a><br/><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'neet':
        return(
          <div>  
            <h3>NEET</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            NEET scores are used for admission to MBBS, BDS, AYUSH (Ayurveda, Yoga, Unani, Siddha, and Homeopathy), and Veterinary courses across medical colleges in India.
            Based on NEET scores and All India Rank (AIR), seats are allotted via a centralized counseling process by the Medical Counselling Committee (MCC) and state counseling bodies for various quotas.
            <br /><br />
            <strong>Eligibility:</strong><br/>
            <u>Academic Requirement:</u> Candidates must have completed 10+2 or equivalent with Physics, Chemistry, and Biology/Biotechnology.<br/>
            <u>Minimum Marks:</u> General category requires at least 50% in Physics, Chemistry, and Biology; reserved categories require 40%.
            <br /><br />
              <strong>Exam Structure:</strong><br />
              <u>Subjects:</u> Physics, Chemistry, Biology (Botany and Zoology)<br/>
              <u>Total Questions:</u> 200 questions (180 need to be attempted)<br/>
              <u>Section A:</u> 35 questions in each subject<br/>
              <u>Section B:</u> 15 questions in each subject (out of which 10 are to be answered)<br/>
              <u>Total Marks:</u> 720 marks (4 marks per correct answer, -1 mark for incorrect answer) <br/>            
              <u>Language:</u> Available in 13 languages, including English, Hindi, and regional languages.<br /><br />
              <strong>Exam Format:</strong><br/>
              <u>Mode:</u> Offline (pen-and-paper based)<br/>
              <u>Duration:</u> 3 hours and 20 minutes<br/><br/>
              <strong>Syllabus: </strong>Based on the CBSE syllabus for classes 11th and 12th
              <br /><br/>
              <strong>Frequency: </strong> Once a year
              <br /><br />
              <strong>Application Process:</strong> Online registration through the NTA NEET website, with document upload and fee payment.
              <br /><br />
              <strong>Application Fee:</strong><br/>
              - General: ₹1,700<br/>
              - General-EWS/OBC-NCL: ₹1,600<br/>
              - SC/ST/PwD/Transgender: ₹1,000<br/>
              - Foreign Nationals: ₹9,500<br/>
              <br />
              <strong>Examiner:</strong> National Testing Agency (NTA).
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main NTA Website</h3>
            <a href="https://exams.nta.ac.in/NEET/" target="_blank" rel="noopener noreferrer">Main NTA Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://medicine.careers360.com/articles/neet-exam-pattern" alt="https://www.vedantu.com/jee-main/exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.shiksha.com/medicine-health-sciences/neet-exam-syllabus">Website 1</a><br/><br/>
            <a href="https://www.careerpower.in/school/neet/neet-syllabus" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://www.selfstudys.com/books/neet-previous-year-paper">Website 1</a><br/><br/>
            <a href="https://www.pw.live/exams/neet/neet-previous-year-question-papers/" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://questions.examside.com/past-years/medical/neet" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.nta.ac.in/quiz" target="_blank" rel="noopener noreferrer">NTA - Mock Test Registration</a><br/><br />  
            <a href="https://www.selfstudys.com/mcq/neet/online/mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br /><br/>
            <a href="https://neet.patshala.com/neetfreetests.php" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br/>
            <a href="https://www.mockers.in/exam/neet-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://testbook.com/neet/test-series" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />  
            <a href="https://www.embibe.com/exams/neet-mock-tests-practice/" target="_blank" rel="noopener noreferrer">Mock Test Website 5</a><br/><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'pg_cet':
        return(
          <div>  
            <h3>PG - CET</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            PGCET scores are used for admission into government, aided, private, and university-affiliated colleges in Karnataka offering postgraduate courses in MBA, MCA, M.E., M.Tech, and M.Arch programs.
            Based on PGCET scores and merit ranking, candidates are allotted seats through a centralized counseling process managed by KEA. GATE-qualified candidates are exempted from PGCET for M.E./M.Tech admissions and are given preference in seat allotment.
            <br /><br />
            <strong>Eligibility:</strong><br/>
            - <u>Academic Requirement:</u> Bachelor's degree in a relevant field from a recognized university with at least 50% aggregate marks (45% for SC/ST and Category-I of Karnataka).<br/>
            - <u>Domicile Requirement:</u> Candidates should meet Karnataka domicile criteria for reservation benefits, though non-Karnataka students can also apply.<br/>
            <br />
              <strong>Exam Structure:</strong><br />
              <u>Programs Offered:</u> Admission into MBA, MCA, M.E./M.Tech/M.Arch, and other postgraduate courses.<br />
              <u>Subjects and Sections (vary by program):</u><br />
              - MBA: General Knowledge, Proficiency in English Language, Quantitative Analysis, Reasoning, and General Intelligence.<br />
              - MCA: Mathematics, Analytical Ability, Logical Reasoning, and Computer Awareness.<br />
              - M.E./M.Tech/M.Arch: Questions based on the specific engineering/technology specialization.<br />
              <u>Total Questions:</u> Generally 100 MCQs<br />
              <u>Total Marks:</u> 100 marks (1 mark per question)<br />
              <u>Language:</u> English<br /><br />
              <strong>Exam Format:</strong><br/>
              - Mode: Offline (pen-and-paper based)<br/>
              - Duration: 2 hours for each paper<br/><br/>
              <strong>Syllabus: </strong>Based on relevant undergraduate subjects depending on the course applied for.
              <br /><br/>
              <strong>Frequency: </strong> Anually
              <br /><br />
              <strong>Application Process:</strong> Online registration through the KEA website, with document upload and fee payment.
              <br /><br />
              <strong>Application Fee:</strong><br/>
              - General/OBC: ₹650<br/>
              - SC/ST/Category-I (Karnataka): ₹500<br/>
              <br />
              <strong>Examiner:</strong> Karnataka Examinations Authority (KEA)
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main Website</h3>
            <a href="https://cetonline.karnataka.gov.in/kea/" target="_blank" rel="noopener noreferrer">Main KEA Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://pw.live/exams/mba/karnataka-pgcet-exam-pattern-2024/" alt="https://www.shiksha.com/mba/articles/karnataka-pgcet-2025-blogId-176593" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.pw.live/exams/mba/karnataka-pgcet-syllabus/">Website 1</a><br/><br/>
            <a href="https://testbook.com/karnataka-pgcet/syllabus-exam-pattern" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://www.shiksha.com/mba/karnataka-pgcet-exam-question-papers">Website 1</a><br/><br/>
            <a href="https://collegedunia.com/exams/karnataka-pgcet/question-paper" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://zollege.in/exams/karnataka-pgcet/previous-year-paper" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.prep.youth4work.com/college-entrance-examination/karnataka-pgcet-test" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br /><br/>
            <a href="https://testseries.edugorilla.com/tests/2427/karnataka-pgcet" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br/>
            <a href="https://www.pw.live/exams/mba/karnataka-pgcet-mock-test-2024/" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://pgecet.tsche.ac.in/UI/MockTest.aspx" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />  
            <a href="https://pgecet.tsche.ac.in/UI/MockTest.aspx" target="_blank" rel="noopener noreferrer">Mock Test Website 5</a><br/><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'gate':
        return(
          <div>  
            <h3>GATE</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            Graduate Aptitude Test in Engineering (GATE) scores are widely accepted for admission into M.E., M.Tech, and Ph.D. programs across premier institutes in India.
            Public Sector Undertakings (PSUs) like BHEL, ONGC, IOCL, and NTPC use GATE scores for recruitment in various technical and management roles.
            <br /><br />
            <strong>Eligibility:</strong><br/>
            - <u>Academic Requirement:</u> Bachelor’s degree (or in the final year) in Engineering/Technology/Architecture/Science/Commerce/Arts.<br/>
            - <u>Age Requirement:</u> No age limit.<br/>
            <br />
              <strong>Exam Structure:</strong><br />
              <u>Programs Offered:</u> GATE scores are used for admission to postgraduate programs (M.E./M.Tech/Ph.D.) in IITs, NITs, IISc, and other
              prestigious institutions. GATE scores are also used for recruitment by several PSUs.<br /><br />
              <u>Common Papers:</u> Aerospace Engineering, Civil Engineering, Computer Science and Information Technology, Electrical Engineering, Electronics and
              Communication Engineering, Mechanical Engineering, etc.<br/><br />
              <u>Specialized Papers:</u> Humanities and Social Sciences, Environmental Science and Engineering, Statistics, etc.<br/><br />
              <u>Total Questions:</u> 65 questions<br /><br />
              <u>Total Marks:</u> 100 marks<br /><br />
              - General Aptitude: 10 questions (15 marks)<br/>
              - Core Subject: 55 questions (85 marks)<br/><br />
              <u>Language:</u> English<br /><br />
              <strong>Exam Format:</strong><br/>
              - Mode: Online (computer-based)<br/>
              - Duration: 3 hours<br/><br/>
              <strong>Syllabus: </strong>Based on undergraduate subjects related to the specific field of study chosen by the candidate.
              <br /><br/>
              <strong>Frequency: </strong> Annually, typically in February
              <br /><br />
              <strong>Application Process:</strong> Online registration through the GATE Online Application Processing System (GOAPS) on the official GATE website.
              <br /><br />
              <strong>Application Fee:</strong><br/>
              - Indian Nationals: ₹1,800 (General/OBC), ₹900 (Female/SC/ST/PwD)<br/>
              - Foreign Nationals: USD 100<br/>
              <br />
              <strong>Examiner:</strong> The Indian Institute of Science (IISc) and seven Indian Institutes of Technology (IITs) on a rotational basis.
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main Website</h3>
            <a href="https://gate2024.iisc.ac.in/" target="_blank" rel="noopener noreferrer">Main GATE Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://gate2025.iitr.ac.in/question-paper-pattern.html" alt="https://engineering.careers360.com/articles/gate-exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://www.shiksha.com/engineering/gate-exam-syllabus">Website 1</a><br/><br/>
            <a href="https://www.geeksforgeeks.org/gate-2025-syllabus/" target="_blank" rel="noopener noreferrer">Website 2</a><br/>
            <h3>Previous year question papers</h3>
            <a href="https://byjus.com/gate/previous-year-question-papers/">Website 1</a><br/><br/>
            <a href="https://collegedunia.com/exams/gate/question-paper" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <a href="https://www.geeksforgeeks.org/gate-previous-year-question-paper/" target="_blank" rel="noopener noreferrer">Website 3</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://gate2024.iisc.ac.in/mock-test-links/" target="_blank" rel="noopener noreferrer">Mock Test links from main website</a><br /><br/>
            <a href="https://www.selfstudys.com/page/gate-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br/><br/>
            <a href="https://byjus.com/gate/mock-test/" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br />  
            <a href="https://engineering.careers360.com/articles/gate-mock-test" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://mocktest.aglasem.com/exam/gate" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      case 'upsc':
        return(
          <div>  
            <h3>UPSC</h3>        
            <h3 id="info">Information</h3>              
            <p id="content">
            UPSC (Union Public Service Commission) Civil Services Exam is conducted where successful candidates can be recruited to prestigious posts in the
            Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and other Group A and Group B Central Services.
            Cumulative scores of the Mains exam and the Interview are considered for the final ranking. Prelims are qualifying only.
            <br /><br />
            <strong>Eligibility:</strong><br/>
            - <u>Academic Requirement:</u><br /> Bachelor’s degree in any discipline from a recognized university.<br/>
            - <u>Age Limit:</u><br /> 21 to 32 years (with age relaxations for OBC, SC/ST, and other reserved categories).<br/>
            - <u>Attempts:</u><br /> General category - 6 attempts; OBC - 9 attempts; SC/ST - unlimited (until age limit).<br/>
            <br />
              <strong>Exam Structure:</strong><br />
              <strong>Preliminary Exam (Prelims):</strong><br/>
              <u>Subjects:</u><br/>
              - General Studies Paper I: Covers history, geography, polity, economy, environment, science, current events, etc.<br />
              - General Studies Paper II (CSAT): Tests comprehension, interpersonal skills, logical reasoning, and analytical ability.<br/>
              <u>Total Questions:</u><br />
              - Paper I: 100 questions<br/>
              - Paper II (CSAT): 80 questions<br/>
              <u>Total Marks:</u> <br />
              - Paper I: 200 marks<br/>
              - Paper II (CSAT): 200 marks (qualifying, with a 33% pass mark requirement)<br/>
              <u>Negative Marking:</u> 1/3rd of marks per wrong answer<br/>
              <u>Duration:</u> 2 hours for each paper<br/>
              <u>Language:</u> English and Hindi<br /><br />
              <strong>Main Exam (Mains):</strong><br/>
              <u>Compulsory Papers:</u> Four papers covering a broad range of topics (polity, economy, ethics, etc.)<br/>
              <u>General Studies:</u> Four papers covering a broad range of topics (polity, economy, ethics, etc.)<br/>
              <u>Optional Subject:</u> Two papers in one chosen subject from a list provided by UPSC.<br/>
              <u>Total Papers:</u> 9 papers<br/>
              <u>Total Marks:</u> 1,750 marks (only counted papers)<br/>
              <u>Duration:</u> 3 hours per paper<br/>
              <u>Language:</u> English and Hindi (except for language papers)<br/><br/>
              <strong>Personality Test (Interview):</strong><br/>
              <u>Total Marks:</u> 275 marks<br />
              <u>Focus:</u> Assesses personality, communication skills, general knowledge, and suitability for a career in civil services.<br/>
              <strong>Exam Format:</strong><br/>
              - Mode: Offline (pen-and-paper based) for both Prelims and Mains<br/>
             <br/>
              <strong>Syllabus: </strong>Based on topics from a variety of fields including history, geography, economy, science, environment,
              polity, ethics, and current affairs.
              <br /><br/>
              <strong>Frequency: </strong> Annually
              <br /><br />
              <strong>Application Process:</strong> Online application through the UPSC website
              <br /><br />
              <strong>Application Fee:</strong><br/>
              - General/OBC: ₹100<br/>
              - SC/ST/PwD/Female: No fee<br/>
              <br />
              <strong>Examiner:</strong> Union Public Service Commission (UPSC)
              <br />
            </p>
            <h2>Resources</h2>
            <h3>Main Website</h3>
            <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer">Main UPSC Website</a><br/>
            <h3>Exam Pattern</h3>
            <a href="https://byjus.com/free-ias-prep/upsc-exam-pattern/" alt="https://testbook.com/upsc-civil-services/exam-pattern" rel="noopener noreferrer">Pattern</a>    
            <h3>Syllabus</h3>
            <a href="https://upsc.gov.in/examinations/revised-syllabus-scheme" target="_blank" rel="noopener noreferrer">Website 1</a><br/><br />
            <a href="https://byjus.com/ias/upsc-syllabus/">Website 2</a><br/><br/>          
            <h3>Previous year question papers</h3>
            <a href="https://upsc.gov.in/examinations/previous-question-papers">PYQ's from UPSC website</a><br/><br/>
            <a href="https://www.pw.live/exams/upsc/upsc-pyq-paper/" target="_blank" rel="noopener noreferrer">Website 1</a><br/><br/>
            <a href="https://www.drishtiias.com/free-downloads/download-previous-year-papers" target="_blank" rel="noopener noreferrer">Website 2</a><br/><br/>
            <h3>Mock test - Links</h3>
            <a href="https://www.mockers.in/exam/civil-service-examination-mock-test" target="_blank" rel="noopener noreferrer">Mock Test links from main website</a><br /><br/>
            <a href="https://modelexam.in/upsc-exams/civil-services-ias-csat-mock-test.html" target="_blank" rel="noopener noreferrer">Mock Test Website 1</a><br/><br/>
            <a href="https://byjus.com/free-ias-prep/ias-mock-test-1/" target="_blank" rel="noopener noreferrer">Mock Test Website 2</a><br/><br />  
            <a href="https://afeias.com/mocktest/" target="_blank" rel="noopener noreferrer">Mock Test Website 3</a><br/><br />  
            <a href="https://testbook.com/upsc-civil-services/test-series" target="_blank" rel="noopener noreferrer">Mock Test Website 4</a><br/><br />
            <button onClick={() => setSelectedExam(null)}>Back to Competitive Exams</button>
          </div>
        );
      default:
        return null;
   
  };
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
      <section>
        {selectedExam ? (
          // Render content for the selected exam
          <div className="exam-content">
            {renderExamContent()}
          </div>
        ) : (
          // Render buttons if no exam is selected
          <>
            <h3>School</h3>
            <div className="course">
              <button onClick={() => handleEvent('navodaya_5')}>Navodaya for 5th</button>
              <button onClick={() => handleEvent('nmms')}>NMMS</button>
              <button onClick={() => handleEvent('navodaya_9')}>Navodaya for 8th</button>
              <button onClick={() => handleEvent('ntse')}>NTSE</button>
            </div>
            <h3>PUC</h3>
            <div className="course">
              <button onClick={() => handleEvent('kcet')}>KCET</button>
              <button onClick={() => handleEvent('jee_mains')}>JEE Mains</button>
              <button onClick={() => handleEvent('jee_advanced')}>JEE Advanced</button>
              <button onClick={() => handleEvent('neet')}>NEET</button>
            </div>
            <h3>UG Courses</h3>
            <div className="course">
              <button onClick={() => handleEvent('pg_cet')}>PG-CET</button>
              <button onClick={() => handleEvent('gate')}>GATE</button>
              <button onClick={() => handleEvent('upsc')}>UPSC</button>
            </div>
          </>
        )}
      </section>
    </div>
    
  );
}


export default CompetitiveExams;