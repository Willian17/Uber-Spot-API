# Uber-Spot-API


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
    
 
## Tecnologias usadas na API:
 - Node.js: execução de JavaScript construído no motor V8 JavaScript do Chrome.
 - Express.js: framework de micro serviços do nodejs
 - Mongodb: Banco de dados NoSQL
 - Mongoose: gerenciar banco dados pelo node.js
 - nodemon: compilador de desenvolvimento
