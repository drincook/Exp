#!/bin/bash

# Generar Prisma Client
npx prisma generate

# Construir el proyecto Next.js
npm run build
