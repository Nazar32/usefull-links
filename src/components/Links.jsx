import React from 'react';
import styled from 'styled-components';
import { Link } from './Link';

export const Links = ({ data }) => {
  return data.map(dataItem => (
    <StyledGroupWrapper key={dataItem.group}>
      <StyledGroup>
        <StyledGroupName>
          {dataItem.group}
        </StyledGroupName>
        {
          dataItem.links.map(link => (
            <StyledLinkWrapper key={link.name}>
              <StyledLink to={link.link}>{link.name}</StyledLink>
            </StyledLinkWrapper>
          ))
        }
      </StyledGroup>
    </StyledGroupWrapper>
  ));
};

const StyledGroupWrapper = styled.div`
  margin-bottom: 32px;
`;

const StyledGroup = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: initial;
`;

const StyledGroupName = styled.div`
  position: relative;
  right: 1em;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledLinkWrapper = styled.li`
  margin-bottom: 8px;
  text-align: left;
  list-style-position: outside;
`;

const StyledLink = styled(Link)`
  
`;
