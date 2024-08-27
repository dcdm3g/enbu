# Enbu

Enbu is your go-to command-line tool for quickly cloning and starting projects using your favorite local templates. Designed to streamline your workflow, Enbu allows you to kickstart new projects with minimal setup by leveraging your locally stored templates. Future versions will integrate GitHub for even more flexibility.

## Features

- Local Template Management: Clone project templates from a user-defined local folder, making it easy to start new projects based on your custom setups.
- Ease of Use: Focused on doing one thing well—getting your projects started quickly with just a few commands.

## Getting Started

### Installation

First, install Enbu globally:

```sh
npm i -g @enbu/cli
```

### Initialize Your Utilities Folder

Set up Enbu to point to your local utilities folder:

```sh
enbu init
```

This command will prompt you to specify the location of your utilities folder. Within this folder, ensure you have a templates subfolder, where each subfolder is treated as an individual project template.

### Create a New Project

Once initialized, you can easily start a new project by cloning a template:

```sh
enbu create
```

Enbu will prompt you to select a template from your local templates folder and create a new project in the specified location.

## Future Plans

While the current version focuses on local template management, future updates may introduce additional features like:

- GitHub Integration: Clone templates directly from GitHub repositories, both public and private.
- Enhanced Configuration: Support for more complex setup processes or custom scripts.
- Utility Commands: Automate repetitive tasks to further streamline project setup.

## Contributing

The initial version of Enbu is simple and focused, but contributions are welcome. Whether you're interested in enhancing the tool or just sharing ideas, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## Author

Created by [dcdm3g](https://github.com/dcdm3g).
