import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { Flex } from "../../components/flex"
import image from "../../images/colin-devries.jpeg"
import NavLink from "./NavLink"

const NavbarContainer = styled(Flex)(
  css({
    position: ["sticky", null, null, "fixed"],
    top: 0,
    left: 0,
    flexDirection: ["row", null, null, "column"],
    alignItems: "center",
    justifyContent: [null, null, null, "center"],
    height: [56, null, null, "100vh"],
    width: ["100%", null, null, 272],
    px: 2,
    bg: "nav.background",
  })
)

const Image = styled("img")(
  css({
    display: ["none", null, null, "block"],
    borderRadius: "50%",
    height: "16rem",
    width: "16rem",
    borderWidth: 8,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.2)",
    objectFit: "cover",
    objectPosition: "center",
  })
)

const NavLinks = styled("nav")(
  css({
    position: ["fixed", null, null, "relative"],
    top: [56, null, null, 0],
    left: 0,
    width: "100%",
    display: ["none", null, null, "flex"],
    flexDirection: "column",
    mt: [0, null, null, 2],
    pb: 2,
  })
)

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src={image} />
      <NavLinks>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Experience</NavLink>
        <NavLink href="#">Education</NavLink>
        <NavLink href="#">Skills</NavLink>
        <NavLink href="#">Interests</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Blog</NavLink>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
