import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"

const NavLinkContainer = styled("a")(
  css({
    width: "100%",
    fontSize: 1,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: 800,
    py: 1,
    transition: "all 100ms ease-out",
    color: "nav.link",
    letterSpacing: "0.06rem",
    "&:hover": {
      color: "nav.linkHover",
    },
  })
)

const NavLink = ({ href, children }) => {
  return <NavLinkContainer href={href}>{children}</NavLinkContainer>
}

export default NavLink
