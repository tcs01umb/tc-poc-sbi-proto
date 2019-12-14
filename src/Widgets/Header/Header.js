import React from 'react';
import {SwipeableDrawer,AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import history from '../../utils/history'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open:false}
  }
  
  handleDrawerOpen = () => {
    this.setState({open:true})
  };

  handleDrawerClose = () => {
    this.setState({open:false})
  };
  render() {
    let path = this.props.location.pathname;

    if (path.endsWith("auto") ||(path.endsWith ("getstarted") )) {
      path = "Auto Insurance";
    }
    else if (path.toUpperCase().includes("SBI"))
    {
      path = "Small Business Insurance"
    }
    else{
      path = "Products & Service / Insurance";
    }
    return (
        <AppBar position="static" style={{backgroundColor:'#041c3d',color:'white'}}>          
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon/>
              </IconButton>
              <Typography variant="h6" align="center" display="inline">
                  {path}
              </Typography>                                        
          </Toolbar>
        </AppBar>
    );
  }
}

export default withRouter(Header);