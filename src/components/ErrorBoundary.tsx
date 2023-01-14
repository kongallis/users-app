import { Component, ErrorInfo, ReactNode } from "react"

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary component caught an error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
        </h2>
      )
    }

    return this.props.children
  }
}


export default ErrorBoundary