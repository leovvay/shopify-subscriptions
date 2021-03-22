import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { isInternetExplorer } from 'utils/browser';
import { Wrapper, Dot } from './IeLoadingIndicator.styled';

const ContentWrapper = styled.div`
  width: 120px;
  height: 120px;
`;
const LocalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const showIeLoader = isInternetExplorer();

export const LoadingIndicator = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIeLoader && animationContainer.current) {
      const animationObj = lottie.loadAnimation({
        renderer: 'svg',
        loop: true,
        container: animationContainer.current,
        autoplay: true,
      });
      animationObj.playSegments([10, 121], true);
    }
  }, []);

  return (
    <>
      {showIeLoader ? (
        <Wrapper>
          <Dot />
          <Dot />
          <Dot />
        </Wrapper>
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.25 }}
          data-analytics-id="loading-indicator"
        >
          <LocalWrapper>
            <ContentWrapper ref={animationContainer} data-testid="loader" />
          </LocalWrapper>
        </motion.div>
      )}
    </>
  );
};
