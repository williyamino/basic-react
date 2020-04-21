import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary caught error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <div>
          there was an error from this listing.<Link to="/">Click here</Link> or
          wait 5 seconds
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
