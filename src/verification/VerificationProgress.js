// @flow
import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = FlexBox.extend`
  min-height: 20px;
`;

const ProgressBarContainer = FlexBox.extend`
  flex-direction: row;
  width: 180px;
`;

export const ProgressIndicator = styled.div`
  width: ${props => `${props.progress}%`};
  height: 5px;
  background-color: #01cffd;
`;

export const ProgressBar = styled.div`
  width: ${props => `${props.progress}%`};
  height: 1px;
  background-color: #b2b4b4;
  position: relative;
`;

const ProgressContainer = FlexBox.extend`
  flex-direction: row;
`;

export const Progress = styled.div`
  font-family: OpenSansBold, Fallback, sans-serif;
  font-size: 12px;
  color: #01cffd;
`;

type Props = {
  total: number,
  current: number,
};

const VerificationProgress = ({ total, current }: Props) => {
  let progress = Math.round(100 * (current / total));
  if (progress < 5) {
    progress = 5;
  }
  return (
    <Container>
      <ProgressBarContainer>
        <ProgressIndicator progress={progress} />
        <ProgressBar progress={100 - progress} />
      </ProgressBarContainer>
      <ProgressContainer>
        <Progress>{progress} %</Progress>
      </ProgressContainer>
    </Container>
  );
};

export default VerificationProgress;
