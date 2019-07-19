# Docker, docker-compose e criação de ambientes

## Comandos do Docker

Verificar versão instalada do docker:

```
> docker --help
```

Verificar versão instalada do docker-compose:

```
> docker-compose --help
```

Listar imagens já baixadas pelo docker:

```
> docker images
```

Baixar imagems

```
> docker pull <nome ou id da imagem>
```

Remover imagens (containers dependentes precisam ser removidos antes)

```
> docker rmi <nome ou id da imagem>
```

Listar containers em execução:

```
> docker ps
ou
> docker container ls
```

Iniciar um container já existente:

```
> docker start <nome do container>
```

Parar um container em execução:

```
> docker stop <nome do container>
```

Remover um container (precisa estar parado):

```
> docker rm <nome do container>
```

## Iniciando o ambiente

Baixar imagem do mongo e do node:

```
> docker pull mongo
> docker pull node:alpine
```

Executar um container a partir de uma imagem:

```
> docker run --name dbmongo -p 27017:27017 -d mongo
```

--name: define um alias para o container

-p: A porta 27017 do container será redirecionada para a porta 27017 do host

-d: executa em background

## Criando a aplicação node-docker

```
> mkdir node-docker && cd node-docker
> yarn init -y
```

## Criando o Dockerfile

O Dockerfile server para definir as instruções de criação de um container baseado em uma imagem.

```
> touch Dockerfile
```

Foi criada também uma aplicação Node simples (index.js) para testar a imagem do node.

O diretório node_modules local foi removido por não ser necessário, já que ser montado no container docker com o Dockerfile ao instalar as dependências necessárias para a aplicação.

```
> rm -rf node_modules
```

## Criando uma imagem através do arquivo Dockerfile

Para criar a imagem configurada no Docker file usa-se:

```
> docker build -t rocketseat-node --network=host .
```

-t: target, nome da imagem a ser criada

--network=host: para usar a mesma rede do host (usei para tratar o problema de estar por trás de um proxy)

. : diretório corrente onde está o Dockerfile

## Executando um container

Para executar um container a partir dessa imagem:

```
> docker run --name appnode -p 3000:3000 -d rocketseat-node
```

Se desejar executar uma nova instância da aplicação, basta mudar alguns parâmetros:

```
> docker run --name appnode2 -p 3001:3000 -d rocketseat-node
```

E teremos uma nova instância executando na porta 3001 do host. Observe que a porta do container continua a mesma, 3000.
