import React from "react";
import { Row, Col } from "reactstrap"

import Cards from "../../../components/custom/cards"

class Dash extends React.Component{
    state = {
        value: ""
      }
    render(){
        return (
            <Row>
            <Col sm="12">
                <h1>Select a Subject to make paper for: </h1>
            <Cards value={this.state.value} />
          </Col>
          </Row>
        )
    }
}


export default Dash;