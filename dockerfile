# Use an official Node.js runtime as a parent image
FROM node:18.17.0-alpine

# Set environment variables
ENV NODE_ENV production

# Set work directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the current directory contents into the container at /app
COPY . .

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "start"]
