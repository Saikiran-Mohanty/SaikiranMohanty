import React from 'react';
import jQuery from 'jquery';
import Progress  from "react-progressbar";

const About = () => {
    return (
        <>
        {/* <link href="../lib/animate/animate.min.css" rel="stylesheet"/> */}
        {/* <!-- About Start --> */}
        <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-img">
                            <img src="https://pbs.twimg.com/profile_images/1386644808903495687/0wek_LSZ_400x400.jpg" alt="" />
            
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>Saikiran Mohanty</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                I am a Frontend developer with robust problem-solving skills and have a real zest for Entrepreneurship. Having excellent communication skills as well as a deep understanding of digital systems I wish to apply my knowledge and skills for continuous improvements. Always eager to adapt and take on new challenges.
                                </p>
                            </div>
                            <div class="skills">
                                <div class="skill-name">
                                    <p>Web Design</p><p>85%</p>
                                </div>
                                <Progress color="orange" transition="2s" completed={85} class="progress progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"/>
                                {/* <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" ></div>
                                </div> */}
                                <div class="skill-name">
                                    <p>Web Development</p><p>70%</p>
                                </div>
                                <Progress color="orange" transition="2s" completed={70} class="progress progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"/>
                                {/* <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> */}
                                <div class="skill-name">
                                    <p>Marketing</p><p>75%</p>
                                </div>
                                <Progress color="orange" transition="2s" completed={75} class="progress progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"/>
                                {/* <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> */}
                                <div class="skill-name">
                                    <p>Psychic Entertainer</p><p>85%</p>
                                </div>
                                <Progress color="orange" transition="2s" completed={85} class="progress progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"/>
                                {/* <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> */}
                            </div>
                            <a class="btn" href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}
        </>
    )
}

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js"></script> */}
// (function ($) {
//     "use strict";

// $('.skills').waypoint(function () {
//     $('.progress .progress-bar').each(function () {
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, {offset: '80%'});
// })(jQuery);

export default About
