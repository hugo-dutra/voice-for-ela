# 🛠 Development Guidelines

Welcome to the development guidelines! If you're here, you're probably looking to contribute some code. Awesome! However, to ensure that everyone is on the same page, please follow the rules outlined below.

## 🌳 Branching Strategy

We use a simplified Git Flow approach:

- `main`: This is the production branch. Only fully reviewed and tested code should be merged here.
- `develop`: This is the development branch. All feature branches should be created from and merged back into this branch.
- `feature/*`: For new features or improvements.
- `bugfix/*`: For bug fixes.
- `hotfix/*`: For critical fixes that need to go directly into production.

### Creating a Branch

1. Checkout the `develop` branch: `git checkout develop`
2. Pull the latest changes: `git pull origin develop`
3. Create a new branch: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bugfix-name`

## 📝 Semantic Commit Messages

We follow semantic commit messages to make it easier to understand what each commit does and to automate the changelog generation. The general structure is:


### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code formatting, missing semi-colons, etc.
- `refactor`: Refactoring code
- `test`: Adding or updating tests
- `chore`: Maintenance tasks like package updates

### Scope

The scope is optional and can be anything specifying the place of the commit change. For example:

- `feat(auth)`
- `fix(user-profile)`
- `chore(dependencies)`

### Subject

The subject is a brief description of the changes, for example:

- `feat(auth): add social login`
- `fix(cart): resolve rounding error`
- `chore(tests): add more unit tests`

## 🤝 Code Reviews

- Every pull request must be reviewed by at least one team member.
- Use GitHub's "Request review" feature to ask for reviews.
- Only the reviewer should merge the pull request.

## 🚀 Deployment

Merges into `main` will automatically trigger a deployment. Make sure your code is production-ready and thoroughly tested.

Thank you for adhering to these guidelines! Happy coding! 🎉
