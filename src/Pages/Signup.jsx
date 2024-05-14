import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{  
    const navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers

    const[eusername,setEusername] = useState() //esuser--> entered user
    const[epassword,setEpassword] = useState() //epassword--> entered password

    function HandleUinput(event) //Username Input
    {
        setEusername(event.target.value)
    }

    function HandlePinput(event) //Password input
    {
        setEpassword(event.target.value)
    }

    function addUser()
    {
        setUsers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1> 
                <p>Sign Up here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input 
                    type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Username" 
                    onChange={HandleUinput}/>
                    <input 
                    type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Password" 
                    onChange={HandlePinput}/>
                    <input 
                    type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Confirm password" />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>SIgn Up</button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup 