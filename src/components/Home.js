import BG from "../images/bg.jpg";
import { useState } from "react";
const Home = () => {
    
    const [Todo, setTodo]=useState([]);
    const [name,setName]=useState('');
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    setTodo(Todo=>[...Todo,name]);
    setName("");
    }
   
    console.log(Todo);
    return ( 
        <div className="bg-white w-full ">
            {/* image container */}
            <div className="absolute w-full">
              <img src={BG}  className="w-full h-72 " alt="" />
             
            </div>
            {/* image container */}

            {/* home content */}
            <div className="absolute mt-40 flex flex-col w-full mx-50">
                {/* title */}
                <div className="text-white w-3/4  mx-auto text-3xl tracking-widest mb-8">
                    TODO
                </div>

                {/* Add todo container */}
                {/* < className=" rounded-small p-2 flex flex-row  w-3/4 mx-auto justify-between h-12   shadow-sm"> */}
                    <div className=" bg-white rounded-small p-2 flex flex-row  w-3/4 mx-auto justify-between h-12   shadow-sm">
                        <form onSubmit={handleSubmit} className="">
                            <div className="flex w-3/4 justify-between space-x-96">
                            <div><input type="text" onChange={handleChange} placeholder="Add a new task here..." value={name} className=" outline-0"/></div>
                          <button onClick={handleSubmit}  className=" h-8  w-64 mx-4 rounded-sm text-white text-sm bg-green-300 text-center" type="submit">Add</button>
                       </div>
                     </form>
                </div>

                {/* todo list container */}
                <div className="w-3/4 mx-auto  flex flex-col-reverse shadow-lg mt-4 rounded-sm h-64 ">
                    <div></div>
                    <div className="flex flex-row  justify-between p-2 ">
                        <div className="text-gray-400 text-sm">0 tasks left</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                    </div>
                </div>
            
            </div>
            {/* home content */}
        </div>
     );
}
 
export default Home;