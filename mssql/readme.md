# MSSQL

##### How to quickly and easily get a mssql database up and running in a Docker container. Great for personal projects.

### Install Docker

-   https://www.docker.com/get-started

---

### Startup

###### Once you have already created a container, you can simply open docker desktop and hit the play button to get things up and running again.

```bash
# Run in terminal (while in the same directory as the yml file)
docker-compose up
```

#####

---

### Login with Azure Data Studio

###### Similar to vscode, Data Studio is a nice way to connect to your new db. Below are the credentials from the config file.

| Field           | Value                                                               |
| --------------- | ------------------------------------------------------------------- |
| Connection Type | <span style="color: #6292ee;">Microsoft SQL Server</span>           |
| Server          | <span style="color: #6292ee;">localhost\mssql_database, 1433</span> |
| Auth Type       | <span style="color: #6292ee;">SQL Login</span>                      |
| User            | <span style="color: #6292ee;">sa</span>                             |
| Pass            | <span style="color: #6292ee;">Strongpass2!</span>                   |

---

### Populate DB Script

###### This is a quick way to fill your database with random stuff that you can use to learn and have fun.

```bash
# Install dependencies
npm i

# node version 14
# Fill out the config.js file with the db info used in docker-compose
node fill-mssql.js
```

### Example

###### If you would like to manually add things to your new database here is a basic example.

```sql
-- Create a database
CREATE DATABASE test_database

-- Use the new db
USE test_database

-- Create a table in that db
CREATE TABLE users (
    ID UNIQUEIDENTIFIER NOT NULL,
    First_Name VARCHAR(30) NOT NULL,
    Last_Name VARCHAR(30),
    Age INT,
    Phone VARCHAR(15),

    PRIMARY KEY (ID)
)

-- Add a user to the table
INSERT INTO users (
    ID,
    First_Name,
    Last_Name,
    Age,
    Phone
)
VALUES (
    NEWID(),
    'Somebody',
    'McPerson',
    30,
    '1112223333'
)

-- Select the user to see if it worked
SELECT * FROM users
```
