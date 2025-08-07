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
      <div className="row d-flex justify-content-center align-items-center" style={{paddingTop:"100px"}}>
        <div className="d-flex col-10 justify-content-between align-items-center">
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
            <div className="col-10 d-flex justify-content-between">
                <div className="col-3 d-flex gap-3 flex-column" style={{maxHeight:"450px",overflow:"scroll",minHeight:"450px" ,paddingRight:"20px"}}>
                    <img src={project.img} className="img-fluid border" style={{cursor:"pointer"}} alt="" />
                    <img src={project.img} className="img-fluid border" style={{cursor:"pointer"}} alt="" />
                    <img src={project.img} className="img-fluid border" style={{cursor:"pointer"}} alt="" />
                    <img src={project.img} className="img-fluid border" style={{cursor:"pointer"}} alt="" />
                    <img src={project.img} className="img-fluid border" style={{cursor:"pointer"}} alt="" />
                </div>
        <img className="col-9 border" src={project.img} alt={project.title} style={{maxWidth:"800px", maxHeight:"450px",cursor:"crosshair",minHeight:"450px"}} />
        </div>
        </div>
        <p className="col-10 mt-5 mb-5">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetials;
