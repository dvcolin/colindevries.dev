import React from "react"
import styled, { ThemeProvider } from "styled-components"
import css from "@styled-system/css"
import theme from "../styles/theme"
import GlobalStyles from "../styles/global-styles"
import Navbar from "./navbar"

const LayoutContainer = styled("div")(
  css({
    bg: "background.light",
    color: "text.gray",
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  })
)

const Main = styled("main")(
  css({
    display: "flex",
    flexDirection: "column",
    pl: [0, null, null, 272],
  })
)

const Layout = ({ children, visibleSection, setVisibleSection }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutContainer>
        <Navbar
          visibleSection={visibleSection}
          setVisibleSection={setVisibleSection}
        />
        <Main>{children}</Main>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
