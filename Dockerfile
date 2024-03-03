FROM node:18 as development

WORKDIR /app

RUN npm install -g husky rimraf && \
    npm install -g @nestjs/cli
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
