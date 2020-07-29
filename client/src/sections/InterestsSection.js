import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import SectionContainer from "../layouts/SectionContainer"
import { H2 } from "../components/headings"
import { P } from "../components/text"

const StyledP = styled(P)(
  css({
    mb: 2,
  })
)

const InterestsSection = ({ setVisibleSection }) => {
  return (
    <SectionContainer id="interests" setVisibleSection={setVisibleSection}>
      <H2>Interests</H2>
      <StyledP>
        When I'm not writing software, I enjoy spending time on hobbies such as
        playing tennis, watching stand up comedy, as well as listening to,
        mixing, and producing electronic music. I'm always keeping up on the
        latest releases in EDM, and listen to music constantly when coding. When
        I'm done with work for the day, I also enjoy playing video games like
        Rocket League, Doom, and Fallout. PC hardware is another area of
        interest, and I've actually built a new PC from scratch which was a very
        difficult but enlightening experience.
      </StyledP>
      <StyledP>
        Some of my other interests include watch collecting, exploring new
        places, and subjects like psychology, philosophy, and economics. I love
        grabbing a coffee and going for walks. I find that it helps me clear my
        mind and recharge. In my free time, I read and watch YouTube videos in
        order to learn more about various subjects that I find fascinating. I
        also like learning more about investing in both the stock market and
        cryptocurrencies.
      </StyledP>
    </SectionContainer>
  )
}

export default InterestsSection
