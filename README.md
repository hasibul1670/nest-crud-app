### Nest JS CRUD Ops

- feat: implement user registration endpoint
- fix: resolve database connection issue
- chore: update dependencies to latest versions
- refactor: improve code readability in user service
- test: add unit tests for authentication module
- docs: add API documentation for new endpoints
- style: format codebase with Prettier
- perf: optimize query performance for user retrieval
- build: configure Dockerfile for production
- ci: set up GitHub Actions for CI/CD pipeline

## API Endpoints

### User

- Create User --> https://crud007.vercel.app/api/v1/user/create-user [POST]
- Fetch All Users --> https://crud007.vercel.app/api/v1/user/all-user [GET]
- Fetch Single User --> https://crud007.vercel.app/api/v1/user/:id [GET]
- Update Single User --> https://crud007.vercel.app/api/v1/user/:id [PATCH]
- Delete Single User --> https://crud007.vercel.app/api/v1/user/:id [DELETE]

### Technologies Used

- Backend:Typescript , NestJS, Prisma
- Database: PosgreSQL
- Deployment: Vercel
