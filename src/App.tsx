import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const UsersList = lazy(() => import("./components/UsersList"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000 /* 5 MINUTES */,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🌀</h2>
            </div>
          }
        >
          <UsersList />
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
