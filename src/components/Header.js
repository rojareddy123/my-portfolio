import Typography from "@material-ui/core/Typography";

 import Button from '@material-ui/core/Button';
 import GetAppIcon from '@material-ui/icons/GetApp';

 import {List,ListItem,ListItemText, ListItemIcon} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import TelegramIcon from '@material-ui/icons/Telegram';
import {HEADER_LIST} from '../utils/HeaderData'

const useStyles = makeStyles((theme)=>({

  profile: {
    width: "100%",
    borderRadius:'6px',
    background:'white'
  },
  profile_header:{
    margin:'20px'
  },
  profile_body:{
    margin:'20px',
  },
  button: {
    borderRadius:'50px',
    backgroundColor:'#ffb100',
    margin: `18px  30px`,
    display: 'inline-flex',
    '& .MuiButton-endIcon': {
      backgroundColor: 'white',
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    }
  },
  profile_name:{
    textAlign:'center',
    textTransform: 'uppercase',
    padding:'20px',
    fontWeight: 'bold'
  },
  sidebar_title:{
    color:'black',
  },
  active: {
     background: '#ffb100',
     borderRadius:'30px'
  },
  'span.MuiButton-endIcon':{
    backgroundColor: 'white',
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile_role:{
    textAlign: 'center'
  }
}));


const Header = () => {
  
  const classes = useStyles();

  const text =  HEADER_LIST.map((item,i) =>
  
      <ListItem  component={NavLink} exact to={item.path} activeClassName={classes.active} key={`item-${i}`}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText className={classes.sidebar_title}>{item.title}</ListItemText>
      </ListItem>
   
  )
  return (
      <div className="container_shadow">
      <div className={classes.profile} >
      <div className={classes.profile_header} >
         
          <div >
            <Typography variant="h6" component="h2" className={classes.profile_name}>
            Roja Reddy
            </Typography>
            <Typography  component='h6' className={classes.profile_role}>
            Full Stack Developer
            </Typography>
          </div>
      
        
      </div>
      <div><SocialMedia></SocialMedia></div>
      <div className={classes.profile_body}>
        <List>
       {text} 
       </List>   
      </div>
    
    <div className="Download_Resume">
    <Button
        variant="contained"
        className={classes.button}
        endIcon={<GetAppIcon/>}
      >
        Download cv
      </Button>
     </div>
    <div className="Hire_me"> 
    <Button
        variant="contained"
        className={classes.button}
        endIcon={<TelegramIcon/>}
      >
         Hire Me
      </Button>

    </div>
    
    </div>
    
      </div>
  );
};

export default Header;
