import React,{useState} from 'react'
import "./Homepage.css"

function Edu({number,edu,setedu,school,course,from,to,ach}){
    return(
        <>
        <div className="form experience">
            <h2>Education #{number} </h2>
            <div className="input-box">
                <span className="details">School</span>
                <input type="text" placeholder="School Name" value={school} onChange={e=>setedu({...edu,school:e.target.value})} />
            </div>
            <div className="input-box">
                <span className="details">Course</span>
                <input type="text" placeholder="Course Name" 
                value={course} onChange={e=>setedu({...edu,course:e.target.value})}/>
            </div>
            <div className="input-box">
                <span className="details">From</span>
                <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '1.3rem' }} value={from} onChange={e=>setedu({...edu,from:e.target.value})}/>
                <span className="details" style={{ marginLeft: '1rem', width: '20%' }} >To</span>
                <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '0' }} value={to} onChange={e=>setedu({...edu,to:e.target.value})}/>
            </div>
            <div className="input-box">
                <span className="details">Achievements</span>
                <input type="text" placeholder="Achievements" value={ach} onChange={e=>setedu({...edu,ach:e.target.value})}/>
            </div>
        </div>
        </>
    )
}
function Education({edu1,setedu1,school1,course1,from1,to1,ach1,edu2,setedu2,school2,course2,from2,to2,ach2}) {
    return (
        <div className="form education">
            <h1 className="heading" >Education</h1>
            <Edu number={1} edu={edu1} setedu={setedu1} school={school1} course={course1} from={from1} to={to1} ach={ach1} />
            <Edu number={2} edu={edu2} setedu={setedu2} school={school2} course={course2} from={from2} to={to2} ach={ach2} />
        </div>
    )
}

export default Education
