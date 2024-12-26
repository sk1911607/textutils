import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText]=useState();
  
  const upper = ()=>{
    let uppertxt= text.toUpperCase()
      setText(uppertxt)
  }
    const lower=()=>{
      let lowertxt=text.toLowerCase()
      setText(lowertxt)
    }
    const clear=()=>{
      let cleartxt=''
       setText(cleartxt)
    }
  const change=(event)=>{
    setText(event.target.value)
  }
  
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <h2 className='my-3 mx-3 '>{props.heading}</h2>
     <textarea className='my-2 mx-3 form-control' style={{color: props.mode==='light'?'black':'white', background:props.mode==='light'?'white':'#031632'}}  onChange={change} value={text} rows={8} >
      </textarea>    
      <br></br>
    <button className='btn btn-primary mx-3 my-2 ' onClick={upper}>Change to UpperCase</button>
    <button className='btn btn-primary mx-2 my-2 ' onClick={lower}>Change to LowerCase</button>
    <button className='btn btn-primary mx-2 my-2' onClick={clear}>Clear Text</button>
    
    </div>
    </> 
  )
}
