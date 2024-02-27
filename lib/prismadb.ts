import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}

const client =
  globalThis.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL, // Accediendo a la variable de entorno para la URL de la base de datos
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
