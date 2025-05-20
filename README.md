#  Carrinho de Compras

Aplicação web que simula um carrinho de compras simples, onde é possível adicionar produtos com quantidade e calcular o valor total em tempo real.

## Sobre o projeto

Este projeto permite selecionar produtos, definir a quantidade desejada e visualizar os itens adicionados com seus respectivos preços. Ideal para simular o funcionamento básico de um carrinho de e-commerce.

###  Demonstração

![image](https://github.com/user-attachments/assets/1f00530e-95c9-4554-876f-a9677b9dde99)

## Funcionalidades

-  Selecionar produtos e quantidades.
-  Adicionar itens ao carrinho.
-  Limpar carrinho e reiniciar valor total.
-  Cálculo automático do total com base na quantidade.

##  Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts

##  Estrutura do projeto

```plaintext
carrinho-compras/
├── assets/
│   ├── carrinho-cinza.svg
│   └── icone-carrinho.svg
├── js/
│   └── app.js
├── style.css
├── index.html
└── README.md
```

## Como usar

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/carrinho-compras.git
```

2. Acesse a pasta do projeto:

```
cd carrinho-compras
```

3. Abra o arquivo index.html no navegador:

- Clique duas vezes no arquivo, ou
- Use uma extensão como Live Server no VS Code.

4. Adicione produtos e veja o total sendo atualizado automaticamente.

## Melhorias futuras

- Validação de entrada para impedir quantidades inválidas.
- Armazenar o carrinho no localStorage.
- Integração com uma API de produtos.
- Estilização responsiva aprimorada para dispositivos móveis.
