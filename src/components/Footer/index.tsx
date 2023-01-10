import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

import { SOCIAL_PROFILES } from '~/constants/social.constants';
import { ThemeEnum } from '~/constants/theme.constants';
import { UrlsEnum } from '~/constants/urls.constants';
import { useTheme } from '~/hooks/theme';
import { contentByLocale } from '~/locales';

import { Link } from '../Link';
import { Logo } from '../Logo';
import { SocialProfiles } from '../SocialProfiles';
import * as S from './styles';

export const Footer = () => {
  const { locale } = useRouter();
  const { isDark } = useTheme();
  const isAmp = useAmp();

  const content = contentByLocale[locale].components.Footer;

  const eatLinks = [
    {
      text: content.eat.aboutUs,
      link: UrlsEnum.About,
      useHtmlTag: true,
    },
    {
      text: content.eat.privacyPolicy,
      link: UrlsEnum.Privacy,
      useHtmlTag: true,
    },
    {
      text: 'Termos de uso',
      link: UrlsEnum.TermsOfUse,
      useHtmlTag: true,
    },
    {
      text: content.eat.contact,
      link: UrlsEnum.Contact,
      useHtmlTag: true,
    },
    {
      text: content.eat.webStories,
      link: UrlsEnum.WebStories,
      useHtmlTag: true,
    },
  ];

  return (
    <S.Wrapper isDark={isDark} isAmp={isAmp}>
      <S.ContentWrapper isDark={isDark} isAmp={isAmp}>
        <div>
          <Logo theme={isDark ? ThemeEnum.DARK : ThemeEnum.LIGHT} />
          <SocialProfiles {...SOCIAL_PROFILES} />
        </div>
        <div>
          <strong>{content.about}</strong>
          <p>{content.aboutText}</p>
        </div>
      </S.ContentWrapper>
      <S.BottomWrapper isDark={isDark} isAmp={isAmp}>
        {eatLinks.map(({ text, link, useHtmlTag = false }) => (
          <Link href={link} key={link} useHtmlTag={useHtmlTag}>
            {text}
          </Link>
        ))}
      </S.BottomWrapper>
    </S.Wrapper>
  );
};
