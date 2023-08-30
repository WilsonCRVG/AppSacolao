import logo from "../../assets/logo.png";

import tomate from "../../assets/frutas/Tomate.png"
import abobora from "../../assets/frutas/Abóbora.png"
import batata from "../../assets/frutas/Batata.png"
import brocolis from "../../assets/frutas/Brócolis.png"
import pepino from "../../assets/frutas/Pepino.png"



const cesta = {
    topo:{
        titulo :"Detalhe da Cesta"
    },
    detalhes:{
        nome:"🛒 Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda:"Nome Fazenda",
        descricao:"Uma Cesta com produtos selecionados cuidadosamente da fazenda direta para sua cozinha",
        preco:"💲 40,00",
        botao:"Comprar"
    },
    itens:{
        titulo: "Itens da Cesta",
        lista: [
            {
                nome:"Tomate",
                imagem:tomate
            },
            {
                nome:"Batata",
                imagem:batata
            },
            {
                nome:"Brócolis",
                imagem:brocolis
            },
            {
                nome:"Pepino",
                imagem:pepino
            },
            {
                nome:"Abóbora",
                imagem:abobora
            },
        ]
    }
}

export default cesta;