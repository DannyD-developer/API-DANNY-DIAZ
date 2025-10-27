# API para Gestión de Teachers

## Descripción del Proyecto

Este proyecto consiste en una **API RESTful** desarrollada con **Node.js** y **Express.js**, cuyo objetivo es permitir la gestión de información de profesores (teachers).  
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

### Estructura del Repositorio
API-DANNY-DIAZ
├── .github
│ └── workflows
│ └── nodejs.yml
├── middlewares
│ └── auth.js
├── routes
│ └── teachersroutes.js
├── api.test.js
├── index.js
├── package.json
├── package-lock.json
└── README.md

yaml
Copy code

---

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

### Ejemplo de Autenticación
Encabezado HTTP requerido:  
Authorization: Basic YWRtaW46MTIzNDU=

yaml
Copy code
(Usuario: `admin`, Contraseña: `12345`)

---

## Pruebas Automatizadas

Las pruebas se desarrollaron utilizando **Jest** y **Supertest** para validar el comportamiento de los endpoints.  
Estas pruebas se ejecutan tanto de manera local como dentro del flujo de CI/CD definido en GitHub Actions.

### Ejecución de pruebas localmente
```bash
npm test
Espacio para incluir imagen de pruebas en Postman o Jest:

scss
Copy code
![Pruebas API](./imagenes/tests_postman.png)
Pipeline CI/CD
El flujo de Integración y Despliegue Continuos (CI/CD) está configurado mediante un archivo de GitHub Actions ubicado en:

bash
Copy code
.github/workflows/nodejs.yml
Etapas del pipeline
Build: Instalación de dependencias y ejecución de pruebas automatizadas.

Deploy: Simulación de despliegue local tras una compilación exitosa.

Contenido del workflow principal
yaml
Copy code
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
Espacio para incluir captura del pipeline exitoso:

scss
Copy code
![Pipeline CI/CD](./imagenes/pipeline_ci_cd.png)
Diagrama del flujo CI/CD
mermaid
Copy code
flowchart TD
    A[Push a rama main] --> B[Checkout del código]
    B --> C[Configurar Node.js]
    C --> D[Instalar dependencias]
    D --> E[Ejecutar pruebas automatizadas]
    E --> F[Validación del pipeline]
    F --> G[Despliegue simulado]
    G --> H[Entrega local completada]

    %% Estilo uniforme para todos los cuadros
    style A fill:#f0f0f0,stroke:#333,stroke-width:2px
    style B fill:#f0f0f0,stroke:#333,stroke-width:2px
    style C fill:#f0f0f0,stroke:#333,stroke-width:2px
    style D fill:#f0f0f0,stroke:#333,stroke-width:2px
    style E fill:#f0f0f0,stroke:#333,stroke-width:2px
    style F fill:#f0f0f0,stroke:#333,stroke-width:2px
    style G fill:#f0f0f0,stroke:#333,stroke-width:2px
    style H fill:#f0f0f0,stroke:#333,stroke-width:2px
Instalación y Ejecución Local
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
El servidor se ejecutará en:

arduino
Copy code
http://localhost:3000
Documentación del Flujo CI/CD
El proceso de automatización se ejecuta cada vez que se realiza un push a la rama main.
El flujo incluye las siguientes etapas:

Build: Instalación de dependencias y ejecución de pruebas.

Validación: Verificación del estado del pipeline.

Despliegue: Simulación de entrega local en caso de éxito.

Espacio para incluir un diagrama del flujo CI/CD:

scss
Copy code
![Flujo CI/CD](./imagenes/flujo_ci_cd.png)
Autor
Danny Díaz
Estudiante de Ingeniería de Software
Colombia
GitHub: DannyD-developer

Conclusión
El proyecto cumple con los principios fundamentales del desarrollo backend moderno, garantizando:

Estructura modular y mantenible.

Implementación de autenticación segura.

Automatización mediante un pipeline de CI/CD funcional.

Pruebas unitarias exitosas.

Documentación técnica completa y profesional.
