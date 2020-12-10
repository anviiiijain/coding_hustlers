import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Progress
} from "reactstrap"
import Button from "@material-ui/core/Button"
import { Star, Briefcase } from "react-feather"
import Red from "@material-ui/core/colors/red"
import {makeStyles} from "@material-ui/core/styles"
import Green from "@material-ui/core/colors/green"

const useStyles = makeStyles({
        
contain:{
    color:Red[700],
    
},
button:{
    backgroundColor:Green[500],
    borderRadius:"23px"
}

})

const Instruction=()=> {
    
const classes  = useStyles()    
        
    return (
      <Row>
        <Col lg="12" md="6" sm="12">
          <Card>
            <CardHeader className="mx-auto flex-column">
              <h4>Exam Instruction</h4>
              <p><b>Students read the rules below before the exam starts</b></p>
            </CardHeader>
            <CardBody className="text-center pt-0">
            <CardBody className={classes.contain} >
            <ul>
                <li><b>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</b></li>
                <li><b>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</b></li>
                <li><b>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</b></li>
                <li><b>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</b></li>
                <li><b>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do</b></li>
            </ul>

            <h4>Best of Luck</h4>
            </CardBody>
              <Button className={classes.button}>
               <b> Enter </b>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
export default Instruction
