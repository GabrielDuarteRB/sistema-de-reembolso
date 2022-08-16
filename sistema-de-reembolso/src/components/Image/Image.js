import styled from "styled-components";

export const Image = styled.img `
    border-radius: ${(props) => props.borderRadius};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`