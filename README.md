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
│   └── docker-compose.yml
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── terraform/
│   ├── vpc.tf
│   ├── ec2.tf
│   └── variables.tf
│
├── monitoring/
│   ├── prometheus.yml
│   └── grafana/
│
├── scripts/
│   ├── build.sh
│   └── deploy.sh
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── docs/
│   └── architecture.md
│
└── README.md
```
