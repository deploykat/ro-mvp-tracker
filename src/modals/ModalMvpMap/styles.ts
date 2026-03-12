import { styled } from '@linaria/react';

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 2.4rem 1.6rem 2rem;
  border-radius: 6px;
  margin: 0 1rem;

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
`;

export const Name = styled.span`
  color: var(---modal_text);
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Warning = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 3rem;

  color: var(---modal_text);
  font-weight: bold;
  font-size: 1.4rem;
`;
