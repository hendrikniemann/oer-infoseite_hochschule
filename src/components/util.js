import { Box } from "grommet"
import styled from "styled-components"

export const MaxWidth = styled(Box)`
  width: 100%;
  max-width: ${props =>
    typeof props.maxWidth === "number"
      ? props.maxWidth + "px"
      : props.maxWidth ?? "1024px"};
`
