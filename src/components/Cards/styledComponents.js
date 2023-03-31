import styled from "styled-components";

 export const CardsCointer = styled.div`
    border: 7px solid #000000;
    box-shadow: -9px 10px 5px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 85%;
    margin: auto;
    padding: 4em;
    border-radius: 15px;
    overflow-x: scroll;
    align-items: center;
    background: url(https://images8.alphacoders.com/642/642527.jpg);
    scrollbar-width: thin; /* Anchura de la barra */
   scrollbar-color: #ccc #f5f5f5; /* Color de la barra */
   &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
   background: #091a04;
    border-radius: 10px;
  }
    &::-webkit-scrollbar-thumb:hover {
      background: #1f590e;
    }
    

    `;

    

    