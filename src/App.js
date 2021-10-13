import Header from './components/Header'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BreadcrumbsComponent from './components/BreadcrumbsComponent';
import { createTheme  } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {HEADER_LIST} from './utils/HeaderData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core';
const theme = createTheme ({
  typography: {
    fontFamily: [
      'Calibre',
      'Inter',
      'San Francisco',
      'SF Pro Text',
      'sans-serif'
    ].join(','),
  }
});
const useClass = makeStyles(()=>({
  content: {
    width: "100%",
    borderRadius:'6px',
    background:'white',
    marginTop: '20px'
  },

  App_Wrapper:{
    display:'flex',
    marginTop:'60px',
'@media (max-width: 400px)':{
    display:'block'
      }
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
    <ThemeProvider theme={theme}>
    <div>
      
        <Container  className={classes.App_Wrapper}>
        <Router >
          <Grid item xs={12} md={6} lg={3} style={{paddingBottom:'50px'}}>
        <Header />
    
     </Grid>
    <Switch>
{RouteComponent}
     </Switch> 
    </Router>
          
     </Container>
   
    </div>
    </ThemeProvider>
  );
}

export default App;
