# Stage 1: build static files
FROM node:20-alpine AS builder
WORKDIR /app

# copy package files first (cache npm install)
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
RUN npm install

# copy source
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: copy a minimal nginx config if bạn cần router history fallback
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
