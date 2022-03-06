//rfc
import React,{ useState } from 'react'



export default function TextForm(props) {
    
    const [text,setText]=useState("");
       

    const handleClickup=()=>{
    //    console.log("clicked"+text)
       let newText=text.toUpperCase();
       setText(newText);
       props.showalert("converted to uppercase","success")
    }

    const handleClicklc=()=>{
        //    console.log("clicked"+text)
           let newText=text.toLowerCase();
           setText(newText);
           props.showalert("converted to lowercase","success")
        }

        const handleClickclear=()=>{
            //    console.log("clicked"+text)
               let newText="";
               setText(newText);
               props.showalert("cleared","success")
            }

         const handleCopy=()=>{
            let newText= document.getElementById("mytext");
            newText.select();
             navigator.clipboard.writeText(newText.value);
             props.showalert("copied","success")
         }   
       

         const handleremovespace=()=>{
             let newText=text.split(/[ ]+/)
             setText(newText.join(" "))
             props.showalert("extra space removed","success")
         }

        //  const handlecc=()=>{
        //      let length=text.split(/[ ]/).length
        //             let newText
        //      for(let i=0;i<length;i++)
        //      {
        //               newText+=text.charAt(0).toUpperCase() + text.slice(1);
        //      }

        //  }
        


    const handleonchange=(event)=>{
        // console.log("change");
        setText(event.target.value);
    }
   

  return (
      <>
      <div className={`container text-${props.mode==='primary'?'dark':'light'}`}>
      <div >
          <h3 className='my-3'>{props.heading}</h3>
  <div className="mb-3">
   
 
    <label htmlFor="mytext" className="form-label">Enter your Text</label>

    {/*to write a javascript in HTML we use "{}" and create object we use "{{}}"*/}

    <textarea className={`form-control bg-${props.mode==='primary'?'light':'dark'} text-${props.mode==='primary'?'dark':'light'}`} id="mytext" placeholder={props.placehodl} value={text} onChange={handleonchange} rows="8"></textarea>
  </div>
 
      <button className={`btn btn-${props.mode==='primary'?'primary':'dark'} mx-1`} onClick={handleClickup}>change to uppercase</button>
      <button className={`btn btn-${props.mode==='primary'?'primary':'dark'} mx-2`} onClick={handleClicklc}>change to lowercase</button>
      <button className={`btn btn-${props.mode==='primary'?'primary':'dark'} mx-1`} onClick={handleCopy}>copy text</button>
      <button className={`btn btn-${props.mode==='primary'?'primary':'dark'} mx-2`} onClick={handleremovespace}>remove extra spaces</button>
      {/* <button className="btn btn-info mx-1" onClick={handlecc}>camel-case</button> */}
      <button className={`btn btn-${props.mode==='primary'?'primary':'dark'} mx-1`} onClick={handleClickclear}>clear text</button>
    
 </div>
 <div>
     <h2>your text summary-</h2>

     <p>{text.split(" ").length} words {text.length} characters</p>
     <p><strong>Reading Time-</strong>{0.008*text.split(" ").length} Minutes</p>
 </div>
 <div>
     <h2>preview-</h2>
     <p>{text.length>0?text:"Enter your text to preview here."}</p>
 </div>
          </div>
     
  </>
  )
}
