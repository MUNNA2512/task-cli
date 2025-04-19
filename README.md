# 📋 Task CLI

![Node.js CI](https://github.com/MUNNA2512/task-cli/workflows/Node.js%20CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/task-cli.svg)](https://badge.fury.io/js/task-cli)

> A simple yet powerful command-line task management tool built with Node.js.

<p align="center">
  <img src="https://raw.githubusercontent.com/MUNNA2512/task-cli/main/assets/task-cli-demo.gif" alt="Task CLI Demo" width="600">
</p>

## ✨ Features

- 📝 **Add tasks** with title and description through interactive prompts
- 📋 **List all tasks** with clear status indicators
- ✅ **Mark tasks as done** with a simple command
- 🗑️ **Delete tasks** when they're no longer needed
- 🧹 **Clear all tasks** with confirmation to avoid accidents

## 🚀 Installation

### Global Installation

```bash
npm install -g task-cli
```

### Local Installation

```bash
git clone https://github.com/MUNNA2512/task-cli.git
cd task-cli
npm install
npm link
```

## 📖 Usage

```bash
# Add a new task (interactive prompt)
task add

# List all tasks
task list

# Mark a task as done
task done <task_id>

# Delete a task
task delete <task_id>

# Clear all tasks
task clear

# Show help
task --help
```

## 📸 Screenshots

### Adding a Task
<p align="center">
  <img src="https://raw.githubusercontent.com/MUNNA2512/task-cli/main/assets/add-task.png" alt="Adding a task" width="600">
</p>

### Listing Tasks
<p align="center">
  <img src="https://raw.githubusercontent.com/MUNNA2512/task-cli/main/assets/list-tasks.png" alt="Listing tasks" width="600">
</p>

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/MUNNA2512/task-cli.git

# Navigate to the project directory
cd task-cli

# Install dependencies
npm install

# Link the package locally
npm link
```

## ⚙️ How It Works

Task CLI uses:
- **[Commander.js](https://github.com/tj/commander.js/)** - For parsing command line arguments
- **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)** - For interactive command line interfaces
- **[Chalk](https://github.com/chalk/chalk)** - For colorful terminal output
- **[Conf](https://github.com/sindresorhus/conf)** - For persistent configuration storage

All tasks are stored locally on your machine, making it perfect for personal task management without the need for online services.

## 🧪 Testing

Run the automated tests with:

```bash
npm test
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/MUNNA2512/task-cli/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed. 