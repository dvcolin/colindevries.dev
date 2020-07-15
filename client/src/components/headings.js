import styled from "styled-components"
import css from "@styled-system/css"

const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  textTransform: "uppercase",
  color: "text.dark",
}

export const H1 = styled("h1")(
  css({
    ...heading,
    fontSize: 7,
    lineHeight: 0.9,
  })
)

export const H4 = styled("h4")(
  css({
    ...heading,
    fontSize: [3, null, null, 4],
    fontWeight: 600,
    lineHeight: 1.5,
    color: "text.gray",
    mb: 2,
  })
)
