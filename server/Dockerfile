FROM node:alpine
WORKDIR /server
COPY ./ ./
RUN npm install
EXPOSE 5050
CMD ["node", "index.js"]
