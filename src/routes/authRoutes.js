
import { json, Router } from 'express';
const routes = Router()


/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account using name, email, and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: John@123
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User registered successfully.
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 688a3d4e5f6a7b8c9d0e1234
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john@example.com
 *       400:
 *         description: Validation error or email already exists.
 *       500:
 *         description: Internal server error.
 */
routes.post("/register", async (req, res)=>{
    res.state(201).json({
        successful:"true",
        message:"user rej successfully"
    })
});




// GET route
// routes.get('/getall', (req, res) => {
//     console.log("GET /getall hit");
//     res.send("Server is dey");
// });

export default routes


