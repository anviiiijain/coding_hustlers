import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"



class MCQpaper extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="Question">Question</Label>
                  <Input
                    type="text"
                    name="Question"
                    id="Question"
                    placeholder="Question"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  
                  <Input
                    type="Text"
                    name="Option 1"
                    id="Option 1"
                    placeholder="Option 1"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  
                  <Input
                    type="Text"
                    name="Option 2"
                    id="Option 2"
                    placeholder="Option 2"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
               
                  <Input
                    type="Text"
                    name="Option 3"
                    id="Option 3"
                    placeholder="Option 3"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
               
                  <Input
                    type="Text"
                    name="Option 4"
                    id="Option 4"
                    placeholder="Option 4"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                <Label for="CAnswer">Correct Answer :</Label>
                  <Input
                    type="Text"
                    name="Option 4"
                    id="Option 4"
                    placeholder="Option 4"
                  />
                </FormGroup>
              </Col>
              
              <Col sm="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={e => e.preventDefault()}
                  >
                    Next
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default MCQpaper
