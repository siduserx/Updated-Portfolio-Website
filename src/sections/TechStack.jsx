import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          once: true,
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        
        <TitleHeader 
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* SKILL GRID (only one Canvas per card) */}
        <div className="tech-grid">
          {techStackIcons.map((tech, i) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />

              <div className="tech-card-content">
                
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={tech} />
                </div>

                <p className="skill-title">
                  {tech.name.split(" ").map((word, i) => (
                    <span key={i} className="block leading-tight">
                      {word}
                    </span>
                 ))}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;
