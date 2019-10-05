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
    open: PropTypes.bool,
    clipboard: PropTypes.string
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          <Paper>
            <Button onClick={this.props.onToggleClipboard} variant='outlined'>{'刷新以获取剪贴板文本'}</Button>
            <Typography variant='h6'>{this.props.clipboard}</Typography>
          </Paper>
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Main);
