# Meme Generator

The project is a simple todo list application built using React. It allows users to create a list of tasks, mark them as complete or incomplete, and delete them from the list. The application also stores the todos in local storage, so they persist across browser sessions.



[Launch Live Preview](https://lucky-rugelach-9d52a0.netlify.app/)

## Table of Contents

- [Features](#features)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Features

The main features of this meme generator project include:

* Add new todos to the list
* Mark todos as completed or incomplete
* Delete todos from the list
* Persist todos in local storage
* Responsive design for mobile and desktop screens

## Documentation
The **`App.js`** file is a React component that renders a simple todo list application. Let's go through the code step-by-step to understand what's going on:

```js
import './App.css';
import { useEffect, useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

```

This imports the necessary dependencies for the application to work. **`useEffect`** and **`useState`** are React hooks that allow us to manage the component state and its lifecycle. **`NewTodoForm`** and **`TodoList`** are custom components defined elsewhere in the application.

```js
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');

    if (localValue === null) {
      return []
    } else {
      return JSON.parse(localValue);
    }
  });

```

Here, we define the state of the component using **`useState`**. **`todos`** is an array of todo items that are stored in the component's state. **`setTodos`** is a function that allows us to update the state of the component.

We set the initial state of **`todos`** by checking if there are any todo items stored in local storage. If there are, we parse the JSON and return the array. If there aren't any, we return an empty array.

```js
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

```

This is a **`useEffect`** hook that runs whenever the **`todos`** state changes. It updates local storage with the current state of **`todos`**.

```js
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    })
  }

```

This is a function that adds a new todo item to the **`todos`** state. It generates a unique **`id`** for the new item using the **`crypto.randomUUID()`** method, and sets the **`completed`** status to **`false`**. It then adds the new todo item to the existing list of todos using the spread operator.

```js
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

```

This function toggles the **`completed`** status of a todo item in the **`todos`** state. It uses the **`map`** method to iterate over each todo item and returns a new array with the updated todo item. If the **`id`** of the current todo item matches the **`id`** passed as an argument, its **`completed`** status is set to the value passed as an argument.

```js
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

```

This function removes a todo item from the **`todos`** state. It uses the **`filter`** method to return a new array that includes all the todo items except for the one with the **`id`** passed as an argument.
***
### Summary

1. The first file you have is **`App.js`**. It is the main component that is being exported as the default export of the module. This component renders the **`Header`** and **`Meme`** components inside a **`div`** tag.
2. The **`Meme`** component is defined in the second file, which imports **`React`**, **`useState`** and **`useEffect`** from the **`react`** module. This component sets up two **`useState`** hooks. One for **`meme`**, which is an object with **`topText`**, **`bottomText`**, and **`randomImage`** properties. The second hook is for **`allMemes`**, which is initialized to an empty array.
3. There is an **`useEffect`** hook that is used to fetch data from the Imgflip API. It is called when the component mounts for the first time because the dependency array **`[]`** is empty. The API returns an array of meme objects which is stored in the **`allMemes`** state variable using **`setAllMemes`**.
4. **`getMemeImage`** is a function that is called when the user clicks on the "Get a new meme image 🖼" button. This function uses **`Math.random()`** to generate a random index and selects a random meme from the **`allMemes`** array. The URL of the meme image is then stored in the **`randomImage`** property of the **`meme`** state variable using **`setMeme`**.
5. The **`handleChange`** function is called when the user types in the **`input`** fields for the **`topText`** and **`bottomText`**. It sets the **`topText`** and **`bottomText`** properties of the **`meme`** object in state by using the **`event.target`** object.
6. Finally, the **`Meme`** component returns a **`main`** tag with two child **`div`** tags. The first **`div`** is a form that contains two **`input`** fields for **`topText`** and **`bottomText`** along with a button to generate a new meme image. The second **`div`** is an area to display the meme image along with its top and bottom text.
7. The **`Header`** component is defined in a separate file and exports a simple header section with an image, the title "Meme Generator", and the project name "React Course - Project 3".

In summary, this app uses React to fetch data from an external API, allow the user to modify some text fields, and generate a new meme image with the modified text. It displays the result on the same page using the **`Meme`** component, and the **`Header`** component provides a header section to the page.

## Installation

To install and run this project, follow these steps:

1. Clone the repository: `git clone https://github.com/mmartins23/meme-generator.git`
2. Change into the project directory: `cd example`
3. Install dependencies: `npm install`
4. Run the app: `npm start`

## Usage

To use the application, follow these steps:

1. Run npm start to start the development server
2. Open your web browser and navigate to http://localhost:3000
3. Use the form to add new todos to the list
4. Click on a todo to mark it as complete or incomplete
5. Click the "Delete" button to remove a todo from the list.

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.


## Contact

You can reach me on [Twitter](https://twitter.com/23mmartins)


Feel free to send me a message if you have any questions or feedback about this project. I'll do my best to respond as soon as possible.
