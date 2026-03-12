import { styled } from '@linaria/react';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 210px;
  padding: 22px 8px 14px;

  border-radius: 6px;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    var(--mvpCard_bg)
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

export const TitleBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 18px;
  padding: 0 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 11px;
  font-weight: 600;
  color: #000;
  pointer-events: auto;
`;

export const Bold = styled.span`
  font-weight: normal;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ID = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--mvpCard_id);
`;

export const Name = styled.span`
  font-weight: bold;
  color: var(--mvpCard_name);
`;

export const MapName = styled.span`
  text-align: center;
  white-space: pre-wrap;
  margin-top: 5px;
  color: var(--mvpCard_text);
  font-size: 12px;
  font-family: 'Courier New', ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Lucida Console', monospace;
`;

export const Controls = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isActive }) => (isActive ? 'column' : 'row')};

  margin-top: ${({ isActive }) => (isActive ? 35 : 8)}px;
  gap: 10px;
`;

export const Control = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

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

  svg {
    stroke-width: 2px;
    width: 14px;
    height: 14px;
    color: #000;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background: linear-gradient(180deg, #ffffff, #c7d6f2);
  }

  &:first-child {
    /* kept for potential per-button overrides */
  }
`;

export const CloseButton = styled.button`
  width: 14px;
  height: 14px;
  margin-left: 4px;

  border-radius: 50%;
  border: 1px solid #6b7a96;

  background: linear-gradient(180deg, #ffffff, #d4e0f5);
  box-shadow:
    0 1px 0 #ffffff inset,
    0 -1px 0 rgba(0, 0, 0, 0.2) inset;

  font-size: 10px;
  line-height: 10px;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #ffffff, #c7d6f2);
  }
`;
