import React from "react"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"
import PortfolioItem from "../components/PortfolioItem"

const EducationSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer id="education" setVisibleSection={setVisibleSection}>
      <H2>Education</H2>
      <PortfolioItem
        heading="Lambda School"
        subheading="Software Development Bootcamp"
        description="Full Stack Software Development Track"
        date="May 2019 - March 2020"
      />
      <PortfolioItem
        heading="Pioneer High School"
        subheading="General Education"
        description="High School Diploma"
        date="August 2012 - June 2016"
      />
    </SectionContainer>
  )
}

export default EducationSection
