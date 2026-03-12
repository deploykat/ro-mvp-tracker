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
  position: absolute;
  top: 2px;
  left: 10px;

  color: #000;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Courier New', ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Lucida Console', monospace;
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

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1.2rem;
`;

export const ActionButton = styled.button`
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
