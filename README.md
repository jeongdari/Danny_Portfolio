# Portfolio Website
Welcome to my portfolio website! This project serves as an assignment for IFN666, showcasing my skills and projects.

## Purpose of the Application
This portfolio website is designed to present my professional profile, projects, and interests to visitors. It features multiple pages including a landing page (Home), an About page, a Resume page, and a Portfolio page.

## How to Contribute to Development
Contributions to this project are welcome. To contribute:

> Clone the repository:

```bash
git clone https://github.com/jeongdari/Danny_Portfolio.git
```

> Install dependencies:

```bash
cd Danny_Portfolio
npm install
```
Make your changes and create a pull request.

## Features
- Dynamic Navigation: React Router used for easy navigation between sections.
- Interactive Home Page: Animated hero image with contact button and downloadable resume.
- About Page: Personal interests displayed, including Flickr API integration for photo metadata and Google Map API.
- Resume Page: Skills, education, and work experience showcased with interactive components.
- Portfolio Page: Projects and GitHub repositories displayed using GitHub API and React Datatable.

## Dependencies
1. react: Framework for building user interfaces.
2. react-router-dom: React library for declarative routing.
3. bootstrap: Front-end CSS framework for styling.
4. react-bootstrap: React components for Bootstrap.
5. @mui/material, @mui/icons-material: Material-UI components for popover, carousel, datatable, etc.
6. react-datatable: React library for displaying data tables.

To install dependencies, run:

```bash
npm install
```

## Application Architecture
The application is structured as a React single-page application (SPA) using components for different sections. React Router manages navigation between pages. External APIs like Flickr, GoogleMap and GitHub are integrated for data retrieval. Styling is done using CSS and Bootstrap.

## How to Report Issues
If you encounter any issues or have suggestions, please report them on the GitHub repository's issue tracker:
[Link to Issue Tracker](https://github.com/jeongdari/Danny_Portfolio/issues)

## Environment Variables
Sensitive information such as API keys and tokens are stored securely in an .env.local file, which is excluded from version control using .gitignore.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this code for personal or commercial projects.
