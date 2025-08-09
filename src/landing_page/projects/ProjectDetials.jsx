import { useParams, useNavigate } from "react-router-dom";
import Project_Data from "../../assets/project/data/project_data.js";

const ProjectDetials = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = Project_Data.find((p) => p.id === id);

  if (!project) return <p>Project not found</p>;

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projects-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="container mb-5" >
      <div className="row d-flex px-3 px-md-5 justify-content-center align-items-center" style={{paddingTop:"100px"}}>
        <div className="d-flex col-12 justify-content-between align-items-center">
          <h1 className="mt-5 mb-5">{project.title}</h1>
          <p
            className="mt-5 mb-5"
            style={{ cursor: "pointer" }}
            onClick={handleBackClick}
          >
            <i className="ri-arrow-left-line fs-1"></i>
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 d-flex justify-content-between">
              
        <img className="col-12" src={project.img} alt={project.title} style={{maxHeight:"290px",cursor:"crosshair",minHeight:"590px"}} />
        </div>
        </div>
        <p className="col-12 mt-3 mt-md-5 mb-5" style={{textAlign:"justify"}}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetials;
