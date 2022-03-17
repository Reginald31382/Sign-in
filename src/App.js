import "./App.css";
import { authentication } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
}

export default App;
