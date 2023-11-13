import LoginPage from "./LoginPage";
import {MyContextProvider } from "./MyContext";
import {Route,Routes} from "react-router-dom";
import NewPage from "./NewPage";

function App() {

  return (
    <div className="App">
      <MyContextProvider>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Home" element ={<NewPage/>}/>
       </Routes>
       </MyContextProvider>

    </div>
  );
}

export default App;
