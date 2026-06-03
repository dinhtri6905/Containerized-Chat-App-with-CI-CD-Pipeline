# FROM node:18-alpine AS buidler

# WORKDIR /app

# # Fix webpack/react-scripts cũ với OpenSSL mới
# ENV NODE_OPTIONS=--openssl-legacy-provider

# # Copy file định nghĩa dependency
# COPY app/chat_application/package*.json ./

# # Cài đặt thư viện
# RUN npm install 

# # Copy toàn bộ source code
# COPY app/chat_application .

# # Build dự án
# RUN npm run build

# # Lệnh để chạy ứng dụng (Bạn THIẾU lệnh này)
# # Nếu là React dùng Vite, thường là 'npm run preview' hoặc node server
# # CMD ["npm", "start"]

# =================================================================

# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY app/chat_application/package*.json ./
RUN npm install --legacy-peer-deps

COPY app/chat_application .
RUN npm run build

# Stage 2: Serve stage (Dùng Nginx để chạy file HTML tĩnh)
# FROM nginx:alpine

# # React (Create React App) sinh thư mục build/
# COPY --from=builder /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
