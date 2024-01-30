import react,{useContext,useState} from "react";
import styleContext from "../context/styleContext";

const Hello = () => {


    const{theme,darkTheme,lightTheme}=useContext(styleContext)
    const[isDark,setIsDark]=useState(false);

     function switchTheme(){
        if(isDark== false){
            darkTheme();
        }else{
            lightTheme();
        }
        setIsDark(!isDark);
     }






  return (
    <div>
      <div style={ {
            color:theme.color,
            backgroundColor:theme.backgroundColor,
            border:theme.border
        } }>
        <h1>Hello</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quos
          sit, voluptatem, mollitia impedit adipisci rem architecto ipsa
          delectus quas hic suscipit tempora eveniet. Quo provident blanditiis
          excepturi voluptatum quam eius quis ea, cupiditate vel officia, quos
          amet? Maxime doloremque, culpa cum explicabo commodi officia qui eum
          pariatur possimus optio.
        </p>
        <ol>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ol>
      </div>
         <button onClick={darkTheme}>set to dark</button>
         <button onClick={lightTheme}>set to light</button>
    </div>
  );
};

export default Hello;


{/* <button onClick={()=>setTheme({
    color:"white",
    backgroundColor:"black",
    border:"1px solid green"
  })}

  >switch to dark</button> */}
