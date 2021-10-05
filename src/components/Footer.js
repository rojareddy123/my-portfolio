
    import React, {useState} from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import BottomNavigation from '@material-ui/core/BottomNavigation';
    import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import LinkedInIcon from '@material-ui/icons/LinkedIn';
    import TwitterIcon from '@material-ui/icons/Twitter';
    import InstagramIcon from '@material-ui/icons/Instagram';
    const useStyles = makeStyles({
      root: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-around',  
      },
      icons:{
          color:'black',
          minWidth: 'auto',
      }
    });
    
    const Footer =()=>{
      const classes = useStyles();
      const [value, setValue] = useState('');
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction  label="Facebook" value="Facebook" icon={<FacebookIcon />}  className={classes.icons}/>
          <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<LinkedInIcon />} className={classes.icons}/>
          <BottomNavigationAction label="Twitter" value="Twitter" icon={<TwitterIcon />} className={classes.icons}/>
          <BottomNavigationAction label="Instagram" value="Instagram" icon={<InstagramIcon />} className={classes.icons}/>
        </BottomNavigation>  
      );
    

}

export default Footer