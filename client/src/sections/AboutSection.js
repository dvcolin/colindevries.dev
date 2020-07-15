import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import SectionContainer from "../layouts/SectionContainer"
import { H1, H4 } from "../components/headings"
import { P } from "../components/text"

const AccentColor = styled("span")(
  css({
    color: "text.accent",
  }),
  ({ theme, bold }) => ({
    fontWeight: bold ? theme.fontWeights.bold : "inherit",
  })
)

const Break = styled("br")(
  css({
    display: ["block", "none"],
  })
)

const Subheading = styled(H4)(
  css({
    mt: [1, null, null, 0],
    mb: 3,
  })
)

const Description = styled(P)(
  css({
    mb: 3,
  })
)

const AboutSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer id="about" setVisibleSection={setVisibleSection}>
      <H1>
        Colin <Break /> <AccentColor>de Vries</AccentColor>
      </H1>
      <Subheading>
        Full Stack Web Developer &middot; Los Gatos, CA &middot; (408) 300-8903
        &middot; <AccentColor bold>colin@colindevries.dev</AccentColor>
      </Subheading>
      <Description>
        Hello! My name is Colin and I'm a full-stack web developer currently
        entrolled at Lambda School. I have extensive experience developing
        full-stack web applications using React and NodeJS. I'm always working
        on improving my programming skills, and am looking forward to the
        opportunity of working on a team to develop real-world applications.
        Currently looking for opportunities in front-end development roles.
      </Description>
    </SectionContainer>
  )
}

export default AboutSection
