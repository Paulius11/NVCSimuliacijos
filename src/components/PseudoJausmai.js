import React from "react";
import { PSEUDO_JAUSMAI } from "../data/data";

import { Accordion, Card, Button, Row, Col } from "react-bootstrap";
export default function PseudoJausmai() {
  return (
    <div>
      <hr />
      <Accordion>
        <div className="text">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Pseudo-jausmai
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col>
                    <b>Žodžiai, kurie nurodo labiau į mintis, nei į jausmus</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <br />
                      <strong>“Jaučiu, kad…”</strong> : kuomet naudojama forma
                      “jaučiu, kad…”, žinau, kad tai, kas seks po šių žodžių,
                      bus mintys:
                      <br />
                      <span className="example">
                        Jaučiu, kad manęs nemyli; jaučiu, kad bandai manimi
                        manipuliuoti; jaučiu, kad dabar nesi nuoširdus...
                      </span>
                      <br />
                      Šiuose sakiniuose tiksliau būtų pakeisti žodį „jaučiu“ į
                      žodį „galvoju“.
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <br />
                      <strong>Vertinimai apie save</strong>
                      <br />
                      <span className="example">
                        Jaučiuosi kvailas; jaučiuosi neadekvatus; jaučiuosi
                        bevertis...
                      </span>
                      <br />
                      Tai ne jausmų išraiška, o to, koks aš galvoju, kad esu.
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <br />
                      <strong>Jaučiu(-iuosi) lyg/tarsi/kaip...</strong>
                      <br />
                      <span className="example">
                        Jaučiuosi kaip nevykėlis; jaučiuosi taip, tarsi
                        gyvenčiau su siena; jaučiuosi taip, lyg norėčiau
                        prasmegti į žemę...
                      </span>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div>
                      <br />
                      <strong>Neveikiamieji dalyviai</strong> kiekvieną kartą,
                      kai naudoju dalyvius
                      <br />
                      <span className="example">
                        mylimas, kritikuojamas, verčiamas, užgauliojamas...
                      </span>
                      <br />
                      norėdamas išreikšti savo jausmus, ištikro įvardinu, ką aš
                      galvoju, kad daro kiti.
                      <br />
                      Kai naudoju tokius žodžius, klausytojas lengvai tai gali
                      išgirsti kaip kaltinimą ar kritiką ir todėl tikėtina, kad
                      jis bus linkęs užsidaryti, gintis ar atakuoti, ir labai
                      sumažėja tikimybė, kad jis atvira širdimi išgirs tai, ką
                      noriu pasakyti.
                      <br />
                      Kai išreiškiu savo jausmus, noriu kuo aiškiau parodyti
                      atsakomybę už juos, kad jie gyvena manyje ir nurodo į mano
                      patenkintus ar nepatenkintus poreikius.
                      <br />
                      <br />
                    </div>
                  </Col>
                </Row>
                <div className="Column suspaustasIsdestimas">
                  <Row>
                    <ol>
                      {PSEUDO_JAUSMAI.map((pseudo, i) => (
                        <Col>
                          <li key={i}>{pseudo}</li>
                        </Col>
                      ))}
                    </ol>
                  </Row>
                </div>

                <Row>
                  <Col>
                    <div>
                      <br />
                      <strong>Poreikiai: </strong>
                      kai kurie iš šių žodžių, kuriuos esame įpratę naudoti kaip
                      jausmus, iš tikrųjų yra žodžiai, nurodantys į poreikius:
                      <br />
                      <span className="example">
                        jaučiuosi suprastas; jaučiuosi išgirstas; jaučiuosi
                        palaikomas...
                      </span>
                      <br />
                      <br />
                      Šiuose sakiniuose tiksliau būtų pakeisti žodį „jaučiu“ į
                      žodį „galvoju“.
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </div>
  );
}
