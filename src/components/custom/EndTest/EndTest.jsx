import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Progress
} from "reactstrap"
import { Star, Briefcase } from "react-feather"

import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
        
contain:{
  
  padding:"24%"  
}

})

const Instruction=()=> {
    
const classes  = useStyles()    
        
    return (
      <Row>
        <Col lg="12" md="6" sm="12">
          <Card className={classes.contain}>
            <CardHeader className="mx-auto flex-column">
              <h3>Thank you for taking the test</h3>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    )
  }
export default Instruction
