# Product Development

## TODOs

- [ ] **Minimum Viable Product**
  - [ ] User Interface
    - [x] List of shopping items
    - [x] Text field to enter item's name to add
    - [x] Button to add item to list
    - [ ] Text field to enter item's ID to delete
    - [ ] Button to delete item from list
  - [ ] Database
    - [ ] Data model
      - [x] Item
      - [ ] List
    - [ ] Operations
      - [x] Create
      - [x] Retrieve
      - [ ] Update
      - [ ] Delete
  - [ ] Infrastructure
    - [x] UI Server
    - [x] DB Server

- [ ] **Essential Features**
  - [ ] User Interface
    - [x] Display shopping list component in a column with ID
    - [ ] Shopping list component is responsive to viewport size
  - [ ] Database
    - [x] Locally persistent
  - [ ] Infrastructure
    - [ ] Containerized
      - [x] Front-end
      - [x] Database
      - [x] Database administration web application
    - [ ] One-click deploy
    - [x] CI for front-end
    - [x] CI for data model without mutating existing database
- TBA

## Technology Stack

- Front-end
  - React Framework: [Nextjs](https://nextjs.org)
  - CSS Library: [Tailwind CSS](https://tailwindcss.com) 💨
  - ORM: Prisma 🔺
  - PostgreSQL 🐘
- Infrastructure
  - Target platforms: web, x86_64, ARM
  - Container: Docker 🐳
  - Orchestration: Docker Compose
  - Database storage: ⚠ Locally mounted volume in work_dir ⚠