import React from 'react';  
import Noticia from './components/Noticia';  
import './App.css';   

function App() {  
  const noti = [
    {
      id: 0,  
      imgSrc: "src/assets/sky.jpg",     
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non molestie nunc. Curabitur vivera malesuada placerat. Etiam quis metus eget leo semper suscipit. Etiam pellentesque nisi et dui mattis, accusam rutrum feliz laoreet. Nulla facilisi. Supendisse vitae consectetur magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra turpis ac lacus consequat, ornare rhoncus neque aliquet. In solicitudin ultrices nunc, eu elementum magna placerat ut. Duis laoreet justo turpis. Nunc tempor lectus ac bibendum scelerisque.",
      alt: "Sky",
      avatar: "src/assets/avatar01.png",
      titulo: "Titulo 1",
      fecha: "19 de octubre de 2024", 
      likesIniciales: 10
    },
    {
      id: 1,
      imgSrc: "src/assets/sea.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non molestie nunc. Curabitur vivera malesuada placerat. Etiam quis metus eget leo semper suscipit. Etiam pellentesque nisi et dui mattis, accusam rutrum feliz laoreet. Nulla facilisi. Supendisse vitae consectetur magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra turpis ac lacus consequat, ornare rhoncus neque aliquet. In solicitudin ultrices nunc, eu elementum magna placerat ut. Duis laoreet justo turpis. Nunc tempor lectus ac bibendum scelerisque.",
      alt: "Sea",
      avatar: "src/assets/avatar02.png",
      titulo: "Titulo 2",
      fecha: "19 de octubre de 2024",  
      likesIniciales: 20
    },
    {
      id: 2,
      imgSrc: "src/assets/tux.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non molestie nunc. Curabitur vivera malesuada placerat. Etiam quis metus eget leo semper suscipit. Etiam pellentesque nisi et dui mattis, accusam rutrum feliz laoreet. Nulla facilisi. Supendisse vitae consectetur magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra turpis ac lacus consequat, ornare rhoncus neque aliquet. In solicitudin ultrices nunc, eu elementum magna placerat ut. Duis laoreet justo turpis. Nunc tempor lectus ac bibendum scelerisque.",
      alt: "Tux",
      avatar: "src/assets/avatar03.png",
      titulo: "Titulo 3",
      fecha: "19 de octubre de 2024", 
      likesIniciales: 30
    },
    {
      id: 3,
      imgSrc: "src/assets/mario.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non molestie nunc. Curabitur vivera malesuada placerat. Etiam quis metus eget leo semper suscipit. Etiam pellentesque nisi et dui mattis, accusam rutrum feliz laoreet. Nulla facilisi. Supendisse vitae consectetur magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra turpis ac lacus consequat, ornare rhoncus neque aliquet. In solicitudin ultrices nunc, eu elementum magna placerat ut. Duis laoreet justo turpis. Nunc tempor lectus ac bibendum scelerisque.",
      alt: "Mario",
      avatar: "src/assets/avatar04.png",
      titulo: "Titulo 4",
      fecha: "19 de octubre de 2024", 
      likesIniciales: 40
    },
  ];

  return (
    <div>
      {noti.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
}

export default App;
