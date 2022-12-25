FROM node:12
COPY app.js /
COPY package.json /
RUN npm install
CMD [ "node", "app.js" ]