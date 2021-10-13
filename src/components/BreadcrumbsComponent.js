import * as React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
const BreadcrumbsComponent =(props)=>{
return (
    <div role="presentation" onClick={handleClick} style={{padding: '20px'}}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
     { props.data.title !== 'Home' && <Link
        underline="hover"
        color="primary"
        href={props.data.path}
        aria-current="page"
      >
        {props.data.title}
      </Link>}
    </Breadcrumbs>
  </div>
)
}

export default BreadcrumbsComponent