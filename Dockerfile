FROM node:20-slim AS builder
WORKDIR /app

# Erhöhe Node Memory Limit
ENV NODE_OPTIONS="--max-old-space-size=2048"

COPY package*.json ./
COPY package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline --no-audit --no-fund

COPY . .

# Optimierte Build-Konfiguration
RUN npm run build -- --logLevel=info

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
