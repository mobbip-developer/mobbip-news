import { ThemeEnum } from '~/constants/theme.constants';
import { useTheme } from '~/hooks/theme';

import { IconLogo } from './IconLogo';
import { TextLogo } from './TextLogo';

type LogoType = 'text' | 'icon';

export type LogoProps = {
  type?: LogoType;
  theme?: ThemeEnum;
  width?: number;
  height?: number;
};

type LogoRenderer = {
  text: (props: LogoProps & { theme: ThemeEnum }) => JSX.Element;
  icon: (props: LogoProps & { theme: ThemeEnum }) => JSX.Element;
};

const renderers: LogoRenderer = {
  text: props => <TextLogo theme={props.theme} />,
  icon: props => (
    <IconLogo width={props.width} height={props.height} theme={props.theme} />
  ),
};

export const Logo = ({ type = 'text', theme, ...rest }: LogoProps) => {
  const { theme: appTheme } = useTheme();

  return renderers[type]({ ...rest, theme: theme || appTheme });
};
