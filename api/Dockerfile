FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i
RUN npx prisma generate
CMD npm run dev