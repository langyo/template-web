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

class Message extends React.Component {
  static propTypes = {
    // Dispatcher
    onGenerate: PropTypes.func,
    // State
    open: PropTypes.bool,
    text: PropTypes.string
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <div>
          <Paper>
            <Button variant='outlined' onClick={this.props.onGenerate}>生成随机字符</Button>
            <Typography variant='h6'>
              {this.props.text}
            </Typography>
          </Paper>
        </div>
      </Fade>
    );
  }
}

export default withStyles(styles)(Message);
