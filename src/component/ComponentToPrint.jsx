import React from "react"
import "./resumestyling.css"
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import AttachmentIcon from '@material-ui/icons/Attachment';
export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <div className="resume">
                <div className="info">
                    {this.props.photourl === '' ? null : <img src={this.props.photourl} alt="" width="100" height="" />}
                    <div className="main-info">
                        <h1 style={{color:this.props.primary,textTransform: 'capitalize'}}  >{this.props.name}</h1>
                        <h3>{this.props.subtitle}</h3>
                        <p>{this.props.userdesc}</p>
                    </div>
                </div>
                {(this.props.email || this.props.contact || this.props.address || this.props.github || this.props.linkedin || this.props.portfolio) ? <div className="extrainfo">
                    {this.props.email === '' ? null : <a href={this.props.email} > <EmailIcon style={{color:this.props.primary}} /> {this.props.email}</a>}
                    {this.props.contact === '' ? null : <a href={this.props.contact} > <PhoneIcon  style={{color:this.props.primary}}/> {this.props.contact}</a>}
                    {this.props.address === '' ? null : <a href={this.props.address}> <LocationOnIcon  style={{color:this.props.primary}}/> {this.props.address}</a>}
                    {this.props.github === '' ? null : <a href={this.props.github}><GitHubIcon  style={{color:this.props.primary}}/>{this.props.github}</a>}
                    {this.props.linkedin === '' ? null : <a href={this.props.linkedin}><LinkedInIcon  style={{color:this.props.primary}}/>{this.props.linkedin}</a>}
                    {this.props.portfolio === '' ? null : <a href={this.props.portfolio}><LanguageIcon  style={{color:this.props.primary}}/>{this.props.portfolio}</a>}
                </div>
                    : null}

                <div className="section">
                    <div className="left-section">
                        {  (this.props.exp3.postname==='' && this.props.exp2.postname==='' && this.props.exp.postname==='' && this.props.exp4.postname==='' && this.props.exp5.postname==='' && this.props.exp6.postname==='')?null:<div className="experiences">
                            <h2 className="section-heading" style={{color:this.props.primary}} >Experience</h2>
                            {(this.props.exp.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem', color: this.props.secondary, textTransform: 'capitalize' }}>{this.props.exp.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp.from} - {this.props.exp.to}
                                </p>
                                <h5 style={{ fontWeight: '400' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp.expdesc}</p>
                            </div>}
                            {(this.props.exp2.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem',color: this.props.secondary}}>{this.props.exp2.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp2.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp2.from} - {this.props.exp2.to}
                                </p>
                                <h5 style={{ fontWeight: '400' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp2.expdesc}</p>
                            </div>}
                            {(this.props.exp3.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem', color: this.props.secondary }}>{this.props.exp3.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp3.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp3.from} - {this.props.exp3.to}
                                </p>
                                <h5 style={{ fontWeight: '400' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp3.expdesc}</p>
                            </div>}
                            {(this.props.exp4.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem', color: this.props.secondary }}>{this.props.exp4.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp4.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp4.from} - {this.props.exp4.to}
                                </p>
                                <h5 style={{ fontWeight: '400' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp4.expdesc}</p>
                            </div>}
                            {(this.props.exp5.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem', color: this.props.secondary }}>{this.props.exp5.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp5.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp5.from} - {this.props.exp5.to}
                                </p>
                                <h5 style={{ fontWeight: '400' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp5.expdesc}</p>
                            </div>}
                            {(this.props.exp6.postname === '') ? null : <div className="div">
                                <h2 style={{ fontSize: '1rem', color: this.props.secondary }}>{this.props.exp6.postname}</h2>
                                <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.exp6.company}</h2>
                                <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                    {this.props.exp6.from} - {this.props.exp6.to}
                                </p>
                                <h5 style={{ fontWeight: '400', marginTop:'2px' }}>Experience:</h5>
                                <p style={{}} >- {this.props.exp6.expdesc}</p>
                            </div>}
                        </div>}

                        {Object.keys(this.props.edu).reduce((flag,education)=> {
                            if(this.props.edu[education].school !== undefined && this.props.edu[education].school !== '' && !flag){
                                return( 
                                    <div className="education">
                                        <h2 className="section-heading" style={{color: this.props.primary}} >Education</h2>
                                     </div>
                                )
                            }
                            return flag
                        },false)
                        }
                        <div>
                        {Object.keys(this.props.edu).map((education, index) => {
                            if(this.props.edu[education].school !== undefined && this.props.edu[education].school !==''){
                                return (
                                    <div className='div'>
                                        <h2 style={{ fontSize: '1rem', color: this.props.secondary }}>{this.props.edu[education].school}</h2>
                                        <h2 style={{ fontSize: '1rem', fontWeight: '400' }}>{this.props.edu[education].course}</h2>
                                        <p style={{ fontSize: '13px', color: 'gray', fontWeight: '600', marginLeft: '1rem', fontStyle: 'italic' }} className="fromto">
                                            {this.props.edu[education].from} - {this.props.edu[education].to}
                                        </p>
                                        <h5 style={{ fontWeight: '400' }}>Achievements:</h5>
                                        <p style={{}} >- {this.props.edu[education].ach}</p>
                                    </div>
                                )
                            }
                        })} 
                        </div>   
                    </div>
                    <div className="right-section">
                        {this.props.skills.length === 0 ? null : <div className="skills">
                            <h2 className="section-heading" style={{color: this.props.primary}}>Skills</h2>
                            <div>
                                {
                                    this.props.skills.map((item) => {
                                        if(item.length>0){
                                        return (
                                            <p className="skill" style={{backgroundColor:this.props.secondary}} >{item}</p>
                                        )
                                        }
                                    })
                                }
                            </div>
                        </div>}
                        {(this.props.project3.name === '' && this.props.project2.name === '' && this.props.project.name === '') ? null : <div className="projects">
                            <h2 className="section-heading" style={{color: this.props.primary}}>Projects</h2>
                            {(this.props.project.name === '') ? null : <div className="div" style={{ marginBottom: '1rem' }} >
                                <div style={{ display: 'flex', flexWrap: 'wrap', color: this.props.secondary}}>
                                    <h2 style={{ fontSize: '1rem', textTransform: 'capitalize' }}>{this.props.project.name}</h2>
                                    {
                                        this.props.project.link === '' ? null :
                                            <a href={this.props.project.link} style={{ fontSize: '1rem', fontWeight: '400' }} className="attachments">
                                                <AttachmentIcon style={{color: this.props.secondary}} />
                                            </a>

                                    }
                                </div>
                                <h5 style={{ fontWeight: '400', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>Technology Used:  <h2 className="technology-used" style={{ fontSize: '1rem', fontWeight: '400', color: this.props.secondary }}>{this.props.project.tech}</h2></h5>

                                <p style={{}} >- {this.props.project.desc}</p>
                            </div>}
                            {(this.props.project2.name === '') ? null : <div className="div" style={{ marginBottom: '1rem' }} >
                                <div style={{ display: 'flex', flexWrap: 'wrap', color: this.props.secondary }}>
                                    <h2 style={{ fontSize: '1rem' }}>{this.props.project2.name}</h2>
                                    {
                                        this.props.project2.link === '' ? null :
                                            <a href={this.props.project2.link} style={{ fontSize: '1rem', fontWeight: '400' }} className="attachments">
                                                <AttachmentIcon style={{ color: this.props.secondary }} />
                                            </a>

                                    }
                                </div>
                                <h5 style={{ fontWeight: '400', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>Technology Used:  <h2 className="technology-used" style={{ fontSize: '1rem', fontWeight: '400', color: this.props.secondary }}> {this.props.project2.tech}</h2></h5>

                                <p style={{}} >- {this.props.project2.desc}</p>
                            </div>}
                            {(this.props.project3.name === '') ? null : <div className="div" style={{ marginBottom: '1rem' }} >
                                <div style={{ display: 'flex', flexWrap: 'wrap',color: this.props.secondary }}>
                                    <h2 style={{ fontSize: '1rem' }}>{this.props.project3.name}</h2>
                                    {
                                        this.props.project3.link === '' ? null :
                                            <a href={this.props.project2.link} style={{ fontSize: '1rem', fontWeight: '400' }} className="attachments">
                                                <AttachmentIcon style={{color: this.props.secondary}} />
                                            </a>

                                    }
                                </div>
                                <h5 style={{ fontWeight: '400', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>Technology Used:  <h2 className="technology-used" style={{ fontSize: '1rem', fontWeight: '400', color: this.props.secondary}}>{this.props.project3.tech}</h2></h5>

                                <p style={{}} >- {this.props.project3.desc}</p>
                            </div>}
                            {(this.props.project4.name === '') ? null : <div className="div" style={{ marginBottom: '1rem' }} >
                                <div style={{ display: 'flex', flexWrap: 'wrap',color: this.props.secondary }}>
                                    <h2 style={{ fontSize: '1rem' }}>{this.props.project4.name}</h2>
                                    {
                                        this.props.project4.link === '' ? null :
                                            <a href={this.props.project4.link} style={{ fontSize: '1rem', fontWeight: '400' }} className="attachments">
                                                <AttachmentIcon style={{color: this.props.secondary}} />
                                            </a>

                                    }
                                </div>
                                <h5 style={{ fontWeight: '400', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>Technology Used:  <h2 className="technology-used" style={{ fontSize: '1rem', fontWeight: '400', color: this.props.secondary}}>{this.props.project4.tech}</h2></h5>

                                <p style={{}} >- {this.props.project4.desc}</p>
                            </div>}
                        </div>}
                        {this.props.achlist.length === 0 ? null : <div className="achiec">
                            <h2 className="section-heading" style={{color: this.props.primary}}>Achievements</h2>
                            <div>
                                {
                                    this.props.achlist.map((item) => {
                                        if(item.length>0){
                                        return (<>
                                            <p style={{ fontWeight: '600' }} >- {item}</p>
                                        </>
                                        )
                                        }
                                    })
                                }
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}