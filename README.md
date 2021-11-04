# API de Games
Esta API é utilizada para o consumo de informações sobre games
## Endpoints
### GET / games
Esse endpoint é responsável por retornar a lista de games cadastrados no banco de dados
### Parametros
Nenhum
### Respostas
##### Ok! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os games. 

Exemplo de resposta:
```

[
    {
        "id": 10,
        "title": "It is take two - definitive edition",
        "price": 60,
        "year": 2020,
        "createdAt": "2021-11-03T17:26:38.000Z",
        "updatedAt": "2021-11-03T17:27:11.000Z"
    },
    {
        "id": 9,
        "title": "assassins creed - valhalla",
        "price": 60,
        "year": 2020,
        "createdAt": "2021-10-27T13:14:37.000Z",
        "updatedAt": "2021-10-27T13:39:13.000Z"
    },
    {
        "id": 2,
        "title": "sea of thieves - gold editon",
        "price": 40,
        "year": 2019,
        "createdAt": "2021-10-26T14:42:04.000Z",
        "updatedAt": "2021-10-26T16:08:27.000Z"
    },
    {
        "id": 1,
        "title": "call of duty - Warzone",
        "price": 60,
        "year": 2018,
        "createdAt": "2021-10-26T14:39:17.000Z",
        "updatedAt": "2021-10-27T13:41:44.000Z"
    }
]

```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso signifca que aconteceu alguma falha durante o processo de requisição da autenticação. Motivos: Token inválid, Token expirado.

Exemplo de resposta:

```
{
    "err": "Token inválido"
}

```

### POST / auth
Esse endpoint é responsável por autenticar o usuário e realizar o processo de login
### Parametros

e-mail: E-mail do usuário cadastrado no sistema

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail

Exemplo
```
{
    "email":"arlesson@gmail.com",
    "password": 123
}
```

### Respostas
##### Ok! 200
Caso essa resposta aconteça, você vai receber o token jwt para conseguir acessar endpoints protegidos na API. 

Exemplo de resposta:
```

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmxlc3NvbkBnbWFpbC5jb20iLCJpYXQiOjE2MzYwNDY2MjAsImV4cCI6MTYzNjIxOTQyMH0.Yc5RtESvz_vtV_zOUrSBg7-wL6MoZ0ecsjOKRr_mkhs"
}

```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso signifca que aconteceu alguma falha durante o processo de requisição da autenticação. 
Motivos: Senha ou E-mail incorretos.

Exemplo de resposta:

```
{
    err: 'Credenciais inválidas'
}

```
