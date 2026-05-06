# Base image — the OS + runtime you're building on top of
FROM node:20-alpine

# Set the working directory INSIDE the container
WORKDIR /app

# Copy package files first (for caching — explained below)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the port your app runs on (documentation + networking)
EXPOSE 3001

# The command that runs when the container starts
CMD ["npm", "run", "dev"]