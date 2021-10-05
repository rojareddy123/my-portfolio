import { WORK_EXPERIENCE, ABOUT, SKILLS } from "../utils/ResumeData";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AboutMe from "./AboutMe";
import Divider from '@material-ui/core/Divider';
import Skills from './Skills';
const useStyles= makeStyles(()=>({
title:{
  textDecoration: 'underline',
  textDecorationColor:'#ffb100',
  textDecorationThickness:'7px',
  marginLeft:'20px',
  marginTop:'20px'
}
}))
const Resume = () => {
  const classes = useStyles()
  let experience = WORK_EXPERIENCE.map((item, i) => (
    <Grid item md={6} key={`item-${i}`}>
      <CardComponent data={item} />
    </Grid>
  ));

  // let skills = SKILLS.map((item, i) =>
  // <Grid item md={4} key={`skillitem-${i}`}>
  //     <CardComponent data={item} m={2}/>
  //   </Grid>
  // )
  return (
    <div>
      <AboutMe/>
      <Divider light />
      <section >
      <Typography
        className={classes.title}
        variant={"h5"}
      >
        Experience
      </Typography>
      <Grid container spacing={0}>
        {experience}
      </Grid>

        </section>
      {/* <section>

      <Typography
        className={classes.title}
        variant={"h5"}
      
      >
        Skills
      </Typography> 
   <Grid container spacing={4}>
       {skills}
      </Grid>
        </section> */}
      {/* <Skills/> */}
    
    </div>
  );
};

export default Resume;
