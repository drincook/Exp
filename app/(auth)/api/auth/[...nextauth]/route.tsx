// Importa los tipos necesarios de Next.js
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
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

// Sobrescribe el método `handle` de NextAuth para personalizar el manejo de la solicitud
handler.handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Obtiene el usuario actual
    const user = await getUser();
    // Si no hay usuario y la URL de la solicitud comienza con "/api", redirecciona a "/login"
    if (!user && req.url?.startsWith("/api")) {
      return res.redirect("/login");
    }

    // Maneja la solicitud utilizando NextAuth
    return await handler(req, res);
  } catch (error) {
    // Maneja los errores y devuelve una respuesta de error
    console.log("Error in nextauth handle", error);
    return res.status(500).send(error);
  }
};

// Exporta la función `handler` como el controlador predeterminado de la API
export default handler;

// Exporta funciones nombradas para manejar los métodos HTTP GET y POST
export const GET: NextApiHandler = async (req, res) => {
  return await handler.handle(req, res);
};

export const POST: NextApiHandler = async (req, res) => {
  return await handler.handle(req, res);
};
