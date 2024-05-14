import Header from "./components/Header";
import Card from "./components/card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";

function App()
{
  const [users,setUsers] = useState([
    {
        username:"nirmal",
        password:"123"
    }
])

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
     </>
  )
}
export default App;
