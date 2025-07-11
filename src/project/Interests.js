import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mainstyle.css';  // Apply this styling only to Interests.js
import Iclass510 from './I_class5_10';
import IDiploma from './I_diploma';
import IPu from './I_pu';
import IUgCourses from './I_ug_courses';

function Interests() {
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

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleDropdownChange = (event) => {
        const selectedPage = event.target.value;
        
        // Set the selected component based on the dropdown value
        if (selectedPage === "class5-10") {
            setSelectedComponent("class5-10");
        }
        else if(selectedPage === "Diploma"){
            setSelectedComponent("Diploma");
        }
        else if(selectedPage === "Pu"){
            setSelectedComponent("Pu");
        }
        else if(selectedPage === "Ug_courses"){
            setSelectedComponent("Ug_courses");
        }
        else {
            setSelectedComponent(null);  // Reset if no valid option is selected
        }

        // Reset dropdown selection after choosing an option
        event.target.selectedIndex = 0;
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
            {/* Conditional rendering of the "What class are you studying in?" dropdown */}
            {!selectedComponent && (
                <div id="studyDropdown">
                    <form>
                        <label htmlFor="studyClass">What class are you studying in?</label>
                        <select id="studyClass" onChange={handleDropdownChange}>
                            <option value="" selected disabled>Select option</option>
                            <option value="class5-10">Class 5-10</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Pu">PU</option>
                            <option value="Ug_courses">UG Courses</option>
                        </select>
                    </form>
                </div>
            )}

            {/* Conditional rendering of selected component */}
            
            {selectedComponent === "class5-10" && <Iclass510 />}
            {selectedComponent === "Diploma" && <IDiploma />}
            {selectedComponent === "Pu" && <IPu />}
            {selectedComponent === "Ug_courses" && <IUgCourses />}
        </div>
    );
}

export default Interests;