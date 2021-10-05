import {useState} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/core/styles';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import TimeLineComponent from './TimelineComponent'
import Timeline from '@material-ui/lab/Timeline';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
const useStyles = makeStyles(() => ({
  card: {
    
    // height: 500,
    margin: "20px",
    transition: "0.3s",
    // margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  cardContent: {
    lineHeight: "28px",
    // height:'300px'
  },
  cardTitle: {
    paddingLeft:'16px',
    fontWeight:'bold'

  },
  card_icon:{
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
  }
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));  

const CardComponent = (props) => {
  const timeLineExpandComponent = props.data.responsibilites && props.data.responsibilites.map((item, i)=>

<TimeLineComponent item={item} key={`timeline-${i}`}/>
)
  const timeLineComponent = props.data.description && props.data.description.map((item, i)=>

<TimeLineComponent item={item} key={`timelines-${i}`}/>

)
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} ml={3}>

      <CardHeader
        title={props.data.title}
        subheader= {props.data.duration}
      />
      <Typography className={classes.cardTitle}  variant={"body1"}>
            {props.data.role}
          </Typography>
        <CardContent className={classes.cardContent}>
        <Timeline >
            {timeLineComponent}
         </Timeline>
        </CardContent>
      {(props.data.responsibilites) && <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          label='Read More'
          aria-label="Read More"
        >
           Read More 
         <ChevronRightOutlinedIcon />
        </ExpandMore>
      
      </CardActions>}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
        <Timeline >
   {timeLineExpandComponent} 
   </Timeline>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
};

export default CardComponent;
