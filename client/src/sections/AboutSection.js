import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import SectionContainer from "../layouts/SectionContainer"
import { Flex } from "../components/flex"
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

const SocialLinkContainer = styled("a")(
  css({
    height: "5.6rem",
    width: "5.6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 4,
    bg: "background.gray",
    color: "background.light",
    borderRadius: "50%",
    mr: 2,
    "&:hover": {
      bg: "background.accent",
    },
  })
)

const SocialLink = ({ href, icon }) => (
  <SocialLinkContainer href={href} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </SocialLinkContainer>
)

const AboutSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer
      id="about"
      setVisibleSection={setVisibleSection}
      bottomDivider
    >
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
      <Flex>
        <SocialLink
          href="https://www.linkedin.com/in/dvcolin/"
          icon={faLinkedinIn}
        />
        <SocialLink href="https://github.com/dvcolin" icon={faGithub} />
        <SocialLink href="https://twitter.com/dv_divs" icon={faTwitter} />
        <SocialLink href="mailto:colin@colindevries.dev" icon={faEnvelope} />
      </Flex>
    </SectionContainer>
  )
}

export default AboutSection
