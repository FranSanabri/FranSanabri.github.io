import styled from "styled-components";

 export const CardsCointer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: flex-start;
    width: 93.1%;
    margin: auto;
    padding: 4em;
    border-radius: 15px;
    overflow-x: scroll;
    align-items: center;
    background: url(https://images8.alphacoders.com/642/642527.jpg);
    scrollbar-width: thin; /* Anchura de la barra */
   scrollbar-color: #ccc #f5f5f5; /* Color de la barra */
   &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
   background: #091a04;
    border-radius: 10px;
  }
    &::-webkit-scrollbar-thumb:hover {
      background: #1f590e;
    }
    

    `;

    

    