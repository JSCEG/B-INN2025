# 🏢 BE INN 2025

**Plataforma de alquiler de espacios tipo Airbnb con efectos glassmorphism y diseño mobile-first**

## 🌟 Características

- 🎨 **Diseño Glassmorphism**: Efectos de cristal modernos y elegantes
- 📱 **Mobile-First**: Diseño completamente responsivo
- 🏢 **Múltiples Categorías**: Oficinas, estacionamientos, eventos, espacios especiales
- 🔍 **Búsqueda Avanzada**: Filtros por categoría, precio y ubicación
- ❤️ **Sistema de Favoritos**: Guarda tus espacios preferidos
- 📸 **Galería de Fotos**: Vista detallada con modales interactivos
- 🔐 **Autenticación**: Login con Google y Facebook
- 💬 **Sistema de Reseñas**: Calificaciones y comentarios de usuarios

## 🚀 Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: Glassmorphism, CSS Grid, Flexbox
- **Iconos**: Font Awesome
- **Imágenes**: Unsplash API
- **APIs**: Google Sign-In, Facebook SDK

## 📁 Estructura del Proyecto

```
B-INN2025/
├── index.html          # Página principal
├── detail.html         # Página de detalles del espacio
├── styles.css          # Estilos con glassmorphism
├── script.js           # Funcionalidad principal
├── detail-script.js    # Scripts para página de detalles
├── data.js             # Base de datos de espacios
├── test-modals.html    # Página de pruebas
├── debug-data.html     # Herramienta de debug
└── README.md           # Documentación
```

## 🎨 Paleta de Colores

- **Azul Oscuro**: `#0052A1`
- **Azul Medio**: `#0077CC`
- **Azul Claro**: `#3399FF`
- **Naranja**: `#FF7B00`

## 🖥️ Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/JSCEG/B-INN2025.git
```

2. Navega al directorio:
```bash
cd B-INN2025
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes live-server)
npx live-server
```

4. Visita `http://localhost:8000`

## 🔧 Características Técnicas

### Glassmorphism Effects
- Backdrop blur y transparencias
- Bordes sutiles y sombras
- Efectos de hover interactivos

### Responsive Design
- Breakpoints: 320px, 768px, 1024px, 1200px
- Grid adaptativo
- Navegación móvil optimizada

### Performance
- Lazy loading de imágenes
- Animaciones con CSS3
- Skeleton loaders

## 📱 Capturas de Pantalla

### Vista Desktop
![Desktop View](https://via.placeholder.com/800x400/0077CC/FFFFFF?text=BE+INN+Desktop)

### Vista Mobile
![Mobile View](https://via.placeholder.com/400x800/3399FF/FFFFFF?text=BE+INN+Mobile)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**JSCEG** - [GitHub](https://github.com/JSCEG)

## 🙏 Agradecimientos

- Unsplash por las imágenes de ejemplo
- Font Awesome por los iconos
- Inspiración en Airbnb para el diseño UX

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub! - Plataforma de Espacios

Una aplicación web moderna inspirada en Airbnb, diseñada específicamente para la reserva de cualquier tipo de espacios: oficinas, estacionamientos, lugares para eventos y espacios especiales.

## 🎨 Características

- **Diseño Glassmorphism**: Efectos de cristal esmerilado modernos
- **Responsive Design**: Totalmente adaptable a dispositivos móviles
- **Autenticación Social**: Login con Google, Facebook y email
- **Filtros Dinámicos**: Por categoría de espacio
- **Búsqueda Avanzada**: Por ubicación, fecha y duración
- **Favoritos**: Sistema de marcado de espacios favoritos
- **Notificaciones**: Sistema de notificaciones en tiempo real

## 🚀 Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Efectos**: Glassmorphism, animaciones CSS
- **Icons**: Font Awesome
- **APIs**: Google Sign-In, Facebook SDK

## 📁 Estructura del Proyecto

```
BE-INN/
├── index.html          # Página principal
├── styles.css          # Estilos y efectos glassmorphism
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

```css
--azul-oscuro: #0052A1;    /* Azul principal oscuro */
--azul-medio: #0077CC;     /* Azul principal medio */
--azul-claro: #3399FF;     /* Azul principal claro */
--naranja: #FF7B00;        /* Naranja de acento */
```

## ⚙️ Configuración

### 1. Google Sign-In

Para habilitar el login con Google, necesitas:

1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear un nuevo proyecto o seleccionar uno existente
3. Habilitar la API de Google Sign-In
4. Crear credenciales OAuth 2.0
5. Reemplazar `YOUR_GOOGLE_CLIENT_ID` en `index.html` con tu Client ID real

```html
<meta name="google-signin-client_id" content="TU_GOOGLE_CLIENT_ID.apps.googleusercontent.com">
```

### 2. Facebook Login

Para habilitar el login con Facebook:

1. Ir a [Facebook Developers](https://developers.facebook.com/)
2. Crear una nueva aplicación
3. Configurar Facebook Login
4. Reemplazar `YOUR_FACEBOOK_APP_ID` en `index.html` con tu App ID real

```javascript
FB.init({
    appId: 'TU_FACEBOOK_APP_ID',
    cookie: true,
    xfbml: true,
    version: 'v18.0'
});
```

## 🔧 Instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd BE-INN
   ```

2. **Abre el proyecto**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local (recomendado):
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Accede a la aplicación**
   - Navegador directo: `file:///ruta/al/proyecto/index.html`
   - Servidor local: `http://localhost:8000`

## 📱 Funcionalidades

### Navegación
- **Filtros por categoría**: Oficinas, Estacionamientos, Eventos, Espacios Especiales
- **Búsqueda avanzada**: Por ubicación, fecha y tiempo requerido
- **Login/Registro**: Con Google, Facebook o email

### Espacios
- **Vista de grid**: Tarjetas de espacios con efecto glassmorphism
- **Favoritos**: Marca/desmarca espacios favoritos
- **Detalles**: Modal con información detallada del espacio
- **Reserva**: Simulación de proceso de reserva

### Responsividad
- **Desktop**: Layout completo con navegación horizontal
- **Tablet**: Adaptación de columnas y espaciado
- **Mobile**: Navegación vertical, formularios adaptados

## 🎯 Próximas Funcionalidades

- [ ] Backend con base de datos
- [ ] Sistema de reservas real
- [ ] Pasarela de pagos
- [ ] Mensajería interna
- [ ] Calificaciones y reseñas
- [ ] Geolocalización con mapas
- [ ] Notificaciones push
- [ ] Panel de administración para hosts

## 🔍 SEO y Performance

- **Lazy Loading**: Carga diferida de imágenes
- **Optimización de imágenes**: Uso de Unsplash con parámetros optimizados
- **Meta tags**: Configurados para SEO básico
- **Accessibility**: Navegación por teclado y ARIA labels

## 📞 Soporte

Para dudas o problemas:
- Email: soporte@beinn.com
- Teléfono: +52 (55) 1234-5678

## 📄 Licencia

© 2025 BE INN, Inc. Todos los derechos reservados.

---

**Nota**: Esta es una aplicación de demostración. Para uso en producción, se requiere implementar autenticación real, base de datos y medidas de seguridad adicionales.
