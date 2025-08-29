# Doctor Appointment — Production-Ready Monorepo

## Structure
- `backend/` Spring Boot 3 (REST + H2 + OpenAPI at `/swagger-ui.html`)
- `frontend/` Angular 17 (standalone components)
- `k8s/k8s-minikube.yaml` Deployments & Services (NodePort for frontend)
- `docker-compose.yml` local dev
- `Jenkinsfile` CI pipeline
- `DocBook.postman_collection.json` Postman requests

## Quick Start (Local)

### Backend
```bash
cd backend
mvn spring-boot:run
# Swagger UI: http://localhost:8080/swagger-ui.html
```

### Frontend
```bash
cd frontend
npm i
npm start
# Open http://localhost:4200
```

> Frontend calls Backend at `http://localhost:8080/api` (see `src/environments/environment.ts`).

## Docker (compose)
```bash
docker compose up --build
# Frontend: http://localhost:4200  | Backend: http://localhost:8080
```

## Kubernetes (minikube)
```bash
# Build & push images to your Docker Hub first, then update DOCKERHUB_USER in k8s YAML.
kubectl apply -f k8s/k8s-minikube.yaml
minikube service docbook-frontend-svc --url
```

## Jenkins
- Set credentials `DOCKERHUB_USER` and `DOCKERHUB_PASS` in Jenkins.
- Pipeline stages: build backend, build frontend, dockerize, push, deploy to K8s.

## REST Endpoints
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/doctors` • `POST /api/doctors`
- `GET /api/appointments` • `POST /api/appointments/book`
- `GET /api/appointments/doctor/{id}` • `GET /api/appointments/patient/{id}`
- `POST /api/appointments/{id}/status?value=APPROVED|REJECTED`


