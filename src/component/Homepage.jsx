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
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ColorPicker } from "material-ui-color";

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
  const [edu, setedu] = useState({
    //default education 1
    edu_1: {
      school: "",
      course: "",
      from: "",
      to: "",
      ach: "",
    },
  });
  const eduObject = {
    edu_1: {
      school: "",
      course: "",
      from: "",
      to: "",
      ach: "",
    },
  };

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
  const projectObject = {
    name: "",
    link: "",
    tech: "",
    desc: "",
  };
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
  const themeList = [
    ["#34678c", "rgb(242, 100, 100)"],
    ["#2b273f", "#7cff81"],
    ["black", "#cddc39"],
    ["rgb(0 150 151)", "#ff9800"],
    ["rgb(70 88 178)", "#91c1dc"],
    ["rgb(38 70 83)", "#2a9d8f"],
    ["rgb(188 108 37)", "#dda15e"],
    ["rgb(0 48 73)", "#d62828"],
    ["rgb(140 47 57)", "#b23a48"],
  ];
  const [themes, setthemes] = useState(themeList);
  const [picker1Color, setPicker1Color] = useState("#34678c");
  const [picker2Color, setPicker2Color] = useState("rgb(242, 100, 100)");
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeColor, setActiveColor] = useState(0);
  const handleClickPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const idPopover = openPopover ? "simple-popover" : undefined;
  const chooseColor = (theme, index) => {
    setprimary(theme[0]);
    setsecondary(theme[1]);
    setAnchorEl(null);
    setActiveColor(index);
  };
  const saveTheme = () => {
    const theme = [picker1Color, picker2Color];
    setthemes([...themes, theme]);
  };
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
    setskills(
      localStorage.getItem("skills") == null
        ? []
        : JSON.parse(localStorage.getItem("skills"))
    );
    setlist(
      localStorage.getItem("list") == null
        ? []
        : JSON.parse(localStorage.getItem("list"))
    );
    setedu(
      localStorage.getItem("edu") == null
        ? eduObject
        : JSON.parse(localStorage.getItem("edu"))
    );
    setproject(
      localStorage.getItem("project") == null
        ? projectObject
        : JSON.parse(localStorage.getItem("project"))[0]
    );
    setproject2(
      localStorage.getItem("project") == null
        ? projectObject
        : JSON.parse(localStorage.getItem("project"))[1]
    );
    setproject3(
      localStorage.getItem("project") == null
        ? projectObject
        : JSON.parse(localStorage.getItem("project"))[2]
    );
    setproject4(
      localStorage.getItem("project") == null
        ? projectObject
        : JSON.parse(localStorage.getItem("project"))[3]
    );
    setexp(
      localStorage.getItem("exp") == null
        ? exp
        : JSON.parse(localStorage.getItem("exp"))[0]
    );
    setexp2(
      localStorage.getItem("exp") == null
        ? exp2
        : JSON.parse(localStorage.getItem("exp"))[1]
    );
    setexp3(
      localStorage.getItem("exp") == null
        ? exp3
        : JSON.parse(localStorage.getItem("exp"))[2]
    );
    setexp4(
      localStorage.getItem("exp") == null
        ? exp4
        : JSON.parse(localStorage.getItem("exp"))[3]
    );
    setexp5(
      localStorage.getItem("exp") == null
        ? exp5
        : JSON.parse(localStorage.getItem("exp"))[4]
    );
    setexp6(
      localStorage.getItem("exp") == null
        ? exp6
        : JSON.parse(localStorage.getItem("exp"))[5]
    );
    setthemes(
      localStorage.getItem("themes") == null
        ? themeList
        : JSON.parse(localStorage.getItem("themes"))
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
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("edu", JSON.stringify(edu));
    localStorage.setItem(
      "project",
      JSON.stringify([project, project2, project3, project4])
    );
    localStorage.setItem(
      "exp",
      JSON.stringify([exp, exp2, exp3, exp4, exp5, exp6])
    );
    localStorage.setItem("themes", JSON.stringify(themes));
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
    skills,
    list,
    edu,
    project,
    project2,
    project3,
    project4,
    exp,
    exp2,
    exp3,
    exp4,
    exp5,
    exp6,
    themes,
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
          {nav === "Education" ? <Education edu={edu} setedu={setedu} /> : null}
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
                style={{
                  background: `linear-gradient(45deg, ${primary}, ${secondary})`,
                }}
                onClick={() => {}}
              ></div>
              <button
                className="pick-theme-button"
                onClick={handleClickPopover}
                style={{ marginLeft: "20px" }}
              >
                Pick Theme
              </button>
              <Popover
                id={idPopover}
                open={openPopover}
                anchorEl={anchorEl}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                onClose={handleClosePopover}
              >
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <div>
                      <div>
                        <h3 style={{ display: "flex", marginTop: "4px" }}>
                          Palette
                        </h3>
                        <div style={{ display: "flex", marginTop: "4px" }}>
                          {themes.map((theme, index) => (
                            <div
                              key={index}
                              className={
                                index === activeColor
                                  ? "combo colors-active colors"
                                  : "combo colors"
                              }
                              onClick={(e) => chooseColor(theme, index)}
                              style={{
                                background: `linear-gradient(45deg, ${theme[0]}, ${theme[1]})`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 style={{ marginTop: "4px" }}>Create New</h3>
                        <div
                          className="colors"
                          style={{
                            background: `linear-gradient(45deg, ${picker1Color}, ${picker2Color})`,
                          }}
                        ></div>
                        <div>
                          Primary{" "}
                          <ColorPicker
                            defaultValue={picker1Color}
                            value={picker1Color}
                            onChange={(color) =>
                              setPicker1Color(`#${color.hex}`)
                            }
                            deferred
                            disableAlpha
                          />
                          Secondary{" "}
                          <ColorPicker
                            defaultValue={picker2Color}
                            value={picker2Color}
                            onChange={(color) =>
                              setPicker2Color(`#${color.hex}`)
                            }
                            deferred
                            disableAlpha
                          />
                        </div>
                        <button
                          style={{ marginTop: "10px" }}
                          onClick={saveTheme}
                          className="save-theme-button"
                        >
                          Save Theme
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Popover>
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
              edu={edu}
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
