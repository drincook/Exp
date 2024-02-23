// Importa los tipos necesarios de Next.js
import type { NextApiRequest, NextApiResponse } from "next";
// Importa NextAuth
import NextAuth from "next-auth";
// Importa la función para obtener el usuario actual
import getCurrentUser from "@/app/actions/getCurrentUser";
// Importa las opciones de autenticación
import { authOptions } from "../../../utils/authRoute";

// Función asincrónica para obtener el usuario
const getUser = async () => {
  const user = await getCurrentUser();
  return user;
};

// Inicializa NextAuth con las opciones de autenticación
const handler = NextAuth(authOptions);

// Manejo de diferentes métodos HTTP
export default function routeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Procesar solicitud GET
    // Aquí puedes llamar a la función handler.handle para manejar la solicitud GET
    return handler.handle(req, res);
  } else if (req.method === "POST") {
    // Procesar solicitud POST
    // Aquí puedes llamar a la función handler.handle para manejar la solicitud POST
    return handler.handle(req, res);
  } else {
    // Manejar cualquier otro método HTTP
    res.status(405).end(); // Devuelve un error de método no permitido
  }
}
