import SignUp from "./components/SignUp";
import AuthProvider from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
