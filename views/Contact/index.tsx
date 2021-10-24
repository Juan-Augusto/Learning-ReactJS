import React, { useState, useCallback, FormEventHandler, FormEvent } from "react";
import { Link } from "react-router-dom"
import { Interface } from "readline";
import { api } from '../../services/api'
import { Container } from "./style";

interface IData {
    registro: string;
    name: string;
    telefone: string;
    celular: string;
    email: string;
    senha: string;
    profissao: string;
}

const Contact: React.FC = () => {
    const [data, setData] = useState<IData>({} as IData);
    const [submit, setSubmit] = useState(false);

    const handleSubit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('', data).then((response => {
            if (response.status === 200) {
                setSubmit(true);
            }
        }))
    }, [data])
    return (
        <Container>
            <div className="form-wrapper">
                <h1>Contact</h1>
                Name: {data.name}
                <br />
                Email: {data.email}
                <div className="card">
                    {submit ? (
                        <div>
                            <h1>Obrigado pelo envio dos dados.</h1>
                        </div>
                    ) : (
                        <form onSubmit={handleSubit}>
                             <input 
                        type="text" 
                        placeholder="Informe seu registro"
                        onChange= { e => setData({...data, registro: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="Informe seu nome"
                        onChange= { e => setData({...data, name: e.target.value})}

                    />
                    <input 
                        type="text" 
                        placeholder="Informe seu celular"
                        onChange= { e => setData({...data, celular: e.target.value})}

                    />
                    <input 
                        type="text" 
                        placeholder="Informe seu email"
                        onChange= { e => setData({...data, email: e.target.value})}

                    />
                    <input 
                        type="text" 
                        placeholder="Informe sua senha"
                        onChange= { e => setData({...data, senha: e.target.value})}

                    />
                      <input 
                        type="text" 
                        placeholder="Informe sua profissão"
                        onChange= { e => setData({...data, profissao: e.target.value})}

                    />
                            <input type="submit" value="Cadastrar" />
                        </form>)
                    }
                    {

                    }

                </div>
                <Link to="/">
                    Voltar para a home
                </Link>
            </div>

        </Container>
    )
}

export default Contact;

/*Ciclo de vida = O objeto só existe enquanto está sendo renderizado em tela.*/