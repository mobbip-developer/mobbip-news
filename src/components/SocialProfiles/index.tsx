import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

import { FacebookIcon } from '../icons/FacebookIcon';
import { Link } from '../Link';
import * as S from './styles';

type Links = 'facebook' | 'twitter' | 'linkedin' | 'instagram';

type SocialProfilesProps = {
  [key in Links]?: string;
};

type RenderIconProps = {
  width?: string | number;
  height?: string | number;
  color?: string;
};

const renderIcon = ({
  width = '2rem',
  height = '2rem',
  color = '#ED7C25',
}: RenderIconProps = {}) => ({
  twitter: <TwitterLogoIcon width={width} height={height} color={color} />,
  instagram: <InstagramLogoIcon width={width} height={height} color={color} />,
  linkedin: <LinkedInLogoIcon width={width} height={height} color={color} />,
  facebook: <FacebookIcon width={width} height={height} color={color} />,
});

export const SocialProfiles = (links: SocialProfilesProps) => {
  const keys = Object.keys(links);

  return (
    <S.Wrapper>
      {keys.map(
        key =>
          links[key] && (
            <Link
              key={key}
              href={links[key]}
              target="_blank"
              rel={['nofollow']}
              ariaLabel={key}
            >
              {renderIcon()[key]}
            </Link>
          ),
      )}
    </S.Wrapper>
  );
};
