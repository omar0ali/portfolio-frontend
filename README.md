# Portfolio Frontend

## Description

This is the frontend code for my personal portfolio website. It showcases my skills, projects, and experience as a developer. The portfolio is built using React and demonstrates my abilities in frontend development, design, and user experience.

> [NOTE!] I am still working on creating components that will be used on each page. I am still working on the frontend, which is why there isn't anything in the pages folder yet.

I am using Bootstrap (https://getbootstrap.com/) as the styling framework for each component. This approach not only ensures consistency throughout the project but also serves as a valuable opportunity for me to learn how to effectively learn React.

### Backend

The backend is written entirely in Go using Fiber and SQLite3 for the database. I will add a repository for the backend later, after fully finishing and publishing the website to the Oracle Cloud server.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-frontend.git
cd portfolio-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## License

This project is licensed under the MIT [License](LICENSE) - see the LICENSE file for details.
