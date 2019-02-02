import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    border-radius:3px;
    color: blue;
    border: 2px solid blue;
    padding: 0.5em 2em;
    text-align:center;
    width: 60%;
    margin-left:auto;
    margin-right:auto;
    margin-top:1em;
`;

const Title = () => (
  <TitleContainer className="title-container">
      Hotels with Attitude
  </TitleContainer>
);

export default Title;
