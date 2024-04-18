import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/image/header-img.svg';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from purple-400 to-pink-600'> Hello, I am{""} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Danny',
                                1000,
                                'Experienced Sales Professional',
                                1000,
                                'IT Student',
                                1000,
                                'Career Changer',
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        As a technical sales manager and market analyst with more than 16 years of experience, I have honed my skills in strategic planning, data analysis, and market research, which have been instrumental in driving profitability and growth for my clients and employers. However, I have decided to change my career path and pursue a new direction in IT, specifically in the field of Computer Science.
                    </p>
                    <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                    <button className='px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
                <div className='col-span-5'>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>

                </div>
            </div>
        </section>

    )
}

export default HeroSection;