# :zap: Node ORM Postgres

* Node.js used with TypeORM (Object Relational Mapping) and Typescript to connect to a PostgreSQL database
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/node-orm-postgres?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/node-orm-postgres?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/node-orm-postgres?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/node-orm-postgres?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Node ORM Postgres](#zap-node-orm-postgres)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status, Testing & To-Do List](#clipboard-status-testing--to-do-list)
  * [:clap: Inspiration/General Tools](#clap-inspirationgeneral-tools)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* TypeORM makes creating and accessing a database easier and can be used with any relational database
* Data created is based on my site experience at the LNG extraction facility on Melkoya island in Hammerfest, Norway where everything is divided up into areas and zones.
* Code includes routes & controllers to perform Create, Read, Update and Delete (CRUD) operations.

## :camera: Screenshots

![Frontend screenshot](./imgs/data.png)

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [TypeORM v0.3.5](https://typeorm.io/) ORM used with PostgreSQL database
* [DBeaver v22](https://dbeaver.io/) database management tool
* [VS Extension Thunder client](https://www.thunderclient.com/) REST Client for Testing APIs

## :floppy_disk: Setup

* Assuming you have PostgreSQL database installed, install DBeaver and connect to your PostgreSQL database using DBeaver
* Install dependencies using `npm i`
* `npm run dev` to start database
* Use Thunder client to make CRUD operations using port 3000

## :wrench: Testing

* N/A

## :computer: Code Examples

* `data.controllers.ts` deleteData function using a ternery operator to send status depending on delete operation results

```typescript
 export const deleteData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return (await Data.delete({ id: +id })).affected === 0
      ? res
          .status(404)
          .json({ message: "Matching data not found or not deleted" })
      : res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
```

## :cool: Features

* Thunder Client does make testing the database functions much easier using JSON-based CRUD operations.
* TypeORM is easy to use once the data Entity has been set up correctly.

## :clipboard: Status, Testing & To-Do List

* Status: Working
* To-Do: Add to database and add frontend to view data on pretty cards or in a table

## :clap: Inspiration/General Tools

* [TypeORM documentation](https://typeorm.io/example-with-express)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
