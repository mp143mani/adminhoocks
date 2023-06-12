import React,{useEffect,useState,useRef} from 'react'
import { Button } from 'react-bootstrap'

function UseRef() {
    let count = useRef(0)
    let inputRef_1 = useRef()
    let inputRef_2 = useRef()
    let inputRef_3 = useRef()
    let [name,setName] = useState("")
    useEffect(()=>{
        ++count.current
    })

    useEffect(()=>{
        inputRef_1.current.focus()
    },[])

  return <>
    <h1>UseRef</h1>
    <h3>enter the value 1</h3>
    <div>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
        This component rendered {count.current} times!
    </div>
    <br/>
    
    <h4>Enter Otp</h4>
    <div>
        <input type='text' ref={inputRef_1} onChange={()=>inputRef_2.current.focus()}/>


        <input type='text' ref={inputRef_2} onChange={()=>inputRef_3.current.focus()} onKeyUp={(e)=>{
            if(e.key==="Backspace")
            {
                if(inputRef_2.current.value==="")
                {
                    inputRef_1.current.focus()
                }
            }
        }}/>


        <input type='text' ref={inputRef_3} onKeyUp={(e)=>{
            if(e.key==="Backspace")
            {
                if(inputRef_3.current.value==="")
                {
                    inputRef_2.current.focus()
                }
            }
        }}/>
    </div>
    <br></br>
    {/* <div>
        <Button variant='success' onClick={()=>inputRef_1.current.focus()}>Focus Me</Button>
    </div> */}
  </>
}

export default UseRef