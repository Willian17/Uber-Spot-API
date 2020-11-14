# Uber-Spot-API


### Criar um spot (ponto virtual)

POST https://uber-spot.herokuapp.com/spot

#### request.body: 

    {
      "latitude": -16.4446755,
      "longitude": -54.6981687
    }
    
#### response da request: 

    {
      "_id": "5fb0587cbe86941d03bb4c7f",
      "coordinates": [
        -16.4446755,
        -54.6981687
      ],
      "__v": 0
    }
    
### Listar um spot mais próximo

GET https://uber-spot.herokuapp.com/spot

#### parametros (query): 

     longitude = -54.6265194: (obrigatório)
     latitude = -16.4325369 (obrigatório)
     distance = 5 (opcional)
     
obs: a unidade de mediada do parâmetro distance é KM, e tem valor default 1
    
#### response da request: 

    [
      {
        "_id": "5fb04ec2a0de9c15003386f8",
        "coordinates": [
          -16.4317953,
          -54.6277827
        ],
        "__v": 0
      },
      {
        "_id": "5fb04f8ca0de9c15003386f9",
        "coordinates": [
          -16.4337956,
          -54.6618452
        ],
        "__v": 0
      }
    ]

