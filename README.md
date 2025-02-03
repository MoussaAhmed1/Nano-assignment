# Sign Up Page Assignment

## Overview
This repository contains a simple sign-up page built using Angular and Tailwind CSS. The page includes a reactive form with validation and integrates with an authentication service.

## Technologies Used
- **Angular**: Front-end framework for building the sign-up page.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Reactive Forms**: Used for handling form validation and state management.
- **ngx-toastr**: Used for displaying toast notifications.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MoussaAhmed1/Nano-assignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Nano-assignment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   ng serve
   ```
5. Open your browser and go to `http://localhost:4200/`

## Folder Structure
```
src/
├── app/
│   ├── components/
│   │   ├── signup/
│   │   │   ├── signup.component.ts
│   │   │   ├── signup.component.html
│   │   │   ├── signup.component.css
│   ├── models/
│   │   ├── user.ts
│   ├── services/
│   │   ├── auth.service.ts
│   ├── app.module.ts
│   ├── app.component.ts
```

## Sign-Up Component
The `SignupComponent` handles the user registration process.
### Features
- Form validation for required fields, email format, and password matching.
- Show/hide password functionality.
- Integration with an authentication service for user registration.
- Toast notifications for success and error messages.

## Contribution
Feel free to fork the repository and submit pull requests for improvements.

