import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Card, Image, Select } from "antd";
import "antd/dist/antd.css";
import Buscador from "./Buscador";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categias, setcategorias] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [titleCategory, setTitlecategory] = useState("");
  const [search, setSearch] = useState("");
  //const searchInput = useRef(null);

  const { Meta } = Card;
  const { Option } = Select;

  const obtenerProductos = async () => {
    const url = "https://fakestoreapi.com/products";
    const data = await fetch(url);
    const parseData = await data.json();
    setProductos(parseData);
    console.log(parseData);
  };

  const obtenerCategorias = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    const data = await fetch(url);
    const parseData = await data.json();
    setcategorias(parseData);
    console.log("categorias", parseData);
  };

  useEffect(() => {
    obtenerProductos();
    obtenerCategorias();
  }, []);

  const handleCategory = (evt) => {
    setTitlecategory(evt);
    /* obtenerProductosByCategoria(evt); */
    const datosFiltrados = productos.filter((item) => item.category === evt);
    setProductCategory(datosFiltrados);
    console.log("lista de datos por categoria", datosFiltrados);
  };

  //obtner datos ingresados en el input
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  //realizar la busqueda
  const filterProduct = useMemo(
    () =>
      productos.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      }),
    [productos, search]
  );

  //busqueda al filtrar las categorias
  const buscarCategoria = useMemo(
    () =>
      productCategory.filter((cat) => {
        return cat.title.toLowerCase().includes(search.toLowerCase());
      }),
    [productCategory, search]
  );
  return (
    <Wrapper>
      <Title>
        {titleCategory ? <p>{titleCategory}</p> : <p>Lista de productos</p>}
        <Categorias>
          <Select
            placeholder="Categorias"
            onChange={(evt) => handleCategory(evt)}
          >
            {categias.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Categorias>
        <Search>
          <Buscador handleSearch={handleSearch} />
        </Search>
      </Title>
      <Container>
        {buscarCategoria.length > 0 ? (
          <>
            {buscarCategoria.map((item) => (
              <Card
                key={item.id}
                hoverable
                className="contenido"
                cover={<Image width={250} height={350} src={item.image} />}
              >
                <Meta
                  title={item.title}
                  description={`Precio: $${item.price} | ${item.category}`}
                />
              </Card>
            ))}
          </>
        ) : (
          <>
            {filterProduct.map((item) => (
              <Card
                key={item.id}
                hoverable
                className="contenido"
                //style={{width:250, height:500, marginBottom}}
                cover={<Image width={250} height={350} src={item.image} />}
              >
                <Meta
                  title={item.title}
                  description={`Precio: $${item.price} | ${item.category}`}
                />
              </Card>
            ))}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  background: white;
  //height:84vh;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  p {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    padding: 10px;
    font-weight: 600;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  .contenido {
    width: 250px;
    height: 470px;
    margin-bottom: 30px;
  }
`;
const Categorias = styled.div`
  padding: 10px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 2px solid #40a9ff !important;
    border-radius: 25px;
  }
`;

const Search = styled.div`
  padding: 10px;
`;

export default Productos;
