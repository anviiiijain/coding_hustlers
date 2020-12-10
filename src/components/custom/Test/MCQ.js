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

import Radio from "../../@vuexy/radio/RadioVuexy"

import { Check } from "react-feather"

class MCQ extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Form>
            <Row>
            <FormGroup check >
              <Label check>
                <Input type="radio" name="basicRadio"  /> Active
              </Label>
            </FormGroup>
            <FormGroup check e>
              <Label check>
                <Input type="radio" name="basicRadio" /> Inactive
              </Label>
            </FormGroup>
            <FormGroup check >
              <Label check>
                <Input type="radio" name="basicRadio"  /> Active Disabled
              </Label>
            </FormGroup>
            <FormGroup check >
              <Label check>
                <Input type="radio" name="basicRadio" /> Inactive Disabled
              </Label>
            </FormGroup>
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
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                   Clear
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
export default MCQ;
