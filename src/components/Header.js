import Typography from "@material-ui/core/Typography";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
 import MailOutlineIcon from '@material-ui/icons/MailOutline';
 import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
 import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
 import Button from '@material-ui/core/Button';
 import SendIcon from '@material-ui/icons/Send';
 import {List,ListItem,ListItemText, ListItemIcon} from '@material-ui/core'
import {
    Link,
  } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const useStyles = makeStyles((theme)=>({
  profile: {
    width: "100%",
  },
  profile_image:{
    padding:'10px'
  },
  profile_body:{
    margin:'20px',
  },
  button: {
    margin: theme.spacing(1),
  },
  link:{
    textDecoration:'none'
  },
  profile_name:{
    textAlign:'center'
  }
}));


const Header = () => {
  const list = [
    {
    icon: <HomeOutlinedIcon />,
    title:'Home',
    path:'/',
    componentName:<Resume/>
  },
  
  {
    icon: <InsertDriveFileOutlinedIcon/>,
    title:'Resume',
    path:'/resume',
    componentName:<Resume/>
  },
  
  {
    icon: <MenuBookOutlinedIcon/>,
    title:'Portfolio',
    path:'/portfolio',
    componentName:<Portfolio/>

  },
  {
    icon: <MailOutlineIcon/>,
    title:'Contact',
    path:'/contact',
    componentName:<Contact/>

  },
  ]
  const classes = useStyles();

  const text =  list.map((item,i) =>
    <div key={i}>

  <List key={i}>
    <Link to={item.path} className={classes.link}>
      <ListItem>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText >{item.title}</ListItemText>
      </ListItem>
      </Link>
    </List>
     </div>
  )
  return (
      <div >
      <div className={classes.profile} >
      <div className={classes.profile_header} >
        <figure className={classes.profile_image}>
          <Avatar
            alt="my profile"
            src="https://wallpapercave.com/wp/wp9428384.jpg"
          
          ></Avatar>
          <div className={classes.profile_name}>
            <Typography variant="h6" component="h2">
            Roja Reddy
            </Typography>
            <Typography variant="h6" component="h6">
           Full Stack Developer
            </Typography>
          </div>
        </figure>
        <div></div>
      </div>
      <div className={classes.profile_body}>
       {text}    
      </div>
    
    <div className="Download_Resume" style={{display:'inline-flex'}}>
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Download Resume
      </Button>
    {/* </div>
    <div className="Hire_me"> */}
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
         Hire Me
      </Button>

    </div>
    </div>

      </div>
  );
};

export default Header;
