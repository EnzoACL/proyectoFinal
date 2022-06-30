FROM node:16

EXPOSE 8080

WORKDIR /usr/src/app/
COPY . . 

WORKDIR /usr/src/app/proyectofrontend
RUN npm install
RUN npm run build
RUN rm .gitignore package.json package-lock.json public INFO.md src node_modules -rf

WORKDIR /usr/src/app/proyectobackend/
RUN npm install --omit=dev
RUN rm .gitignore package-lock.json .env -rf

ENTRYPOINT [ "npm", "start" ]