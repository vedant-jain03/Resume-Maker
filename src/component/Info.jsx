import React from 'react'
import "./Homepage.css"
function Info({photourl,setphotourl,name,setname,subtitle,setsubtitle,userdesc,setuserdesc,email,setemail,contact,setcontact,address,setaddress,github,setgithub,linkedin,setlinkedin,portfolio,setportfolio}) {
    return (
        <div>
            <div className="form">
                        <h1 className="heading" >Information</h1>
                        <div className="form">
                            <div className="input-box">
                                <span className="details">Photo</span>
                                <input type="text" placeholder="Url here" value={photourl} onChange={e=>setphotourl(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Name</span>
                                <input type="text" placeholder="Your Name" value={name} onChange={e=>setname(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Subtitle</span>
                                <input type="text" placeholder="Your Subtitle" value={subtitle} onChange={e=>setsubtitle
                                    (e.target.value)}/>
                            </div>
                            <div className="input-box textarea">
                                <span className="details">Description</span>
                                <textarea type="text" placeholder="Description" value={userdesc} onChange={e=>setuserdesc(e.target.value)}/>
                            </div>
                        </div>
                        <h1 className="heading" >Extra Information</h1>
                        <div className="form">
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Email Address" value={email} onChange={e=>setemail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Contact</span>
                                <input type="text" placeholder="Number" value={contact} onChange={e=>setcontact(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Address" value={address} onChange={e=>setaddress(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Github</span>
                                <input type="text" placeholder="Url here" value={github} onChange={e=>setgithub(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Linkedin</span>
                                <input type="text" placeholder="Url here" value={linkedin} onChange={e=>setlinkedin(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Portfolio</span>
                                <input type="text" placeholder="Url here" value={portfolio} onChange={e=>setportfolio(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    
        </div>
    )
}

export default Info
