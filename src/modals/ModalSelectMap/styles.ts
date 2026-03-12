import { styled } from '@linaria/react';

export const Modal = styled.div`
  position: relative;
  height: auto;
  max-height: 95vh;

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

export const Title = styled.span`
  color: var(--modal_name);
  margin-top: -30px;
  text-align: center;

  font-size: 24px;
  font-weight: 600;
`;

export const MapsDisplayGrid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => (cols > 2 ? 3 : 2)}, 1fr);
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${1000 / 16}em) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const MapCard = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(---modal_text);
  background: none;
  cursor: pointer;

  padding: 1rem;
  border-width: 3px;
  border-style: solid;
  border-radius: 6px;
  border-color: ${({ isSelected }) =>
    isSelected ? 'var(--modal_changeMap_selectedMapBorder)' : 'transparent'};
`;

export const MapDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
`;

export const MapName = styled.span`
  font-weight: bold;
`;

export const MapRespawnTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
