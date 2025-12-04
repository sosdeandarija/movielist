# MovieList App

**MovieList** is a React web application that displays popular movies, allows users to search for films, and view detailed information, using data from the TMDB (The Movie Database) API.

## 🎬 Live Demo  
👉 https://sosdeandarija.github.io/movielist/


## 🛠️ Technologies Used
- **React**
- **fetch API**
- **React Router**
- **TMDB API**


## 📌 Features
- Shows a list of popular / trending movies
- Movie search by title
- Detailed movie page with:
  - Title
  - Description / overview
  - Release date
  - Rating
  - Poster image
- Navigation between pages using React Router


## 🚀 Installation & Setup

Follow the steps below to run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd movielist
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a TMDB API key (from [https://www.themoviedb.org/](https://www.themoviedb.org/)), then add it to an `.env` file in the root of the project:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm start
   ```


## 🔧 API Configuration

This app uses **TMDB API**. To access movie data, you need your own API key.
Store it in `.env` as shown above, and **never expose it publicly** (do not push your API key to GitHub).


## 🌟 Possible Future Improvements

* Display similar / recommended movies
* Add cast & director information
* Add favorites/watchlist
* Improve UI and responsiveness
* Implement pagination


## 👨‍💻 Author

Created by **@sosdeandarija**
Feel free to use or modify for learning purposes.


## 📄 License

This project is intended for educational use only. You may customize and reuse it freely.
