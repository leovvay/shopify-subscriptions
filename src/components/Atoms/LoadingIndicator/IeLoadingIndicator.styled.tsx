import styled, { keyframes } from 'styled-components/macro';

export const Wrapper = styled.div`
  text-align: center;
  & > div:nth-child(1) {
    animation-delay: -0.32s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const loadingAnimation = keyframes`
  0%,
  70%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  35% {
    opacity: 0.5;
    transform: scale(0);
  }
`;

export const Dot = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;
