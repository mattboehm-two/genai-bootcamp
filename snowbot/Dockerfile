
# Use a lightweight Node.js image for the final stage
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .



# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Change ownership of the app directory
RUN chown -R appuser:appgroup /app

USER appuser

# Expose the port the app will run on
EXPOSE 8080

# The command to start the application
CMD ["npm", "start"]
