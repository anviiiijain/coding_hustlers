import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import MCQ from "../../components/custom/Test/MCQ"
import Subjective from "../../components/custom/Test/Subjective"
import Instruction from "../../components/custom/Instruction/Instruction"
import EndTest from "../../components/custom/EndTest/EndTest"
import {Switch , Route , NavLink , BrowserRouter} from "react-router-dom"
class StudentSection extends React.Component{
    render(){
      
      let testRoute = null 
    
      testRoute = (<Switch>
        <Route path="/mcq" exact  component={MCQ}/>
        <Route path="/subjective" exact component={Subjective}/>
        
      </Switch>)
      
      return (
     <EndTest/>
        )
    }
}


export default StudentSection;