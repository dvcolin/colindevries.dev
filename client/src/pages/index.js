import React, { useState } from "react"
import Layout from "../layouts"
import AboutSection from "../sections/AboutSection"
import ExperienceSection from "../sections/ExperienceSection"
import EducationSection from "../sections/EducationSection"
import SkillsSection from "../sections/SkillsSection"
import ProjectsSection from "../sections/ProjectsSection"
import BlogSection from "../sections/BlogSection"

const IndexPage = () => {
  const [visibleSection, setVisibleSection] = useState("about")

  return (
    <Layout visibleSection={visibleSection}>
      <AboutSection setVisibleSection={setVisibleSection} />
      <ExperienceSection setVisibleSection={setVisibleSection} />
      <EducationSection setVisibleSection={setVisibleSection} />
      <SkillsSection setVisibleSection={setVisibleSection} />
      <ProjectsSection setVisibleSection={setVisibleSection} />
      <BlogSection setVisibleSection={setVisibleSection} />
    </Layout>
  )
}

export default IndexPage
