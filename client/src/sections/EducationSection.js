import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import SectionContainer from "../layouts/SectionContainer"
import { H2, H3, H4 } from "../components/headings"
import { PSmall } from "../components/text"

const EducationItemContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: ["column", "row"],
    mb: 3,
  })
)

const EducationItemDescription = styled(PSmall)(
  css({
    mb: 2,
  })
)

const EducationItemDate = styled(PSmall)(
  css({
    color: "text.accent",
    ml: [0, "auto"],
  })
)

const EducationItem = ({ heading, subheading, description, date }) => (
  <EducationItemContainer>
    <div>
      <H3>{heading}</H3>
      <H4>{subheading}</H4>
      <EducationItemDescription>{description}</EducationItemDescription>
    </div>
    <EducationItemDate>{date}</EducationItemDate>
  </EducationItemContainer>
)

const EducationSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer
      id="education"
      setVisibleSection={setVisibleSection}
      bottomDivider
    >
      <H2>Education</H2>
      <EducationItem
        heading="Lambda School"
        subheading="Full Stack Web Development"
        description="Full Stack Web Development Track"
        date="May 2019 - March 2020"
      />
      <EducationItem
        heading="Pioneer High School"
        subheading="General Education"
        description="High School Diploma"
        date="August 2012 - June 2016"
      />
    </SectionContainer>
  )
}

export default EducationSection
