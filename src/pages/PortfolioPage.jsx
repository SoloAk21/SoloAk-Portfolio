import React, { Suspense, lazy } from "react";
import LoadingPage from "./LoadingPage";

// Lazy-loaded components
const AboutSection = lazy(() => import("../components/AboutSection"));
const Header = lazy(() => import("../components/Header"));
const RemarksSection = lazy(() => import("../components/RemarksSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const EducationSection = lazy(() => import("../components/EducationSection"));
const ExperienceSection = lazy(() => import("../components/ExperienceSection"));
const FloatingNav = lazy(() => import("../components/FloatingNav"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const Footer = lazy(() => import("../components/Footer"));

const PortfolioPage = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <div className="no-scrollbar relative my-0 py-0 mx-auto w-[96%] pt-4 md:w-3/4 lg:w-3/4">
        <div className="border-dashed border-black pb-5">
          <Suspense fallback={<LoadingPage />}>
            <FloatingNav navItems={navItems} />
            <Header />
            <AboutSection />
            <ProjectsSection />
            <EducationSection />
            <ExperienceSection />
            <ContactSection />
            <RemarksSection />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<LoadingPage />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default PortfolioPage;
