import LoginPage from "./LoginPage";
import {MyContextProvider } from "./MyContext";
import {Route,Routes} from "react-router-dom";
import NewPage from "./NewPage";
import Home from "./Home";
import SignUp from "./SignUp";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <div className="App">
      <MyContextProvider>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element ={<LoginPage/>}/>
            <Route path="/Signin" element ={<SignUp/>}/>
            <Route path="/newpage" element={
            <ProtectedRoute>
                <NewPage/>
            </ProtectedRoute>}/>
       </Routes>
       </MyContextProvider>

    </div>
  );
}

export default App;
