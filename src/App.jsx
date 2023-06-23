import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import { Route,Routes } from "react-router";
function App() {

  return (
    <div className="app">
     
     <Routes>
      <Route exact path="/" Component={SignIn}></Route>
      <Route exact path="/dashboard" Component={Dashboard}></Route>
     </Routes>
    </div>
  )
}

export default App
