# Usamos la imagen de Node.js como base
FROM node:18 AS builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos necesarios del proyecto Angular al contenedor
COPY ./ ./

# Instalamos las dependencias
RUN npm install && npm run build -- --configuration production

# Usamos una imagen más pequeña para la implementación
FROM nginx:alpine

# Copiamos los archivos construidos de la aplicación Angular al servidor web Nginx
COPY --from=builder /app/dist/prueba-tecnica /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
