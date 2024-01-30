import React,{useState} from "react";
import styleContext from "./styleContext";



const StyleProvider = (props)=>{

    let[theme,setTheme]=useState({
       color:"red",
       backgroundColor:"white",
       border: "1px solid black"
    })



    return(
        <div>
            <styleContext.Provider value={{
                theme:theme,
                darkTheme:()=>setTheme({...theme,color:"red",backgroundColor:"white",border:"1px solid black"}),
                lightTheme:()=>setTheme({...theme,color:"white",backgroundColor:"black",border:"1px solid green"}),
                }}>
                {props.children}
            </styleContext.Provider>
        </div>
    )
}


export default StyleProvider;