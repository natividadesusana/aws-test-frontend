FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# CRA => /build
# Vite => /dist

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf  # remove default configuration
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
