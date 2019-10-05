import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { Window, TitleBar } from 'react-desktop/windows';

import Fab from '../../containers/views/fab';
import Drawer from '../../containers/views/drawer';

import { connect } from 'react-redux';

import components from '../../components';
import containers from '../../containers';

let pages = {};
Object.keys(containers.pages).forEach(key => 
  pages[key] = React.createElement(
  connect(containers.pages[key].mapStateToProps, containers.pages[key].mapDispatchToProps)
  (components.pages[key].default), { key })
);

let dialogs = {};
Object.keys(containers.dialogs).forEach(key => 
  dialogs[key] = React.createElement(
  connect(containers.dialogs[key].mapStateToProps, containers.dialogs[key].mapDispatchToProps)
  (components.dialogs[key].default), { key })
);

const styles = theme => ({
  main: {
    overflow: 'auto',
    margin: 0,
    padding: 0,
    position: 'relative'
  }
});

class Main extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    page: PropTypes.string
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={this.props.theme}>
        {/* Dialogs */}
        {Object.keys(dialogs).map(key => dialogs[key])}
        {/* Views*/}
        <Fab />
        <Drawer />
	{/* Pages */}
        <div className={classes.main}>
        {pages[this.props.page]}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Main);
