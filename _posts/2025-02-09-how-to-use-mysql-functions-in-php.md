---
layout: post
title: How to use MySQL functions in PHP
tags: tutorial PHP
---

To interact with a MySQL database in PHP, we use **PDO (PHP Data Objects)**, which provides a secure and efficient way to run queries.  I will show you how to use MySQL functions safely using prepared statements.

### 1. Connecting to the Database

Before we can interact with MySQL, we need to establish a connection using PDO. This line creates a connection to the MySQL database named `mydatabase`. Be sure to replace `username` and `password` with your actual database credentials.

Example:

```php
$pdo = new PDO("mysql:host=localhost;dbname=mydatabase", "username", "password");
```

### 2. Selecting Data (Using Prepared Statements)

Using prepared statements prevents SQL injection. 

## Example (Unsafe Query - Do NOT use this):

```php
$username = $_POST['username'];
$pwd = $_POST['pwd'];
$query = "SELECT * FROM users WHERE username = '$username' AND pwd = '$pwd';";
$result = $pdo->query($query);
```
This example is **vulnerable** to SQL injection because it directly includes user input in the query.

## Example (Safe Query - Use Prepared Statements):

```php
$query = "SELECT * FROM users WHERE username = :username AND pwd = :pwd;";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':pwd', $pwd);
$stmt->execute();
```

### 3. Inserting Data

When inserting user input into the database, prepared statements should always be used. Use hashes passwords before storing them, making them more secure.

Example

```php
$query = "INSERT INTO users (username, pwd) VALUES (:username, :pwd)";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':pwd', password_hash($pwd, PASSWORD_BCRYPT));
$stmt->execute();
```

Always use prepared statements when working with user input, and remember to hash passwords before storing them.

