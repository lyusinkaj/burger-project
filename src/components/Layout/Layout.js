import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showeSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
      this.setState({ showeSideDrawer: false});
    }
    
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showeSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerCloseHandler} />
             <main className={classes.Content}>
                 {this.props.children}
             </main>
         </Aux>
        )
    }
}
   

   
export default Layout;