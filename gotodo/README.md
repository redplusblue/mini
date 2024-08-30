# Go Todo

GoTodo is a simple command-line task manager written in Go. It allows you to add, list, mark as completed, and delete tasks efficiently.

###### This project was made to learn basic Go programming concepts and compare it to python.

## Features

- **Add Task**: Add a new task with a description.
- **List Tasks**: Display all tasks with their completion status.
- **Mark Task as Completed**: Mark a specific task as completed.
- **Delete Task**: Remove a specific task from the list.

## Usage

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/gotodo.git
   cd gotodo
   ```

2. **Build the project**:

   ```sh
   go build gotodo.go
   ```

3. **Run the executable**:
   ```sh
   ./gotodo
   ```

## Why Go?

Go is a statically typed, compiled language known for its performance and efficiency. Here are a few reasons why GoTodo is faster in Go compared to Python:

- **Compilation**: Go is a compiled language, which means the code is translated directly into machine code, making it faster to execute. Python, being an interpreted language, translates code at runtime, which adds overhead.
- **Concurrency**: Go has built-in support for concurrent programming with goroutines, making it easier to handle multiple tasks simultaneously without significant performance degradation.
- **Memory Management**: Go provides efficient memory management with garbage collection, reducing the overhead of manual memory management and improving performance.

## License

This project is licensed under the GNU GPL v3.0 License.
