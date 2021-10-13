import { WORK_EXPERIENCE, ABOUT, SKILLS } from "../utils/ResumeData";
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CardComponent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AboutMe from "./AboutMe";
import Divider from '@material-ui/core/Divider';
const useStyles= makeStyles(()=>({
title:{
  textDecoration: 'underline',
  textDecorationColor:'#ffb100',
  textDecorationThickness:'7px',
  margin:'24px 30px',
}
}))
const Resume = () => {
  const classes = useStyles()
  let experience = WORK_EXPERIENCE.map((item, i) => (
    <Grid item md={6} key={`item-${i}`}>
      <CardComponent data={item} />
    </Grid>
  ));

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
    
    </div>
  );
};

export default Resume;
