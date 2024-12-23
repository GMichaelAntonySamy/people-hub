FROM node:14-alpine as production
# Install necessary dependencies
RUN apk add g++ make py3-pip
# Set working directory
WORKDIR /home/node/app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps --only=production
# Add volume for avatars
VOLUME /apps/avatars /home/node/app/public/avatars
# Copy the rest of the application files
COPY . .
# Build the application
RUN npm run build
# Expose the application port
EXPOSE 3001
# Start the application
CMD ["npm", "start"]