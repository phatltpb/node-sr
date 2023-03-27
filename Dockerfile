FROM node:18 as buid
WORKDIR /app
ENV MODE = .env
COPY  ./package.*json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","index.js"]