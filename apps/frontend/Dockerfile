FROM node:20

WORKDIR /app

COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY apps/frontend ./apps/frontend
COPY libs ./libs

RUN npm install
RUN npm run build:fe
RUN npm prune --production

RUN npm install -g serve
EXPOSE 3000

CMD ["serve", "-s", "apps/frontend/dist"]