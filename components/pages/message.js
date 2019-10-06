import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
});

class Main extends React.Component {
  static propTypes = {
    // Dispatcher
    onToggleClipboard: PropTypes.func,
    // State
    open: PropTypes.bool
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          <Paper>
            <Typography variant='h6'>{'测试'}</Typography>
          </Paper>
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Main);
