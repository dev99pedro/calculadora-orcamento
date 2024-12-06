## 🧮 Calculadora de Orçamentos de Template modular

## 📦 Objetivo

Aplicação web responsiva e modular que permita aos usuários calcular orçamentos de forma intuitiva e dinâmica. A aplicação usa React como biblioteca principal para construção de interfaces, e aproveita o Styled Components para estilização dinâmica.

## 💻 Tecnologias Utilizadas

## ⚛️ React:
Usado para criar interfaces de usuário dinâmicas e componentes reutilizáveis, baseados em estados e propriedades.

## 🎨 Styled Components:
Biblioteca CSS-in-JS para estilização de componentes, permitindo maior modularidade e encapsulamento de estilos.

## 🛠️ ESLint com Padrão Airbnb:
Configurado para garantir a consistência e qualidade do código, evitando erros e garantindo boas práticas de desenvolvimento.

## 🐳 Docker e Docker Compose:
Utilizados para criar containers isolados para desenvolvimento e execução da aplicação, promovendo consistência entre ambientes.

## 🔌 Dev Containers:
Configuração de desenvolvimento remoto com arquivos devcontainer.json, otimizando a experiência no Visual Studio Code e garantindo um ambiente configurado automaticamente.

## 🔌 Remote Explorer (VS Code Extension):
Permite trabalhar diretamente dentro dos containers do Docker sem sair do editor, promovendo maior produtividade.

## 🌐 Estrutura do Projeto

A estrutura do projeto segue uma abordagem modular e escalável:

```
    /app (Container principal no Docker)
    ├── /src (Código-fonte React)
    │   ├── /components (Componentes reutilizáveis)
    │   ├── /pages (Páginas do aplicativo)
    │   ├── App.tsx (Entrada principal)
    │   └── index.tsx (Renderização do React)
    ├── package.json (Dependências do projeto)
    ├── docker-compose.yml (Configuração do Docker Compose)
    └── devcontainer.json (Configuração do DevContainer)
    📂 Arquivos e Configurações

```

## docker-compose.yml
Define os serviços do Docker, como a aplicação React (react-app).
Permite a criação e gerenciamento dos containers.
Dockerfile
Configura a imagem base do container, com Node.js e dependências do projeto.
Expõe a porta 3000 para desenvolvimento.

## devcontainer.json
Configurações para o VS Code Remote Development.
Define extensões a serem instaladas automaticamente, como Styled Components e ESLint.

## 🛠️ Ambiente de Desenvolvimento
Passos para Configuração
Clone o Repositório:

```
git clone https://gitlab.pmweb.com.br/coding/pmweb/calculadora-de-orcamentos-template-modular.git
cd calculadora-orcamentos
```

Inicialize o Docker Compose:
```
docker-compose up --build
```
Abra o Projeto no VS Code com Remote Explorer:

Certifique-se de que o Docker Desktop esteja rodando.
Use a extensão Remote Explorer para abrir o container diretamente.

## ⚙️ Vantagens do Setup
Ambiente Reproduzível:
Todo o ambiente é configurado automaticamente via Docker, garantindo que funcione da mesma forma em todas as máquinas.

Integração Contínua:
Com a configuração de ESLint e Docker, é fácil manter um padrão de código para o projeto

## Modularidade e Manutenção:
A estrutura do projeto facilita a adição de novos componentes e páginas sem comprometer a organização.

## Desempenho:
Usando Docker no WSL, o desempenho no Windows é melhorado, com menos uso de recursos.

## Detalhamento das tecnologias

## ⚛️ React

**React** é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, desenvolvida pelo Facebook. Ela permite que você crie **componentes reutilizáveis** e gerencie o **estado** de forma eficiente. Sua principal vantagem é a capacidade de **atualizar** e **renderizar** apenas as partes necessárias da interface, o que melhora a performance e a experiência do usuário.

Com React, você pode criar **SPAs (Single Page Applications)** de maneira declarativa, tornando o código mais simples e fácil de manter.

## 🎨 Styled-Components

**Styled-components** é uma biblioteca para estilizar componentes no React, que utiliza o conceito de **CSS-in-JS**. Com ela, você escreve o **CSS** diretamente dentro do código JavaScript, vinculando os estilos a componentes específicos. Isso melhora a organização do código e evita conflitos de CSS, pois os estilos são encapsulados dentro dos próprios componentes.

Exemplo:

