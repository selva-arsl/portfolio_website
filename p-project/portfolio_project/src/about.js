import React from "react";
import "./css/about.css";
import { FaDownload } from "react-icons/fa6";

class About extends React.Component {
    render() {
        return (

            <>
                <div className="about-container">

                    <h1>ABOUT <span className="me"> ME </span></h1>

                </div>

                <div className="personal-container">
                    <div className="left-side">
                        <h1>PERSONAL INFO</h1>

                        <div className="sub-overall">
                            <div className="sub-left">
                                <h3>Name : <span>Selva samprash A</span></h3>
                                <h3>Age : <span>23</span></h3>
                                <h3>Email : <span>selvasamprash777@gmail.com</span></h3>
                                <h3>Address : <span>3/153 saveriyar puram, oonaiyur post, Thirumayam Taluka, Pudukkottai Districk - 622 505 </span></h3>




                            </div>

                            <div className="sub-right">
                                <h3>Freelance : <span>Available</span></h3>
                                <h3>Skill : <span>Front-End Developer</span></h3>
                                <h3>Experience : <span>1 year</span></h3>
                                <h3>Language : <span> Tamil, English </span></h3>
                            </div>




                        </div>

                        <button>Download CV <FaDownload className="download" /></button>
                    </div>

                    <div className="right-side">
                        <div className="first">
                            <h1>1</h1>
                            <p>Year Of Experience</p>
                        </div>
                        <div className="second">
                            <h1>2</h1>
                            <p>Months Of Internship</p>
                        </div>

                        <div className="third">
                            <h1>20+</h1>
                            <p>Projects Completed</p>
                        </div>

                    </div>
                </div>

            </>
        );
    };
};

export default About;