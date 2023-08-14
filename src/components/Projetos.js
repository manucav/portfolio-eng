import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjetoCard } from "./ProjetoCard";
import projImg1 from "../assets/img/projeto-1.png";
import projImg2 from "../assets/img/projeto-2.png";
import projImg3 from "../assets/img/projeto-3.png";
import projImg4 from "../assets/img/projeto-4.png";
import projImg5 from "../assets/img/projeto-6.png";
import projImg6 from "../assets/img/projeto-5.png";
import projImg7 from "../assets/img/projeto-7.png";
import projImg8 from "../assets/img/projeto-8.png";
import projImg9 from "../assets/img/projeto-9.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projetos = () => {

  const projetos = [
    {
      title: "BizOne Clon",
      description: "Developed using HTML and CSS",
      imgUrl: projImg1,
    },
    {
      title: "Nubank Clon",
      description: "Developed using HTML, CSS and JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Twitter Clon",
      description: "Developed using Vue.js and Quasar Framework",
      imgUrl: projImg3,
    },
    {
      title: "Pokedex",
      description: "Developed using Vue.js, Quasar Framework and RESTful API",
      imgUrl: projImg4,
    },
  ];

  const projetos2 = [
    {
      title: "Aluroni",
      description: "Project developed during the Programa Desenvolve 2023",
      imgUrl: projImg5,
    },
    {
      title: "Apeperia",
      description: "Project developed during the Programa Desenvolve 2023",
      imgUrl: projImg6,
    },
    {
      title: "Robotron 2000",
      description: "Project developed during the Programa Desenvolve 2023",
      imgUrl: projImg7,
    },
    {
      title: "Secret friend drawer",
      description: "Project developed during the Programa Desenvolve 2023",
      imgUrl: projImg8,
    },
  ];

  const projetos3 = [
    {
      title: "Project #1",
      description: "Project still under development",
      imgUrl: projImg9,
    },
    {
      title: "Project #2",
      description: "Project still under development",
      imgUrl: projImg9,
    },
    {
      title: "Project #3",
      description: "Project still under development",
      imgUrl: projImg9,
    },
    {
      title: "Project #4",
      description: "Project still under development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="projeto" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my projects as a developer, I have been exploring the possibilities of web development using modern and powerful technologies, such as React.js, Vue.js, among others. Each project is an opportunity to demonstrate my passion for creating interactive and responsive interfaces, ensuring the best experience for users.</p>
                <Tab.Container id="projetos-tabs" defaultActiveKey="primeiro">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="primeiro">#1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="segundo">#2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="terceiro">#3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="primeiro">
                      <Row>
                        {
                          projetos.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="segundo">
                    <Row>
                        {
                          projetos2.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="terceiro">
                    <Row>
                    {
                          projetos3.map((projeto, index) => {
                            return (
                              <ProjetoCard
                                key={index}
                                {...projeto}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}