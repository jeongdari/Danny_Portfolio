import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/image/header-img.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

function Banner () {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to Danny's Portfolio</span>
                        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from purple-400 to-pink-600'> Hello, I am{""} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Danny Jeong',
                                1000,
                                'Sales Professional',
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
                        <p>As a technical sales manager and market analyst with more than 16 years of experience, I have honed my skills in strategic planning, data analysis, and market research, which have been instrumental in driving profitability and growth for my clients and employers. However, I have decided to change my career path and pursue a new direction in IT, specifically in the field of Computer Science.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size = {25} /></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Banner;
