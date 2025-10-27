API RESTful para Gestión de Teachers
Descripción General

Esta API está desarrollada con Node.js y Express.js para gestionar información de profesores (Teachers).
El proyecto sigue buenas prácticas de desarrollo backend, incluyendo autenticación, pruebas automatizadas y un flujo de CI/CD con GitHub Actions.

Características principales:

CRUD completo para profesores: crear, leer, actualizar y eliminar.

Seguridad mediante autenticación básica.

Pruebas unitarias e integración con Jest y Supertest.

Integración continua y despliegue automatizado.

Código modular y escalable siguiendo el patrón MVC simplificado.

Objetivos
General

Desarrollar una API RESTful funcional, segura y escalable para la gestión de profesores, asegurando la correcta autenticación y la ejecución de pruebas antes de cualquier despliegue.

Específicos

Implementar arquitectura modular y escalable.

Proteger los endpoints con autenticación básica.

Configurar pruebas automatizadas para todos los endpoints.

Automatizar el flujo de desarrollo mediante CI/CD.

Documentar de manera profesional, incluyendo ejemplos de request/responses y diagramas.

Arquitectura del Proyecto

Se sigue un patrón MVC simplificado:

Carpeta / Archivo	Función
routes/	Define endpoints y métodos HTTP.
middlewares/	Funciones intermedias: autenticación, validación de datos y manejo de errores.
controllers/	Lógica de negocio para cada recurso.
models/	Modelos de datos (estructura de los profesores).
tests/	Pruebas unitarias e integración.
index.js	Inicializa el servidor y enlaza rutas y middlewares.
.github/workflows/nodejs.yml	Pipeline CI/CD para integración y despliegue.

Esta arquitectura permite extender funcionalidades sin modificar el código existente.

Tecnologías Utilizadas
Categoría	Herramienta	Descripción
Lenguaje	JavaScript (Node.js)	Plataforma backend para ejecutar JS en servidor.
Framework	Express.js	Construcción de APIs RESTful.
Pruebas	Jest, Supertest	Pruebas unitarias e integración de endpoints.
Control de versiones	Git / GitHub	Gestión de código y colaboración.
CI/CD	GitHub Actions	Automatización de pruebas e integración.
Autenticación	Basic Authentication	Seguridad mediante usuario y contraseña en Base64.
Seguridad y Buenas Prácticas

Autenticación básica en todos los endpoints.

Validación de datos para prevenir errores e inyecciones.

Manejo de errores estandarizado con códigos HTTP: 200, 400, 404, 500.

Dependencias actualizadas para evitar vulnerabilidades.

Pruebas automatizadas para garantizar estabilidad en cada despliegue.

Separación de responsabilidades para mantener código limpio y escalable.

Endpoints
GET /api/teachers

Obtiene todos los profesores.

Request:

GET /api/teachers
Authorization: Basic YWRtaW46MTIzNA==


Response (200 OK):

[
  { "id": 1, "name": "Danny", "age": 25, "enroll": true },
  { "id": 2, "name": "Laura", "age": 30, "enroll": false }
]

GET /api/teachers/:id

Obtiene información de un profesor específico por ID.

Request:

GET /api/teachers/1
Authorization: Basic YWRtaW46MTIzNA==


Response (200 OK):

{ "id": 1, "name": "Danny", "age": 25, "enroll": true }


Error 404 (si no existe):

{ "error": "Teacher no encontrado" }

POST /api/teachers

Crea un nuevo profesor.

Request:

POST /api/teachers
Authorization: Basic YWRtaW46MTIzNA==
Content-Type: application/json

{
  "name": "Miguel",
  "age": 28,
  "enroll": true
}


Response (200 OK):

{ "id": 3, "name": "Miguel", "age": 28, "enroll": true }


Error 400 (datos incompletos):

{ "error": "Datos del teacher incompletos" }

PUT /api/teachers/:id

Actualiza un profesor existente.

Request:

PUT /api/teachers/1
Authorization: Basic YWRtaW46MTIzNA==
Content-Type: application/json

{
  "name": "Daniel",
  "age": 26,
  "enroll": true
}


Response (200 OK):

{ "id": 1, "name": "Daniel", "age": 26, "enroll": true }


Error 404 (si no existe):

{ "error": "Teacher no encontrado" }

DELETE /api/teachers/:id

Elimina un profesor.

Request:

DELETE /api/teachers/1
Authorization: Basic YWRtaW46MTIzNA==


Response (200 OK):

{ "message": "Teacher eliminado correctamente" }


Error 404 (si no existe):

{ "error": "Teacher no encontrado" }

Pruebas Automatizadas

Se usa Jest y Supertest para asegurar que los endpoints funcionan correctamente.

// tests/api.test.js
const request = require('supertest');
const app = require('../index');

describe('API Teachers', () => {
  it('GET /api/teachers debe retornar un array', async () => {
    const res = await request(app).get('/api/teachers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/teachers debe crear un nuevo teacher', async () => {
    const newTeacher = { name: 'Dani', age: 25, enroll: true };
    const res = await request(app).post('/api/teachers').send(newTeacher);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Dani');
  });
});


Recomendación: Capturar los resultados de Postman para documentación:

![Resultados de pruebas](./imagenes/tests_postman.png)

CI/CD con GitHub Actions
Pipeline

Build: instalación de dependencias y ejecución de pruebas.

Validación: asegurando que todas las pruebas pasen.

Deploy: simulación de despliegue local.

Archivo de configuración:

name: Node.js CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: success()
    steps:
      - uses: actions/checkout@v3
      - run: |
          echo "Iniciando despliegue simulado..."
          echo "Copiando archivos al entorno local..."
          echo "Despliegue exitoso"


Diagrama CI/CD (Mermaid):

flowchart TD
    A[Push a rama main] --> B[Checkout del código]
    B --> C[Configurar Node.js]
    C --> D[Instalar dependencias]
    D --> E[Ejecutar pruebas]
    E --> F[Validación del pipeline]
    F --> G[Despliegue simulado]
    G --> H[Entrega local completada]

Instalación y Ejecución Local
git clone https://github.com/DannyD-developer/API-DANNY-DIAZ.git
cd API-DANNY-DIAZ
npm install
npm start


La API estará disponible en:

http://localhost:3000

Seguridad Recomendada

Cambiar usuario y contraseña predeterminados (admin:1234) en producción.

Usar HTTPS para cifrar la comunicación.

Limitar intentos de login para prevenir ataques de fuerza bruta.

Validar y sanitizar datos de entrada.

Autoría

Danny Díaz – Estudiante de Ingeniería de Software, Colombia
GitHub: DannyD-developer
