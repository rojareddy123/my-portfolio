import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
 import MailOutlineIcon from '@material-ui/icons/MailOutline';
 import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
 import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
 import Resume from '../components/Resume';
 import Home from '../components/Home';
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact';
export const HEADER_LIST = [
    {
    icon: <HomeOutlinedIcon />,
    title:'About',
    path:'/',
    componentName:<Home/>
  },
  
  {
    icon: <InsertDriveFileOutlinedIcon/>,
    title:'Experience',
    path:'/experience',
    componentName:<Resume/>
  },
  {
    icon: <MailOutlineIcon/>,
    title:'Contact',
    path:'/contact',
     componentName:<Contact/>
  },
  ]