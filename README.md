# That Shopping Cart

Trying to over-engineer the wheel and see how it goes.

## Dev

### Requirements

- Docker
- Node >= 16.10.x
- npm or yarn

### Run locally

The easy way: (make sure your Docker engine is running, fam!)
- Use the automated startup scripts (.ps1 for Windows, .sh for *nix)

Manually:
- Database:
  - Change the environment variables to your liking
  - Run `docker compose up`
- App:
  - `cd` into `/app`
  - Run `npm i`
  - Run `npm run dev`

## Ports

- Database admin (adminer) runs at http://localhost:8080
- App frontend serves at http://localhost:3000
- PostgreSQL database serves at http://localhost:5432
