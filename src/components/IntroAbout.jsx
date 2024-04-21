import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeAnimation } from 'react-type-animation';

function IntroAbout() {
  return (
    <section className="banner1" id="About">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'><span style={{ color: 'yellow' }}>{"</>"}</span> {"I am also"}{" "}</span>
                    <br />
                    <TypeAnimation
                      sequence={[
                        'a Pet Lover',
                        1000,
                        'a Traveler',
                        1000,
                        'a Landscape Lover',
                        1000,
                        'a Coffee Enthusiast',
                        1000,
                        'a SCUBA Diver',
                        1000,
                        'a Golfer',
                        1000,
                      ]}
                      wrapper='span'
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>
                  <p style={{ textAlign: 'left' }}>
                    Thanks to my previous experiences and studies, I have had the privilege of living and working in several countries, including the USA, Japan, India, Indonesia, and Australia. These opportunities have allowed me to explore fascinating places around the world and gain valuable insights into diverse cultures and lifestyles. <br></br><br></br>Personally, I have a passion for travel, architecture, and photography. Exploring new places and capturing beautiful scenery through photography is where I find joy. Another passion of mine is scuba diving, which offers a breathtaking glimpse into the mesmerizing underwater world.<br></br><br></br>Outside of my adventures, I enjoy golf as a social activity—a wonderful way to connect with others and build meaningful relationships. During moments of relaxation, you'll find me unwinding with a cup of coffee, a refreshing beer, or a glass of wine.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IntroAbout;
