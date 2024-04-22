import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/image/header-img.png';
import 'animate.css'; // Import for animations
import TrackVisibility from 'react-on-screen'; //Import to track components visibility
import { TypeAnimation } from 'react-type-animation'; //Import for text typing animation
import DownloadFile from '../components/DownloadFile'; 

//Banner component definition
function Banner() {
    // Function to handle resume download
    const DownloadResume = () => {
        const resumeUrl = '../public/Resume_Danny Jeong.pdf';
        const fileName = 'Resume_Danny Jeong.pdf';
        DownloadFile(resumeUrl, fileName); // Call the downloadFile utility function
    };

    // Rendering the banner section
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from purple-400 to-pink-600'> Hello, I am{""} </span>
                                        <br></br>
                                        <TypeAnimation
                                            sequence={[
                                                'Danny Jeong',
                                                1000,
                                                'a Sales Professional',
                                                1000,
                                                'an IT Student',
                                                1000,
                                                'a Career Changer',
                                                1000
                                            ]}
                                            wrapper='span'
                                            speed={50}
                                            repeat={Infinity}                                            
                                            className="type-animation"
                                        />
                                    </h1>
                                    <p style={{ textAlign: 'left' }}>Welcome to my portfolio! With over 16 years of experience as a sales professional and market analyst, I've honed strategic planning, data analysis, and market research—skills that have driven growth and profitability for my clients and employers. Now, I'm embarking on an exciting new journey into the world of IT and Computer Science.</p>
                                    <button onClick={DownloadResume}>
                                        Download my resume <ArrowRightCircle size={25} />
                                    </button>
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
