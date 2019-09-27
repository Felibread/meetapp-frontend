import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.6);
  align-self: center;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: 18px;

    margin-left: 28px;
    color: #eee;

    svg {
      margin-right: 4px;
      transition: transform 180ms ease-in-out;
    }
    &:hover svg {
      transform: translateX(-2px);
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 10px 5px 0;

    strong {
      color: #fff;
      font-size: 16px;
    }

    a {
      color: #999;
      margin-top: 5px;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  button {
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #d44059;
    border-radius: 4px;
    padding: 12px 10px;
    margin-left: 10px;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.5;
    }
  }
`;
