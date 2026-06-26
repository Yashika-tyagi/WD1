# 🚀 SkillPath - Multi-Page React Website

A responsive multi-page React application built using reusable components and React Router. The project demonstrates modern React concepts including component reusability, routing, controlled forms, state management, and responsive design.

---

## 📌 Project Overview

SkillPath is a simple educational website that provides users with information about the platform, its features, and a contact form for communication.

The application includes multiple pages connected using React Router while maintaining a consistent layout through reusable Navbar and Footer components.

---

## ✨ Features

- Responsive Landing Page
- Reusable React Components
- Multi-page Navigation with React Router
- Hero Section
- Feature Cards
- Testimonials Section
- Call-to-Action Banner
- About Page
- Contact Form
- Form Validation
- Success Message after Form Submission
- Custom 404 Not Found Page
- Common Navbar and Footer across all pages

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── FeatureCard.jsx
│   ├── TestimonialSection.jsx
│   └── CTABanner.jsx
│
├── pages/
│   ├── LandingPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📄 Pages

### 🏠 Landing Page

Contains:

- Hero Section
- Feature Cards
- Testimonials
- CTA Banner
- Footer

---

### ℹ️ About Page

Displays:

- Introduction to SkillPath
- Purpose of the platform
- Key features
- Common Navbar and Footer

---

### 📞 Contact Page

Includes a controlled React form with:

- Name
- Email
- Subject
- Message

Form Features:

- Controlled Inputs using `useState`
- Input Validation
- Prevents Page Reload (`e.preventDefault()`)
- Displays Success Message after submission

---

### ❌ Not Found Page

Displays a custom 404 error page with:

- Error Message
- Button to return to Home Page

---

## 🔀 Routing

| Route | Page |
|--------|------|
| `/` | Landing Page |
| `/about` | About Page |
| `/contact` | Contact Page |
| `*` | 404 Not Found |

---

## 🧠 React Concepts Used

- Functional Components
- Component Reusability
- Props
- State Management (`useState`)
- Controlled Forms
- Event Handling
- Conditional Rendering
- React Router
- Page Navigation
- Layout Composition

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd skillpath
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📸 Screenshots

Add screenshots of:

- Landing Page
- About Page
- Contact Page
- Form Validation
- Success Message
- 404 Page

---

## 📈 Future Improvements

- Dark Mode
- Backend Integration
- Email Service Integration
- User Authentication
- Course Listing Page
- Animations using Framer Motion
- Improved Accessibility
- Better Form Validation

---

## 📚 Learning Outcomes

Through this project, I learned:

- Building reusable React components
- Creating multi-page applications using React Router
- Managing component state with `useState`
- Handling controlled forms and validation
- Implementing client-side routing
- Structuring React projects efficiently
- Composing layouts using reusable components
- Improving UI responsiveness using CSS

---

## 👨‍💻 Author

**Yashika Tyagi**
