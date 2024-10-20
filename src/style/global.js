import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
 padding: 0;
 margin: 0;
 box-sizing: border-box;

 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-rendering: optimizeLegibility;
 transition: .3s ease-in-out;

 ::-webkit-scrollbar {
  width: .2rem;
}

::-webkit-scrollbar-track {
  background: #FFFFFF;
}

::-webkit-scrollbar-thumb {
  background: #F1E9C9; 
  border-radius: 1rem;
}


::-webkit-scrollbar-thumb:hover {
  background: C47F17;
}
}

:root {
 font-size: 62.5%;
}

body {
 background-color:  #ffff;

}

a {
 text-decoration: none;
}
`

