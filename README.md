# Containerized Chat Application with CI/CD, Kubernetes and Monitoring

A cloud-native real-time chat application built with containerization, Kubernetes orchestration, CI/CD automation, and monitoring stack integration.

The project focuses on applying DevOps practices rather than only building a chat application.

---

# Project Architecture

```text
Developer
    │
    │ Push code
    ▼
GitHub Repository
    │
    ▼
GitHub Actions (CI/CD)
    │
    ├── Install dependencies
    ├── Build application
    ├── Build Docker image
    └── Push image to Docker Hub
            │
            ▼
        Docker Hub
            │
            ▼
       Kubernetes Cluster
            │
            ├── Deployment
            ├── Service
            ├── Ingress
            │
            ▼
      Chat Application Pods
            │
            ▼
Monitoring Stack
    │
    ├── Prometheus
    ├── Grafana
    └── Alertmanager
```

---

# Features

- Real-time chat application
- Containerized application using Docker
- Automated CI/CD pipeline using GitHub Actions
- Docker image publishing to Docker Hub
- Kubernetes deployment
- Multi-pod deployment with scaling
- Monitoring using Prometheus
- Dashboard visualization using Grafana
- Dashboard-as-Code provisioning
- Service monitoring using ServiceMonitor
- Health monitoring for cluster resources

---

# Technologies Used

## Frontend

- React
- Socket.IO Client

Purpose:

- User interface
- Real-time communication

---

## Backend

- Node.js
- Express.js
- Socket.IO

Purpose:

- API handling
- WebSocket communication
- Chat server processing

---

## Containerization

- Docker
- Docker Compose
- Nginx

Purpose:

- Package application into containers
- Reverse proxy and static content serving

---

## CI/CD

- GitHub Actions

Pipeline stages:

1. Checkout source code
2. Install dependencies
3. Build application
4. Build Docker image
5. Push image to Docker Hub

---

## Container Registry

- Docker Hub

Purpose:

- Store Docker images
- Provide images for Kubernetes deployment

---

## Kubernetes Components

### Deployment

Responsible for:

- Managing application pods
- Scaling replicas
- Rolling updates

Example:

```yaml
replicas: 2
```

---

### Service

Responsible for:

- Internal communication
- Service discovery

Type:

```yaml
NodePort
```

---

### Ingress

Responsible for:

- External routing
- Reverse proxy

---

### Pods

Current deployment:

```text
chat-app
├── Pod 1
└── Pod 2
```

---

# Monitoring Stack

Monitoring implemented using:

## Prometheus

Responsible for:

- Collecting metrics
- Scraping application metrics
- Monitoring Kubernetes resources

Metrics examples:

- CPU usage
- Memory usage
- Pod status
- Service health
- Restarts
- Node information

---

## Grafana

Responsible for:

- Dashboard visualization
- Cluster health monitoring
- Resource tracking

Dashboard includes:

### Cluster Health

- Running Pods
- Failed Pods
- Service Count
- Restart Count

### Resource Usage

- CPU Usage per Pod
- Memory Usage per Pod
- Node CPU usage
- Node Memory usage

### Kubernetes Resources

- Pod names
- Service names
- Namespace information
- Pod health status

---

## Alertmanager

Responsible for:

- Alert handling
- Notification management

---

## ServiceMonitor

Responsible for:

- Discovering monitored services automatically

Example:

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: chat-monitor
spec:
  selector:
    matchLabels:
      app: chat-app
```

---

## Dashboard Provisioning

Dashboard implemented using:

- ConfigMap
- Grafana Sidecar
- Dashboard Providers

Flow:

```text
Dashboard JSON
        ↓
ConfigMap
        ↓
Grafana Sidecar
        ↓
Dashboard Provider
        ↓
Grafana
```

Benefits:

- Dashboard-as-Code
- Version control support
- Automatic loading
- No manual import required

---

# Project Structure

```text
Containerized-Chat-App-with-CI-CD-Pipeline
│
├── chat_application/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docker/
│   └── Dockerfile
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── monitoring/
│   │
│   ├── grafana/
│   │   ├── dashboards/
│   │   │   └── cluster-health.json
│   │   │
│   │   └── datasources/
│   │
│   ├── service-monitors/
│   │   └── chat-monitor.yaml
│   │
│   └── prometheus-values.yaml
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── docker-compose.yml
│
└── README.md
```

---

# Running Locally

Clone repository

```bash
git clone <repository-url>
cd Containerized-Chat-App-with-CI-CD-Pipeline
```

Install dependencies

```bash
npm install
```

Run application

```bash
npm start
```

---

# Docker

Build image

```bash
docker build -t chat-app .
```

Run container

```bash
docker run -p 3000:80 chat-app
```

---

# Kubernetes Deployment

Deploy resources

```bash
kubectl apply -f k8s/
```

Check deployment

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

---

# Monitoring Deployment

Install monitoring stack

```bash
helm install monitoring prometheus-community/kube-prometheus-stack \
-f monitoring/prometheus-values.yaml
```

Access Grafana

```bash
minikube service monitoring-grafana
```

Access Prometheus

```bash
minikube service monitoring-kube-prometheus-prometheus
```

---

# CI/CD Workflow

```text
Developer Push
        ↓
GitHub Actions
        ↓
Build Application
        ↓
Docker Build
        ↓
Docker Hub Push
        ↓
Kubernetes Deployment
```

---

# Learning Outcomes

Through this project:

- Applied containerization concepts
- Built CI/CD pipeline
- Worked with Kubernetes resources
- Implemented monitoring stack
- Implemented Dashboard-as-Code
- Learned cloud-native architecture
- Practiced DevOps workflow

---

# Future Improvements

- Add backend API metrics
- Add Horizontal Pod Autoscaler (HPA)
- Deploy to cloud provider
- Terraform infrastructure provisioning
- Add Slack/Email alerts
- Implement logging stack (ELK)

---

# Author

Nguyen Dinh Tri

University of Information Technology (UIT)

Computer Networks and Data Communications

<!-- # Containerized-Chat-App-with-CI-CD-Pipeline

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
``` -->