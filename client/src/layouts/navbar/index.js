import React, { useState } from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { Flex } from "../../components/flex"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
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

const Name = styled("div")(
  css({
    display: ["block", null, null, "none"],
    fontSize: 3,
    fontWeight: "bold",
    color: "nav.linkActive",
  })
)

const NavToggleButton = styled("button")(
  css({
    display: ["block", null, null, "none"],
    ml: "auto",
    background: "none",
    border: "none",
    color: "nav.linkActive",
    fontSize: 3,
    "&:focus": {
      outline: "none",
    },
  })
)

const Image = styled("img")(
  css({
    display: ["none", null, null, "block"],
    borderRadius: "50%",
    height: 160,
    width: 160,
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
  }),
  props => ({
    display: `${props.visible ? "flex" : null}`,
  })
)

const Navbar = ({ visibleSection, setVisibleSection }) => {
  const [navVisible, setNavVisible] = useState(false)

  const scrollToSection = id => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView(true)
      setNavVisible(!navVisible)
    }
  }
  return (
    <NavbarContainer>
      <Name>Colin de Vries</Name>
      <NavToggleButton onClick={() => setNavVisible(!navVisible)}>
        <FontAwesomeIcon icon={faBars} />
      </NavToggleButton>
      <Image src={image} />
      <NavLinks visible={navVisible}>
        <NavLink
          section_id="about"
          onClick={() => scrollToSection("about")}
          active={visibleSection === "about"}
        >
          About
        </NavLink>
        <NavLink
          section_id="experience"
          onClick={() => scrollToSection("experience")}
          active={visibleSection === "experience"}
        >
          Experience
        </NavLink>
        <NavLink
          section_id="education"
          onClick={() => scrollToSection("education")}
          active={visibleSection === "education"}
        >
          Education
        </NavLink>
        <NavLink
          section_id="skills"
          onClick={() => scrollToSection("skills")}
          active={visibleSection === "skills"}
        >
          Skills
        </NavLink>
        <NavLink
          section_id="projects"
          onClick={() => scrollToSection("projects")}
          active={visibleSection === "projects"}
        >
          Projects
        </NavLink>
        <NavLink
          section_id="blog"
          onClick={() => scrollToSection("blog")}
          active={visibleSection === "blog"}
        >
          Blog
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar
