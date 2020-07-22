import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { FlexColumn } from "../components/flex"
import VisibilitySensor from "react-visibility-sensor"
import SectionDivider from "./SectionDivider"

const SectionContainer = styled(FlexColumn)(
  css({
    width: "100%",
    minHeight: "100vh",
    justifyContent: "center",
    py: [4, null, null, 3],
    px: [2, null, null, 3],
    maxWidth: 1200,
  })
)

export default ({ children, setVisibleSection, id, bottomDivider }) => {
  const sectionChange = isVisible => {
    if (isVisible) {
      setVisibleSection(id)
    }
  }

  return (
    <VisibilitySensor
      onChange={sectionChange}
      partialVisibility={true}
      offset={{ top: 200, bottom: 560 }}
    >
      <>
        <SectionContainer id={id}>{children}</SectionContainer>
        {bottomDivider ? <SectionDivider /> : null}
      </>
    </VisibilitySensor>
  )
}
