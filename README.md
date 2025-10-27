# API para Gestión de Teachers

## Descripción del Proyecto

Este proyecto consiste en una **API restful** desarrollada con **Node.js** y **Express.js**, cuyo objetivo es permitir la gestión de información de profesores (teachers).  
La aplicación implementa autenticación básica, pruebas automatizadas y un flujo de **Integración y Despliegue Continuos (CI/CD)** mediante **GitHub Actions**.

El propósito es demostrar la correcta aplicación de buenas prácticas de desarrollo backend, enfocadas en modularidad, seguridad, calidad de código y automatización del flujo de trabajo.

---

## Alcance y Objetivos

### Objetivo General
Desarrollar una API funcional que implemente operaciones CRUD (Create, Read, Update, Delete) sobre el recurso **Teacher**, garantizando autenticación, pruebas y despliegue automatizado.

### Objetivos Específicos
- Implementar una arquitectura modular y escalable.  
- Incorporar autenticación básica para proteger los endpoints.  
- Configurar pruebas automatizadas con Jest y Supertest.  
- Establecer un flujo de CI/CD utilizando GitHub Actions.  
- Documentar de forma técnica el desarrollo y funcionamiento de la API.

---

## Arquitectura del Proyecto

### Patrón de Arquitectura
Se utilizó un modelo **MVC (Model-View-Controller) simplificado**, que permite una separación clara de responsabilidades:

- **Rutas (`routes/`)**: Definen los endpoints de la API.  
- **Middlewares (`middlewares/`)**: Contienen la lógica de autenticación.  
- **Pruebas (`api.test.js`)**: Ejecutan verificaciones automáticas de funcionalidad.  
- **Archivo principal (`index.js`)**: Configura el servidor y los componentes principales.  
- **Pipeline CI/CD (`.github/workflows/nodejs.yml`)**: Define el flujo automatizado de integración y despliegue.


## Tecnologías Utilizadas

| Categoría | Herramienta o Librería |
|------------|------------------------|
| Lenguaje de programación | JavaScript (Node.js) |
| Framework | Express.js |
| Pruebas automatizadas | Jest, Supertest |
| Control de versiones | Git / GitHub |
| Integración y despliegue | GitHub Actions |
| Autenticación | Basic Authentication personalizada |

---

## Seguridad y Buenas Prácticas

- Autenticación básica mediante middleware (`middlewares/auth.js`).  
- Validación y manejo controlado de errores.  
- Uso de códigos de estado HTTP estandarizados.  
- Dependencias actualizadas.  
- Ejecución de pruebas automatizadas antes de cada despliegue.  

---

## Endpoints Principales

| Método | Ruta | Descripción | Autenticación |
|--------|------|--------------|---------------|
| GET | `/api/teachers` | Obtiene todos los profesores | Sí |
| GET | `/api/teachers/:id` | Obtiene un profesor por ID | Sí |
| POST | `/api/teachers` | Crea un nuevo profesor | Sí |
| PUT | `/api/teachers/:id` | Actualiza la información de un profesor | Sí |
| DELETE | `/api/teachers/:id` | Elimina un profesor existente | Sí |

### Autenticación
(Usuario: `admin`, Contraseña: `1234`)

---

## Pruebas Automatizadas

Las pruebas se desarrollaron utilizando Jest y Supertest para validar el comportamiento de los endpoints.  
Estas pruebas se ejecutan tanto de manera local como dentro del flujo de CI/CD definido en GitHub Actions.

### Ejecución de pruebas localmente
// api.test.js
const request = require('supertest');
const express = require('express');
const teachersRoutes = require('./routes/teachersroutes');

const app = express();
app.use(express.json());
app.use('/api/teachers', teachersRoutes);

describe('Pruebas API Teachers', () => {
  it('Debe obtener la lista de teachers (GET)', async () => {
    const res = await request(app).get('/api/teachers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Debe agregar un nuevo teacher (POST)', async () => {
    const newTeacher = { name: 'Danny', age: 25, enroll: true };
    const res = await request(app)
      .post('/api/teachers')
      .send(newTeacher);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Danny');
  });
});

          
## Foto ci y cd


## Diagrama del flujo


## Instalacion y ejecucion local
Clonar el repositorio
bash
Copy code
git clone https://github.com/DannyD-developer/API-DANNY-DIAZ.git
cd API-DANNY-DIAZ
Instalar dependencias
bash
Copy code
npm install
Ejecutar el servidor
bash
Copy code
npm start

## Ejecucion
http://localhost:3000

## Autoria
Autor
Danny Díaz
Estudiante de Ingeniería de Software
Colombia
GitHub: DannyD-developer

## Conclusion

El proyecto cumple con los principios fundamentales del desarrollo backend moderno, garantizando:

Estructura modular y mantenible.

Implementación de autenticación segura.

Automatización mediante un pipeline de CI/CD funcional.

Pruebas unitarias exitosas.

Documentación técnica completa y profesional.
