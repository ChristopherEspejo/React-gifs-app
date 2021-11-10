import React, {  useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    
    const[categories,setCategories] = useState([]);
    /* const handleAdd=()=>{
        setCategories(cats=>[...cats,'Mafalda']);
    } */
    return (
        <>
            
            <div className="header">
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
            </div>
            <hr/>
            <ol>
                { 
                    categories.map(category=>
                        <GifGrid 
                        key={category}
                        category={category}/>
                    )
                }
            </ol>
        </>
    )
}




