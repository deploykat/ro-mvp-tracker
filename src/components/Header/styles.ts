import { styled } from '@linaria/react';

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  height: 40px;
  padding: 0 20px;

  background-color: var(--primary);

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

  font-family: 'Times New Roman', 'Georgia', serif;
  font-weight: 600;
  font-size: 18px;

  white-space: nowrap;

  color: var(--header_text);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Customization = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 1.6rem;
`;
