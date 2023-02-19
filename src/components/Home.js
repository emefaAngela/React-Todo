import BG from "../images/bg.jpg";
const Home = () => {
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
                <div className="bg-white rounded-small p-2 flex flex-row  w-3/4 mx-auto justify-between h-12   shadow-sm">
                    <div className="text-gray-400 text-sm"> Add a new task here...</div>
                   <div className="w-32 p-2 rounded-sm text-white text-sm bg-green-500 text-center">Add</div>
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