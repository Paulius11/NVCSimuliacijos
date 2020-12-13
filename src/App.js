import React, { useState } from "react";
import "./styles.css";
import InlineEdit from "./components/inlineEdit";
import { NEEDS_COMMON_ROL, NEEDS_UNMET_ROL, NEEDS_MET_ROL } from "./data/data";
import FontSizeChanger from "react-font-size-changer";
import {
  Accordion,
  Card,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

export default function App() {
  const DEFAULT_COLOR = "black";

  const [choice, setChoice] = useState([]);
  const [spalva, setSpalva] = useState({ color: DEFAULT_COLOR });
  const [cbox, setCbox] = useState(false);

  const [side1, setSide1] = useState("1 pusė");
  const [side2, setSide2] = useState("2 pusė");
  const [side3, setSide3] = useState("Drauge");

  const [poreikiaiPirma, setPoreikiaiPirma] = useState([]);
  const [poreikiaiAntra, setPoreikiaiAntra] = useState([]);
  const [poreikiaiKartu, setPoreikiaiKart] = useState([]);

  const [jausmaiPirma, setJausmaiPirma] = useState([]);
  const [jausmaiAntra, setJausmaiAntra] = useState([]);
  const [jausmaiKartu, setJausmaiKartu] = useState([]);

  const sides = {
    firstSide: "Pirma pusė",
    secondSide: "Antra pusė",
    together: "Abi pusės",
  };

  const getColor = () => {
    // keiciasi priklausomai nuo puses pasirinkimo
    if (choice == sides.firstSide) {
      return "red";
    }
    if (choice == sides.secondSide) {
      return "blue";
    }
    if (choice == sides.together) {
      return "green";
    }
  };
  const setColor = (e) => {
    const targetColor = e.target.style.color;
    const tagName = e.target.tagName;
    const choiceColor = getColor();
    const textContent = e.target.textContent;
    const classOfJausmOrPoreik =
      e.target.parentElement.parentElement.parentElement.parentElement
        .className;
    e.target.parentElement.classList.add("pazymetas");
    console.log(
      `target color: ${targetColor} choice color: ${choiceColor}\tagName: ${tagName} text: ${textContent} class: ${classOfJausmOrPoreik}`
    );
    let newColor = DEFAULT_COLOR;
    // add to list if conditions are met
    if (
      targetColor != choiceColor &&
      newColor != null &&
      choiceColor != undefined &&
      tagName == "LI"
    ) {
      newColor = choiceColor;

      if (classOfJausmOrPoreik == "poreikiai") {
        // adding element and removing dublicates from array

        if (
          choice == sides.firstSide &&
          poreikiaiPirma.indexOf(textContent) === -1
        ) {
          setPoreikiaiPirma((oldArray) => [...oldArray, textContent]);
          setPoreikiaiAntra(poreikiaiAntra.filter((e) => e !== textContent));
          setPoreikiaiKart(poreikiaiKartu.filter((e) => e !== textContent));
        }
        if (
          choice == sides.secondSide &&
          poreikiaiAntra.indexOf(textContent) === -1
        ) {
          setPoreikiaiAntra((oldArray) => [...oldArray, textContent]);
          setPoreikiaiPirma(poreikiaiPirma.filter((e) => e !== textContent));
          setPoreikiaiKart(poreikiaiKartu.filter((e) => e !== textContent));
        }
        if (
          choice == sides.together &&
          poreikiaiKartu.indexOf(textContent) === -1
        ) {
          setPoreikiaiKart((oldArray) => [...oldArray, textContent]);
          setPoreikiaiPirma(poreikiaiPirma.filter((e) => e !== textContent));
          setPoreikiaiAntra(poreikiaiAntra.filter((e) => e !== textContent));
        }
      }

      if (classOfJausmOrPoreik == "jausmai") {
        // adding element and removing dublicates from array
        if (
          choice == sides.firstSide &&
          jausmaiPirma.indexOf(textContent) === -1
        ) {
          setJausmaiPirma((oldArray) => [...oldArray, textContent]);
          setJausmaiAntra(jausmaiAntra.filter((e) => e !== textContent));
          setJausmaiKartu(jausmaiKartu.filter((e) => e !== textContent));
        }
        if (
          choice == sides.secondSide &&
          jausmaiAntra.indexOf(textContent) === -1
        ) {
          setJausmaiAntra((oldArray) => [...oldArray, textContent]);
          setJausmaiPirma(jausmaiPirma.filter((e) => e !== textContent));
          setJausmaiKartu(jausmaiKartu.filter((e) => e !== textContent));
        }
        if (
          choice == sides.together &&
          jausmaiKartu.indexOf(textContent) === -1
        ) {
          setJausmaiKartu((oldArray) => [...oldArray, textContent]);
          setJausmaiPirma(jausmaiPirma.filter((e) => e !== textContent));
          setJausmaiAntra(jausmaiAntra.filter((e) => e !== textContent));
        }
      }
    } else {
      newColor = null;
      // remove element from list
      if (classOfJausmOrPoreik == "poreikiai") {
        setPoreikiaiPirma(poreikiaiPirma.filter((e) => e !== textContent));
        setPoreikiaiAntra(poreikiaiAntra.filter((e) => e !== textContent));
        setPoreikiaiKart(poreikiaiKartu.filter((e) => e !== textContent));
        e.target.parentElement.classList.remove("pazymetas");
      }
      if (classOfJausmOrPoreik == "jausmai") {
        setJausmaiPirma(jausmaiPirma.filter((e) => e !== textContent));
        setJausmaiAntra(jausmaiAntra.filter((e) => e !== textContent));
        setJausmaiKartu(jausmaiKartu.filter((e) => e !== textContent));
        e.target.parentElement.classList.remove("pazymetas");
      }
    }
    e.target.style.color = newColor;

    console.log(targetColor);
    console.log(newColor);
  };

  const toggleElements = () => {
    console.log("test");
  };
  return (
    <Container fluid="false" style={{ backgroundColor: "whitesmoke" }}>
      <Alert variant="info">
        <div className="puses">
          <div
            className="pusesElementas"
            onClick={(e) => setChoice(sides.firstSide)}
          >
            <div
              className={`colorSelect red column ${
                choice === sides.firstSide && "pasirinktaPuse"
              } `}
            ></div>

            <InlineEdit text={side1} onSetText={(text) => setSide1(text)} />
          </div>
          <div
            className="pusesElementas"
            onClick={() => setChoice(sides.secondSide)}
          >
            <div
              className={`colorSelect blue column ${
                choice === sides.secondSide && "pasirinktaPuse"
              } `}
            ></div>
            <InlineEdit text={side2} onSetText={(text) => setSide2(text)} />
          </div>
          <div
            className="pusesElementas"
            onClick={() => setChoice(sides.together)}
          >
            <div
              className={`colorSelect green column ${
                choice === sides.together && "pasirinktaPuse"
              } `}
            ></div>
            <InlineEdit text={side3} onSetText={(text) => setSide3(text)} />
          </div>
          <div className={"options"}>
            <Form.Check
              type="checkbox"
              checked={cbox}
              label="Slėpti nepažymėtus"
              onChange={() => {
                setCbox(!cbox);
                toggleElements();
              }}
            />{" "}
            <FontSizeChanger
              targets={[".Column li"]}
              onChange={(element, newValue, oldValue) => {
                console.log(element, newValue, oldValue);
              }}
              options={{
                stepSize: 1,
                range: 5,
              }}
            />
          </div>
        </div>
      </Alert>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Poreikiai
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="suspaustasIsdestimas">
              {" "}
              <div className="Column">
                {NEEDS_COMMON_ROL.map((s) => (
                  <div className="poreikiai">
                    <h4>{s.title}</h4>
                    <div style={spalva} onClick={(e) => setColor(e)}>
                      <ol>
                        {s.elements.map((poreikis) => (
                          <Col>
                            <li
                              className={cbox ? "hidden" : false}
                              key={poreikis}
                            >
                              {poreikis}
                            </li>
                          </Col>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Jausmai, kai poreikiai nėra patenkinti
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <div className="Column">
                <Row>
                  {NEEDS_UNMET_ROL.map((s) => (
                    <div className="jausmai">
                      <h4>{s.title}</h4>
                      <div style={spalva} onClick={(e) => setColor(e)}>
                        <ol>
                          {s.elements.map((jausmas) => (
                            <Col>
                              <li key={jausmas}>{jausmas}</li>
                            </Col>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Jausmai, kai poreikiai patenkinti
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <div className="Column">
                <Row>
                  {NEEDS_MET_ROL.map((s) => (
                    <div className="jausmai">
                      <h4>{s.title}</h4>
                      <div style={spalva} onClick={(e) => setColor(e)}>
                        <ol>
                          {s.elements.map((jausmas) => (
                            <Col>
                              <li key={jausmas}>{jausmas}</li>
                            </Col>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <hr />

      <Container>
        <p>
          Konstruktyvus konflikto deeskalavimas atsižvelgiant į abiejų pusių
          poreikius ir jausmus.
        </p>

        <Accordion defaultActiveKey="0">
          <div className="text">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b>1. Žingsnis.</b> Atspindėjimas kitos pusės jausmus ir
                  poreikius.
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col>
                      <p>
                        <b>Stebėjimas</b>
                      </p>{" "}
                      <p>
                        <i>kai matau / girdžiu</i>
                      </p>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <p>
                        <b>Jausmai</b>
                      </p>{" "}
                      <p>
                        <i>atrodo, kad jautiesi</i>
                      </p>
                      {jausmaiAntra.map((element) => (
                        <p className="text " style={{ color: "blue" }}>
                          {element}
                        </p>
                      ))}{" "}
                      {jausmaiKartu.map((element) => (
                        <p className="text " style={{ color: "green" }}>
                          {element}
                        </p>
                      ))}{" "}
                      {/* {jausmaiPirma.map((element) => (
                        <p className="text " style={{ color: "red" }}>
                          {element}
                        </p>
                      ))}{" "} */}
                      <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <p>
                        <b>Poreikis</b>
                      </p>{" "}
                      <p>
                        <i>nes yra noras?</i>
                      </p>
                      {poreikiaiAntra.map((element) => (
                        <p className="text " style={{ color: "blue" }}>
                          {element}
                        </p>
                      ))}{" "}
                      {poreikiaiKartu.map((element) => (
                        <p className="text " style={{ color: "green" }}>
                          {element}
                        </p>
                      ))}{" "}
                      {/* {poreikiaiPirma.map((element) => (
                        <p className="text " style={{ color: "red" }}>
                          {element}
                        </p>
                      ))}{" "} */}
                      <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>Ar gerai tave suprantu?</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        </Accordion>

        <hr />
        <Accordion className="text">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <b>2. Žingsnis.</b> Išsakymas savo jausmų ir poreikių.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col>
                    <p>
                      <b>Stebėjimas</b>
                    </p>{" "}
                    <p>
                      <i>Pastebiu, kad:</i>
                    </p>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <p>
                      <b>Jausmai</b>
                    </p>{" "}
                    <p>
                      <i>Jaučiuosi:</i>
                    </p>
                    {jausmaiPirma.map((element) => (
                      <p className="text " style={{ color: "red" }}>
                        {element}
                      </p>
                    ))}{" "}
                    {jausmaiKartu.map((element) => (
                      <p className="text " style={{ color: "green" }}>
                        {element}
                      </p>
                    ))}{" "}
                    {/* {jausmaiAntra.map((element) => (
                        <p className="text " style={{ color: "blue" }}>
                          {element}
                        </p>
                      ))}{" "} */}
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <p>
                      <b>Poreikis</b>
                    </p>{" "}
                    <p>
                      <i>Nes norisi:</i>
                    </p>
                    {poreikiaiPirma.map((element) => (
                      <p className="text " style={{ color: "red" }}>
                        {element}
                      </p>
                    ))}{" "}
                    {poreikiaiKartu.map((element) => (
                      <p className="text " style={{ color: "green" }}>
                        {element}
                      </p>
                    ))}{" "}
                    {/* {poreikiaiAntra.map((element) => (
                        <p className="text " style={{ color: "blue" }}>
                          {element}
                        </p>
                      ))}{" "} */}
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <p>
                      <b>Prašumas</b>
                    </p>{" "}
                    <p>
                      <i>Ar tau tiktų jeigu...?</i>
                    </p>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Container>
  );
}
