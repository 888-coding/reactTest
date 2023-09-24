import React from "react";

const Bemvindo = (props) => {
       return (
              <div>
                     <h2> Bem vindo(a) {props.nome}</h2>
              </div>
       )
}
function App(){
       return(
              <div>
                     <h1>Ola Mundo</h1>
                     <Bemvindo nome="Pablo"></Bemvindo>
              </div>

       );
}

export default App;