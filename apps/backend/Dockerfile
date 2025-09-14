FROM node:20

WORKDIR /app


COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY eslint.config.mjs ./
COPY apps/backend ./apps/backend
COPY libs ./libs

RUN npm install
RUN npm run build:be
# RUN npm prune --production
EXPOSE 3000

RUN ls -R apps/backend/dist

CMD ["node", "apps/backend/dist/main.js"]