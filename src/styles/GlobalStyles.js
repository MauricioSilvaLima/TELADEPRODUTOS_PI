import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }
        header {
        text-align: center;
        color: white;
        background-color: #1e1a2b;
        }

        body {
        background-color: #3d3e4a;
        }
`;
