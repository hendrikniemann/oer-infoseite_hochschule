import { Box } from "grommet"
import styled from "styled-components"

export const MaxWidth = styled(Box)`
  width: 100%;
  max-width: ${props =>
    typeof props.maxWidth === "number"
      ? props.maxWidth + "px"
      : props.maxWidth ?? "1200px"};
`
export const ErrorMessage = styled.div`
  padding: 8px;
  margin: 10px 0;
  color: red;
  border: 1px solid red;
`
