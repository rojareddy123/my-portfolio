import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { WORK_EXPERIENCE, ABOUT, SKILLS } from "../utils/ResumeData";
import TimelineDot from '@material-ui/lab/TimelineDot';

const Skills =()=>{
    return(
        <section >

<Typography
        variant={"h5"}>
        Skills
      </Typography> 
        <Grid Container style={{display:'flex'}}>
             

{SKILLS.map((skill, i)=>(
 <Grid item xs={12} sm={6} md={4} key={i}>
     <Paper style={{diaplay:'flex'}}>
      <Typography
        variant={"h6"}>
        {skill.title}
      </Typography>       
      {skill.description.map((des, i) =>(
        <Typography
        variant={"body2"}>
            <TimelineDot variant={"outlined"}/>
        {des}
      </Typography>
      ))}
</Paper>
 </Grid>
 
)
)}
           
        </Grid>
        </section>
    )
}
export default Skills