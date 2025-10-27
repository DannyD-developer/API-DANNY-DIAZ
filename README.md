# **API para Gestión de Teachers**

## **Descripción del Proyecto**

Este proyecto consiste en una **API RESTful** desarrollada con **Node.js** y **Express.js**, cuyo objetivo es permitir la gestión de información de profesores (teachers).  
El proyecto está diseñado para demostrar la correcta implementación de buenas prácticas de desarrollo backend, incluyendo:

- **Seguridad** mediante autenticación básica.  
- **Pruebas automatizadas** para asegurar la calidad del código.  
- **Integración y Despliegue Continuos (CI/CD)** con GitHub Actions para automatizar el flujo de desarrollo.  

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre el recurso **Teacher**, manteniendo la modularidad y escalabilidad del proyecto.  
Se enfoca en la separación de responsabilidades y la organización del código, lo que facilita su mantenimiento y futuras expansiones.

---

## **Alcance y Objetivos**

### **Objetivo General**
El objetivo principal es desarrollar una API funcional, segura y escalable que permita la gestión completa de profesores, asegurando la autenticación de usuarios y la correcta ejecución de pruebas automatizadas antes de cualquier despliegue.

### **Objetivos Específicos**
- Implementar una **arquitectura modular y escalable**, separando rutas, middlewares, modelos y controladores para mejorar la mantenibilidad.  
- Incorporar **autenticación básica** para proteger los endpoints y evitar accesos no autorizados.  
- Configurar **pruebas automatizadas** usando Jest y Supertest para validar el comportamiento esperado de cada endpoint.  
- Establecer un **flujo de CI/CD** con GitHub Actions que garantice la integración continua y la entrega controlada de cambios.  
- Documentar de manera **técnica y profesional** todo el desarrollo de la API, incluyendo ejemplos, instrucciones de ejecución y diagramas de flujo.

---

## **Arquitectura del Proyecto**

### **Patrón de Arquitectura**
Se utiliza un patrón **MVC (Model-View-Controller) simplificado**, que permite organizar el proyecto en capas bien definidas y con responsabilidades separadas:

- **Rutas (`routes/`)**: Contienen la definición de los endpoints de la API y los métodos HTTP asociados.  
- **Middlewares (`middlewares/`)**: Implementan funciones intermedias como la **autenticación**, validación de datos y manejo de errores.  
- **Pruebas (`api.test.js`)**: Se encargan de realizar **tests automatizados** que verifican el comportamiento correcto de la API.  
- **Archivo principal (`index.js`)**: Inicializa el servidor, configura los middlewares y enlaza las rutas.  
- **Pipeline CI/CD (`.github/workflows/nodejs.yml`)**: Define las etapas de integración, pruebas y despliegue automatizado.

Esta arquitectura facilita la **extensibilidad**, permitiendo agregar nuevas funcionalidades sin afectar el código existente.

---

## **Tecnologías Utilizadas**

La API se desarrolla utilizando tecnologías modernas que garantizan eficiencia, escalabilidad y seguridad:

| Categoría | Herramienta o Librería | Descripción |
|------------|------------------------|-------------|
| Lenguaje de programación | JavaScript (Node.js) | Plataforma para ejecutar código JavaScript en el servidor. |
| Framework | Express.js | Framework minimalista para construir aplicaciones web y APIs RESTful. |
| Pruebas automatizadas | Jest, Supertest | Permiten realizar pruebas unitarias y de integración de los endpoints. |
| Control de versiones | Git / GitHub | Gestión del código fuente y colaboración entre desarrolladores. |
| Integración y despliegue | GitHub Actions | Automatización del flujo de trabajo para pruebas y despliegue continuo. |
| Autenticación | Basic Authentication personalizada | Seguridad de acceso a los endpoints mediante usuario y contraseña codificados en Base64. |

---

## **Seguridad y Buenas Prácticas**

Para garantizar la **seguridad y confiabilidad** de la API, se implementaron las siguientes prácticas:

- **Autenticación básica** mediante middleware, protegiendo todos los endpoints.  
- **Validación de datos** recibidos en las solicitudes para evitar inconsistencias o ataques de inyección.  
- **Manejo de errores controlado**, devolviendo códigos HTTP estandarizados según la situación (200, 400, 404, 500).  
- **Dependencias actualizadas** para evitar vulnerabilidades conocidas.  
- **Pruebas automatizadas** antes de cada despliegue para asegurar que los cambios no rompan funcionalidades existentes.  

---

## **Endpoints Principales**

La API ofrece los siguientes endpoints para la gestión de profesores:

| Método | Ruta | Descripción | Autenticación |
|--------|------|--------------|---------------|
| GET | `/api/teachers` | Obtiene todos los profesores registrados. | Sí |
| GET | `/api/teachers/:id` | Obtiene la información de un profesor específico mediante su ID. | Sí |
| POST | `/api/teachers` | Permite crear un nuevo profesor en el sistema. | Sí |
| PUT | `/api/teachers/:id` | Actualiza la información de un profesor existente. | Sí |
| DELETE | `/api/teachers/:id` | Elimina un profesor del sistema. | Sí |

### **Autenticación**
Todos los endpoints requieren autenticación básica:  
admin 1234

## **Pruebas Automatizadas**

Se utilizan **Jest** y **Supertest** para garantizar la correcta funcionalidad de los endpoints.  
Estas pruebas permiten detectar errores de manera temprana y asegurar la estabilidad de la API durante el desarrollo.

### **Ejemplo de pruebas**
```javascript
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


Pipeline CI/CD

La API cuenta con un flujo automatizado de integración y despliegue usando GitHub Actions:

Etapas del pipeline

Build: Instalación de dependencias y ejecución de pruebas automatizadas.

Validación: Confirmación de que todas las pruebas pasaron correctamente.

Deploy: Simulación de despliegue local de la API en caso de éxito.

Archivo de configuración
name: Node.js CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout del código
        uses: actions/checkout@v3
      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Instalar dependencias
        run: npm install
      - name: Ejecutar pruebas
        run: npm test

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: success()
    steps:
      - name: Checkout del código
        uses: actions/checkout@v3
      - name: Simular despliegue local
        run: |
          echo "Iniciando despliegue simulado..."
          echo "Copiando archivos al entorno local..."
          echo "Despliegue exitoso"

Visualización del pipeline
![Pipeline CI/CD](./imagenes/pipeline_ci_cd.png)

Diagrama del flujo CI/CD
flowchart TD
    A[Push a rama main] --> B[Checkout del código]
    B --> C[Configurar Node.js]
    C --> D[Instalar dependencias]
    D --> E[Ejecutar pruebas automatizadas]
    E --> F[Validación del pipeline]
    F --> G[Despliegue simulado]
    G --> H[Entrega local completada]
