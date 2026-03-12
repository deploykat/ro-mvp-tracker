import { styled } from '@linaria/react';

export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.6);
  background: linear-gradient(180deg, #f7fbff, #d4e0f5);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 4px 12px;
  font-size: 11px;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;

  font-weight: 500;

  color: var(--footer_text);
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  text-decoration: none;
  color: var(--footer_link);

  > svg {
    stroke-width: 3px;
  }
`;
