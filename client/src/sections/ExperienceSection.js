import React from "react"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"
import { P } from "../components/text"
import PortfolioItem from "../components/PortfolioItem"

const ExperienceSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer
      id="experience"
      setVisibleSection={setVisibleSection}
      bottomDivider
    >
      <H2>Experience</H2>
      <PortfolioItem
        heading="Team Lead"
        subheading="Lambda School"
        description="During my time as a team lead, I worked with Lambda School students currently going through the Labs section of the track. During labs, students have an 8-week time frame to either develop an application from scratch or expand upon an existing project. My role was to hold stand up meetings, track the development process, and help students experiencing difficulties."
        date="March 2020 - June 2020"
      />
    </SectionContainer>
  )
}

export default ExperienceSection
