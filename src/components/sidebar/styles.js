import styled from "styled-components";
import "font-awesome/css/font-awesome.css";

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
