import { styled } from '@linaria/react';

export const Button = styled.button`
  position: absolute;
  top: 4px;
  right: 6px;

  width: 14px;
  height: 14px;

  border-radius: 50%;
  border: 1px solid #6b7a96;

  background: linear-gradient(180deg, #ffffff, #d4e0f5);
  box-shadow:
    0 1px 0 #ffffff inset,
    0 -1px 0 rgba(0, 0, 0, 0.2) inset;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > svg {
    width: 9px;
    height: 9px;
    stroke-width: 2px;
    color: #000;
  }

  &:hover {
    background: linear-gradient(180deg, #ffffff, #c7d6f2);
  }
`;
