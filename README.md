# Panel de Métricas de Google Ads

Este proyecto es un panel de métricas de Google Ads desarrollado con React. Permite visualizar métricas como clics e impresiones a través de gráficos interactivos, y ofrece la opción de generar datos aleatorios para visualización en caso de falla en la autenticación de Google.

## Video de Demostración

Haga Click sobre la imagen para ver el siguiente video para una demostración de la aplicación:

[![Demo](https://img.youtube.com/vi/qZasMI78HQo/maxresdefault.jpg)](https://youtu.be/qZasMI78HQo)


## Visita el Proyecto

Puedes acceder al proyecto en vivo en: [https://tech-interview-beta.vercel.app/](https://tech-interview-beta.vercel.app/)

## Instrucciones de Configuración

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
2. **Instala las Dependencias**
   ```bash
   npm install

3. **Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables con sus respectivos valores:**
   ```bash
    REACT_APP_GOOGLE_CLIENT_ID=tu_google_client_id
    REACT_APP_GOOGLE_CLIENT_SECRET=tu_google_client_secret
    REACT_APP_GOOGLE_AUTH_URL=https://accounts.google.com/o/oauth2/auth
    REACT_APP_GOOGLE_TOKEN_URL=https://oauth2.googleapis.com/token
    REACT_APP_GOOGLE_API_URL=https://googleads.googleapis.com/v17/
    REACT_APP_GOOGLE_DEVELOPER_TOKEN=tu_google_developer_token
    REACT_APP_GOOGLE_LOGIN_CUSTOMER_ID=tu_google_login_customer_id
    REACT_APP_GOOGLE_CUSTOMER_ID=tu_google_customer_id

4. **Ejecuta el Proyecto**
   ```bash
   npm start

5. **Despliegue para Producción**

Para desplegar en una plataforma como Vercel, sigue las instrucciones específicas de la plataforma para conectar tu repositorio y configurar variables de entorno.

## Explicación de las Elecciones de Diseño

- React y React Router: Utilizamos React para construir la interfaz de usuario debido a su flexibilidad y eficiencia. React Router se usa para gestionar la navegación entre diferentes secciones de la aplicación, proporcionando una experiencia de usuario fluida.

- Tailwind CSS: Optamos por usar Tailwind CSS para la estilización debido a su capacidad para crear diseños responsivos y modernos de manera rápida y eficiente.

- Chart.js y react-chartjs-2: Para la visualización de datos, elegimos la biblioteca Chart.js junto con el wrapper react-chartjs-2, que ofrece gráficos interactivos y personalizables para mostrar métricas como clics e impresiones.

- Hooks Personalizados: Utilizamos hooks personalizados para gestionar la autenticación de Google y la obtención de métricas, separando la lógica de negocio de la lógica de presentación y mejorando la organización del código.

- Almacenamiento Local: Utilizamos el localStorage para almacenar tokens de autenticación y métricas, asegurando que los datos persistan entre sesiones y no dependan únicamente de la memoria de ejecución.


## Comentarios de Código

- src/index.js: El punto de entrada de la aplicación React. Configura el QueryClientProvider para la gestión del estado de las solicitudes.

- src/hooks/useGoogleAuth.js: Hook responsable de la autenticación de Google. Genera la URL de autorización y maneja el callback de autenticación para almacenar tokens en localStorage.

- src/hooks/useFetchMetrics.js: Hook que maneja la obtención de métricas de Google Ads. Incluye lógica para manejar errores y almacenar métricas en localStorage.

- src/utils/chartGoogleAdsUtils.js: Funciones utilitarias para generar datos y opciones para los gráficos de Chart.js. Incluye lógica para crear gráficos basados en las métricas proporcionadas y definir opciones interactivas.

- src/components/GoogleAdsMetricsContent.js: Componente principal para mostrar el contenido de las métricas de Google Ads, incluidos gráficos y botones para acciones como "Authorize with Google" y "Generate Random Data".

- src/services/metricsService.js: Contiene funciones para hacer llamadas a la API de Google Ads, incluida la lógica para obtener y actualizar métricas, y para manejar tokens de acceso.



## Para obtener las credenciales de Google, sigue estos pasos:

Crea un Proyecto en Google Cloud Console:

- Visita Google Cloud Console.
  Crea un nuevo proyecto o selecciona uno existente.
   Habilita la API de Google Ads:

- Ve a la Biblioteca de API.
  Busca "Google Ads API" y habilítala para tu proyecto.
  Configura el Consentimiento de OAuth:

- En el Panel de OAuth, configura la pantalla de consentimiento de OAuth.
  Agrega la URL de redirección autorizada (por ejemplo, http://localhost:3000/oauth2callback).
- Crea Credenciales de OAuth 2.0:

Ve a la sección Credenciales.
Crea un nuevo ID de cliente de OAuth 2.0 y una clave secreta para aplicaciones web.
Asegúrate de agregar las URL de redirección autorizadas.
Obtén tu Token de Desarrollador de Google Ads:

Sigue las instrucciones en la documentación de Google Ads para obtener el token de desarrollador y el ID del cliente.
https://developers.google.com/google-ads/api/docs/start

## Feedback

Si tienes algun Feedback, just let me know guimartinsalmeida@gmail.com


## Authors

- Guilherme Martins

