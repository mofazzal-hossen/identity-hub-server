
import { Router } from 'express';
const routes = Router()


/**
 * @openapi
 * /api/v1/auth/getall:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Success
 */
routes.get("/getall", (req, res) => {
  res.json({
    success: true,
    message: "Server Running",
  });
});



export default routes


