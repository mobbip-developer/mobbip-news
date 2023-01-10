import styled from '@emotion/styled';

export const PhoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: 13.75rem;
  padding: 0 0.75rem;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    padding: 1rem;

    overflow: hidden;
    background: #fff;
    color: ${({ theme }) => theme.colors.gray[750]};

    span {
      margin: 1rem 0;

      font-size: 1rem;
      font-weight: 600;
      text-align: center;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    a {
      width: 100%;
      padding: 0.5rem;
      border: solid 1px #00000050;
      border-radius: 8px;

      text-decoration: none;
      color: inherit;
      text-align: center;
      transition: 0.3s;

      :hover {
        color: #fff;
        background: ${({ theme }) => theme.colors.gray[750]};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 6.25rem;

  overflow: hidden;

  img,
  amp-img {
    object-fit: contain;
  }
`;
