# DBGraph

**DBGraph** is a visual database schema builder that turns node graphs into a structured Intermediate Representation (IR), with future support for compiling that IR into SQL for multiple database targets.

The project is currently in early development. The first version focuses on the visual editor, JSON IR generation, project snapshots, and export features.

---

## Concept

DBGraph is built around a compiler-style architecture:

```txt
Node Graph
    ↓
Canonical IR
    ↓
Target Compiler
    ↓
PostgreSQL / SQLite / MySQL / other outputs
```

Instead of generating SQL directly from the canvas, DBGraph uses a database-agnostic IR as the source of truth. This makes the schema easier to validate, version, export, and eventually compile to different targets.

---

## Current Focus

The initial version focuses on:

* Visual canvas for database schema design
* Table and relationship nodes
* JSON IR preview
* Project JSON export
* Revision hash UI inspired by Git commits
* Layout for a future SQL output panel

At this stage, DBGraph does **not** compile SQL yet. The output panel displays the generated JSON IR.

---

## Intermediate Representation

DBGraph separates the logical database schema from the visual canvas state.

```txt
Project File
├── ir
│   └── Logical database schema
└── view
    └── Canvas nodes, positions, edges, and viewport
```

This keeps the schema model clean and prevents UI-specific data from polluting the database representation.

Example:

```json
{
  "version": "0.1.0",
  "ir": {
    "schema": {
      "tables": [
        {
          "id": "tbl_users",
          "name": "users",
          "columns": [
            {
              "id": "col_users_id",
              "name": "id",
              "type": {
                "kind": "uuid"
              },
              "nullable": false,
              "primaryKey": true,
              "unique": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  "view": {
    "nodes": [],
    "edges": [],
    "viewport": {
      "x": 0,
      "y": 0,
      "zoom": 1
    }
  }
}
```

---

## Planned Compiler

The future compiler will be written in Rust and compiled to WebAssembly.

Planned flow:

```txt
Graph State
    ↓
Normalized IR
    ↓
Rust/Wasm Compiler
    ↓
SQL Output + Diagnostics
```

Planned targets include:

* PostgreSQL
* SQLite
* MySQL
* Prisma schema
* Drizzle schema
* Supabase migrations

---

## Project Revisions

DBGraph uses a revision model inspired by Git commits.

Instead of semantic versions like `v0.10.4` for user projects, each saved project snapshot can have a short hash:

```txt
8f3a2c9
```

The current revision appears in the top header and will later open a revision history dropdown.

Example:

```txt
DBGraph / username / project-name                  • 8f3a2c9   Run
```

---

## Tech Stack

### Frontend

* Vite
* React
* TypeScript
* Tailwind CSS
* TanStack Router

### Future Compiler

* Rust
* WebAssembly
* `wasm-bindgen`
* `serde`
* `serde_json`

### Future Backend

* Node.js
* TypeScript
* PostgreSQL
* Authentication
* Project persistence
* Revision history

---

## Status

DBGraph is under active early development.

The first priority is to build a stable visual editor and a clean IR model. SQL generation will be added after the IR foundation is reliable.

---

## License

License not defined yet.
