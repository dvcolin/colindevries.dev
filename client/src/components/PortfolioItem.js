import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faMousePointer } from "@fortawesome/free-solid-svg-icons"
import { Flex } from "../components/flex"
import { H3, H4 } from "../components/headings"
import { PSmall } from "../components/text"

const PortfolioItemContainer = styled("div")(
  css({
    width: "100%",
    display: "grid",
    gridTemplateColumns: ["1fr", "4fr 1fr"],
    gridTemplateRows: "auto",
    mb: 3,
  })
)

const StyledH4 = styled(H4)(
  css({
    fontWeight: 400,
  })
)

const ItemDescription = styled(PSmall)(
  css({
    mb: 2,
  })
)

const ItemDate = styled(PSmall)(
  css({
    color: "text.accent",
  })
)

const ProjectUrlButtonContainer = styled("a")(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    fontSize: 1,
    bg: "text.gray",
    color: "white",
    borderRadius: 5,
    mr: 2,
    "&:hover": {
      bg: "text.accent",
    },
  })
)

const ProjectUrlButton = ({ href, icon }) => (
  <ProjectUrlButtonContainer href={href} target="_blank">
    <FontAwesomeIcon icon={icon} />
  </ProjectUrlButtonContainer>
)

const PortfolioItem = ({
  heading,
  subheading,
  description,
  date,
  repo_url,
  website_url,
}) => (
  <PortfolioItemContainer>
    <div>
      <H3>{heading}</H3>
      <StyledH4>{subheading}</StyledH4>
      <ItemDescription>{description}</ItemDescription>
      {repo_url && website_url ? (
        <Flex>
          <ProjectUrlButton href={repo_url} icon={faCode} />
          <ProjectUrlButton href={website_url} icon={faMousePointer} />
        </Flex>
      ) : null}
    </div>
    <ItemDate>{date}</ItemDate>
  </PortfolioItemContainer>
)

export default PortfolioItem
