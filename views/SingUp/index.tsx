import React, {useState, useCallback} from "react";
import { useHistory, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Loader from "../../components/loader";
import { FormEvent } from "react";
import { Container } from "./style";
import { api } from '../../services/api'

interface IData{
    name: string;
    email: string;
    senha: string;


}
const SignUp: React.FC = () => {
    const [ data, setData] = useState<IData>( {} as IData);
    const [ load, setLoad] = useState(false);

    const history = useHistory()
    const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post('', data).then(
            response =>{
                setLoad(false)
                console.log(response.data)
                toast.success('Cadastro Realizado com sucesso!', {
                    hideProgressBar: false,
                    onClose : () => history.push('/signin')
                })
                
            }
        ).catch(e => {
            toast.error('Ih rapaz, deu não')
            setLoad(false)
        })
    }, [data, history])
    if(load){
        return <Loader/>
        
    }
    return(
        <Container>
            <div className="card">
                <h5>Cadastre-se</h5>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Informe seu nome"
                        onChange= { e => setData({...data, name: e.target.value})}

                    />
                    <input 
                        type="text" 
                        placeholder="Informe seu email"
                        onChange= { e => setData({...data, email: e.target.value})}

                    />
                    <input 
                        type="password" 
                        placeholder="Informe sua senha"
                        onChange= { e => setData({...data, senha: e.target.value})}

                    />
                    <input type="submit" value="CADASTRAR"/>
                </form>
                <Link to= "/signin">Clique para fazer login</Link>

            </div>
        </Container>
    )
}
export default SignUp