import Header from './components/Header'
import Footer from './components/Footer'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div>
      
        <Container style={{display:'flex'}}>
        <Router >
          <Grid xs={12} md={6} lg={3} style={{backgroundColor:'blue'}}>
        <Header />
    <Footer></Footer>
     </Grid>
    <Switch>

     <Route exact path="/resume">
        <Resume />
      </Route>

   
     <Route exact path="/portfolio" >
         <Portfolio />
       </Route>
 
    
      <Route exact  path="/contact">
        <Contact />
  </Route>

     </Switch> 
    </Router>
          
     </Container>
   
    </div>
  );
}

export default App;
