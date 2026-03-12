import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useClickOutside, useKey, useScrollBlock } from '@/hooks';
import { useMvpsContext } from '@/contexts/MvpsContext';

import { ModalBase } from '../ModalBase';
import { Map } from '../../components/Map';
import { NaviCommand } from '../../components/NaviCommand';

import { Modal, Name, Warning, Footer, ActionButton } from './styles';

interface MvpMapModalProps {
  mvpId: number;
  deathMap: string;
  deathPosition?: IMapMark;
  close: () => void;
}

export function ModalMvpMap({
  mvpId,
  deathMap,
  deathPosition,
  close,
}: MvpMapModalProps) {
  useScrollBlock(true);
  useKey('Escape', close);
  const modalRef = useClickOutside(close);
  const { updateDeathPosition } = useMvpsContext();

  const [localPosition, setLocalPosition] = useState<IMapMark | undefined>(
    deathPosition
  );

  function handleChangePosition(position: IMapMark) {
    setLocalPosition(position);
  }

  function handleConfirm() {
    if (localPosition) {
      updateDeathPosition(mvpId, deathMap, localPosition);
    }
    close();
  }

  return (
    <ModalBase>
      <Modal ref={modalRef}>
        <Name>{deathMap}</Name>

        <Map
          mapName={deathMap}
          coordinates={localPosition}
          onChange={handleChangePosition}
        />

        <NaviCommand mapName={deathMap} />

        <Warning>
          <FormattedMessage id='nav_command_warning' />
        </Warning>

        <Footer>
          <ActionButton onClick={handleConfirm}>
            <FormattedMessage id='confirm' />
          </ActionButton>
          <ActionButton onClick={close}>
            <FormattedMessage id='close' />
          </ActionButton>
        </Footer>
      </Modal>
    </ModalBase>
  );
}
