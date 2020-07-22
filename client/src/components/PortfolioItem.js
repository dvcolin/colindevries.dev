import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
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

const PortfolioItem = ({ heading, subheading, description, date }) => (
  <PortfolioItemContainer>
    <div>
      <H3>{heading}</H3>
      <H4>{subheading}</H4>
      <ItemDescription>{description}</ItemDescription>
    </div>
    <ItemDate>{date}</ItemDate>
  </PortfolioItemContainer>
)

export default PortfolioItem
