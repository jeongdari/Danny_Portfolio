import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/image/color-sharp.png"

function Skills () {
  // Responsive configuration for the Carousel component
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>SKILLS</h2>
                        <p> I have honed my skills in strategic planning, data analysis, and market research, <br></br>which have been instrumental in driving profitability and growth for my clients and employers.</p>
                        {/* Carousel component to display skills with responsive configuration */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="95%" />
                                <h5>Strategic planning</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="95%" />
                                <h5>Communication</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="95%" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="90%" />
                                <h5>Data Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="80%" />
                                <h5>C#, JavaScript, Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="SkillBG" />
    </section>
  )
}
export default Skills;