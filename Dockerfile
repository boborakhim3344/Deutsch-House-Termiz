# 1-bosqich: Loyihani build qilish (Node.js)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2-bosqich: Nginx orqali yuqori tezlikda tarqatish (Production)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA (Single Page Application) routing uchun Nginx sozlamasi
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
