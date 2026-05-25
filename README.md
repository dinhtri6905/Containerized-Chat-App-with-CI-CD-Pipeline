# Containerized-Chat-App-with-CI-CD-Pipeline

### Trình tự thực hiện
```bash
Git chat app nhỏ
        ↓
Dockerize
        ↓
Docker Compose
        ↓
Nginx reverse proxy
        ↓
GitHub Actions
        ↓
Push image lên Docker Hub
        ↓
Deploy Kubernetes
        ↓
Prometheus + Grafana 
        ↓
Terraform AWS
```

```bash
Containerized-Chat-App-with-CI-CD-Pipeline/
├── app/
│   └── chat_application/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
│
├── docker/
│   ├── Dockerfile
│   └── nginx.conf           
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml         
│   └── namespace.yaml
│
├── monitoring/
│   ├── grafana/
│   │   ├── dashboards/
│   │   │   └── cluster-health.json
│   │   └── datasources/
│   │
│   ├── service-monitors/
│   │   └── chat-monitor.yaml
│   │
│   └── prometheus-values.yaml
│
├── .github/
│   └── workflows/
│       └── docker-ci.yml
│
├── docker-compose.yaml
├── .dockerignore
├── README.md
└── .gitignore
```

#### Trong Kubernetes:
```bash
Docker image → Pod → Service → Ingress → Browser

run app: 
minikube service chat-service
# or
kubectl port-forward svc/chat-service 5000:80
```