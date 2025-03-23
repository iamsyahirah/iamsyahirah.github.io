---
layout: post
title: Basic PHP Security you need to know
tags: tutorial PHP
---

When building websites, there are many ways hackers can exploit vulnerabilities. To prevent this, we need to implement security to protect our applications. This guide focuses on PHP applications, but every programming language has its own security best practices.

### 1. Preventing SQL Injection

SQL injection happens when hackers insert malicious code into your database queries. To stop this, use prepared statements.

Example:

```php
$stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
$stmt->bindParam(':username', $username);
$stmt->execute();
```

### 2. Protecting Against Cross-Site Scripting (XSS)

XSS happens when hackers inject harmful scripts into your website, which then run in visitors’ browsers. To prevent this, use htmlspecialchars() to make sure user input doesn’t contain harmful scripts.

Example:

```php
$username = $_POST['username'];
$sanitizedUsername = htmlspecialchars($username);
echo "Welcome, " . $sanitizedUsername;
```

### 3. Preventing Cross-Site Request Forgery (CSRF)

We use CSRF tokens to make sure requests come from trusted sources. To prevent this, use CSRF tokens. 

Example:

```php
$csrfToken = bin2hex(random_bytes(32));
$_SESSION['csrfToken'] = $csrfToken;
// ...
if ($_POST['csrfToken'] === $_SESSION['csrfToken']) {
    // CSRF token is valid, process the request
}
```

### 4. Securing File Uploads

Always check file types before accepting uploads. Uploading files can be risky because hackers might upload harmful scripts instead of images. 

Example:

```php
$allowedTypes = ['image/jpeg', 'image/png'];
$allowedExtensions = ['jpg', 'jpeg', 'png'];
$fileType = $_FILES['file']['type'];
$fileExtension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);

if (!in_array($fileType, $allowedTypes) && in_array($fileExtension, $allowedExtensions)) {
    // File is valid, process the upload
}
```

### 5. Storing Passwords Securely

Never store passwords as plain text! Instead, use password_hash() to store passwords securely and password_verify() to check them.

Example:

```php
$options = [
    'cost' => 12
];

$password = $_POST['password'];
$hashedPassword = password_hash($password, PASSWORD_BCRYPT, $options);
// ...
if (password_verify($password, $hashedPassword)) {
    // Password is correct, allow access
}
```

As web developers, we must stay updated on security best practices to protect our websites.
