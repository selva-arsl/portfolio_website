import React from "react";
import "./css/portfolio.css";
import First_img from "./assets/first.jpg";

class Portfolio extends React.Component {
    render() {
        return (
            <>
                <div className="mywork-container">

                    <h1>MY <span>WORK</span></h1>

                </div>


                <div>

                    <div className="overall">

                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayLeft">

                                <div className="text">Left</div>

                            </div>


                        </div>


                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayRight">

                                <div className="text">Right</div>

                            </div>


                        </div>


                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayFade">

                                <div className="text">Fade</div>

                            </div>


                        </div>



                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayTop">

                                <div className="text">Top</div>

                            </div>


                        </div>


                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayBottom">

                                <div className="text">Bottom</div>

                            </div>


                        </div>


                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayCross">

                                <div className="text">Cross</div>

                            </div>


                        </div>



                    </div>


                </div>

            </>


        );
    };
};

export default Portfolio;