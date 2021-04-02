import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize, formatBasepath, formatPath } from '../../util/converter';
import { StyledBasepath, StyledBreadcrumb } from './Breadcrumb.styles';

interface Props {
  children: string;
}

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