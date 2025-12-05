
# Use a lightweight Node.js image for the final stage
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to leverage Docker layer caching
COPY package.json ./

# Install production dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# The command to start the application
CMD ["npm", "start"]
