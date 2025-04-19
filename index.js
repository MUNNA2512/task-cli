#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Conf = require('conf');

// ASCII Art Banner
console.log(chalk.bold.cyan(`
 _____         _     _____ _      _____
|_   _|       | |   /  __ \\ |    |_   _|
  | | __ _ ___| | __| /  \\/ |      | |
  | |/ _\` / __| |/ /| |   | |      | |
  | | (_| \\__ \\   < | \\__/\\ |____ _| |_
  \\_/\\__,_|___/_|\\_\\ \\____/\\_____|_____|
                                        
`));
console.log(chalk.yellow('📋 Task CLI') + chalk.gray(' - A simple task management tool'));
console.log(chalk.gray('Version: 1.0.0'));
console.log('');

// Initialize config store
const config = new Conf({
  projectName: 'task-cli'
});

// Initialize tasks array in config if it doesn't exist
if (!config.has('tasks')) {
  config.set('tasks', []);
}

program
  .version('1.0.0')
  .description('A simple CLI task manager');

// Add a new task
program
  .command('add')
  .description('Add a new task')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Task title:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Task description (optional):'
      }
    ]);

    const tasks = config.get('tasks');
    const newTask = {
      id: tasks.length + 1,
      title: answers.title,
      description: answers.description || '',
      done: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    config.set('tasks', tasks);

    console.log(chalk.green('Task added successfully!'));
  });

// List all tasks
program
  .command('list')
  .description('List all tasks')
  .action(() => {
    const tasks = config.get('tasks');
    
    if (tasks.length === 0) {
      console.log(chalk.yellow('No tasks found.'));
      return;
    }

    console.log(chalk.bold('\nYour Tasks:'));
    tasks.forEach(task => {
      const status = task.done ? chalk.green('✓') : chalk.red('✗');
      console.log(`${status} ${chalk.bold(task.id)}: ${task.title}`);
      if (task.description) {
        console.log(`   ${chalk.dim(task.description)}`);
      }
    });
  });

// Mark a task as done
program
  .command('done <id>')
  .description('Mark a task as done')
  .action((id) => {
    const tasks = config.get('tasks');
    const taskId = parseInt(id);
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
      console.log(chalk.red(`Task with ID ${taskId} not found.`));
      return;
    }

    tasks[taskIndex].done = true;
    config.set('tasks', tasks);
    
    console.log(chalk.green(`Task "${tasks[taskIndex].title}" marked as done!`));
  });

// Delete a task
program
  .command('delete <id>')
  .description('Delete a task')
  .action((id) => {
    const tasks = config.get('tasks');
    const taskId = parseInt(id);
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex === -1) {
      console.log(chalk.red(`Task with ID ${taskId} not found.`));
      return;
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    config.set('tasks', tasks);
    
    console.log(chalk.yellow(`Task "${deletedTask.title}" has been deleted.`));
  });

// Clear all tasks
program
  .command('clear')
  .description('Clear all tasks')
  .action(async () => {
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure you want to clear all tasks?',
        default: false
      }
    ]);

    if (confirm) {
      config.set('tasks', []);
      console.log(chalk.green('All tasks have been cleared.'));
    } else {
      console.log(chalk.yellow('Operation cancelled.'));
    }
  });

program.parse(process.argv);

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
} 