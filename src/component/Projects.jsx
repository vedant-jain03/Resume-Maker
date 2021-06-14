import React from 'react'


function Project({ number, project, setproject, name, link, tech, desc }) {
    return (
        <div className="form experience">
            <h2>Project #{number} </h2>
            <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Project Name" value={name} onChange={e => setproject({ ...project, name: e.target.value })} />
            </div>
            <div className="input-box">
                <span className="details">Link</span>
                <input type="text" placeholder="Github/working Link" value={link} onChange={e => setproject({ ...project, link: e.target.value })} />
            </div>
            <div className="input-box">
                <span className="details">Tech Used</span>
                <input type="text" placeholder="Technology Used" value={tech} onChange={e => setproject({ ...project, tech: e.target.value })} />
            </div>
            <div className="input-box textarea">
                <span className="details">Description</span>
                <textarea type="text" placeholder="Description" value={desc} onChange={e => setproject({ ...project, desc: e.target.value })} />
            </div>
        </div>
    )
}
function Projects({ project, setproject, name, link,tech, desc ,project2,setproject2,name2,link2,tech2,desc2,project3,setproject3,name3,link3,tech3,desc3}) {
    return (
        <div className="form">
            <Project number={1} project={project} setproject={setproject} name={name} link={link} tech={tech} desc={desc} />
            <Project number={2} project={project2} setproject={setproject2} name={name2} link={link2} tech={tech2} desc={desc2} />
            <Project number={3} project={project3} setproject={setproject3} name={name3} link={link3} tech={tech3} desc={desc3}/>
        </div>
    )
}

export default Projects
