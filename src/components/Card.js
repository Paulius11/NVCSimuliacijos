import React from 'react'
import {
  Col,
} from "react-bootstrap";
export default function Element({need, spalva, cbox, setColor, nameOfClass}) {
    return (
        <div className={nameOfClass}>
        <h4>{need.title}</h4>
        <div style={spalva} onClick={setColor}>
          <ol>
            {need.elements.map((poreikis, i) => (
              <Col>
                <li
                  className={cbox ? "hidden" : undefined}
                  key={poreikis}
                >
                  {poreikis}
                  {/* Tikrina ar paskutinis elementas */}
                  {/* {s.elements.length === i + 1 ? <div className={"plus"} onClick={createliElement}>+</div> : ""} */}
                </li>
              </Col>
            ))}
          </ol>
        </div>
      </div>
    )
}
