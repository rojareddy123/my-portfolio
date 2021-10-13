import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { WORK_EXPERIENCE, ABOUT, SKILLS } from "../utils/ResumeData";
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core';

const useClass = makeStyles(()=>({
  skill: {
   borderRadius:'8px',
   padding:'0px 20px ',
   minHeight:'186px',
   height:'100%',
   diaplay:'flex',
   boxShadow: '0 0px 48px 0px rgba(4 6 4 / 8%)'
  },
  skill_title:{
    textDecoration: 'underline',
    textDecorationColor:'#ffb100',
    textDecorationThickness:'7px',
    paddingTop:'30px'
  },
  skill_description:{
display:'flex',
alignItems:'center',
color: '#989898',
fontWeight: '400',
lineHeight:'18px'
  },
  skill_timelinedot:{
borderColor:'#ffb100',
padding:'2px',
marginRight:'5px'
  },
  skill_grid:{
    display:'flex',
'@media (max-width: 600px)':{
    display:'block'
      }
}
}))
const Skills =()=>{
  const classes = useClass()
    return(
        <section >
<Container>
<Typography
        variant={"h5"} className={classes.skill_title}>
        Skills
      </Typography> 
        <Grid  className={classes.skill_grid} >
             

{SKILLS.map((skill, i)=>(
 <Grid item xs={12} sm={6} md={4}  style={{padding:'30px'}}>
     <Paper  className={classes.skill} key={`skill- ${i}`}>
      <Typography
        variant={"h6"}
        style={{paddingTop:'20px'}}
        >
        {skill.title}
      </Typography>       
      {skill.description.map((des, i) =>(
        <Typography
        variant={"body2"} className={classes.skill_description}>
            <TimelineDot variant={"outlined"} className={classes.skill_timelinedot}/>
        {des}
      </Typography>
      ))}
</Paper>
 </Grid>
 
)
)}
           
        </Grid>
        </Container>
        </section>
    )
}
export default Skills