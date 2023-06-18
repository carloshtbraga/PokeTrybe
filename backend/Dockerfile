# usa essa imagem para o container
# caso ela não esteja no sistema, vai realizar o download da imagem
FROM node:18-alpine

# cria o diretório app e dá permissões de leitura/escrita para esse diretório recursivamente
RUN mkdir -p /app && chown -R node:node /app
USER node

# define o /app como o diretório raiz
WORKDIR /app

# copia os arquivos de configuração do projeto para o container
COPY --chown=node:node package*.json ./
# instala as dependências dentro do container
RUN npm install

# copia arquivos e diretórios para o container
COPY --chown=node:node src src
COPY --chown=node:node .editorconfig .
COPY --chown=node:node .eslintignore .
COPY --chown=node:node .eslintrc.json .
COPY --chown=node:node .sequelizerc .
COPY --chown=node:node tsconfig.json .
