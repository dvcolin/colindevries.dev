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
    fontWeight: "navLink",
    py: 1,
    transition: "all 100ms ease-out",
    color: "nav.link",
    letterSpacing: "0.06rem",
    bg: "nav.background",
  }),
  props => ({
    color: `${
      props.active
        ? props.theme.colors.nav.linkActive
        : props.theme.colors.nav.link
    }`,
    "&:hover": {
      color: `${
        props.active
          ? props.theme.colors.nav.linkActive
          : props.theme.colors.nav.linkHover
      }`,
      cursor: "pointer",
    },
  })
)

const NavLink = ({ children, section_id, onClick, active }) => {
  return (
    <NavLinkContainer section_id={section_id} onClick={onClick} active={active}>
      {children}
    </NavLinkContainer>
  )
}

export default NavLink
