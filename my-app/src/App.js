import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import GameWithReducer from "./components/tictactoe/GameWithReducer";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-5 max-w-[500px] mx-auto m-5">
      <p className="text-red-600">Push data error</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>
    </>
  );
}

export default App;
