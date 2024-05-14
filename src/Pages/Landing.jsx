import Header from "../components/Header"
import Card from "../components/card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing()
{
    const data = useLocation()

    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/*HEADER SECTION*/}
        <Header name={data.state.user}/>

         {/*CARD SECTION*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Coimbatore"}/>
          <Card bgcolor={"#FD6663"} title={"May 10"} subtitle={"1:30:0.7"}/>
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
        </div>

         {/*TODOCONTAINER SECTION*/}
       <TodoContainer/>
      </div>
    </div>
    )
}

export default Landing