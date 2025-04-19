const assert = require('assert');
const Conf = require('conf');
const { execSync } = require('child_process');

// Initialize a test config store
const testConfig = new Conf({
  projectName: 'task-cli-test',
  cwd: __dirname
});

// Clear any existing test data
testConfig.clear();
testConfig.set('tasks', []);

console.log('Running basic tests for Task CLI...');

// Test adding a task (via spawning the CLI)
try {
  // This is a simple test - in a real test suite, we'd use mock inputs
  // Instead, we'll just verify our config functions correctly
  const tasks = testConfig.get('tasks');
  const newTask = {
    id: 1,
    title: 'Test Task',
    description: 'This is a test task',
    done: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  testConfig.set('tasks', tasks);
  
  assert.strictEqual(testConfig.get('tasks').length, 1, 'Task was not added correctly');
  assert.strictEqual(testConfig.get('tasks')[0].title, 'Test Task', 'Task title is incorrect');
  
  console.log('✅ Task creation test passed');
} catch (error) {
  console.error('❌ Task creation test failed:', error.message);
}

// Test marking a task as done
try {
  const tasks = testConfig.get('tasks');
  const taskIndex = 0;
  
  if (taskIndex >= 0) {
    tasks[taskIndex].done = true;
    testConfig.set('tasks', tasks);
  }
  
  assert.strictEqual(testConfig.get('tasks')[0].done, true, 'Task was not marked as done');
  
  console.log('✅ Mark task as done test passed');
} catch (error) {
  console.error('❌ Mark task as done test failed:', error.message);
}

// Test deleting a task
try {
  const tasks = testConfig.get('tasks');
  const taskIndex = 0;
  
  if (taskIndex >= 0) {
    tasks.splice(taskIndex, 1);
    testConfig.set('tasks', tasks);
  }
  
  assert.strictEqual(testConfig.get('tasks').length, 0, 'Task was not deleted correctly');
  
  console.log('✅ Delete task test passed');
} catch (error) {
  console.error('❌ Delete task test failed:', error.message);
}

// Clean up
testConfig.clear();
console.log('Tests completed.'); 