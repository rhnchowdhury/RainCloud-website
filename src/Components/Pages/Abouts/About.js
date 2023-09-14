import React from 'react';
import './about.css';
import img1 from '../../../Icon/bg-girl.jpg';

const About = () => {
    return (
        <section className='about-section'>
            <div className='about-header'>
                <div className='about-header-bg'>
                </div>
                <div >
                    <div className='about-head-div'>
                        <h1 className='about-text-style'>About</h1>
                        <span>
                            <h3 className='about-text-style-2'>Since Our Earliest Days lorem <br /> ipsum dolor sit amet, elit. Ut <br /> elit tellus, luctus, erat sed <br /> fermentum feugiat.</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#222222' }}>
                <div className='about-mid-head-part'>
                    <div className='lg:pl-32'>
                        <p className='about-paragraph'>A FEW WORDS ABOUT US</p>
                        <h1 className='about-title'>We have become one of the best advertising etiam sed pharetra.
                        </h1>
                    </div>
                    <div >
                        <div className='about-mid-div'>
                            <div>
                                <img src={img1} alt="" className='lg:-mb-96  brightness-200 about-img-size' />
                            </div>
                            <div className='about-mid-div-style lg:ml-32'>
                                <h6 className='about-header-six'>We think different...</h6>
                                <p className='about-paragraph mb-12'>
                                    Proin gravida nibh vel velit auctor aliquet. <br /> Aenean sollicitudin, lorem quis bibendum auctor, <br /> nisi elit consequat ipsum, nec sagittis sem nibh <br /> id elit. Duis sed odio sit amet nibh vulputate <br /> cursus a sit amet.
                                    <br /><br />
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-last-div'>
                <div className='about-last-div-bg'>
                </div>
                <div >
                    {/* <div className='about-last-div-text'>
                        <p >A TRUE PARTNERSHIP</p>
                        <h1 >Our client list speaks for itself sed <br /> non mauris vitae erat consequat <br /> auctor eu in elit class aptent.</h1>
                    </div> */}
                    <div className='about-last-div-text'>
                        <p className='about-paragraph'>A TRUE PARTNERSHIP</p>
                        <h1 className='about-header-six'>Our client list speaks for itself sed <br /> non mauris vitae erat consequat <br /> auctor eu in elit class aptent.</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;