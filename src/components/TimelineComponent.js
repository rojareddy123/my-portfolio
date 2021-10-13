import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from "@material-ui/core/styles";

const useStyles= makeStyles(()=>({
    customTimeLine:{
        padding:'0px',
        '& li.MuiTimelineItem-missingOppositeContent:before' :{
            display:'none'
        }
    },
    customTimeLineItemContent:{
        padding:'0px 10px'
    },
    customTimeLineItemSeperator:{                                                                                                                                
        '& .MuiTimelineDot-defaultGrey':{
            color: '#ffb100',
            borderColor:'inherit',
            backgroundColor:'inherit',
            padding: '2px'
        }
       
    }
}))
const TimeLineComponent = ({item})=>{
    const classes = useStyles();
return (
    <div className={classes.customTimeLine}>
<TimelineItem className={classes.customTimeLineItem}>
  <TimelineSeparator className={classes.customTimeLineItemSeperator}>
    <TimelineDot />
  </TimelineSeparator>
  <TimelineContent className={classes.customTimeLineItemContent}>{item}</TimelineContent>
</TimelineItem>
</div>
)
}

export default TimeLineComponent