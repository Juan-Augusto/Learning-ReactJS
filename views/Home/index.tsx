import React, {useState} from "react";
import {Container} from './style';
import {Link} from "react-router-dom"


const Home: React.FC = () =>{
    const [ isLoad /*Valor do estado em si*/, setIsLoad/*vai settar o valor dele*/ ] = useState(true); //se estiver carregando = printar o resultado na tela, senão, o outro
    return(
        <Container>
            {   isLoad ? (
                <div>
                    <p>Carregando...</p>
                </div>
            ):(
                <div>
                <h1>Home</h1>
                <Link to="/Contact">
                    Ir para contato
                </Link>
                </div>
            )}
            <div className="button-container">
                <button onClick = { () => setIsLoad(!isLoad)}>clique aqui</button>
            </div>
        </Container>
    );
}
    export default Home;