```
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  
  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return <Button>Click me</Button>;
}

```


É possível aplicar estilos condicionais ou baseados em props e estado diretamente no componente.

```
const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`;
```

## 🛠️ ESLint com Padrão Airbnb

ESLint é uma ferramenta de linting para JavaScript que ajuda a manter a qualidade do código, identificando problemas de estilo e de possíveis erros no código. O Airbnb JavaScript Style Guide é um dos guias de estilo mais populares, e a configuração do ESLint com esse padrão ajuda a manter um código consistente e legível.

## 🐳 Docker

Docker é uma plataforma de containers que permite empacotar e distribuir aplicativos de forma consistente, independente do ambiente. Ao usar o Docker, você pode criar contêineres que contêm todos os recursos necessários para rodar uma aplicação, como bibliotecas, dependências e o próprio sistema operacional, garantindo que o aplicativo funcione de maneira idêntica em qualquer máquina.

Com o Docker, você pode criar, testar e implantar aplicações em diferentes ambientes de forma mais eficiente.

💻 Como Instalar o Docker Desktop no Windows

Para instalar o Docker no Windows, siga esses passos:

Baixe o Docker Desktop no site oficial: https://www.docker.com/products/docker-desktop/.
Execute o instalador e siga as instruções na tela.

Pré-requisitos
Windows 10 (build 19041 ou superior).

## 🔌 Extensão Remote Explorer do VSCode

A Remote Explorer do VSCode é uma extensão que permite conectar seu editor diretamente a ambientes remotos, como containers Docker, máquinas virtuais, ou até mesmo servidores remotos. Ela facilita o trabalho de desenvolvimento em containers e em ambientes que não são locais, melhorando a produtividade ao acessar e editar o código diretamente no container sem sair do VSCode.

Ao usar a extensão, você pode:

Explorar arquivos de sistemas remotos.
Rodar comandos diretamente no terminal do ambiente remoto.
Editar arquivos no container com a mesma experiência de edição local.
Para usar a extensão, instale-a no VSCode e configure a conexão com seu ambiente remoto.

## 🗂️ Arquivo devcontainer.json

O arquivo devcontainer.json é utilizado pelo Visual Studio Code Remote Development para configurar ambientes de desenvolvimento dentro de containers Docker. Ele define as configurações do container, como imagem Docker, extensões do VSCode a serem instaladas e variáveis de ambiente, criando um ambiente de desenvolvimento consistente para todos os desenvolvedores.

Esse arquivo permite que você tenha um ambiente de desenvolvimento configurado automaticamente, sem necessidade de manualmente instalar dependências e ferramentas.

💡 Vantagens de Usar o devcontainer.json com Extensões Remotas
O uso do devcontainer.json com extensões remotas oferece uma série de vantagens, principalmente quando trabalhamos em equipe:

Consistência: Todos os desenvolvedores utilizam o mesmo ambiente, com as mesmas ferramentas e dependências.
Facilidade de configuração: Configurações como instalações de dependências, extensões e ajustes são feitas automaticamente ao abrir o projeto.
Isolamento: O ambiente de desenvolvimento está isolado, garantindo que seu projeto não entre em conflito com outras configurações de máquina.
Facilidade de colaboração: Novos membros da equipe podem começar a trabalhar rapidamente sem a necessidade de configurar o ambiente manualmente.

## ⚡️ Rodar o Docker pelo WSL no Windows (Opcional)

tutorial microsoft:

https://learn.microsoft.com/pt-br/windows/wsl/install

Rodar o Docker através do WSL no Windows tem algumas vantagens notáveis, especialmente no que diz respeito ao desempenho:

Desempenho melhorado: O Docker no WSL 2 roda nativamente no Linux, o que proporciona desempenho superior, especialmente em comparação com a virtualização tradicional.
Menor sobrecarga de recursos: O WSL 2 utiliza menos recursos do sistema em comparação com máquinas virtuais tradicionais.
Compatibilidade com o ambiente Linux: Usar o Docker com WSL garante que o ambiente de desenvolvimento seja o mais próximo possível do Linux, o que é ideal para produção.
Integração com o Windows: O WSL 2 facilita a integração entre o sistema de arquivos do Windows e os containers, permitindo que você acesse facilmente os arquivos do seu sistema Windows a partir do container.
Com essas vantagens, você pode criar um ambiente de desenvolvimento mais rápido e eficiente, aproveitando os benefícios do Linux sem sair do Windows.