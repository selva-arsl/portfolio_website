import React from "react";
import "./css/about.css";
import { FaDownload } from "react-icons/fa6";
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import BOOTSTRAP from "./assets/bootstrap.png";
import JAVASCRIPT from "./assets/javascript.jpg";
import REACT from "./assets/react.svg";
import GITHUB from "./assets/github.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
import Resume from "file:///E:/Git/portfolio_website/src/assets/selva-resume-download.pdf"


class About extends React.Component {
    render() {
        return (

            <>
                {/* about me */}

                <div className="about-container">

                    <h1>ABOUT <span className="me"> ME </span></h1>

                </div>

                {/* personal info */}

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

                        <a href={Resume} download><button>Download CV <FaDownload className=" download" /></button></a>
            </div >

                <div className="right-side">
                    <div className="firster">
                        <h1>1</h1>
                        <p>Year Of Experience</p>
                    </div>
                    <div className="seconder">
                        <h1>2</h1>
                        <p>Months Of Internship</p>
                    </div>

                    <div className="thirder">
                        <h1>20+</h1>
                        <p>Projects Completed</p>
                    </div>

                </div>
                </div >

            {/* my skills */ }

            < div className = "myskills-overall" >
                <h1>MY <span>SKILLS</span></h1>
                </div >

            <div className="images-overall">
                <div className="box-1">
                    <img src={HTML} alt="html/logo" />
                    <h3>HTML</h3>
                </div>
                <div className="box-2">
                    <img src={CSS} alt="html/logo" />
                    <h3>CSS</h3>
                </div>
                <div className="box-3">
                    <img src={BOOTSTRAP} alt="html/logo" />
                    <h3>BOOTSTRAP</h3>
                </div>
                <div className="box-4">
                    <img src={JAVASCRIPT} alt="html/logo" />
                    <h3>JAVASCRIPT</h3>
                </div>
                <div className="box-5">
                    <img src={REACT} alt="html/logo" />
                    <h3>REACT</h3>
                </div>
                <div className="box-6">
                    <img src={GITHUB} alt="html/logo" />
                    <h3>GITHUB</h3>
                </div>
            </div>


        {/* my Education */ }

                <div className="myEducation-overall">
                    <h1>MY <span>EDUCATION</span></h1>
                </div>

                <div className="myEducation-container">

                    <div className="Education-all">

                        <div className="Education-box1">

                            <div className="icons">
                                <FaGraduationCap className="icon1" /> <span> Mar 2014 - Apr 2017</span>
                            </div>

                            <h2>Highter Secondary 12TH</h2>

                            <p>I scored 60% on the higher secondary board exam. And I am very mush interested in electronics and computers, so I have taken the b.sc computer degree at College.</p>

                        </div>
                        <div className="Education-box2">

                            <div className="icons">
                                <FaUserGraduate className="icon1" /> <span> Mar 2018 - Apr 2021</span>
                            </div>

                            <h2>B.sc computer Science</h2>

                            <p>I compledted my B.sc computer science degree with 8.10 CGPA in St. Joseph's college and Bharathithasan University, Trichy, Tamil Nadu, India.</p>

                        </div>
                        <div className="Education-box3">

                            <div className="icons">
                                <FaLaptopCode className="icon1" /> <span> Aug 2021 - Sep 2021</span>
                            </div>

                            <h2>Front-End Developer</h2>

                            <p>I designed some frond-end templates. And I workded with CSS and Bootstrap for designing UI. Then I am also worked in frond-end frameworks like React Js. I have done some API integration in small Projects.</p>

                        </div>
                        <div className="Education-box4">

                            <div className="icons">
                                <BsPersonBoundingBox className="icon1" /> <span> Oct 2021 - Oct 2022 </span>
                            </div>

                            <h2>Front-End Associate (Employee)</h2>

                            <p>I workded on real-time projects.  Than, I worked on all my projects in the GitLap environment.  I have done functionally and API integration in Admin panel project.  In real-time projects.</p>

                        </div>
                    </div>
                </div>



            </>
        );
    };
};

export default About;