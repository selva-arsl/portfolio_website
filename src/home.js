import React from "react";
import "./css/home.css";
import Selva_db from "./assets/db2.jpg";
import { IoPerson } from "react-icons/io5";
import Selva_db2 from "./assets/selva_db.jpg";



class Home extends React.Component {
    render() {


        return (

            <>

                <div className="home-container">
                    <div className="home-overall">


                        <div className="img-left">
                            <img src={Selva_db} alt="selva image" />
                        </div>

                        <div className="content-right">

                            <h4>Hello I'm</h4>

                            <h1>Selva samprash A</h1>

                            <h3>I'm a <span className="auto-type"> front end developer </span></h3>

                            <p>I have one year of experience in real-time projects.  And I have done functionality and API integration in Admin panel projects.  Then I learned many things on myself in front-end.</p>

                            <button>Hire Me <IoPerson /></button>
                        </div>

                    </div>
                </div>


            </>


        );
    };
};

export default Home;
