import { Route, withRouter } from 'react-router-dom';
import { Component } from 'react'

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { component: Component, setToken: setToken, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} setToken={setToken} />)} />;
  }
}

export default withRouter(ScrollToTopRoute);