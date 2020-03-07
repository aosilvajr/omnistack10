import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: #E5E6F0;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-direction: row;
    
    /* Os elementos ficam alinhados no topo */
    align-items: flex-start;

    aside {
      width: 320px;
      background: #fff;
      padding: 30px 20px;
      border-radius: 5px;
      margin-right: 15px;
      box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);

      strong {
        color: #333;
        display: block;
        font-size: 20px;
        text-align: center;
      }

      form {
        margin-top: 30px;

        label {
          color: #ACACAC;
          font-size: 14px;
          font-weight: bold;
          display: block;
        }

        input {
          width: 100%;
          height: 35px;
          font-size: 14px;
          color: #666;
          border: 0;
          border-bottom: 1px solid #eee;
        }

        /* Aplica margin em todos menos no primeiro elemento */
        .input-block + .input-block {
          margin-top: 20px;
        }

        .input-group {
          margin-top: 20px;
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr 1fr;
        }

        .input-group {
          .input-block {
            margin-top: 0;
          }
        }

        button {
          width: 100%;
          border: 0;
          margin-top: 30px;
          background: #7D40E7;
          border-radius: 5px;
          padding: 15px 20px;
          font-size: 15px;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          transition: background 0.9s; 

          :hover {
            background: #6931CA;
          }
        }
      }
    }

    main {
      flex: 1;

      ul {
        gap: 20px;
        display: grid;
        list-style: none;
        grid-template-columns: 1fr 1fr;

        li {
          padding: 20px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 0 14px rgba(0, 0, 0, 0.02);

          header {
            display: flex;
            flex-direction: row;
            align-items: center;

            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }

            .user-info {
              margin-left: 10px;

              strong {
                display: block;
                font-size: 20px;
                color: #333;
              }

              span {
                font-size: 14px;
                color: #999;
                margin-top: 2px;
              }
            }
          }
        }

        p {
          color: #666;
          font-size: 14px;
          line-height: 20px;
          margin: 10px 0;
        }

        a {
          color: #8e4dff;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.6s;

          :hover {
            color: #5a2ea6;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    #app {
      flex-direction: column;

      aside {
        width: 100%;
        margin-right: 0;
      }

      main {
        width: 100%;
        margin-top: 15px;

        ul {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;


