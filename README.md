# 📦 My React & TypeScript App

This is a **React** application built with **TypeScript**, **Formik**, and **MUI** (Material-UI). The app includes a multi-step form with data persistence using local storage, ensuring that users can resume their progress even if they close the tab or refresh the page.

---

## **Features**

- **TypeScript** support for static typing and better developer experience.
- **Material-UI (MUI)** for a responsive and modern UI.
- **Formik** and **Yup** for form handling and validation.
- **Multi-step form** with progress tracking.
- **Local storage persistence** to restore user progress.

---

## **Tech Stack**

- **React** – Frontend library.
- **TypeScript** – For static type checking.
- **MUI (Material-UI)** – Component library for styling.
- **Formik & Yup** – Form handling and validation.

---

## **Installation**

Follow these steps to set up the project locally.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/beshiralkhadra/multi-step-form.git
   cd my-app
   npm install
   ```

## **Scripts**

npm start

## **Project Structure**

my-app/
│
├── public/ # Static public assets
├── src/ # Application source code
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom React hooks (e.g., useFormLocalStorage)
│ ├── screens/ # Page-level components (e.g., multi-step form)
│ ├── types/ # TypeScript type definitions
│ ├── index.tsx # App entry point
│ └── App.tsx # Root component
├── .gitignore # Files to ignore in version control
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration

## **Usage**

Running the Multi-Step Form
Launch the app using the npm start command.
Complete the multi-step form with your personal and contact information.
If you leave the page or refresh the tab, your data will be saved, and the form will resume from the step you left off.
On submission, a success message will appear with an option to restart the form.
Adding a New Step to the Form
Create a new component (e.g., StepFour.tsx) in the pages/ directory.
Import the new step into the MultiStepForm.tsx component.
Update the steps array with the new step label.
