import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const[eusername,setEusername] = useState() //esuser--> entered user
    const[epassword,setEpassword] = useState() //epassword--> entered password
    const[ruser,setRuser] = useState(true) //ruser--> registered user

    const users = props.users

    function HandleUinput(event) //Username Input
    {
        setEusername(event.target.value)
    }

    function HandlePinput(event) //Password input
    {
        setEpassword(event.target.value)
    }

    function CheckUser()
    {
        var userfound = false

        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword)
                {
                    console.log("log in success")
                    userfound = true
                    navigate("/landing",{state:{user:eusername}})
                }
        })

            if(userfound === false)
                {
                    console.log("login failed")
                    setRuser(false)
                }
    }

    return(
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1> 
            {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-600">Please Sign Up Before Log In</p> }
            
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

                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={CheckUser}>Log In</button>

                <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Login