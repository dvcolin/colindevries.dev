import React from "react"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"
import { P } from "../components/text"

const ExperienceSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer
      id="experience"
      setVisibleSection={setVisibleSection}
      bottomDivider
    >
      <H2>Experience</H2>
      <P>
        Although I have no formal work experience in web development roles, I am
        anxious to get hired and start working on real-world applications. My
        education at Lambda School has provided me with all the skills I need to
        be a successful developer. I have extensive experience in front-end
        development with React, API development with NodeJS and Express, as well
        as database management with SQL and NoSQL databases.
      </P>
    </SectionContainer>
  )
}

export default ExperienceSection
