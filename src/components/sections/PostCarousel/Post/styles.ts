import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: 22.5rem;
  position: relative;

  padding: 0 0.75rem;

  div {
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    cursor: pointer;
    overflow: hidden;

    * {
      transition: all 0.3s;
    }

    a {
      text-decoration: none;
    }

    footer {
      h2 {
        color: ${({ theme }) => theme.colors.gray['50']};
      }
    }

    &:hover {
      footer {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);
      }

      h2 {
        color: ${({ theme }) => theme.colors.primary};
      }

      img {
        transform: scale(1.05);
      }
    }
  }
`;

export const PostWrapper1 = styled.a`
  position: relative;

  width: 100%;
  height: 100%;
  height: 22.5rem;
  border-radius: 0.5rem;

  cursor: pointer;
  overflow: hidden;

  * {
    transition: all 0.3s;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    footer {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);
    }

    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }

    img {
      transform: scale(1.05);
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  img,
  amp-img {
    object-fit: cover;
  }
`;

export const WrapperText = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 1.125rem;
  min-height: 5rem;

  flex-direction: column;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 120%);

  span {
    font-size: 0.875rem;
    color: #ffffff99;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h2,
  .title {
    margin-top: 0.5rem;

    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`;
