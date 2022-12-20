import UsersList from "./components/UsersList"
import ErrorBoundary from "./components/ErrorBoundary"

const App = () => {
  return (
    <ErrorBoundary>
      <UsersList />
    </ErrorBoundary>
  )
}

export default App