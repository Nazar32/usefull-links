import React from 'react';
import styled from 'styled-components';

export const Link = ({ to, children, className = '' }) => {
  return (
    <StyledLink target="_blank" href={to} className={className}>{children}</StyledLink>
  );
};

const StyledLink = styled.a`
  color: #0052cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
