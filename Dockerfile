# Use a base Node image
FROM node:16

# Create a directory for the application
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Run Prisma generate
RUN npx prisma generate --schema=./src/external/prisma/schema.prisma

# You can expose the port your app runs on
# Don't use 5432 if it's the port for PostgreSQL
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]
