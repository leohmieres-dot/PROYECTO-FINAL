📋 KanbanPro - Sistema de Gestión de Tareas
KanbanPro es una aplicación web diseñada para la organización de proyectos personales mediante la metodología Kanban. Permite a los usuarios gestionar su flujo de trabajo a través de tableros dinámicos, listas de estados y tarjetas de tareas.

🛠️ Stack Tecnológico
Backend: Node.js y Express.js.
Base de Datos: PostgreSQL con el ORM Sequelize.
Motor de Plantillas: Handlebars (HBS) con helpers personalizados.
Seguridad: Autenticación mediante JSON Web Tokens (JWT), encriptación de claves con Bcrypt y gestión de sesiones con Cookie-parser.

⚙️ Configuración del Proyecto
Sigue estos pasos para desplegar el proyecto localmente:

1. Requisitos previos
Tener instalado Node.js y una instancia de PostgreSQL activa.
2. Instalación de dependencias
Clona el repositorio o descarga los archivos, sitúate en la carpeta raíz y ejecuta:

Bash
npm install

3. Variables de Entorno
Crea un archivo .env en la raíz del proyecto y configura tus credenciales de base de datos:

Fragmento de código
DB_NAME=nombre_de_tu_db
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
JWT_SECRET=tu_clave_secreta_jwt 

4. Ejecución
Para iniciar el servidor, utiliza el siguiente comando:

Bash
node app.js

La aplicación estará disponible en http://localhost:3000.

📌 Funcionalidades Principales
Autenticación de Usuarios: Registro seguro e inicio de sesión protegido por JWT.
Gestión de Tableros: Los usuarios pueden crear y eliminar sus propios espacios de trabajo.
Flujo Kanban: Al crear un tablero, se generan automáticamente las columnas Pendiente, En Progreso y Finalizado.
Control de Tareas: Creación de tarjetas y transición entre estados mediante botones de acción.
Persistencia: Todos los datos se almacenan de forma relacional para garantizar la integridad de la información.

👤 Autor
Leo Mieres - Aprendiz