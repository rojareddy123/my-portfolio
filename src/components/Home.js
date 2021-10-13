import { Fragment } from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills';
import Divider from '@material-ui/core/Divider';
const Home = ()=>{

    return(
        <Fragment>
 <AboutMe/>
 <Divider light />
{/* <Skills></Skills> */}
        </Fragment>
       
    )
}

export default Home