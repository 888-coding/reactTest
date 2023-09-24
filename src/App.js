import React from "react";

const Bemvindo = (props) => {
       return (
              <div>
                     <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
                     <Social fb={props.fb}/>
                     <hr/>
              </div>
       )
}
const Sobre = (props) => {
       return (
              <div>
                     <h2> Olá sou {props.nome} </h2>
                     <h3> Sou {props.cargo}</h3>
                     <h3>Tenho {props.idade} anos</h3>
              </div>
       );
}

const Social = (props) => {
       return (
              <div>
                     <h4><a href={props.fb}>Facebook</a></h4>
                     <h4>LinkedIn</h4>
                     <h4>Instagram</h4>
              </div>
       );
}
function App(){
       return(
              <div>
                     <h1>Ola Mundo</h1>
                     <Bemvindo nome="Pablo" cargo="Programador" idade="33" fb="http://www.facebook.com/sujeito"/>
                     <Bemvindo nome="Thaís" cargo="Advogada" idade="25"/>
                     <Bemvindo nome="Filipe" cargo="Estagiário" idade="18"/>
              </div>

       );
}

export default App;