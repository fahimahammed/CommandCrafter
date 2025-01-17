# GitHub User Activity

This project is a simple command-line interface (CLI) application that fetches and displays the recent activity of a GitHub user using the GitHub API. It helps you practice API integrations, JSON data handling, and building a CLI tool in TypeScript.

---

## Features

- Fetches recent activity of a specified GitHub user.
- Displays activity in a human-readable format in the terminal.
- Handles errors gracefully, such as invalid usernames or API failures.
- Lightweight and simple to use.

---

## How It Works

1. The user provides a GitHub username as an argument when running the CLI.
2. The application fetches the user's activity using the GitHub API endpoint:
   ```
   https://api.github.com/users/<username>/events
   ```
3. It displays a summary of recent activities, such as:
   - Pushing commits
   - Opening issues
   - Starring repositories
   - Other GitHub events

---

## Usage

Run the CLI with the desired GitHub username:
```bash
yarn github-activity <username>
```

**Example:**
```bash
yarn github-activity fahimahammed
```

---

## Sample Output

```
# Recent Activity for fahimahammed:
- Pushed 3 commits to fahimahammed/my-project
- Opened a new issue in fahimahammed/my-project
- Starred roadmap.sh/developer-roadmap
- Forked roadmap.sh/developer-roadmap
```

---

## Learn More

This project is inspired by [Roadmap.sh Projects](https://roadmap.sh/projects/github-user-activity).

Reference to: https://roadmap.sh/projects/github-user-activity 