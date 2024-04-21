import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/image/project-img1.png';
import projImg2 from '../assets/image/project-img2.jpeg';
import projImg3 from '../assets/image/project-img3.png';
import projImg4 from '../assets/image/project-img4.png';
import projImg5 from '../assets/image/project-img5.png';
import colorSharp2 from '../assets/image/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('first');

    const projects1 = [
        {
            title: "Established Sales Network in India",
            description: "Led the strategic establishment and expansion of a robust sales network across India",
            imgUrl: projImg1,
        },
        {
            title: "Securing Samsung Electronics and Hynix as Key RO filter Customers",
            description: "Led the market entry strategy by cultivating new accounts with industry giants Samsung Electronics and Hynix for the supply of Korean-made RO filters",
            imgUrl: projImg3,
        },
    ];

    const projects2 = [
        {
            title: "Commissioning RO production Facility",
            description: "Served as Project Manager overseeing the construction and commissioning of RO filter production facility in Anaheim, CA",
            imgUrl: projImg2,
        },
        {
            title: "EBMUD Water Reuse",
            description: "Supervised the replacement of RO filters and conducted the commissioning of a key RO system for the East Bay Municipal Utility District",
            imgUrl: projImg5,
        },
    ];

    const projects3 = [
        {
            title: "Development of HRMAS",
            description: "Developing a user-friendly online platform, HR Maturity Assessment System for Vincents to efficiently assess HR policies and procedures of its clients",
            imgUrl: projImg4,
        },
    ];

    const handleTabSelect = (eventKey) => {
        setActiveTab(eventKey);
    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ?  'animate__animated animate__' : ''}>
                                    <h2>Projects</h2>
                                    <p>
                                        These are several projects I led or was involved in during my tenure as a sales manager, project manager, and Master's student.
                                    </p>
                                    <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Sales Manager</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Project Manager</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Master's Student</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content /* id="slideInUp" className={isVisible ? 'animate__animated animate__fadeIn' : ''}*/>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects1.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {projects2.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projects3.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};

export default Projects;