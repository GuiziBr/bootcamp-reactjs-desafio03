import styled from "styled-components";
import { Popup } from "react-map-gl";

export const Sidebar = styled.div`
  width: 20%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  border-radius: 5px;
  overflow: auto;

  ul {
    list-style: none;
    padding-left: 15px;
    padding-right: 15px;
    li button {
      background: transparent;
    }
    li div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding: 15px;

      button {
        cursor: pointer;
      }

      .user-info {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;

        strong {
          padding: 0;
          margin: 0;
          font-size: 18px;
          font-weight: bold;
        }

        small {
          padding: 0;
          margin: 0;
          margin-top: 3px;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const Img = styled.img`
  width: 50px;
  border-radius: 50%;
  border-color: #9b65e6;
  border-style: solid;
`;

export const PopupCp = styled(Popup)`
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  width: 15%;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  form {
    display: flex;
    flex-direction: column;

    input {
      font-size: 14px;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
    }

    div {
      display: flex;

      button {
        display: flex;
        flex: 1;
        justify-content: center;
        border-radius: 5px;
        padding: 10px;
        font-weight: bold;
        font-size: 12px;
        color: #999;
      }

      button:nth-child(2n-1) {
        border: 1px solid #999;
        margin-right: 15px;
      }

      button:nth-child(2n) {
        background: #63f5b8;
        border: 1px solid #63f5b8;
      }

      button:nth-child(2n-1):hover {
        background: #999;
        color: #fff;
      }
      button:nth-child(2n):hover {
        background: #52d89f;
        color: #fff;
      }
    }
  }
`;
