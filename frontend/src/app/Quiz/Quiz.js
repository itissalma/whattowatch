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
        <div className="w-screen h-screen bg-primary-200">
            <MultiSelect label="Question 1" items={selectItems} />  
        </div>
    )
}

export default Quiz