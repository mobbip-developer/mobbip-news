import { Image } from '../Image';

type IconLogoProps = {
  theme: 'light' | 'dark';
  width: number;
  height: number;
};
export const IconLogo = ({ width = 40, height = 40, theme }: IconLogoProps) => (
  <Image
    key={theme}
    src="/images/mobbip-icon.png"
    width={width}
    height={height}
    alt="Logo Mobbip"
  />
);
