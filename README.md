# 🎓 IndeAccess: Sistema de Matrícula para el Colegio La Independencia

<p align="center">
  <img src="./client/public/Logo - IndeAccess.png" alt="Logo IndeAccess" width="100%">
</p>

## ✨ Descripción del Proyecto

**IndeAccess** es una innovadora aplicación web diseñada para transformar el proceso de matrícula e inscripción en instituciones educativas. Enfocada inicialmente en el **Colegio La Independencia**, este sistema digitaliza por completo el registro de estudiantes, eliminando las largas filas y la burocracia tradicional. Su objetivo es proporcionar una experiencia fluida y eficiente tanto para padres y acudientes como para el personal administrativo.

La plataforma está construida con un diseño **elegante, minimalista y profesional**, priorizando la **facilidad de uso y la accesibilidad** para todos los usuarios, desde adultos mayores hasta jóvenes.

---

## 🎯 Funcionalidades Clave

### 👨‍👩‍👧‍👦 Para Acudientes
- **Registro de Acudientes:** Un proceso robusto de registro que requiere la cédula de ciudadanía y otros datos personales para asegurar la autenticidad del acudiente. Un acudiente puede gestionar múltiples estudiantes.
- **Gestión de Cupos:** Posibilidad de separar cupos o inscribir a estudiantes de manera sencilla, verificando la disponibilidad en tiempo real.
- **Panel de Control:** Un dashboard intuitivo y seguro donde los acudientes pueden:
    - **Añadir y Gestionar Estudiantes:** Registrar nuevos estudiantes y ver el estado de sus matrículas.
    - **Visualización de Matrículas:** Acceder a un resumen detallado de la matrícula de cada estudiante, incluyendo los datos y documentos subidos.
    - **Eliminación de Cupos:** Opción para anular una matrícula o un cupo reservado.

### 💼 Para Administradores (Secretaría/Gestor)
- **Acceso Exclusivo:** Un acceso seguro y semi-oculto para el personal administrativo, que requiere un código de institución único para desbloquear el formulario de inicio de sesión.
- **Panel de Administración:** Un dashboard completo para la gestión total del sistema:
    - **Gestión de Estudiantes y Matrículas:** Acceso a todos los perfiles de estudiantes, con la posibilidad de verificar la información, documentos y fotos de los estudiantes.
    - **Gestión de Grupos:** Control sobre los grupos y la disponibilidad de cupos, permitiendo ajustes dinámicos.
    - **Visualización Detallada:** Un entorno para revisar y validar cada dato ingresado por los acudientes, asegurando la integridad de la información.

---

## 💻 Tecnologías Utilizadas

- **Frontend:**
    - **React.js:** Para una interfaz de usuario dinámica, moderna y responsiva.

- **Backend:**
    - **PHP:** Para la lógica del servidor, la gestión de la base de datos y la autenticación robusta.

---

## 🚀 Cómo Empezar

### Prerrequisitos
- Node.js (versión 20 o superior)
- npm
- Un servidor web con soporte para PHP (ej. Apache, Nginx)
- MySQL para la base de datos

### Instalación
1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git)
    cd nombre-del-repositorio
    ```
2.  **Instalar dependencias de frontend:**
    ```bash
    cd frontend
    npm install
    ```
3.  **Configurar el backend:**
    -   Crea tu base de datos y configura las credenciales en el archivo de conexión de PHP.
    -   Importa la estructura de la base de datos (schema.sql) ubicada en el directorio `./server/database/`.

4.  **Ejecutar la aplicación:**
    -   Inicia tu servidor web para el backend de PHP.
    -   Desde el directorio `frontend`, inicia el servidor de desarrollo de React:
        ```bash
        npm start
        ```

---

## 🤝 Colaboradores

-   [devMaiiCol06](https://github.com/devMaiiCol06)
-   [jhoan-sys](https://github.com/jhoan-sys)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.