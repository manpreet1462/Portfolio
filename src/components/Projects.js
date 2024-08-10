import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import 'animate.css'
import TrackVisibility from 'react-on-screen'
export const Projects = () => {
    const projects = [
        {
            title: "Tomato",
            description: "Browse. Bite. Savor.",
            imgUrl: projImg1,
        },
        {
            title: "Spotify",
            description: "Discover. Listen. Groove.",
            imgUrl: projImg2,
        },
        {
            title: "Fitness Site",
            description: "Train. Sweat. Achieve.",
            imgUrl: projImg3,
        },
        
    ];
    const frontendProjects = [
        {
            title: "Tomato",
            description: "Browse. Bite. Savor.",
            imgUrl: projImg1,
        },
        {
            title: "Spotify",
            description: "Discover. Listen. Groove.",
            imgUrl: projImg2,
        },
        {
            title: "Fitness Site",
            description: "Train. Sweat. Achieve.",
            imgUrl: projImg3,
        },
        
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible})=>
                        <div className={isVisible ? "animated__animated animate__slideInUp":""}>
                        <h2>Projects</h2>
                        <p>FullStack Projects on MERN and some frontend projects</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <a style={{display:'flex', gap:'20px' ,color:'inherit'}} href='https://fooddelivery111.netlify.app'>{projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}</a>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"><Row>
                                <a style={{display:'flex', gap:'20px', color:'inherit'}} href='spotify-project-frontend.netlify.app'>{frontendProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}</a>
                                    </Row></Tab.Pane>
                                <Tab.Pane eventKey="third"><Row>
                                <a style={{display:'flex', gap:'20px' , color:'inherit'}} href='https://fitness-site-new.netlify.app'>{frontendProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}</a>
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
}
