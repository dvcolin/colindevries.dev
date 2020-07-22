import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import SectionContainer from "../layouts/SectionContainer"
import { H2, H3, H4 } from "../components/headings"
import { PSmall } from "../components/text"

const ProjectContainer = styled("div")(
  css({
    mb: 3,
  })
)

const ProjectDescription = styled(PSmall)(
  css({
    mb: 2,
  })
)

const ProjectUrl = styled("a")(
  css({
    fontSize: 0,
    color: "text.accent",
    fontWeight: "medium",
  })
)

const Project = ({ heading, subheading, description, url }) => (
  <ProjectContainer>
    <H3>{heading}</H3>
    <H4>{subheading}</H4>
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectUrl href={url} target="_blank">
      {url}
    </ProjectUrl>
  </ProjectContainer>
)

const ProjectsSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer
      id="projects"
      setVisibleSection={setVisibleSection}
      bottomDivider
    >
      <H2>Projects</H2>
      <Project
        heading="soundsave"
        subheading="React / NodeJS / Express"
        description="Soundsave is a web application designed to connect electronic music artists with electronic music fans. Artists can share their latest tracks, allowing users to download them for free. This provides a way for up and coming artists to mix, remix, and promote their favorite music to a much wider audience."
        url="https://soundsave.netlify.com/"
      />
    </SectionContainer>
  )
}

export default ProjectsSection
