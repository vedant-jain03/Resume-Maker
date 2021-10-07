import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css";
import Info from "./Info";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
//Homepage
function Homepage() {
  const componentRef = useRef();
  const Print = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    if (isEmpty()) {
      alert("Can't Print Empty Document");
      return;
    }

    Print();
  };

  //nav hook
  const [nav, setnav] = useState("info");

  //info hooks
  const [photourl, setphotourl] = useState("");
  const [name, setname] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [userdesc, setuserdesc] = useState("");
  //extra info hooks
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [github, setgithub] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [portfolio, setportfolio] = useState("");
  //Experiecne Hooks
  //experience 1
  const [exp, setexp] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //experience 2
  const [exp2, setexp2] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //experience 3
  const [exp3, setexp3] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //experience 4
  const [exp4, setexp4] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //experience 5
  const [exp5, setexp5] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //experience 6
  const [exp6, setexp6] = useState({
    postname: "",
    company: "",
    from: "",
    to: "",
    expdesc: "",
  });
  //Eduaction Hooks
  //Eduaction one
  const [edu1, setedu1] = useState({
    school: "",
    course: "",
    from: "",
    to: "",
    ach: "",
  });
  //Education 2
  const [edu2, setedu2] = useState({
    school: "",
    course: "",
    from: "",
    to: "",
    ach: "",
  });
  // Skills Hooks
  const [input, setinput] = useState("");
  const [skills, setskills] = useState([]);
  const listofitems = () => {
    setskills((olditems) => {
      return [...olditems, input];
    });
    setinput("");
  };
  const deleteitems = (id) => {
    setskills((olditems) => {
      return olditems.filter((arrele, index) => {
        return id !== index;
      });
    });
  };
  //Projects Hooks
  //Project 1
  const [project, setproject] = useState({
    name: "",
    link: "",
    tech: "",
    desc: "",
  });
  const [project2, setproject2] = useState({
    name: "",
    link: "",
    tech: "",
    desc: "",
  });
  const [project3, setproject3] = useState({
    name: "",
    link: "",
    tech: "",
    desc: "",
  });
  const [project4, setproject4] = useState({
    name: "",
    link: "",
    tech: "",
    desc: "",
  });
  //Achievements Hooks
  const [ach, setach] = useState("");
  const [list, setlist] = useState([]);
  const additem = () => {
    setlist((olditem) => {
      return [...olditem, ach];
    });
    setach("");
  };
  const deleteitem = (id) => {
    setlist((olditem) => {
      return olditem.filter((item, index) => {
        return id !== index;
      });
    });
  };

  // util function to check if "ComponentTopPrint" is empty or not
  const isEmpty = () => {
    if (
      photourl.length ||
      name.length ||
      subtitle.length ||
      userdesc.length ||
      email.length ||
      contact.length ||
      address.length ||
      github.length ||
      linkedin.length ||
      portfolio.length
    ) {
      return false;
    }

    if (
      input.length ||
      skills.length > 0 ||
      ach.length > 0 ||
      list.length > 0
    ) {
      return false;
    }

    const dummyExp = {
      postname: "",
      company: "",
      from: "",
      to: "",
      expdesc: "",
    };

    let expArray = [exp, exp2, exp3, exp4, exp5, exp6];

    for (let i = 0; i < 6; ++i) {
      if (JSON.stringify(expArray[i]) !== JSON.stringify(dummyExp)) {
        return false;
      }
    }

    const dummyEdu = {
      school: "",
      course: "",
      from: "",
      to: "",
      ach: "",
    };

    let eduArray = [edu1, edu2];

    for (let i = 0; i < 2; ++i) {
      if (JSON.stringify(eduArray[i]) !== JSON.stringify(dummyEdu)) {
        return false;
      }
    }

    const dummyProject = {
      name: "",
      link: "",
      tech: "",
      desc: "",
    };

    let projectArray = [project, project2, project3, project4];

    for (let i = 0; i < 4; ++i) {
      if (JSON.stringify(projectArray[i]) !== JSON.stringify(dummyProject)) {
        return false;
      }
    }

    return true;
  };
  //Theme Hooks
  const [primary, setprimary] = useState("#34678c");
  const [secondary, setsecondary] = useState("rgb(242, 100, 100)");

  // Use Effect Hook

  useEffect(() => {
    const prename =
      localStorage.getItem("name") === null ? "" : localStorage.getItem("name");
    setname(prename);
    setsubtitle(
      localStorage.getItem("subtitle") == null
        ? ""
        : localStorage.getItem("subtitle")
    );
    setphotourl(
      localStorage.getItem("photourl") == null
        ? ""
        : localStorage.getItem("photourl")
    );
    setuserdesc(
      localStorage.getItem("userdesc") == null
        ? ""
        : localStorage.getItem("userdesc")
    );
    setemail(
      localStorage.getItem("email") == null ? "" : localStorage.getItem("email")
    );
    setcontact(
      localStorage.getItem("contact") == null
        ? ""
        : localStorage.getItem("contact")
    );
    setaddress(
      localStorage.getItem("address") == null
        ? ""
        : localStorage.getItem("address")
    );
    setgithub(
      localStorage.getItem("github") == null
        ? ""
        : localStorage.getItem("github")
    );
    setlinkedin(
      localStorage.getItem("linkedin") == null
        ? ""
        : localStorage.getItem("linkedin")
    );
    setportfolio(
      localStorage.getItem("portfolio") == null
        ? ""
        : localStorage.getItem("portfolio")
    );
  }, []);
  useEffect(() => {
    localStorage.setItem("photourl", photourl);
    localStorage.setItem("name", name);
    localStorage.setItem("subtitle", subtitle);
    localStorage.setItem("userdesc", userdesc);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
    localStorage.setItem("address", address);
    localStorage.setItem("github", github);
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("portfolio", portfolio);
  }, [
    name,
    subtitle,
    photourl,
    userdesc,
    email,
    contact,
    address,
    github,
    portfolio,
    linkedin,
    exp,
  ]);
  return (
    <div id="main">
      <header className="header">
        <h2>Hash/Hub</h2>
        <h1>
          📄<span>Resume Maker </span>{" "}
        </h1>
        <div className="right">
          <a href="https://github.com/vedant-jain03/Resume-Maker">Contribute</a>
          <a href="https://github.com/vedant-jain03/Resume-Maker">
            Give us star
          </a>
        </div>
      </header>
      <main className="maincomponent">
        <div className="left">
          <div className="navbar">
            <li
              className={nav === "info" ? "active" : ""}
              onClick={() => setnav("info")}
            >
              Info
            </li>
            <li
              className={nav === "Experience" ? "active" : ""}
              onClick={() => setnav("Experience")}
            >
              Experience
            </li>
            <li
              className={nav === "Education" ? "active" : ""}
              onClick={() => setnav("Education")}
            >
              Education
            </li>
            <li
              className={nav === "Skills" ? "active" : ""}
              onClick={() => setnav("Skills")}
            >
              Skills
            </li>
            <li
              className={nav === "Projects" ? "active" : ""}
              onClick={() => setnav("Projects")}
            >
              Projects
            </li>
            <li
              className={nav === "Achievements" ? "active" : ""}
              onClick={() => setnav("Achievements")}
              style={{ width: "25%" }}
            >
              Achievements
            </li>
          </div>
          {nav === "info" ? (
            <Info
              photourl={photourl}
              setphotourl={setphotourl}
              name={name}
              setname={setname}
              subtitle={subtitle}
              setsubtitle={setsubtitle}
              userdesc={userdesc}
              setuserdesc={setuserdesc}
              email={email}
              setemail={setemail}
              contact={contact}
              setcontact={setcontact}
              address={address}
              setaddress={setaddress}
              github={github}
              setgithub={setgithub}
              linkedin={linkedin}
              setlinkedin={setlinkedin}
              portfolio={portfolio}
              setportfolio={setportfolio}
            />
          ) : null}
          {nav === "Experience" ? (
            <Experience
              exp={exp}
              setexp={setexp}
              postname={exp.postname}
              company={exp.company}
              from={exp.from}
              to={exp.to}
              expdesc={exp.expdesc}
              exp2={exp2}
              setexp2={setexp2}
              postname2={exp2.postname}
              company2={exp2.company}
              from2={exp2.from}
              to2={exp2.to}
              expdesc2={exp2.expdesc}
              exp3={exp3}
              setexp3={setexp3}
              postname3={exp3.postname}
              company3={exp3.company}
              from3={exp3.from}
              to3={exp3.to}
              expdesc3={exp3.expdesc}
              exp4={exp4}
              setexp4={setexp4}
              postname4={exp4.postname}
              company4={exp4.company}
              from4={exp4.from}
              to4={exp4.to}
              expdesc4={exp4.expdesc}
              exp5={exp5}
              setexp5={setexp5}
              postname5={exp5.postname}
              company5={exp5.company}
              from5={exp5.from}
              to5={exp5.to}
              expdesc5={exp5.expdesc}
              exp6={exp6}
              setexp6={setexp6}
              postname6={exp6.postname}
              company6={exp6.company}
              from6={exp6.from}
              to6={exp6.to}
              expdesc6={exp6.expdesc}
            />
          ) : null}
          {nav === "Education" ? (
            <Education
              edu1={edu1}
              setedu1={setedu1}
              school1={edu1.school}
              course1={edu1.course}
              from1={edu1.from}
              to1={edu1.to}
              ach1={edu1.ach}
              edu2={edu2}
              setedu2={setedu2}
              school2={edu2.school}
              course2={edu2.course}
              from2={edu2.from}
              to2={edu2.to}
              ach2={edu2.ach}
            />
          ) : null}
          {nav === "Skills" ? (
            <Skills
              input={input}
              skills={skills}
              listofitems={listofitems}
              deleteitems={deleteitems}
              setinput={setinput}
              setskills={setskills}
            />
          ) : null}

          {nav === "Projects" ? (
            <Projects
              project={project}
              setproject={setproject}
              name={project.name}
              link={project.link}
              tech={project.tech}
              desc={project.desc}
              project2={project2}
              setproject2={setproject2}
              name2={project2.name}
              link2={project2.link}
              tech2={project2.tech}
              desc2={project2.desc}
              project3={project3}
              setproject3={setproject3}
              name3={project3.name}
              link3={project3.link}
              tech3={project3.tech}
              desc3={project3.desc}
              project4={project4}
              setproject4={setproject4}
              name4={project4.name}
              link4={project4.link}
              tech4={project4.tech}
              desc4={project4.desc}
            />
          ) : null}
          {nav === "Achievements" ? (
            <Achievements
              ach={ach}
              setach={setach}
              list={list}
              setlist={setlist}
              additem={additem}
              deleteitem={deleteitem}
            />
          ) : null}
          <div className="scroller"></div>
        </div>
        <div className="right">
          <div className="up">
            <button className="print-button" onClick={handlePrint}>
              Print this out!
            </button>
            <div className="theme">
              <h2>Theme</h2>
              <div
                className={primary === "#34678c" ? "combo active" : "combo"}
                onClick={() => {
                  setprimary("#34678c");
                  setsecondary("rgb(242, 100, 100)");
                }}
              ></div>
              <div
                className={primary === "#2b273f" ? "combo active" : "combo"}
                style={{
                  background: "linear-gradient(45deg, #2b273f, #7cff81)",
                }}
                onClick={() => {
                  setprimary("#2b273f");
                  setsecondary("#7cff81");
                }}
              ></div>
              <div
                className={primary === "black" ? "combo active" : "combo"}
                style={{ background: "linear-gradient(45deg, black, #cddc39)" }}
                onClick={() => {
                  setprimary("black");
                  setsecondary("#cddc39");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(0 150 151)" ? "combo active" : "combo"
                }
                style={{
                  background: "linear-gradient(45deg, rgb(0 150 151), #ff9800)",
                }}
                onClick={() => {
                  setprimary("rgb(0 150 151)");
                  setsecondary("#ff9800");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(70 88 178)" ? "combo active" : "combo"
                }
                style={{
                  background: "linear-gradient(45deg, rgb(70 88 178), #91c1dc)",
                }}
                onClick={() => {
                  setprimary("rgb(70 88 178)");
                  setsecondary("#91c1dc");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(38 70 83)" ? "combo active" : "combo"
                }
                style={{
                  background: "linear-gradient(45deg, rgb(38 70 83), #2a9d8f)",
                }}
                onClick={() => {
                  setprimary("rgb(38 70 83)");
                  setsecondary("#2a9d8f");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(188 108 37)" ? "combo active" : "combo"
                }
                style={{
                  background:
                    "linear-gradient(45deg, rgb(188 108 37), #dda15e)",
                }}
                onClick={() => {
                  setprimary("rgb(188 108 37)");
                  setsecondary("#dda15e");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(0 48 73)" ? "combo active" : "combo"
                }
                style={{
                  background: "linear-gradient(45deg, rgb(0 48 73), #d62828)",
                }}
                onClick={() => {
                  setprimary("rgb(0 48 73)");
                  setsecondary("#d62828");
                }}
              ></div>
              <div
                className={
                  primary === "rgb(140 47 57)" ? "combo active" : "combo"
                }
                style={{
                  background: "linear-gradient(45deg, rgb(140 47 57), #b23a48)",
                }}
                onClick={() => {
                  setprimary("rgb(140 47 57)");
                  setsecondary("#b23a48");
                }}
              ></div>
            </div>
          </div>
          <div className="resume-preview">
            <ComponentToPrint
              photourl={photourl}
              name={name}
              subtitle={subtitle}
              userdesc={userdesc}
              email={email}
              contact={contact}
              address={address}
              github={github}
              linkedin={linkedin}
              portfolio={portfolio}
              exp={exp}
              exp2={exp2}
              exp3={exp3}
              exp4={exp4}
              exp5={exp5}
              exp6={exp6}
              edu1={edu1}
              edu2={edu2}
              skills={skills}
              achlist={list}
              project={project}
              project2={project2}
              project3={project3}
              project4={project4}
              primary={primary}
              secondary={secondary}
              ref={componentRef}
            />
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Copyright © 2021. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
//Vedant Jain Code Officially
