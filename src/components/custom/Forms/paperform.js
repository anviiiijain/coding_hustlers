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

import Checkbox from "./../../@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"

class VerticalForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Paper Details</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label for="Subject">Subject</Label>
                  <Input
                    type="text"
                    name="name"
                    id="Subject"
                    placeholder="Subject"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="Type">Type</Label>
                  <Input
                    type="Text"
                    name="Type"
                    id="Type"
                    placeholder="Type"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Label for="">Duration</Label>
                  <Input
                    type="number"
                    name="Duration"
                    id="duration"
                    placeholder="Duration"
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
export default VerticalForm
