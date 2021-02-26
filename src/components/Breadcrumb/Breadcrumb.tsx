import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { capitalize, formatBasepath, formatPath } from '../../util/converter';

interface Props {
  children: string;
}

const StyledBreadcrumb = styled.p`
  color: var(--clr-text);
  width: 400px;
`;

const StyledBasepath = styled.span`
  color: var(--clr-disabled);
  
  a {
    color: var(--clr-disabled);
    text-decoration: none;
  }
`;

export default function Breadcrumb({ children }: Props) {
  const renderBasepath = () => {
    const path = formatBasepath(children);
    return (
      <StyledBasepath>
        <Link to="/">Home</Link>
        <span> / </span>
        {
          path &&
          <>
            <Link to={`/${path}`}>{ capitalize(path) }</Link>
            <span> / </span>
          </>
        }
      </StyledBasepath>
    );
  };

  return (
    <StyledBreadcrumb>
      { renderBasepath() }
      { formatPath(children) }
    </StyledBreadcrumb>
  );
}