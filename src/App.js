import Header from './components/Header'
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BreadcrumbsComponent from './components/BreadcrumbsComponent';

import {HEADER_LIST} from './utils/HeaderData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core';

const useClass = makeStyles(()=>({
  content: {
    width: "100%",
    borderRadius:'6px',
    background:'white'
  }
}));

function App() {
  const classes = useClass();
  const RouteComponent =  HEADER_LIST.map((item,i) =>
  <Route exact  path={item.path}  key={`route-${i}`}>
    <Container spacing={5} >
<Grid  item   className={classes.content} >
<BreadcrumbsComponent data={item}/>
{item.componentName} 
 </Grid>
 </Container>
      
  </Route>
  )
  
  
  return (
    <div>
        <Container style={{display:'flex', marginTop:'60px'}}>
        <Router >
          <Grid item xs={12} md={6} lg={3}>
        <Header />
    
     </Grid>
    <Switch>
{RouteComponent}
     </Switch> 
    </Router>
          
     </Container>
   
    </div>
  );
}

export default App;
