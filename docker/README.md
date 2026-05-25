### Build image

Đứng ở root project:
```bash
docker build -f docker/Dockerfile -t chat-app:v1 .
```

### Kiểm tra image

```bash
docker images
```

### Chạy Container

```bash
docker run -d -p 3000:80 --name chat-container chat-app:v1
```

### Debug nếu lỗi

Xem log:
```bash
docker logs chat-container
```

Vào container:
```bash
docker exec -it chat-container sh
