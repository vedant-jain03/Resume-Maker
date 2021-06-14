import React, { useState } from 'react'
import "./Homepage.css"
import IconButton from "@material-ui/core/IconButton"
const WorkExp=({number,exp,setexp,postname,company,from,to,expdesc})=>{
    return (
        <>
        <div className="form experience">
            <h2>Experience #{number} </h2>
            <div className="input-box">
                <span className="details">Post Title</span>
                <input type="text" placeholder="Post Name" value={postname} onChange={e=>setexp({...exp,postname:e.target.value})} />
            </div>
            <div className="input-box">
                <span className="details">Company</span>
                <input type="text" placeholder="Company Name" value={company} onChange={e=>setexp({...exp,company:e.target.value})}/>
            </div>
            <div className="input-box">
                <span className="details">From</span>
                <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '1.3rem' }} 
                value={from} onChange={e=>setexp({...exp,from:e.target.value})}/>
                <span className="details" style={{ marginLeft: '1rem', width: '20%' }} >To</span>
                <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '0' }}  value={to} onChange={e=>setexp({...exp,to:e.target.value})} />
            </div>
            <div className="input-box textarea">
                <span className="details">Experience</span>
                <textarea type="text" placeholder="Write your Experience Here"  value={expdesc} onChange={e=>setexp({...exp,expdesc:e.target.value})} />
            </div>
        </div>
        </>
    )
}
function Experience({exp,setexp,postname,company,from,to,expdesc,exp2,setexp2,postname2,company2,from2,to2,expdesc2,exp3,setexp3,postname3,company3,from3,to3,expdesc3}) {
    const [worknum,setworknum]=useState(1);

    return (
        <div className="form workexp">
            <h1 className="heading" >Work Experience</h1>
            <WorkExp number={1} exp={exp} setexp={setexp} postname={postname} company={company} from={from} to={to} expdesc={expdesc} />
            <WorkExp number={2} exp={exp2} setexp={setexp2} postname={postname2} company={company2} from={from2} to={to2} expdesc={expdesc2} />
            <WorkExp number={3} exp={exp3} setexp={setexp3} postname={postname3} company={company3} from={from3} to={to3} expdesc={expdesc3} />
        {/* <button className="addexp" onClick={()=>setworknum(worknum+1)} >+</button>
            <WorkExp /> */}
        </div>
    )
}

export default Experience
