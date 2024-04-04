import React from "react";
import "./css/portfolio.css";
import First_img from "./assets/first.jpg";
import TeaTime from "./assets/Tea time.png";
import Wonderla from "./assets/wonderla.png";
import Petshop from "./assets/petshop.png";
import Portfolios from "./assets/portfolio.png";
import Mediaphotography from "./assets/mmedia.png";
import { MdRefresh } from "react-icons/md";

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

                            <img src={TeaTime} alt="img" className="image" />

                            <div className="overlay overlayLeft">

                                <div className="text">PROJECT 01</div>

                                <p>Tea Time project using html,css static webpage.</p>

                                <a href="https://selva-arsl.github.io/Tea-Time-project/"><button>Visit website</button></a>

                            </div>


                        </div>


                        <div className="container">

                            <img src={Wonderla} alt="img" className="image" />

                            <div className="overlay overlayRight">

                                <div className="text">PROJECT 02</div>

                                <p>Wonderla project using html,css,Bootstrap static webpage.</p>

                                <a href="https://selva-arsl.github.io/Wonderla-project--Team--B/"><button>Visit website</button></a>
                                

                            </div>


                        </div>


                        <div className="container">

                            <img src={Mediaphotography} alt="img" className="image" />

                            <div className="overlay overlayFade">

                                <div className="text">PROJECT 03</div>

                                <p>Media Photography project using html,css,Bootstrap static webpage.</p>
                              
                                <a href="#"><button>Visit website</button></a>
                                


                            </div>


                        </div>



                        <div className="container">

                            <img src={Petshop} alt="img" className="image" />

                            <div className="overlay overlayTop">

                                <div className="text">PROJECT 04</div>

                                <p>Pet Shop project using html,css,Bootstrap static webpage.</p>

                                <a href="https://prakashraj2404.github.io/Petstore-Project/"><button>Visit website</button></a>

                            </div>


                        </div>


                        <div className="container">

                            <img src={Portfolios} alt="img" className="image" />

                            <div className="overlay overlayBottom">

                                <div className="text">PROJECT 05</div>

                                <p>Portfolio webpage project using React js static webpage.</p>

                                <a href="https://portfolio-website-selva-samprash-2000.netlify.app/"><button>Visit website</button></a>
                                

                            </div>


                        </div>


                        <div className="container">

                            <img src={First_img} alt="img" className="image" />

                            <div className="overlay overlayCross">

                                <div className="text">PROJECT 06</div>

                                <p>e-commerec project using javascript dynamic webpage.</p>

                                <a href="#"><button>Visit website</button></a>
                                

                            </div>


                        </div>



                    </div>


                </div>


                <div className="button-overall">
                    <button>Load More <MdRefresh className="refrece"/></button>
                </div>

            </>


        );
    };
};

export default Portfolio;