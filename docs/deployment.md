# Deployment Guide

## Prerequisites
- Node.js 18+
- AWS Account
- AWS CLI configured
- Serverless Framework

## Backend Deployment

1. Install dependencies:
```bash
cd backend
npm install
```

2. Deploy to AWS:
```bash
serverless deploy
```

3. Note the API Gateway URL from output

## Frontend Deployment

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update API URL in `.env`

4. Run locally:
```bash
npm start
```

5. Build for production:
```bash
npm run build
```

## AWS Resources Created
- Lambda Functions (properties, tenants)
- DynamoDB Tables (properties, tenants)
- API Gateway REST API