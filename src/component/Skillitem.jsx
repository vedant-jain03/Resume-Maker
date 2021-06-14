import React from 'react'
import "./Homepage.css"
import DeleteIcon from '@material-ui/icons/Delete';
function Skillitem(props) {
    return (
        <div>
            <div>
                <p className="skill" >{props.item}
                    <DeleteIcon onClick={()=>{
                        props.onSelect(props.id);
                    }} />
                </p>
            </div>
        </div>
    )
}

export default Skillitem
