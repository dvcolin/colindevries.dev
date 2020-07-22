import styled from "styled-components"
import css from "@styled-system/css"

export default styled("hr")(
  css({
    boxSizing: "content-box",
    height: 0,
    overflow: "visible",
    border: 0,
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "rgba(0, 0, 0, 0.1)",
    m: 0,
  })
)
