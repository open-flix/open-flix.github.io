# OpenFlix

a monorepo to help you find movies from tmdb

## projects

the workplace is a monorepo cosisting of 3 projects

1. frontend (fe)
2. backend (be) is a gateway to tmdb API
3. lib/shared is just folder that doesnt need to be built

## Running The project

https://open-flix.github.io/

### Running locally (serve)

1. `npm install`
2. `npm run fe` runs frontend in dev mode
3. `npm run be` runs backend in dev mode

### Running in docker

`docker-compose up`

# Tech-Stack

1. Workspace (monorepo)
   1. nx
   2. vite
1. Frontend
   1. React
   2. MUI
   3. @emotion/styled
   4. RTK
   5. react-virtuoso
1. Backend
   1. nestjs
   2. rxjs
1. CI/CD
   1. Railway
   2. Github pages
