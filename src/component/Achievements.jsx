import React, { useState, useEffect } from 'react'
import "./Homepage.css"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from '@material-ui/icons/Delete';
const Ach = (props) => {
    return (
        <div className="achivelist" >
            <p>{props.item}</p>
            <DeleteIcon onClick={() => {
                props.onSelect(props.id);
            }} />
        </div>
    )
}
function Achievements({ach,setach,list,setlist,additem,deleteitem}) {
    return (
        <div className="form">
            <h1 className="heading" >Achievements</h1>
            <div className="form">
                <div className="input-box">
                    <span className="details">Achievements</span>
                    <input type="text" placeholder="Type Your Achievements Here" style={{ width: '85%' }} value={ach} onChange={e => setach(e.target.value)} />
                    <IconButton onClick={additem} >+</IconButton>
                </div>
                <div className="skills-section" style={{ boxShadow: 'none' ,height:'22rem'}} >
                    {
                        list.map((item, index) => {
                            if(item.length>0){
                            return (
                                <Ach item={item} id={index} key={index} onSelect={deleteitem} />
                            )
                        }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Achievements
