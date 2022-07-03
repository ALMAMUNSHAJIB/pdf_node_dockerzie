# FROM ubuntu
# RUN apt update
# WORKDIR /app
# COPY echo.sh .
# CMD ["./echo.sh"]
# #RUN ./echo.sh

# FROM node:10-alpine
# #RUN apt update
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# WORKDIR /home/node/app
# COPY package*.json ./
# USER node
# RUN npm install
# COPY --chown=node:node . .
# EXPOSE 8080
# CMD [ "node", "app.js" ]


FROM node:17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 8080
CMD [ "node", "app.js"]


