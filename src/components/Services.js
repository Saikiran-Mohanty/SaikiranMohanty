import React from 'react';
import design from "../design-icon.png";
import Frontend from "../Frontend-icon.png";
import Marketing from "../marketing-icon.png";
import WebDev from "../webdev-icon.png";
const Services = () => {
    return (
        <>
        {/* <link href="lib/animate/animate.min.css" rel="stylesheet"/> */}
        {/* <!-- Service Start --> */}
        <div class="service" id="service">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop"><img src={design} alt="" className="icon" /></i>
                            </div>
                            <div class="service-text">
                                <h3>UI/UX Design</h3>
                                <p>
                                Canva, Adobe Photoshop, Layouting, Videography, Graphic Designing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop-code"><img src={Frontend} alt="" className="icon" /></i>
                            </div>
                            <div class="service-text">
                                <h3>Frontend Development</h3>
                                <p>
                                Html5, Css3, JavaScript, Node.js, React
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fab fa-android"><img src={Marketing} alt="" className="icon" /></i>
                            </div>
                            <div class="service-text">
                                <h3>Market Research</h3>
                                <p>
                                Marketing, User Experience Research, Communicating, Prototyping, Social media strategy
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fab fa-apple"><img src={WebDev} alt="" className="icon" /></i>
                            </div>
                            <div class="service-text">
                                <h3>Mentalism</h3>
                                <p>
                                 Psychic Entertainer With 7 years of experience, reading people and blowing their minds off.
                                 We all have secrets, the question is What's Your ?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End --> */}
        </>
    )
}

export default Services
