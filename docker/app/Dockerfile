FROM node:latest
ADD package.json package.json
RUN npm install
ADD ./dist/dist.js dist.js
CMD ["node", "dist.js"]