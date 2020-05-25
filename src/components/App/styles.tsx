import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { mediaQuery } from '../../tokens';

export const GlobalStyle = createGlobalStyle`

  ${normalize()}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 1rem;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const Title = styled.h1`
    margin: 1rem 0 0;
    text-align: center;

    @media ${mediaQuery.tablet} {
        text-align: left;
    }
`;
