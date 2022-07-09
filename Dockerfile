FROM node:alpine

WORKDIR /app/frontend

COPY . .

RUN npm i

CMD ["npm", "run", "start"]
