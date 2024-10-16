# Sistema de Gestión de Empleados

![Logo del Proyecto](ruta/al/logo.png) <!-- *(Opcional: Incluye un logo o captura de pantalla de la aplicación)* -->

## Descripción

Sistema de Gestión de Empleados es una aplicación full-stack desarrollada para el departamento de Recursos Humanos. Permite a los usuarios dar de alta, modificar, eliminar y visualizar información de empleados de manera eficiente. Los campos gestionados incluyen nombre, apellido, sueldo, departamento o área de la empresa y DNI.

## Tabla de Contenidos

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Instalación](#instalación)
  - [Prerequisitos](#prerequisitos)
  - [Configuración del Backend](#configuración-del-backend)
  - [Configuración del Frontend](#configuración-del-frontend)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Tecnologías Utilizadas

### Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes al backend.
- **CSS / SCSS**: Para el diseño y estilizado de los componentes.

### Backend

- **Spring Boot**: Framework para construir aplicaciones Java basadas en Spring.
- **Java 17**: Lenguaje de programación utilizado en el backend.
- **Spring Data JPA**: Para la gestión de la persistencia de datos.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Lombok**: Biblioteca para reducir el código boilerplate en Java.

### Otras Herramientas

- **Git**: Control de versiones.
- **Maven**: Gestión de dependencias y construcción del proyecto.
- **Node.js & npm**: Para gestionar paquetes y dependencias del frontend.

## Características

- **Gestión de Empleados**:
  - **Crear**: Alta de nuevos empleados con información detallada.
  - **Leer**: Visualización de la lista completa de empleados.
  - **Actualizar**: Modificación de datos existentes de empleados.
  - **Eliminar**: Eliminación de registros de empleados.
- **Validaciones**: Asegura la integridad de los datos ingresados.
- **Interfaz Intuitiva**: Diseño amigable para una fácil navegación y uso.
- **Conexión con Base de Datos**: Integración robusta con MySQL para el almacenamiento de datos.

## Instalación

### Prerequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Java 17**: [Descargar e instalar Java](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- **Maven**: [Descargar e instalar Maven](https://maven.apache.org/install.html)
- **Node.js y npm**: [Descargar e instalar Node.js](https://nodejs.org/)
- **MySQL**: [Descargar e instalar MySQL](https://www.mysql.com/downloads/)

### Configuración del Backend

1. **Clonar el Repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/sistema-gestion-empleados.git
    cd sistema-gestion-empleados/backend
    ```

2. **Configurar la Base de Datos**:

    - Crea una base de datos en MySQL llamada `rrhh_db` (o el nombre que prefieras).

    - Configura las credenciales de la base de datos en el archivo `application.properties` ubicado en `src/main/resources/`:

      ```properties
      spring.datasource.url=jdbc:mysql://localhost:3306/rrhh_db?useSSL=false&serverTimezone=UTC
      spring.datasource.username=tu_usuario
      spring.datasource.password=tu_contraseña
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true
      ```

3. **Construir y Ejecutar el Backend**:

    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

    El backend estará disponible en `http://localhost:8080`.

### Configuración del Frontend

1. **Navegar al Directorio del Frontend**:

    ```bash
    cd ../frontend
    ```

2. **Instalar Dependencias**:

    ```bash
    npm install
    ```

3. **Configurar el Servicio de Axios**:

    Asegúrate de que el servicio de Axios apunte al backend correcto. En el archivo de configuración de Axios (por ejemplo, `src/services/EmpleadoService.js`), verifica la URL base:

    ```javascript
    import axios from 'axios';

    const EMPLEADOS_API_BASE_URL = "http://localhost:8080/empleados";

    export default class EmpleadoService {
        // Métodos para realizar solicitudes HTTP
    }
    ```

4. **Ejecutar el Frontend**:

    ```bash
    npm start
    ```

    El frontend estará disponible en `http://localhost:3000`.

## Uso

1. **Acceder a la Aplicación**:

    Abre tu navegador y navega a `http://localhost:3000`.

2. **Gestión de Empleados**:

    - **Agregar Empleado**: Haz clic en el botón "Agregar Empleado" y completa el formulario con los datos del nuevo empleado.
    - **Editar Empleado**: En la lista de empleados, haz clic en el botón "Editar" correspondiente al empleado que deseas modificar.
    - **Eliminar Empleado**: En la lista de empleados, haz clic en el botón "Eliminar" correspondiente al empleado que deseas eliminar.
    - **Ver Detalles**: Haz clic en el empleado para ver más detalles.

## Estructura del Proyecto
```bash
sistema-gestion-empleados/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/dev/rrhh/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── SistemaGestionEmpleadosApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Contribuciones

¡Contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. **Fork el Repositorio**.
2. **Crea una Rama**: `git checkout -b feature/nueva-funcionalidad`
3. **Realiza tus Cambios**.
4. **Commit tus Cambios**: `git commit -m 'Agrega nueva funcionalidad X'`
5. **Push a la Rama**: `git push origin feature/nueva-funcionalidad`
6. **Abre un Pull Request**.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Contacto:**

- **Nombre**: [Tu Nombre]
- **Correo Electrónico**: [tu.email@ejemplo.com](mailto:tu.email@ejemplo.com)
- **LinkedIn**: [Tu LinkedIn](https://www.linkedin.com/in/tu-perfil/)
- **GitHub**: [tu-usuario](https://github.com/tu-usuario)

---

*¡Gracias por utilizar el Sistema de Gestión de Empleados! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.*

