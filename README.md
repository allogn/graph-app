# Application for managing a user-specific knowledge graphs

The idea of the application is to manage shared knowledge graphs, for example a family tree. Each node of the tree corresponds to a profile (an entity that belongs to the tree), that can be created by users of the system. Trees can be shared. For example, there is a son and a father, each has an account (a username). They share a tree. They can create profiles (e.g. mother/wife), and assign to a node in the tree.

This application is in beta, and currently under development.

## Installation

This works on Laravel + React.

### Dependencies

```bash
sudo apt-get install php-sqlite3 # This is for phpunit
```

### Setup

Create .env

- add oauth private and public keys

Add laravel app key by
php artisan key:generate

## Testing

