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
   <div className="row d-flex px-2 px-md-5 justify-content-center align-items-center" style={{paddingTop:"20px"}}>
       <div className="col-md-8 col-12">
         <p
            className="col-12 text-end mt-0 mt-md-5"
            style={{ cursor: "pointer" }}
            onClick={handleBackClick}
          >
            <i class="ri-arrow-left-circle-fill fs-1"></i>
          </p>
          <img className="col-md-6 col-12" src={project.img} alt={project.title} style={{cursor:"crosshair"}} />
      <h3 className="mt-3 mb-3 mt-md-5 mb-md-5">{project.title}</h3>
        <p className="" style={{textAlign:"justify",color:"#55"}}>{project.description}</p>
       </div>
      </div>
  );
};

export default ProjectDetials;
