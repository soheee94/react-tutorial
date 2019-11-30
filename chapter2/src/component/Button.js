import React from 'react';
import styled, { css } from 'styled-components';
// import classNames from 'classnames';
// import './Button.scss';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color: 'blue',
};

// size : large, medium, small
// color : blue, gray, pink
// function Button({ children, size, color, outline, fullWidth, ...rest }) {
//   return (
//     <button
//       className={classNames('Button', size, color, {
//         outline,
//         fullWidth,
//       })}
//       {...rest}
//     >
//       {children}
//     </button>
//   );
// }

// Button.defaultProps = {
//   size: 'medium',
//   color: 'blue',
// };

export default Button;
