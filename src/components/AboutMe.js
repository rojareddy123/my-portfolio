import {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {  ABOUT } from "../utils/ResumeData";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import WorkOutlineOutlinedIcon  from '@material-ui/icons/WorkOutlineOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
const useStyles= makeStyles(()=>({
title:{
  textDecoration: 'underline',
  textDecorationColor:'#ffb100',
  textDecorationThickness:'7px',
},
aboutme_icons:{
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#11d6f0',
    backgroundColor: '#ffb100',
    borderRadius: '100%',
    height: '40px',
    color: 'white',  
},
details_info:{
    paddingLeft:'30px',
     color:'darkslategrey'
},

AboutMe_Grid:{
    display:'flex',
'@media (max-width: 600px)':{
    display:'block'
      }
}
})) 

const AboutMe=()=>{
    const classes = useStyles()
    return (
        <section>
            <Container>
              <Typography
        className={classes.title}
        variant={"h5"}
      >
        About Me
      </Typography>
     
      <Typography
        variant={"body1"}
      style={{marginTop:'30px', color:'darkslategrey',  whiteSpace: 'pre-line'}}
      >  
        {ABOUT.description}
      </Typography>
<Grid>
<Grid item xs={12}    className={classes.AboutMe_Grid}>
    <div style={{display:'flex', padding:'30px'}}>
    <div className={classes.aboutme_icons}>
    <WorkOutlineOutlinedIcon  />
        </div>
<div className={classes.details_info}>
<Typography
        variant={"body1"} 
      >
        7+ years Job
      </Typography>
      <Typography
        variant={"caption"}
      >
       Experience 
      </Typography>
              
          </div>
    </div>
    <div style={{display:'flex', padding:'30px'}}>
    <div className={classes.aboutme_icons}>
    <LayersOutlinedIcon />
        </div>
<div className={classes.details_info}>
<Typography
        variant={"body1"}
      >
        10+ Projects
      </Typography>
      <Typography
        variant={"caption"}
      >
       Completed 
      </Typography>
              
          </div>
    </div>
    <div style={{display:'flex', padding:'30px'}}>
    <div className={classes.aboutme_icons}>
    <MeetingRoomOutlinedIcon />
        </div>
<div className={classes.details_info}>
<Typography
        variant={"body1"}
      >
        100+ Meetings
      </Typography>
      <Typography
        variant={"caption"}
      >
       Successful 
      </Typography>
              
          </div>
    </div>
    </Grid>
</Grid>
    </Container>
   
       </section>
    )
}
export default AboutMe