import React from "react";
import "../../styles/Resume.css"

export default function Resume(props) {
  // const [frontEnd, setFrontEnd] = useState(["HTML", "CSS", "Javascript", "JQuery", "Responsive Design", "React", "Bootstrap"]);
  // const [backEnd, setBackEnd] = useState(["APIs", "Node","Express", "MySQL, Sequelize", "MongoDB, Mongoose", "REST", "GraphQL"]);
  const frontEnd = [
    "HTML",
    "CSS",
    "Javascript",
    "JQuery",
    "Responsive Design",
    "React",
    "Bootstrap",
  ];
  const backEnd = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];

  const frontendSkills = frontEnd.map((skill) => <li>{skill}</li>);
  const backendSkills = backEnd.map((skill) => <li>{skill}</li>);

  return (
   <div className="resume">
    <div className="container ">
      <p className="text-center">
        Download my Resume  {"    "}
        <a href="resume/blank-resume.pdf" target="_blank">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
        </a>
      </p>
      <h3 className="my-4 resume-heading">Front-end Proficiencies</h3>
      <ul className="list-group">
        {/* {props.frontEnd.map((skill, index) => (
          <li className="list-group-item" key={index}>{skill}</li>
        ))} */}
        {frontendSkills}
      </ul>

      <h3 className="my-4 resume-heading">Back-end Proficiencies</h3>
      <ul className="list-group">
        {/* {props.backEnd.map((skill, index) => (
          <li className="list-group-item" key={index}>{skill}</li>
        ))} */}
        {backendSkills}
      </ul>
    </div>
    </div>
  );
}
