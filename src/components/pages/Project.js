import React from "react";
import "../../styles/Project.css";

const cardStyles = {
  cardBody: {
    width: "500px",
    height: "300px",
    margin: " 10px auto",
    cursor: "pointer",
    backgroundSize: "cover",
    // borderRadius:"50%",
    // position: "relative",
    // zIndex: 1
  },
  cardImage: {
    // backgroundSize: "cover",
    // marginBottom: "3px",
    // borderRadius:"50%",
    // width: "18rem",
    // height: "18rem",
    // position: "relative",
    // zIndex: 2
  },
};

function Project(props) {
  return props.project.map((project, index) =>
    project.title ? (
      <div
        style={cardStyles.cardBody}
        className="card col-sm-4 mb-3 "
        key={index}
      >
        <img  src={project.imagePath} className="card-img" alt={project.alt} />

        <div className="card-img-overlay">
          <a
            className="text-decoration-none text-danger"
            href={project.imageUrl}
          >
            <h5 className="card-title ">
              {project.title}{" "}
              <big>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="red"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              </big>
            </h5>
          </a>
          <p className="card-text">{project.language}</p>
        </div>
      </div>
    ) : (
      <div className="card " key={index}>
        <img src={project.imagePath} className="card-img" alt={project.alt} />
        <a className="" href={project.imageUrl}>
          <img src={project.imagePath} className="card-img" alt={project.alt} />
        </a>
        <div className="card-img-overlay">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text text-dark">{project.language}</p>
        </div>
      </div>
    )
  );
}

export default Project;
