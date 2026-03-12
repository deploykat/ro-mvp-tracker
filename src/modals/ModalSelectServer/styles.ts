import { styled } from '@linaria/react';

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  padding: 2.4rem 1.6rem 2rem;
  gap: 8px;
  margin: 0 1rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96),
    var(--modal_bg)
  );
  border: 1px solid #ffffff;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.45),
    0 2px 2px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 18px;
    background: linear-gradient(180deg, #f7fbff, #d4e0f5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  @media (max-width: ${1000 / 16}em) {
    overflow-y: auto;
    max-height: 95vh;
  }
`;

export const Title = styled.span`
  color: var(--modal_name);
  margin-top: -1rem;

  font-size: 24px;
  font-weight: 600;
`;

export const ServerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1.6rem 0;

  width: 80%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServerItem = styled.button<{
  active: boolean;
}>`
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  border: 1px solid var(--modal_serverSelect_border);

  background-color: ${({ active }) =>
    active
      ? 'var(--modal_serverSelect_bgActive)'
      : 'var(--modal_serverSelect_bg)'};

  color: ${({ active }) =>
    active
      ? 'var(--modal_serverSelect_textActive)'
      : 'var(--modal_serverSelect_text)'};

  &:hover {
    opacity: 0.8;
  }
`;

export const UnsupportedMessage = styled.span`
  font-size: 16px;
  font-weight: 500;

  margin: -1rem 0;
`;
