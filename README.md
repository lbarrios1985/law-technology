# Law Technology Website

Sitio web oficial de Law Technology, un consultorio jurídico especializado en derecho tecnológico y propiedad intelectual.

## Configuración Inicial

1. Clona el repositorio:
```bash
git clone https://github.com/lbarrios1985/law-technology.git
cd law-technology
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Copia el archivo `.env.example` a `.env`
   - Completa las variables con los valores correspondientes:
```env
# EmailJS Configuration
REACT_APP_EMAILJS_PUBLIC_KEY=tu_clave_publica_de_emailjs
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id_de_emailjs
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id_de_emailjs

# Contact Information
REACT_APP_CONTACT_EMAIL=tu_email_de_contacto
REACT_APP_INSTAGRAM_URL=tu_url_de_instagram
```

## Desarrollo Local

1. Inicia el servidor de desarrollo:
```bash
npm start
```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Proceso de Despliegue

Cuando realices cambios y quieras desplegarlos al sitio web, sigue estos pasos:

1. Asegúrate de que todos tus cambios estén guardados y funcionando localmente.

2. Sube los cambios a GitHub:
```bash
# Agrega los cambios
git add .

# Crea un commit con un mensaje descriptivo
git commit -m "descripción de los cambios"

# Sube los cambios a GitHub
git push origin master
```

3. Despliega a GitHub Pages:
```bash
# Este comando construirá el proyecto y lo desplegará
npm run deploy
```

4. Verifica los cambios:
   - Espera unos minutos para que GitHub Pages procese los cambios
   - Visita [https://lawtechnologycj.com](https://lawtechnologycj.com) para verificar que todo funcione correctamente

## Notas Importantes

- **Variables de Entorno**: Nunca subas el archivo `.env` al repositorio, ya que contiene información sensible.
- **Imágenes**: Coloca las imágenes nuevas en la carpeta `public/images/`.
- **Componentes**: Los componentes React se encuentran en `src/components/`.
- **Estilos**: Los estilos globales están en `src/styles/`.

## Soporte

Si encuentras algún problema o necesitas ayuda, puedes:
1. Abrir un issue en el repositorio de GitHub
2. Contactar al equipo de desarrollo
