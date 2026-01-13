FROM node:20-slim AS builder
WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# Optimierte Build-Konfiguration
RUN npm run build -- --logLevel=info

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
