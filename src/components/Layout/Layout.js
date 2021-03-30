import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showeSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
      this.setState({ showeSideDrawer: false});
    }

    render () {
        return (
            <Aux>
            <Toolbar />
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