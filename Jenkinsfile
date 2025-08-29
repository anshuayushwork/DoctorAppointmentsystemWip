pipeline {
  agent any
  environment {
    REGISTRY = 'DOCKERHUB_USER'
    BACKEND_IMAGE = "${REGISTRY}/docbook-backend:latest"
    FRONTEND_IMAGE = "${REGISTRY}/docbook-frontend:latest"
  }
  stages {
    stage('Checkout'){ steps{ checkout scm } }
    stage('Build Backend'){
      steps{
        dir('backend'){ sh 'mvn -B -q -DskipTests clean package' }
      }
    }
    stage('Build Frontend'){
      steps{
        dir('frontend'){ sh 'npm ci || npm i'; sh 'npm run build' }
      }
    }
    stage('Docker Build & Push'){
      steps{
        script{
          sh "docker build -t ${BACKEND_IMAGE} backend"
          sh "docker build -t ${FRONTEND_IMAGE} frontend"
          sh "echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin"
          sh "docker push ${BACKEND_IMAGE}"
          sh "docker push ${FRONTEND_IMAGE}"
        }
      }
    }
    stage('Deploy to Minikube'){
      steps{
        sh "kubectl set image deployment/docbook-backend backend=$BACKEND_IMAGE --record || true"
        sh "kubectl set image deployment/docbook-frontend frontend=$FRONTEND_IMAGE --record || true"
        sh "kubectl apply -f k8s/k8s-minikube.yaml"
      }
    }
  }
}
