# Personal Portfolio - Arjun Kadam

This is a personal portfolio website for Arjun Kadam, a Full Stack Developer. It's built with React, TypeScript, and styled with Tailwind CSS. The project includes animations using Framer Motion and a functional contact form powered by EmailJS.

## Features

- **Modern & Minimal Design**: Clean UI/UX with a developer-focused dark theme.
- **Fully Responsive**: Looks great on all devices, from mobile phones to desktops.
- **Smooth Animations**: Engaging user experience with animations from Framer Motion.
- **Reusable Components**: Well-structured and maintainable code.
- **Key Sections**: Hero, About, Projects, Skills, and a working Contact form.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) (v18+), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Contact Form**: [EmailJS](https://www.emailjs.com/)
- **Build Tool**: This project is set up to be used with [Vite](https://vitejs.dev/).

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- `npm` or `yarn` package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables & Configuration

This project uses EmailJS to handle contact form submissions. You will need to create an account on [EmailJS](https://www.emailjs.com/) to get your credentials.

1.  **Sign up for EmailJS**: Create a free account.
2.  **Add a new service**: Connect your email service (e.g., Gmail). Note down the **Service ID**.
3.  **Create an email template**: Create a template for the email you will receive. Note down the **Template ID**. You can use dynamic variables like `{{user_name}}`, `{{user_email}}`, and `{{message}}` in your template.
4.  **Find your Public Key**: Your Public Key can be found in the **Account** section of your EmailJS dashboard.

Once you have these credentials, create a file named `.env` in the root of your project and add the following content, replacing the placeholders with your actual keys:

```
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

> **Note**: The `.env` file is included in `.gitignore` by default in Vite projects to prevent accidentally committing sensitive keys.

### Update Your Resume Link

The resume link is managed in the `constants/index.ts` file. To update the link for the "Download Resume" and "Resume" buttons, simply change the `RESUME_LINK` constant:

```typescript
// in constants/index.ts

export const RESUME_LINK = 'https://your-resume-link.com/resume.pdf';
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser.

---

## Deployment to Vercel

[Vercel](https://vercel.com) is an excellent platform for deploying React applications with zero configuration.

1.  **Push your code to a Git repository** (e.g., GitHub, GitLab, Bitbucket).

2.  **Sign up or log in to Vercel**: Use your Git provider account for easy integration.

3.  **Import your project**:
    - From your Vercel dashboard, click "Add New... -> Project".
    - Select the Git repository you just pushed your code to.

4.  **Configure the project**:
    - Vercel should automatically detect that you are using **Vite**. The Framework Preset should be set accordingly.
    - The build command and output directory are usually detected correctly (`npm run build` and `dist`).

5.  **Add Environment Variables**:
    - Go to your project's settings on Vercel and navigate to the "Environment Variables" section.
    - Add the three variables from your `.env` file:
        - `VITE_EMAILJS_SERVICE_ID`
        - `VITE_EMAILJS_TEMPLATE_ID`
        - `VITE_EMAILJS_PUBLIC_KEY`
    - Paste the corresponding values for each. This is a crucial step that will allow your deployed application to send emails.

6.  **Deploy**:
    - Click the "Deploy" button.
    - Vercel will build and deploy your site. You'll be provided with a live URL once it's done.

Congratulations! Your portfolio is now live.