# Online Book Library - React + Redux

A modern, responsive online book library built with **React**, **React Router**, and **Redux** as a part assignment project. Users can browse books by category, search for books, view detailed information, and add new books to the collection.

## Features Implemented

### 1. Home Page (15 marks)
- Welcoming landing page with a hero message
- Display of available book categories (Fiction, Non-Fiction, Sci-Fi, Romance, etc.)
- Featured "Popular Books" section displayed as beautiful cards
- Responsive navigation bar with links to:
  - Home
  - Browse Books
  - Add Book

### 2. Browse Books Page (20 marks)
- Full list of books with category filtering
- Dynamic routing using `/books/:category` (e.g., `/books/fiction`)
- Search functionality to filter books by **title** or **author** in real-time
- Each book has a "View Details" button linking to its dedicated page
- Clean card-based layout for better readability

### 3. Book Details Page (15 marks)
- Dynamic route `/book/:id` to display individual book details
- Shows:
  - Book Title
  - Author
  - Category
  - Description
  - Rating (out of 5 stars)
- "Back to Browse" button for easy navigation

### 4. Add Book Page (30 marks)
- Fully functional form to add a new book
- Form fields: Title, Author, Category, Description, Rating
- Client-side form validation (all fields required, valid rating 1–5)
- State management powered by **Redux Toolkit**
- On successful submission:
  - New book is added to the beginning of the list
  - User is redirected to the Browse Books page
  - New book immediately appears in the list

### 5. 404 Not Found Page (5 marks)
- Custom error page for undefined routes
- Displays the invalid URL that was accessed
- No navigation header (as per requirement)
- "Go Back Home" link for easy recovery

### 6. Styling & User Experience (5 marks)
- Modern, clean, and responsive design
- Mobile-friendly layout
- Consistent color scheme and typography
- Smooth hover effects and transitions
- Card-based UI with shadows and proper spacing
- Intuitive navigation and user flow

## Tech Stack
- React.js (with Hooks)
- React Router DOM v6 (for routing)
- Redux + Redux Toolkit (for state management)
- Pure CSS (custom styling, no external libraries)
- Dummy data (in-memory book collection)

## Project Setup

### 1. Clone the repository

git clone https://github.com/Aasthadixit13/-online-library-system
## 🚀 Live Link  
▶️ https://online-library-system-eight.vercel.app/