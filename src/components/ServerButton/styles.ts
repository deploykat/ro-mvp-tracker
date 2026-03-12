import { styled } from '@linaria/react';

export const Button = styled.button`
  min-width: 70px;
  padding: 2px 10px;

  border-radius: 3px;
  border: 1px solid #8391ad;

  background: linear-gradient(180deg, #ffffff, #d4e0f5);
  box-shadow:
    0 1px 0 #ffffff inset,
    0 -1px 0 rgba(0, 0, 0, 0.15) inset;

  font-family: 'Trebuchet MS', 'Verdana', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #000;

  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #ffffff, #c7d6f2);
  }
`;
