import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionHeading } from "../SectionHeading";
import Bar from "../Bar";
import ProjectsHeader from "./ProjectsHeader";

const projects = [
  {
    logo: "/projects/empoweredLearningsLogo.svg",
    title: "Empowered Learnings",
    mobile: "/projects/empoweredLearningsMobile.png",
    laptop: "/projects/empoweredLearningsLaptop.png",
    facilities: [
      "Live & Recorded Learning Options",
      "Expert Tutors & Life Coaches",
      "Personalized Learning Experience",
      "Built with Modern Web Technologies",
      "Secure Payments & Easy Access",
      "Fast, Scalable, and Reliable Hosting",
    ],
  },
  {
    logo: "/projects/mamoonVaanLogo.svg",
    title: "Mamoon Vaan",
    mobile: "/projects/mamoonVaanMobile.png",
    laptop: "/projects/mamoonVaanLaptop.png",
    facilities: [
      "Premium Vehicle Listings",
      "Advanced Search & Filtering",
      "Secure Payment Processing",
      "Real-time Chat Support",
      "Mobile-First Design",
      "Fast Loading & SEO Optimized",
    ],
  },
  {
    logo: "/projects/shoperzLogo.svg",
    title: "Shoperz",
    mobile: "/projects/shoperzMobile.png",
    laptop: "/projects/shoperzLaptop.png",
    facilities: [
      "Multi-vendor Marketplace",
      "Secure Payment Gateway",
      "Real-time Inventory Management",
      "Advanced Analytics Dashboard",
      "Mobile App Integration",
      "Cloud-based Infrastructure",
    ],
  },
  {
    logo: "/projects/immersalynxLogo.svg",
    title: "Immersalynx",
    mobile: "/projects/immersalynxMobile.png",
    laptop: "/projects/immersalynxLaptop.png",
    facilities: [
      "Immersive VR/AR Experiences",
      "Cross-platform Compatibility",
      "Real-time 3D Rendering",
      "Interactive User Interface",
      "High-performance Graphics",
      "Scalable Cloud Architecture",
    ],
  },
  {
    logo: "/projects/mRamirezLogo.svg",
    title: "M Ramirez",
    mobile: "/projects/mRamirezMobile.png",
    laptop: "/projects/mRamirezLaptop.png",
    facilities: [
      "Customizable Learning Paths",
      "Expert Tutors & Mentors",
      "Interactive Learning Tools",
      "Real-time Progress Tracking",
      "Flexible Scheduling Options",
      "Secure Payment Processing",
    ],
  }
];



const VISIBLE_COUNT = 5; // Number of buttons visible at once (should be odd)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  // For infinite scroll, create a window of projects centered on selected
  const getCyclicWindow = (center, count) => {
    const len = projects.length;
    const half = Math.floor(count / 2);
    let window = [];
    for (let i = -half; i <= half; i++) {
      let idx = (center + i + len) % len;
      window.push({ ...projects[idx], _realIndex: idx });
    }
    return window;
  };

  const visibleProjects = getCyclicWindow(selectedProject, VISIBLE_COUNT);

  // When a button is clicked, set selectedProject to the real index
  const handleProjectSelect = (realIndex) => {
    if (realIndex !== selectedProject) {
      setSelectedProject(realIndex);
    }
  };

  return (
    <>
      <section id="solutions" className="py-20 z-[1] relative">
        <div className="w-full mx-auto max-w-[1660px] ~/xl:~px-6/40">
          <div>
            <SectionHeading firstTitle="Our" secondTitle="Solutions" />
          </div>
        </div>

        <ProjectsHeader
          projects={visibleProjects}
          selectedProject={Math.floor(VISIBLE_COUNT / 2)}
          handleProjectSelect={(i) => handleProjectSelect(visibleProjects[i]._realIndex)}
        />

        {/* Second Part (unchanged) */}
        <div className="w-full mx-auto max-w-[1660px] ~/xl:~px-6/40">
          <div className="~sm/xl:~mt-4/12 w-full flex flex-col md:flex-row-reverse items-center justify-between shadow-glow-2 ~sm/xl:~py-6/12 border-primary border border-opacity-45 gap-y-12 ~md/xl:~px-6/12 relative">
            {/* Image Section */}
            <div className="w-full md:w-[55%] xl:w-[65%] flex items-center justify-center md:justify-end">
              <div className="~sm/lg:~w-[23.4rem]/[40rem] h-auto relative project-image-container">
                {/* Invisible placeholder for height stability */}
                <div className="relative w-full h-full opacity-0 pointer-events-none">
                  <img
                    src={projects[selectedProject].laptop}
                    alt=""
                    className="w-full h-auto"
                  />
                  <img
                    src={projects[selectedProject].mobile}
                    alt=""
                    className="absolute bottom-0 right-0 h-2/3 w-auto"
                  />
                </div>

                {/* Visible animated content */}
                <div className="absolute inset-0">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`images-${selectedProject}`}
                      className="relative w-full h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={projects[selectedProject].laptop}
                        alt={`${projects[selectedProject].title} laptop view`}
                        className="w-full h-auto"
                      />
                      <motion.img
                        src={projects[selectedProject].mobile}
                        alt={`${projects[selectedProject].title} mobile view`}
                        className="absolute bottom-0 right-0 h-2/3 w-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Text Section (unchanged) */}
            <div className="flex w-full h-full md:w-[45%] xl:w-[35%] flex-col items-center md:items-start justify-between gap-y-3 relative">
              {/* Invisible placeholder for height stability */}
              <div className="w-full opacity-0 pointer-events-none">
                <h3 className="~sm/xl:~text-lg/3xl font-semibold mb-6">
                  {projects[selectedProject].title}
                </h3>
                <ul>
                  {projects[selectedProject].facilities.map((facility, index) => (
                    <li
                      key={`placeholder-${selectedProject}-${index}`}
                      className="text-sm md:text-base xl:text-[17px] font-medium flex items-center justify-start gap-x-5 ~sm/xl:~mt-1.5/3.5"
                    >
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <div className="absolute top-[3px] left-[3px] h-4 w-4 bg-primary"></div>
                        <div className="absolute top-0 left-0 h-4 w-4 bg-black border-[2px] border-white"></div>
                      </div>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visible animated content */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`content-${selectedProject}`}
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h3 className="~sm/xl:~text-lg/3xl font-semibold mb-6">
                      {projects[selectedProject].title}
                    </h3>
                    <ul>
                      {projects[selectedProject].facilities.map((facility, index) => (
                        <motion.li
                          key={`${selectedProject}-${index}`}
                          className="text-sm md:text-base xl:text-[17px] font-medium flex items-center justify-start gap-x-5 ~sm/xl:~mt-1.5/3.5"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2 + index * 0.1,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="relative h-5 w-5 flex-shrink-0">
                            <div className="absolute top-[3px] left-[3px] h-4 w-4 bg-primary"></div>
                            <div className="absolute top-0 left-0 h-4 w-4 bg-black border-[2px] border-white"></div>
                          </div>
                          <span>{facility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Bar />
    </>
  );
};

export default Projects;