# Uber-Spot-API

## Sobre o Projeto
Pensamos então em criar uma funcionalidade para o aplicativo da Uber que chamamos de “Uber Sport”, seria um ponto virtual que tem como objetivo servir de referência dentro destas regiões de dificil mobilidade urbana. Com o Uber Spot as pessoas destas regiões podem criar este pontos que irão servir de referência para os motoristas, e também para um ponto de encontro para compartilhar a corrida, economizando no trajeto. 

Com o UBER SPOT temos vantagens para todos, usuários usando mais a plataforma para seus deslocamentos e motoristas se sentindo mais seguros para aceitar corridas que antes evitavam, com o Uber SPOT existe também maior chance de sugerir corridas compartihadas. Assim fomentamos a utilização do UBER nestas regiões, melhorando a mobilidade delas através da inclusão e empoderamento dos usuários!

<hr/>

### Criar um spot (ponto virtual)

POST https://uber-spot.herokuapp.com/spot

#### exemplo de request.body, Informando Latitude e Longitude do spot: 

    {
      "latitude": -16.4446755,
      "longitude": -54.6981687
    }
    
#### exemplo de response, retornando como resposta o spot criado:

    {
      "latitude": -16.4446755,
      "longitude": -54.6981687
    }
    
<hr/>

### Listar os spots

GET https://uber-spot.herokuapp.com/spot
    
#### exemplo de response: 

    [
      {
        "latitude": -16.4446744,
        "longitude": -54.6981687
      },
      {
        "latitude": -14.4446744,
        "longitude": -52.6981687
      },
      {
        "latitude": -4.4246744,
        "longitude": 44.6976687
      },
    ]
    
<hr/>   
 
## Tecnologias usadas na API:
 - Node.js: execução de JavaScript construído no motor V8 JavaScript do Chrome.
 - Express.js: framework de micro serviços do nodejs
 - Mongodb: Banco de dados NoSQL
 - Mongoose: gerenciar banco dados pelo node.js
 - nodemon: compilador de desenvolvimento
