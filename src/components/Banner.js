import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import { useEffect, useState } from "react";
// import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.5);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                        <div className={isVisible ? "animated__animated animate__fadeIn":""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hey there,I'm Manpreet and I am a  `}<span className="wrap"><b></b>{text}</span></h1>
                            <p>
                                Back in 12th grade, I started my coding journey with Python and learned the Flask web framework. From there, I decided to delve deeper into web development. As of now, I have completed the MERN (MongoDB, Express.js, React.js, Node.js) stack and have created several projects using this technology stack. Currently, I am learning Next.js (a React framework) and acquiring additional skills to enhance my website's performance. Meanwhile, in my free time, I enjoy playing PC games, listening to tech podcasts, and playing cricket. I strongly believe in the concept of constructive criticism and am always open to feedback from anyone. If you have any suggestions or feedback, feel free to contact me!
                            </p>
                            <button onClick={() => console.log('connect')} >
                                Let's connect <ArrowRightCircle size={25} />
                            </button>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
