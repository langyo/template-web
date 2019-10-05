import socket from '../../socket';

export const mapStateToProps = (state) => ({
  ...state.pages.message,
  open: state.views.drawer.show === 'message'
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleClipboard: () => {
    // todo: 改进 wsbash，使其支持连续点语法
    socket.commandRegister.receive('api.clipboard.get', obj => dispatch({
      type: 'data.clipboard.set',
      content: obj.content
    }));
    socket.manager.send({
      type: 'execute',
      package: 'api.clipboard.get'
    });
  }
});
