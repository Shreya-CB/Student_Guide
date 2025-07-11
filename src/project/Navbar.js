import React from 'react';


function Navbar({ setSelectedPage }) {
  const handleCourseChange = (e) => {
    setSelectedPage(e.target.value);
  };


  return (
    <div>
      <header>
          <h3>Student Guide</h3>
      </header>
    

      <nav>
        {/* <a onClick={() => setSelectedPage('home')}>HOME</a>
        <a onClick={() => setSelectedPage('competitiveExams')}>SELECT COURSE</a>
        <a onClick={() => setSelectedPage('interests')}>INTERESTS</a>
        <a onClick={() => setSelectedPage('help')}>HELP</a> */}
        <a onClick={() => setSelectedPage('home')}>HOME</a>
        <a href="#">
          SELECT COURSE
          <div className="dropdown-container">
            <form>
              <select onChange={handleCourseChange} defaultValue="">
                <option value="" disabled>Select option</option>
                <option value="class510">Class 5-10</option>
                <option value="diploma">Diploma</option>
                <option value="puc">PUC</option>
                <option value="ugCourses">UG Courses</option>
                <option value="competitiveExams">Competitive Exams</option>
              </select>
            </form>
          </div>
        </a>
        <a onClick={() => setSelectedPage('interests')}>INTERESTS</a>
        <a onClick={() => setSelectedPage('help')}>HELP</a>
      </nav>
    </div>

  );
}

export default Navbar;
