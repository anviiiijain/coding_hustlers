import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import { data } from "../../views/pages/knowledge-base/cardData"

class Cards extends React.Component {
  renderCards = () => {
    let result = data.map(item => {
      if (this.props.value.hasOwnProperty('subject')) {
        return (
          <Col md="4" sm="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                <Link to="/subject/paper">
                  <h4>{item.title.toUpperCase()}</h4>
                  <small className="text-dark">{item.text}</small>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )
      } else if (this.props.value.hasOwnProperty('year')) {
        return (
          <Col md="4" sm="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                <Link to="/year">
                  <h4>{item.title.toUpperCase()}</h4>
                  <small className="text-dark">{item.text}</small>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )
      }
      return ""
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}</Row>
  }
}
export default Cards
