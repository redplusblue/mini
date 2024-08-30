package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type Task struct {
	Description string
	Completed   bool
}

var tasks []Task

func main() {
	for {
		printMenu()
		choice := getUserInput("Enter your choice: ")

		switch choice {
		case "1":
			addTask()
		case "2":
			listTasks()
		case "3":
			markTaskCompleted()
		case "4":
			deleteTask()
		case "5":
			fmt.Println("Goodbye!")
			return
		default:
			fmt.Println("Invalid choice. Please try again.")
		}
	}
}

func printMenu() {
	fmt.Println("\n--- Task Manager ---")
	fmt.Println("1. Add Task")
	fmt.Println("2. List Tasks")
	fmt.Println("3. Mark Task as Completed")
	fmt.Println("4. Delete Task")
	fmt.Println("5. Exit")
}

func getUserInput(prompt string) string {
	fmt.Print(prompt)
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	return strings.TrimSpace(input)
}

func addTask() {
	description := getUserInput("Enter task description: ")
	tasks = append(tasks, Task{Description: description, Completed: false})
	fmt.Println("Task added successfully!")
}

func listTasks() {
	if len(tasks) == 0 {
		fmt.Println("No tasks found.")
		return
	}

	for i, task := range tasks {
		status := "[ ]"
		if task.Completed {
			status = "[x]"
		}
		fmt.Printf("%d. %s %s\n", i+1, status, task.Description)
	}
}

func markTaskCompleted() {
	listTasks()
	if len(tasks) == 0 {
		return
	}

	choice := getUserInput("Enter the number of the task to mark as completed: ")
	index := parseInt(choice) - 1

	if index >= 0 && index < len(tasks) {
		tasks[index].Completed = true
		fmt.Println("Task marked as completed!")
	} else {
		fmt.Println("Invalid task number.")
	}
}

func deleteTask() {
	listTasks()
	if len(tasks) == 0 {
		return
	}

	choice := getUserInput("Enter the number of the task to delete: ")
	index := parseInt(choice) - 1

	if index >= 0 && index < len(tasks) {
		tasks = append(tasks[:index], tasks[index+1:]...)
		fmt.Println("Task deleted successfully!")
	} else {
		fmt.Println("Invalid task number.")
	}
}

func parseInt(s string) int {
	var result int
	fmt.Sscanf(s, "%d", &result)
	return result
}