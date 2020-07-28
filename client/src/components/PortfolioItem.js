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
    fontSize: 0,
    bg: "background.gray",
    color: "background.light",
    borderRadius: 5,
    mr: 2,
    textDecoration: "none",
    py: 1,
    px: 2,
    div: {
      ml: 1,
    },
    "&:hover": {
      bg: "background.accent",
    },
  })
)

const ProjectUrlButton = ({ href, icon, text }) => (
  <ProjectUrlButtonContainer href={href} target="_blank">
    <FontAwesomeIcon icon={icon} />
    <div>{text}</div>
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
          <ProjectUrlButton href={repo_url} icon={faCode} text="View Code" />
          <ProjectUrlButton
            href={website_url}
            icon={faMousePointer}
            text="View Website"
          />
        </Flex>
      ) : null}
    </div>
    <ItemDate>{date}</ItemDate>
  </PortfolioItemContainer>
)

export default PortfolioItem
