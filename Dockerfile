# Escolha uma imagem base leve com Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie apenas os arquivos de dependências para otimizar o cache
COPY package.json package-lock.json ./

# Instale as dependências usando npm
RUN  npm install --legacy-peer-deps


# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta padrão do React (3000)
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "start"]
