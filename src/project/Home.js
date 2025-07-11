/*import React from 'react';
import { Link } from 'react-router-dom';
import './mainstyle.css';
import doctorImage from './doctor.jpg';
import enggImage from './engg.jpg';
import bscImage from './bsc.jpg';

function Home() {
  return (
    <div>
      
      <header>
        <h3>Student Guide</h3>
      </header>
      <nav>
        <Link to="/home">HOME</Link>
        <Link to="#">
          SELECT COURSE
          <div className="dropdown-container">
            <form>
              <select defaultValue="">
                <option value="" disabled>Select option</option>
                <option value="class510">Class 5-10</option>
                <option value="diploma">Diploma</option>
                <option value="puc">PUC</option>
                <option value="ugCourses">UG Courses</option>
                <option value="competitiveExams">Competitive Exams</option>
              </select>
            </form>
          </div>
        </Link>
        <Link to="/interests">INTERESTS</Link>
        <Link to="/help">HELP</Link>
      </nav>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={doctorImage} className="d-block w-100" alt="Doctor" />
          </div>
          <div className="carousel-item">
            <img src={enggImage} className="d-block w-100" alt="Engineer" />
          </div>
          <div className="carousel-item">
            <img src={bscImage} className="d-block w-100" alt="BSc" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <article>
        <p>
          A student guide website serves as a one-stop platform, much like a friendly senior, offering curated
          recommendations for essential websites, events, and resources every student should explore. It covers
          everything from academic tools—such as research databases, online libraries, and course platforms—to
          career-building resources like internship portals, hackathons, and workshops. The site also highlights
          key extracurricular opportunities, including student festivals, field of interest. With reviews, how-to
          conferences, scholarships, and competitions, helping users stay updated on events tailored to their
          articles, and community insights, it ensures students make informed decisions, whether it’s choosing
          the best study materials or discovering networking opportunities.
        </p>
      </article>
    </div>
  );
}

export default Home;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainstyle.css';
import doctorImage from './doctor.jpg';
import enggImage from './engg.jpg';
import bscImage from './bsc.jpg';

function Home() {
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

  return (
    <div className="home-container">
      <header className="header">
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
      <div
        id="carouselExample"
        className="carousel slide custom-carousel"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={doctorImage} className="d-block w-100" alt="Doctor" />
          </div>
          <div className="carousel-item">
            <img src={enggImage} className="d-block w-100" alt="Engineer" />
          </div>
          <div className="carousel-item">
            <img src={bscImage} className="d-block w-100" alt="BSc" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <article className="home-article">
        <p>
          A student guide website serves as a one-stop platform, much like a friendly senior, offering curated
          recommendations for essential websites, events, and resources every student should explore. It covers
          everything from academic tools—such as research databases, online libraries, and course platforms—to
          career-building resources like internship portals, hackathons, and workshops.
        </p>
        <p>
          The site also highlights key extracurricular opportunities, field of interest. With reviews, how-to conferences, scholarships, 
          and competitions, helping users stay updated on events tailored to their articles, and community insights. 
        </p>
      </article>
    </div>
  );
}

export default Home;