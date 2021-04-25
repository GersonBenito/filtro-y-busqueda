import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useHistory }from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const goToProduct = () =>{
        history.push('/productos');
    }
    return (
        <Contanedor>
            <h2>Bienvenidos</h2>
            <Button variant='contained' color='secondary' onClick={()=>goToProduct()} >Ir a productos</Button>
        </Contanedor>
    )
}

const Contanedor = styled.div`
    padding:20px;
    height:85vh;
`;

export default Home
