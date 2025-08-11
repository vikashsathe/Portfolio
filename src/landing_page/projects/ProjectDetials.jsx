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
     <p
            className="col-md-10 col-12 text-end mt-0 mt-md-5"
            style={{ cursor: "pointer" }}
            onClick={handleBackClick}
          >
            <i class="ri-arrow-left-circle-fill text-muted" style={{fontSize:"50px"}}></i>
          </p>
       <div className="d-flex flex-column flex-md-row justify-content-center align-items-start gap-4">
        <div className="col-md-5 col-12">  <img className="col-md-12 col-12" src={project.img} alt={project.title} style={{cursor:"crosshair"}} /></div>
        <div className="col-md-5 col-12"> <h3 className="col-md-12 mt-3 mb-3 mt-md-0 mb-md-3">{project.title}</h3>
        <p className="" style={{textAlign:"justify",color:"#55"}}>{project.description}</p>
         <ul style={{listStyleType:"disc", fontSize:"14px"}} className="col-12 d-flex flex-column gap-2 px-3">
  {Array.isArray(project.li) && project.li.map((item, index) => (
    <li key={index} className="">{item}</li>
  ))}
</ul>

        </div>
       
        

        
     
       </div>
      </div>
  );
};

export default ProjectDetials;
