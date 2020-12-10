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
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import {makeStyles} from "@material-ui/core/styles"
import Radio from "../../@vuexy/radio/RadioVuexy"

import { Check } from "react-feather"

const useStyles = makeStyles({
    area:{
        marginTop:"30px",
        width:"12%"
    }
})



const Subjective =()=>{

    const classes = useStyles()

    return (
        <Card>
          <CardBody>
            <Form>
              <Row>
              <Col sm="12">
                  <div>question?</div>
                  </Col>
                  <Col sm="12" className={classes.area}>
                  <TextareaAutosize
    
      rowsMax={6}
      placeholder="Enter your answer"
      
      defaultValue="."
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
 
export default Subjective;
