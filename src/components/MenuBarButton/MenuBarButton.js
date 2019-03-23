import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

class MenubarButton extends Component {
  handleClick = () => {
    const { path, history } = this.props;
    history.push(path);
  };

  render() {
    const { children } = this.props;
    return (
      <Button onClick={this.handleClick} color="inherit">
        {children}
      </Button>
    );
  }
}

export default withRouter(MenubarButton);
