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
            <Col sm="12">
                <div>question?</div>
                </Col>
                <Col sm="12">
                <Radio
            label="Default"
            color="primary"
            defaultChecked={false}
            name="Option1"
            className="py-50"
          />
           <Radio
            label="Default"
            color="primary"
            defaultChecked={false}
            name="Option2"
            className="py-50"
          />
           <Radio
            label="Default"
            color="primary"
            defaultChecked={false}
            name="Option3"
            className="py-50"
          />
           <Radio
            label="Default"
            color="primary"
            defaultChecked={false}
            name="Option4"
            className="py-50"
          />
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
