import React, { Component } from 'react';

export default class extends Component {
    state = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;
        const { children } = this.props;

        if (errorInfo) {
            // TODO add loader
            <div>
                <h2>Something went wrong.</h2>
                <details>
                    {error && error.toString()}
                    <br />
                    {errorInfo.componentStack}
                </details>
            </div>;
        }
        return children;
    }
}
