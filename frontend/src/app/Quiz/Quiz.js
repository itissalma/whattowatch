import React from 'react'
import MultiSelect from '../components/button/MultiSelect'

const Quiz = () =>{
    const selectItems=[
        {
            id:1,
            content : "Item 1",
        },
        {
            id:2,
            content : "Item 2",
        },
        {
            id:3,
            content : "Item 3",
        },
        {
            id:4,
            content : "Item 4",
        },
    ]
    return(
        <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
           
            <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-6 w-4/5">
                    <MultiSelect label="Question 1" items={selectItems} />  
                    <MultiSelect label="Question 2" items={selectItems} />  
                    <MultiSelect label="Question 3" items={selectItems} />  
                    <MultiSelect label="Question 4" items={selectItems} />  
                    <MultiSelect label="Question 5" items={selectItems} />  
                    <MultiSelect label="Question 6" items={selectItems} />  
                    <MultiSelect label="Question 7" items={selectItems} />  


            </div>
            <div className='my-12'>
                <button className='p-4'>Find Now</button>
            </div>
        </div>
    )
}

export default Quiz