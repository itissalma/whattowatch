import React, {useState} from "react"


const ItemBadge = (props)=>{
    const {removeCallback} = props
    const handleClick = (e) => {
        e.stopPropagation()
        removeCallback()
    }
    return(
        <div className="p-2 bg-primary-100 text-white" onClick={()=>handleClick}>
            {props.children}
        </div>
    )

}

const MultiSelectOption = (props) =>{
    const {removeCallback, selectCallback, content, selected} = props;
    const handleClick = (e) =>{
        e.stopPropagation()
        selected? removeCallback() : selectCallback()
    }
    const styles = {
        always: "",
        unselected: "bg-white text-black",
        selected: "bg-primary-100 text-white"
    }
    return(
            <div className={`${styles.always} ${styles.selected}`} onClick={handleClick} >
                {content}
                {props.children}
            </div>
    )
}

const MultiSelect = (props) =>{

    const {label, items } = props
    const [selectedItems, setSelectedItems] = useState({});
    const [open,setOpen] = useState(false)
    const removeSelectedItem = (id) =>{
        const exists = Object.hasOwn(selectedItems, id)
        if(!exists) return
        let temp = {...selectedItems}
        delete temp[id] 
        setSelectedItems(temp)

    }

    const addSelectedItem = (id, content) =>{
        let newItems = {...selectedItems, 
            [id]: {id: id, content: content}
        }
        setSelectedItems(newItems)
    }

    return(
        <div className="flex flex-col space-y-2">
            <h4>{label}</h4>
            <div>
                <div className=" h-20 bg-black opacity-90" onClick={()=>setOpen(!open)}>
                    {
                  
                        Object.values(selectedItems).forEach(item=>
                                
                                <ItemBadge removeCallback={removeSelectedItem(item.id)}>

                                </ItemBadge>
                            )

                            
                    }
         
                </div>
            
             {   open && ( <ul>
                    {items.forEach(item =>{
                        console.log(item)
                        return (
                        <li>
                            <MultiSelectOption selected = {Object.hasOwn(selectedItems, item.id)} selectCallback={()=>addSelectedItem(item.id)} removeCallback={()=>removeSelectedItem(item.id)} content={item.content}>

                            </MultiSelectOption>
                        </li>
                        )
                    }

                    )}
                </ul>
            )}
            </div>

        </div>
    )

}

export default MultiSelect
