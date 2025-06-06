import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TATA AIG Agent Portal",
    description: "A comprehensive portal for TATA AIG agents to manage policies, claims, and customer interactions efficiently.",
    image: "/projects/Tataaig Agent Portal.png",
    tags: ["Angular", "Bootstrap", "JavaScript", "HTML", "SCSS"],
    // demoUrl: "#",
    // githubUrl: "#"
  },
  {
    id: 2,
    title: "KYC",
    description: "A dynamic multi-step KYC form in React based on backend-driven configuration and step flow logic.",
    image: "/projects/Tataaig Agent Portal.png",
    tags: ["React", "React Hook Form", "Yup", "MUI", "Dynamic Forms"],
    // demoUrl: "#",
    // githubUrl: "#"
  },
  {
    id: 3,
    title: "UCON (User Configuration)",
    description: "A user configuration management tool that allows administrators to manage user roles, permissions, and settings.",
    image: "/projects/Tataaig Agent Portal.png",
    tags: ["React", "Redux", "TypeScript", "SASS", "REST API"],
    // demoUrl: "#",
    // githubUrl: "#"
  },
  {
    id: 4,
    title: "CatalystOne HCM Suite",
    description: "Worked on various modules of CatalystOne’s HR software, improving performance and UI consistency across their cloud-based platform.",
    image: "/projects/Tataaig Agent Portal.png",
    tags: ["Angular", "javascript", "SASS"],
    // demoUrl: "#",
    // githubUrl: "#"
  },
  
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>}
                    {project.githubUrl && <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pushpendersingh97"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;