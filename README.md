# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Project Description

This Project is part of a technical assessment.

Project Requirements:

● Create a react application that displays the complete name and email address from
the results of the api provided
○ The fetch should be async and await then save it to local storage
○ Destructure the response with appropriate keys needed.
○ Use any fetching modules from npm instead of fetch
● The application should also have a Refresh button to refresh the component (strictly
not page load) to fetch another user with the same endpoint.
● The application should utilize hooks and a functional component.
● React application built in .tsx with typescript typings is a plus.

Project Overview:

Created a Website that fetch random user with details alias as Profesionals. By Clicking "Find the one!" Button it fetch random user from the API given. Every Click of the said button a popup will appear which displays the fetched user and will have different user per click.

Also create a section to display selected user selected after clicking "I like this one" button. It is a accordion that when you click the accordion itself will display more details and an option the download a resume.

Note: the function working accordingly on the website is the one needed on the requirements some function is for display purpose. eg. Email sent and Download CV's

# Setup

1. Clone the repository
2. After cloning the repository, Run command npm install or npm i
3. Once the installing is done, you can now Run the application by command npm run dev
