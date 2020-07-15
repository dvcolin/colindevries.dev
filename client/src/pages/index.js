import React, { useState } from "react"
import Layout from "../layouts"
import AboutSection from "../sections/AboutSection"
import ExperienceSection from "../sections/ExperienceSection"

const IndexPage = () => {
  const [visibleSection, setVisibleSection] = useState("about")

  return (
    <Layout visibleSection={visibleSection}>
      <AboutSection setVisibleSection={setVisibleSection} />
      <ExperienceSection setVisibleSection={setVisibleSection} />
    </Layout>
  )
}

export default IndexPage
