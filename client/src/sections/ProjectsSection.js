import React from "react"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"
import PortfolioItem from "../components/PortfolioItem"

const ProjectsSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer id="projects" setVisibleSection={setVisibleSection}>
      <H2>Projects</H2>
      <PortfolioItem
        heading="Mixdown"
        subheading="React &middot; NodeJS &middot; GraphQL &middot; Prisma"
        description="Mixdown is a web application designed to connect electronic music artists and DJs with electronic music fans. Artists can share their latest tracks and mixes, allowing users to download them for free or for a price decided by the artist. This provides a way for up and coming artists to mix, remix, and promote their favorite music to a much wider audience."
        date="July 2020 - Present"
        fe_repo_url="https://github.com/dvcolin/mixdown-fe"
        be_repo_url="https://github.com/dvcolin/mixdown-be"
        website_url="https://soundsave.netlify.com/"
      />
    </SectionContainer>
  )
}

export default ProjectsSection
