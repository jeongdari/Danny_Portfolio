import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen'; //Import to track components visibility
import { TypeAnimation } from 'react-type-animation'; //Import for text typing animation

// IntroResume component definition
function IntroResume () {
    return (
        <section className="banner1" id="Portfolio">
            <Container fluid>
                <Row className = "justify-content-center align-items-center">
                    <Col xs={12} md={8}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from purple-400 to-pink-600'> I used to be </span>
                        <br></br>
                        <TypeAnimation
                            // Sequence of text animations
                            sequence={[
                                '{ a General Manager }',
                                1000,
                                '{ a Sales Manager }',
                                1000,
                                '{ a Project Manager }',
                                1000,
                                '{ a Marketing Manager }',
                                1000,
                            ]}
                            wrapper='span' // Wrap animation in a span element
                            speed={50} // Animation speed (characters per second)
                            repeat={Infinity}
                            style={{ whiteSpace: 'nowrap' }} // Prevent line breaks in animation
                            className="type-animation"
                        />
                    </h1>
                        <p style={{ textAlign: 'left' }}>Here's a glimpse into my career journey: I spent 14 years at a chemical company in Seoul, Korea, where I gained valuable expertise. Seeking new challenges, I co-founded a consultancy focusing on helping Korean businesses expand into international markets, particularly in India and Southeast Asia. During this venture, I observed a growing demand for IT solutions, which sparked my interest in transitioning to the IT industry.<br></br><br></br>
To pursue this passion, I enrolled in a Master's program in IT at QUT. I am eager to leverage my diverse experience and skills to thrive in the dynamic field of Information Technology. 
                        </p>
                        
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default IntroResume;