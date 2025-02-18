Instrucciones de instalación:

1. Crear la base de datos en MySQL:

```
CREATE DATABASE candidate_master;
USE candidate_master;

CREATE TABLE `candidate` (
  `id` bigint(20) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Indices de la tabla `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de la tabla `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

```


2. Instalar NodeJS 20.11.1
3. Instalar Angular 18.2.3

4. Abrir proyecto en VS Code:
   4.1. En el módulo candidate_service, ejecutar: npm install
   4.2. En el módulo candidate_web, ejecutar: npm install

5. Correr el backend: npm start
6. Correr el frontend: ng serve -o
7. Abrir enlace de frontend en: http://localhost:4200/candidates/home
