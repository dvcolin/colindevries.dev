import React, { useState } from "react"
import Layout from "../layouts"
import AboutSection from "../sections/AboutSection"
import ExperienceSection from "../sections/ExperienceSection"
import EducationSection from "../sections/EducationSection"
import SkillsSection from "../sections/SkillsSection"
import InterestsSection from "../sections/InterestsSection"
import ProjectsSection from "../sections/ProjectsSection"

const IndexPage = () => {
  const [visibleSection, setVisibleSection] = useState("about")

  return (
    <Layout visibleSection={visibleSection}>
      <AboutSection setVisibleSection={setVisibleSection} />
      <ExperienceSection setVisibleSection={setVisibleSection} />
      <EducationSection setVisibleSection={setVisibleSection} />
      <SkillsSection setVisibleSection={setVisibleSection} />
      <InterestsSection setVisibleSection={setVisibleSection} />
      <ProjectsSection setVisibleSection={setVisibleSection} />
    </Layout>
  )
}

export default IndexPage
