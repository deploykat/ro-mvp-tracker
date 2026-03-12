import { HeaderTimer } from '../HeaderTimer';
import { ServerButton } from '../ServerButton';
import { SettingsButton } from '../SettingsButton';
import { useSettings } from '@/contexts/SettingsContext';

import { Container, Customization, LogoContainer, Title } from './styles';

export function Header() {
  const { use24HourFormat } = useSettings();

  return (
    <Container>
      <LogoContainer>
        <Title>Ragnarok Helper</Title>
      </LogoContainer>

      <HeaderTimer use24HourFormat={use24HourFormat} />

      <Customization>
        <ServerButton />
        <SettingsButton />
      </Customization>
    </Container>
  );
}
