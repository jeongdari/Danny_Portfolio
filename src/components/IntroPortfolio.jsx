import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen'; //Import to track components visibility
import { TypeAnimation } from 'react-type-animation'; //Import for text typing animation

// IntroAbout component definition
function IntroPortfolio () {
    return (
        <section className="banner1" id="Portfolio">
            <Container fluid>
                <Row className = "justify-content-center align-items-center">
                    <Col xs={12} md={8}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from purple-400 to-pink-600'> Furthermore, I am </span>
                        <br></br>
                        <TypeAnimation
                            // Sequence of text animations
                            sequence={[
                                '{ Result-driven }',
                                1000,
                                '{ a Negotiator }',
                                1000,
                                '{ a Sociable Professional }',
                                1000,
                                '{ a Business Strategist }',
                                1000,
                            ]}
                            wrapper='span' // Wrap animation in a span element
                            speed={50} // Animation speed (characters per second)
                            repeat={Infinity}
                            style={{ whiteSpace: 'nowrap' }} // Prevent line breaks in animation
                            className="type-animation"
                        />
                    </h1>
                        <p style={{ textAlign: 'left' }}>As an experienced sales professional and market analyst with over 16 years of industry experience, I have consistently demonstrated the ability to create value and drive profitability for my clients and employers. My expertise lies in analyzing market information, developing and implementing sales strategies and tactical plans, and identifying and securing new business opportunities.<br></br><br></br>
                        My strengths include strategic planning, data analysis, market research, and innovative problem-solving. I am a skilled communicator and negotiator, with the ability to build trust and rapport with clients and colleagues alike.<br></br><br></br>
                        Overall, I am a results-driven sales and marketing professional with a passion for driving growth and profitability for my clients and employers.</p>
                        
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default IntroPortfolio;