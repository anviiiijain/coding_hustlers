import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

import MCQ from "./components/custom/Test/MCQ"
import Subjective from "./components/custom/Test/Subjective"
import paperForm from "./components/custom/Forms/paperform"
import MCQpaperForm from "./components/custom/Forms/MCQpaperform"
import SubjectDash from "./sections/Faculty/papermaking/SubjectDash"
import EndTest from "./components/custom/EndTest/EndTest"



const StudentSection= lazy(() =>
  import("./sections/Student")
)
const FacultySection= lazy(() =>
  import("./sections/Faculty")
)
const AdminSection= lazy(() =>
  import("./sections/Admin")
)

const Home=lazy(()=>
import("./components/custom/Instruction/Instruction")
)

const error404 = lazy(() => import("./views/pages/misc/error/404"))

const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return (
          <ContextLayout.Consumer>
            {context => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
            }}
          </ContextLayout.Consumer>
        )
      }}
    />
  )
  const mapStateToProps = state => {
    return {
      user: state.auth.login.userRole
    }
  }
  

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
    render() {
      return (
        <Router history={history}>
          <Switch>
          <AppRoute
              path="/"
              component={ Home}
              exact
            />
            <AppRoute
              path="/Student"
              component={ StudentSection}
            />
             <AppRoute
              path="/Faculty"
              component={ FacultySection}
            /> <AppRoute
            path="/Admin"
            component={ AdminSection}
          />
          <AppRoute
              path="/year"
              component={SubjectDash}
              exact
            />
          <AppRoute
              path="/subject/paper"
              component={paperForm}
              exact
            />
             <AppRoute
              path="/subject/MCQpaper"
              component={MCQpaperForm}
              exact
            />
  
  let testRoute = null 
    
    testRoute = (<Switch>
      <Route path="/mcq" exact  component={MCQ}/>
      <Route path="/subjective" exact component={Subjective}/>
      
    </Switch>)
    
    return (
   <EndTest/>
        )
        <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter