
    import React, {Fragment, useState} from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import BottomNavigation from '@material-ui/core/BottomNavigation';
    import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
    import { SOCIALMEDIADATA } from "../utils/ResumeData";
    const useStyles = makeStyles({
      root: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-around',
        display:'flex'
      },
      icons:{
          color:'black',
          minWidth: 'auto',
      }
    });
    
    const SocialMedia =()=>{
      const classes = useStyles();
      const [value, setValue] = useState('');
    
      const handleChange = (event, newValue) => {
        // debugger
        setValue(newValue);

        if(newValue === 'Instagram') {
          return 'https://www.linkedin.com/in/roja-reddy-2a4012142/#'
        }
      };
    
      return (  
        <div className={classes.root}>
         { SOCIALMEDIADATA.map((obj,i) => (
           Object.values(obj).map((val, i)=> (
             <div key={i}>
<a href={val.link} target="_blank" className={classes.icons} >{val.icon}</a>
          </div>
           )
         ))         
          )}
        </div>
      );
    

}

export default SocialMedia