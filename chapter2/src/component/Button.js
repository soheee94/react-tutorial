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

      ${props =>
        props.outline &&
        css`
          background: white;
          border: 1px solid ${selected};
          color: ${selected};
          &:hover {
            color: white;
            background: ${selected};
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyles = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-top: 1rem;
        margin-left: 0;
      }
    `}
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

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  ${fullWidthStyles}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  console.log(rest);
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
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
