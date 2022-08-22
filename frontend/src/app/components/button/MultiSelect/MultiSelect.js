import React, {useEffect, useRef, useState} from "react"
import {BsChevronDown} from 'react-icons/bs'

const ItemBadge = (props)=>{
    const {removeCallback} = props
    const handleClick = (e) => {
        console.log("badge clicked")
        e.stopPropagation()
        removeCallback()
    }
    return(
        <div onClick={(e)=>handleClick(e)} className="relative cursor-pointer m-2" >
            
            <div className=" bg-primary-100 hover:bg-teal-400 rounded-2xl text-white font-bold w-20 h-7 p-1 text-center flex justify-center items-center align-middle">
                {props.children}
            </div>
        </div>
    )

}

const MultiSelectOption = (props) =>{
    const {removeCallback, selectCallback, content} = props;
    const [selected, setSelected] = useState(props.selected);
    useEffect(()=>{
        setSelected(props.selected)
    },[props.selected])
    const handleClick = (e) =>{
        console.log("hi "+selected)
        e.stopPropagation()
        console.log(selected)
        if(selected){
            removeCallback()
        } else {
            selectCallback()
        }
    }
    const styles = {
        always: "p-2 text-bold hover:bg-teal-300 hover:text-white",
        unselected: "bg-white text-black",
        selected: "bg-primary-100 text-white",
        
    }
    return(
            <div className={`${styles.always} ${selected ? styles.selected : styles.unselected} `} onClick={e=>handleClick(e)} >
                {content}
                {props.children}
            </div>
    )
}

const MultiSelect = (props) =>{

    const {label, items } = props
    const ref = useRef(null);
    // useOutsideAlerter(ref, ()=>setOpen(false));
    const [selectedItems, setSelectedItems] = useState({});
    const [open,setOpen] = useState(false)
    const removeSelectedItem = (id) =>{
        console.log("removing item "+id)
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
        console.log(newItems)
        setSelectedItems({...newItems})
    }

    const handleBlur = () =>{
        console.log(label+" blurred")
        setOpen(false)
    }

    const handleOpenClick = () =>{
        ref.current.focus()
        setOpen(!open)
    }

    return(
        <div className="flex flex-col space-y-2 relative">
            <h4>{label}</h4>
            <div onBlur={handleBlur} ref={ref} tabIndex={6}>
                <div className="h-16 max-h-max flex-row flex items-center bg-primary-whitealpha hover:bg-primary-whitealphalight rounded-md" onClick={()=>handleOpenClick()}>
                    <div className=" flex flex-row p-2 w-4/5 flex-wrap">{
                  
                        Object.values(selectedItems).map(item=>
                                
                                <ItemBadge key={item.id} removeCallback={()=>removeSelectedItem(item.id)}>
                                        {item.content}
                                </ItemBadge>
                            )

                            
                    }
                 </div>
                 <div className="ml-auto p-2">
                     <BsChevronDown className=" text-white stroke-2" />
                 </div>
                </div>
            
             {   open && ( <ul className='my-2 divide-y-2 absolute w-10/12 z-50'>
                    {items.map(item =>{
                        return (
                        <li key={item.id}>
                            <MultiSelectOption selected = {Object.hasOwn(selectedItems, item.id)} selectCallback={()=>addSelectedItem(item.id, item.content)} removeCallback={()=>removeSelectedItem(item.id)} content={item.content}>

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

function useOutsideAlerter(ref, action) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
         action();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, action]);
  }

export default MultiSelect
