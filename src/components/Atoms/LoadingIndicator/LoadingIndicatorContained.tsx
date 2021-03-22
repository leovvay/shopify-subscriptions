import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

const ContentWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  margin: auto;
`;

export const LoadingIndicatorContained = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animationObj = lottie.loadAnimation({
      renderer: 'svg',
      loop: true,
      container: animationContainer.current,
      autoplay: true,
    });
    animationObj.playSegments([10, 121], true);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.25 }}
      data-analytics-id="loading-indicator-contained"
    >
      <ContentWrapper ref={animationContainer} data-testid="loader" />
    </motion.div>
  );
};
