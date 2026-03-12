import { useState } from 'react';
import { ModalSettings } from '@/modals';
import { Button } from './styles';

export function SettingsButton() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsSettingsModalOpen(true)}>Settings</Button>

      {isSettingsModalOpen && (
        <ModalSettings onClose={() => setIsSettingsModalOpen(false)} />
      )}
    </>
  );
}
