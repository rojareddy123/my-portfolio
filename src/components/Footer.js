
    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import BottomNavigation from '@material-ui/core/BottomNavigation';
    import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
    import RestoreIcon from '@material-ui/icons/Restore';
    import FavoriteIcon from '@material-ui/icons/Favorite';
    import LocationOnIcon from '@material-ui/icons/LocationOn';
    const useStyles = makeStyles({
      root: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent:'space-around',     
      },
      icons:{
          color:'white'
      }
    });
    
    const Footer =()=>{
      const classes = useStyles();
      const [value, setValue] = React.useState('recents');
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
          <container>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}  className={classes.icons}/>
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} className={classes.icons}/>
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} className={classes.icons}/>
          
        </BottomNavigation>
          </container>

       
      );
    

}

export default Footer