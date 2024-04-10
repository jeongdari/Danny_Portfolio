import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/image/header-img.svg';

function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Sales Professional", "Master Student", "Career Changer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1); // Use the setter function to update loopNum
            setDelta(500);
        }
    };
    

    return (
        <section className="banner" id="about">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Danny's Portfolio</span>
                        <h1>{`Hi I'm Danny Jeong `}<span className="wrap">{text}</span></h1>
                        <p>As a technical sales manager and market analyst with more than 16 years of experience, I have honed my skills in strategic planning, data analysis, and market research, which have been instrumental in driving profitability and growth for my clients and employers. However, I have decided to change my career path and pursue a new direction in IT, specifically in the field of Computer Science.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size = {25} /></button>
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