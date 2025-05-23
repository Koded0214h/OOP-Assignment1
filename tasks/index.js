"use strict";
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }
    completeTask() {
        this.isCompleted = true;
        console.log(`This ${this.title} completed.`);
    }
    updateTask(title, description) {
        this.title = title;
        this.description = description;
        console.log(`Updated: ${this.title} - ${this.description}`);
    }
    getTaskDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Status: ${this.isCompleted ? 'Completed' : 'Not Completed'}`);
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    createTask(title, description) {
        const task = new Task(title, description);
        this.tasks.push(task);
        console.log(`Task created: ${title}`);
    }
    completeTask(title) {
        var _a;
        if (title in this.tasks) {
            (_a = this.tasks.find((task) => task.title === title)) === null || _a === void 0 ? void 0 : _a.completeTask();
            console.log(`Task completed: ${title}`);
        }
        else {
            console.log(`Task not found: ${title}`);
        }
    }
    updateTask(title, description) {
        var _a;
        if (title in this.tasks) {
            (_a = this.tasks.find((task) => task.title === title)) === null || _a === void 0 ? void 0 : _a.updateTask(title, description);
            console.log(`Task updated: ${title}`);
        }
        else {
            console.log(`Task not found: ${title}`);
        }
    }
    getTasks() {
        const taskList = this.tasks.map((task) => {
            return {
                title: task.title,
                description: task.description,
                isCompleted: task.isCompleted
            };
        });
        console.log(taskList);
    }
}
const taskManager = new TaskManager();
taskManager.createTask('Groceries', 'Get groceries from Mc Donalds');
taskManager.createTask('Excercise', 'Go to the gym, leg day.');
taskManager.completeTask('Groceries');
taskManager.updateTask('Excercise', 'Go to the gym and lift weights');
taskManager.getTasks();
