import React from "react";

const Bemvindo = (props) => {
       return (
              <div>
                     <h2> Bem vindo(a) {props.nome}</h2>
                     <h3> Você tem {props.idade}</h3>
              </div>
       )
}
function App(){
       return(
              <div>
                     <h1>Ola Mundo</h1>
                     <Bemvindo nome="Pablo" idade="33"></Bemvindo>
              </div>

       );
}

export default App;