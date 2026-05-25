# Estrategias Oblicuas Bot 📇

Bot de Twitter que emula el juego de cartas "Oblique Strategies", diseñado por Brian Eno y Peter Schmidt en 1975.

![image](https://user-images.githubusercontent.com/32349705/117721725-995b6500-b1b6-11eb-89f6-f8a4b28f0922.png)

For an english version, refer to README_en.md file.

## Tech stack

### Repositorio base

- [node-ts-starter](https://github.com/HorusGoul/node-ts-starter) - Proyecto base para generar aplicaciones en Node con TypeScript.

### Librerías

- [satori](https://www.npmjs.com/package/satori) - Generación de imágenes a partir de texto y HTML.
- [prettier](https://www.npmjs.com/package/prettier) - Para mantener convenciones de estilo en el código.
- [dotenv](https://www.npmjs.com/package/dotenv) - Manejo de variables de entorno.
- [twitter-api-v2](https://www.npmjs.com/package/twitter-api-v2) - Cliente de Twitter para NodeJS, con soporte para tipos.

## Para comenzar

1. Cloná este repositorio y posate en el directorio principal

```bash
$ git clone https://github.com/rolivencia/bot-estrategias-oblicuas tu-proyecto
$ cd tu-proyecto
```

2. Instalá las dependencias

```bash
$ npm install
```

3. Generá un archivo .env con las variables de entorno requeridas por la API de Twitter:

```
consumer_key=XXXXXXXXXXXXXXXXXXXXXXXXX
consumer_secret=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
access_token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
access_token_secret=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

4. Adicionalmente, podés configurar entre publicaciones, en horas:

```
post_interval_in_hours=24
```

5. Lanzá el modo desarrollador

```bash
$ npm run dev
```

## Preconfiguración

Este proyecto incluye, preconfiguradas, las siguientes herramientas

- Babel
- TypeScript
- ESLint
- Prettier
- Husky, con un hook de pre-commit para correr ESLint y chequear el código base
- Scripts de npm útiles para desarrollar y probar el proyecto

## Scripts

- `npm run dev`. Corre el proyecto en modo desarrollador, sin chequeo de tipos y con hot reload por cada cambio guardado mientras el script es ejecutado
- `npm run build`. Compila el proyecto en la carpeta `./dist`.
- `npm run typecheck`. Chequea los tipos dentro del proyeto. Se ejecuta automáticamente, vía husky, antes de cada commit.
- `npm run start`. Ejecuta el programa compilado, una vez ya ejecutado el script `build`.
- `npm run lint`. Ejecuta ESLint. Puede agregarse el parámetro `--fix` para corregir algunos problemas automáticamente.
