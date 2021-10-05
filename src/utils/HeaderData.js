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
    title:'Home',
    path:'/',
    componentName:<Home/>
  },
  
  {
    icon: <InsertDriveFileOutlinedIcon/>,
    title:'Resume',
    path:'/resume',
    componentName:<Resume/>
  },
  
  {
    icon: <MenuBookOutlinedIcon/>,
    title:'Portfolio',
    path:'/portfolio',
     componentName:<Portfolio/>

  },
  {
    icon: <MailOutlineIcon/>,
    title:'Contact',
    path:'/contact',
     componentName:<Contact/>
  },
  ]