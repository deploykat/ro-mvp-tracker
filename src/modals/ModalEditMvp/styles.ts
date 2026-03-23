import { styled } from '@linaria/react';

export const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 95vh;

  overflow-y: auto;

  padding: 2.4rem 2rem 2rem;
  gap: 8px;

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
    width: 100%;
    height: 100%;
    max-height: 100vh;
  }
`;

export const SpriteWrapper = styled.div`
  > img {
    width: auto;
    height: auto;
    max-width: 150px;
    max-height: 150px;
  }
`;

export const Name = styled.span`
  color: var(--modal_name);
  margin-top: -8px;

  font-size: 2.4rem;
  font-weight: 600;
`;

export const Question = styled.span`
  color: var(---modal_text);

  font-size: 1.8rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Optional = styled.span`
  color: var(---modal_text);
  font-size: 1.2rem;
`;

export const DateTimePicker = styled.input`
  text-align: center;
  font-size: 1.7rem;
  border-radius: 4px;
  border: 1px solid var(--modal_datePicker_border);
`;

export const Footer = styled.footer`
  display: flex;
  max-width: 100%;
  gap: 2rem;

  @media (max-width: ${1000 / 16}em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ChangeMapButton = styled.button`
  min-width: 80px;
  padding: 4px 12px;

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
