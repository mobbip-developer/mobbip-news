import { Tooltip, useDisclosure } from '@chakra-ui/react';
import {
  HamburgerMenuIcon,
  EnvelopeClosedIcon,
  InfoCircledIcon,
  StackIcon,
} from '@radix-ui/react-icons';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';
import { BiRss, BiNews } from 'react-icons/bi';

import { PathsEnum } from '~/constants/paths.constants';
import { UrlsEnum } from '~/constants/urls.constants';
import { useScreen } from '~/hooks/screen';
import { contentByLocale } from '~/locales';

import { Drawer } from '../Drawer';
import { Link } from '../Link';
import { Logo } from '../Logo';
import * as S from './styles';

type MenuItem = {
  Icon: typeof EnvelopeClosedIcon | IconType;
  target?: '_blank';
  text: string;
  link: string;
  useHtmlTag?: boolean;
};

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isMobile } = useScreen();
  const { locale } = useRouter();
  const isAmp = useAmp();

  const content = contentByLocale[locale].components.Menu;

  if (isAmp) {
    return <></>;
  }

  const items: MenuItem[] = [
    {
      text: content.items.news,
      Icon: BiNews,
      link: PathsEnum.News,
    },
    {
      text: content.items.webStories,
      Icon: StackIcon,
      link: UrlsEnum.WebStories,
      useHtmlTag: true,
    },
    {
      text: content.items.rssFeed,
      Icon: BiRss,
      link: PathsEnum.RssFeed,
      useHtmlTag: true,
    },
    {
      text: content.items.contact,
      Icon: EnvelopeClosedIcon,
      link: UrlsEnum.Contact,
      useHtmlTag: true,
    },
    {
      text: content.items.about,
      Icon: InfoCircledIcon,
      link: UrlsEnum.About,
      useHtmlTag: true,
    },
  ];

  return (
    <S.Wrapper>
      <div>
        {isMobile ? (
          <S.MobileMenuButton aria-label="Menu" onClick={onOpen}>
            <HamburgerMenuIcon />
          </S.MobileMenuButton>
        ) : (
          <Link href="/">
            <Logo type="icon" />
          </Link>
        )}
      </div>

      {isMobile ? (
        <Drawer isOpen={isOpen} onClose={onClose} drawerTitle="Menu">
          <S.MenuItemsWrapperMobile>
            {items.map(({ Icon, text, link, target, useHtmlTag = false }) => (
              <Link
                prefetch={false}
                useHtmlTag={useHtmlTag}
                target={target}
                href={link}
                key={text}
              >
                <button onClick={onClose} aria-label={`ir para ${text}`}>
                  <Icon /> <span>{text}</span>
                </button>
              </Link>
            ))}
          </S.MenuItemsWrapperMobile>
        </Drawer>
      ) : (
        <S.MenuItemsWrapper>
          {items.map(({ Icon, text, link, target, useHtmlTag }) => (
            <Tooltip label={text} placement="right-end" key={text}>
              <button aria-label={text}>
                <Link
                  useHtmlTag={useHtmlTag}
                  target={target}
                  href={link}
                  key={text}
                >
                  <Icon />
                </Link>
              </button>
            </Tooltip>
          ))}
        </S.MenuItemsWrapper>
      )}
    </S.Wrapper>
  );
};
