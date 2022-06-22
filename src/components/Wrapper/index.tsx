import styled from "styled-components";

type WrapperProps = {
  alignX?: string;
  alignY?: string;
  direction?: string;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.alignX || "flex-start"};
  align-items: ${(props) => props.alignY || "flex-start"};
  height: 100vh;
`;

export default Wrapper;
