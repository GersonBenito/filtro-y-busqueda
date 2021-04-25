import React from 'react';
import { Input }from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Buscador = (props) => {
    const { search, searchInput, handleSearch } = props;
    return (
        <Search>
            <Input placeholder='Buscar' value={search} ref={searchInput} onChange={handleSearch} />
        </Search>
    )
}

const Search = styled.div`
    .ant-input{
        border: 2px solid #40a9ff;
        height: 32px;
        padding: 10px;
        border-radius: 25px;
    }
`;

export default Buscador
