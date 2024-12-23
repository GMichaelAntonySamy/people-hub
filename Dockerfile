FROM node:14-alpine as production
RUN apk add g++ make py3-pip
WORKDIR /home/node/app
COPY package*.json ./
VOLUME /apps/avatars /home/node/app/public/avatars
RUN npm install --legacy-peer-deps --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]