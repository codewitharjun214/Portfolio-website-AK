import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="bg-white dark:bg-navy text-gray-800 dark:text-light-slate min-h-screen flex flex-col justify-center items-center text-center px-6">
            <div className="max-w-md">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-lightest-slate mb-4">
                    Oops! Something went wrong.
                </h1>
                <p className="text-lg text-gray-700 dark:text-slate mb-8">
                    An unexpected error occurred. We've been notified and are looking into it. Please try reloading the page.
                </p>
                <button
                    onClick={this.handleReload}
                    className="border border-accent text-accent px-8 py-3 rounded-md hover:bg-accent/10 transition-colors duration-300 font-mono"
                >
                    Reload Page
                </button>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;