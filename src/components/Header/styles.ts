import { styled } from '@linaria/react';

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  height: 40px;
  padding: 0 20px;

  /* Match RO window title bar / card title bar */
  background: linear-gradient(180deg, #f7fbff, #d4e0f5);
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;
`;

export const Title = styled.h1`
  margin-left: 0;

  font-family: 'Tahoma 11', sans-serif;
  font-weight: 400;
  font-size: 16px;

  white-space: nowrap;

  color: #000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Customization = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1.6rem;

  button svg {
    filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.5));
  }
`;
