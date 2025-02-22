<h1 align=center> Burger Queen </h1>
<h4 align=center>Status do projeto: Em construção :construction:</h4>

## Índice

- [1. Descrição](#1-descrição)
- [2. Definição de Produto](#2-definição-de-produto)
- [3. Layout](#3-layout)
- [4. Tecnologias Utilizadas](#4-tecnologias-utilizadas)
- [5. Informações Gerais](#5-informações-gerais)

## 1. Descrição
Interface desenvolvida para um restaurante fictício onde é possível o cadastro e login do funcionário, anotar pedidos e envia-los diretamente para a cozinha, tudo isso através de um tablet. Você pode acessar a aplicação <a href='https://jaquelinedeoliveira93.github.io/SAP007-burger-queen-api-client/' target=_blank rel='noreferrer noopener'>aqui</a> utilizando a seguinte credencial:
>
>|email                   |senha|
>|------------------------|------|
>|soberanoburger@teste.com|123456|
>

Informações do cliente:
> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã e outro menu para o resto do dia.
>
> **Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
> frango ou vegetariano. Além disso, por um adicional de R\$ 1,00 , eles podem
> adicionar queijo **ou** ovo.

## 2. Definição de Produto
#### [História de usuário 1] Garçom/Garçonete deve poder entrar no sistema :white_check_mark:

Eu, como garçom/garçonete quero entrar no sistema de pedidos.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Acessar uma tela de login.
* Inserir email e senha.
* Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
* Entrar no sistema de pedidos caso as credenciais forem corretas.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente :white_check_mark:

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem em um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos :white_check_mark:

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos ordenados à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir :white_check_mark:

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marcar os pedidos que foram entregues.

##### Definição de pronto

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido for
  finalizado. Tudo isso para poder ter estatísticas no futuro.

## 3. Layout
As cores escolhidas para esse projeto foram determinadas com base em uma foto relacionada ao tema do projeto.

<div align='center'>
  <img src='./src/img/cores.png' alt='foto e paleta de cores aplicada no projeto' width=546px heigth=281px>
</div>

<h4 align=center>Protótipo de alta fidelidade</h4>
<div align=center>
  <img src='./src/img/alta%20fidelidade.png' alt='protótipo da alta fidelidade feito no Figma' width=540px heigth=367px>
</div>

<br>
Após teste de usabilidade algumas mudanças foram feitas, como por exemplo, acrescentar imagens dos produtos. Este é o resultado até o momento:

<br><div align=center>
  <div display=inline>
    <img src='./src/img/Screen%20Register.png' alt='screenshot da página de login' width=385px heigth=289px>
    <img src='./src/img/Screen%20Login.png' alt='screenshot da página onde faz o cadastro' width=385px heigth=289px>
  </div>
  <div display=inline>
    <img src='./src/img/Screen%20hall.png' alt='screenshot da página onde faz os pedidos' width=385px heigth=289px>
    <img src='./src/img/Screen%20Ready%20Orders.png' alt='screenshot da página os pedidos prontos ficam' width=385px heigth=289px>
  </div>
</div>

## 4. Tecnologias utilizadas
- React
- JavaScript
- API
- CSS3
- Node.js
- Git

## 5. Informações Gerais
- Planejamento do projeto: [Trello](https://trello.com/b/T2odPJNl/projeto-burguer-queen-api-client)
- Protótipo do projeto: [Figma](https://www.figma.com/file/5QCy797NDEBQXnQmebx6VT/Burguer-Queen-(API-Client)-(Copy))
- Projeto desenvolvido por Jaqueline de Oliveira - [GitHub](https://github.com/jaquelinedeoliveira93) - [LinkedIn](https://www.linkedin.com/in/jaquelinedeoliveiraa/)
