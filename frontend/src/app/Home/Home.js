import React from 'react'
import { Link } from 'react-router-dom'
const Home = () =>{
   return( <div className="bg-homebg bg-contain w-screen h-screen flex items-center justify-center">
        <div className="w-2/5 h-1/3 bg-black opacity-80 rounded-2xl flex-col justify-center space-y-6 flex items-center p-4 ">
          
                <h1 className="text-white">
                    Can't decide what movie to watch?
                </h1>
          
                <h4>
                No worries! Answer a few simple questions and we will find the perfect one for you
                </h4>
                <Link to="/quiz">
                    <button className=' w-40 h-12 p-3'>
                        Start Now
                    </button>
                </Link>
        </div>
        
    </div> )
}

export default Home