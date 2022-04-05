import {useState} from "react";
import {Button} from "react-bootstrap";

function MyButton(proprs){

    let [buttonlang, setButtonLang]=useState(proprs.lang);
    if(buttonlang==='it'){

        return( 
         <><Button variant='primary' onClick={() => setButtonLang('en')}>Ciao!</Button><Button variant='primary' onClick={() => setButtonLang('en')}>Ciao!</Button></>
        )
    }else{
        return <Button variant ='primary' onClick={()=>setButtonLang('it')} >Hello!</Button>
    }

}

  export default MyButton;