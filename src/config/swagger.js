

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Identity Hub API",
      version: "1.0.0",
      description: "Identity Hub Backend API Documentation",
    },
    servers: [
      {
        url: "http://localhost:5020",
      },
    ],
  },
  apis: ["./src/routes/*.js"], //  Swagger comment 
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };