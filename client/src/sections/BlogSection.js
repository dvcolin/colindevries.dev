import React from "react"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"

const BlogSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer id="blog" setVisibleSection={setVisibleSection} noDivider>
      <H2>Blog coming soon...</H2>
    </SectionContainer>
  )
}

export default BlogSection
