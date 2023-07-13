# Contribution Guide

---

Thank you for considering contributing to the `dv-social-share` project! We appreciate your time and effort in making this project even better. This guide will help you understand how you can contribute to the project effectively.

### Ways to Contribute

---

You can contribute to the **`dv-social-share`** project in the following ways:

1. **Code contributions:** Help improve the functionality or fix bugs by contributing code changes.
2. **Issue reporting:** Report any issues you encounter or suggest new features by creating detailed bug reports or feature requests.
3. **Community support:** Help answer questions and assist other users by participating in discussions or providing guidance on issues.

### Getting Started

---

To get started with contributing, follow these steps:

1. Fork the **`dv-social-share`** repository on GitHub.
2. Clone your forked repository to your local development environment.
3. Make the necessary changes or additions.

### Contributing Code

---

If you wish to contribute code changes, please follow these guidelines:

##### Setting Up the Development Environment

1. Install the latest version of Node.js (Version 16 & above) and npm.
2. Fork the repository and clone it to your local machine.
3. Navigate to the project's directory and install the dependencies using **`npm install`**.

##### Making Changes

1. Create a new branch for your changes: **`git checkout -b your-new-branch-name`**.
2. Make your desired changes, ensuring adherence to the project's coding standards.
3. Test your changes locally to verify they work as expected.

##### Place to Modify the Codes:

1. Icon:
   1. `/icons` => in this place create a Folder for the New Social Share Icon.
   2. in `index.js` add the Base64 Image URL & export it.
   3. go to `/icons/index.js` file and export the newly added Icon.
2. Code:
   1. `/Buttons` => in this place create a Folder for the New Social Share Button.
   2. inside of the newly created Folder, created an `index.js` file
   3. and in the newly created `/index.js` file write the code & logic for the Button to work.
   4. in the end go to `index.js` file in the root of the directory, export the newly added Button.
3. Types:
   1. `/types/index.d.ts` contains the Types declaration for the Button Props defined in `/Buttons/socialShareBtnName.js`
   2. add the `type` option with relevant params e.g. url, title
   3. in declare function, export the function with the types.

##### Submitting a Pull Request

1. Commit your changes with a descriptive commit message: **`git commit -m "Add feature - Name of Social Share Button"`**.
2. Push your changes to your forked repository: **`git push origin your-name-branch-name`**.
3. Open a pull request against the `main` branch of the **`dv-social-share`** repository.
4. Provide a detailed description of your changes, including any relevant information or context.
5. Wait for the project maintainers to review your pull request and provide feedback or merge it.

### Reporting Issues

If you encounter any issues or have suggestions for improvements, please follow these steps:

1. Check if the issue or suggestion has already been reported in the [issue tracker](https://github.com/dhavalveera/dv-social-share/issues).
2. If not, create a new issue, providing a clear and concise description.
3. Include any relevant information, steps to reproduce, or error messages you encountered.

### License

---

By contributing to **`dv-social-share`**, you agree that your contributions will be licensed under the [MIT License](https://github.com/dhavalveera/dv-social-share/blob/main/LICENSE).
