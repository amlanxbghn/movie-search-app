# Movie Verse

**Movie Verse** is a modern and minimalistic React application that allows users to search for movies and view their details. Utilizing the OMDB API, Movie Verse fetches and displays movie data with a clean, light-themed user interface.

## Features

- **Movie Search**: Search for movies by title.
- **Movie Cards**: View movie details including poster, title, type, and year.
- **Responsive Design**: Adapts to different screen sizes with a minimalistic layout.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **OMDB API**: Provides movie data.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   `git clone https://github.com/amlaxbghn/movie-search-app.git`

2. **Navigate to the Project Directory**:

   `cd movie-search-app`

3. **Install Dependencies:**

   `npm install`

4. **Run the Development Server:**

   `npm start`

## Configuration

The app uses the OMDB API to fetch movie data. To use this API, you need to provide your own API key. Update the API_URL in src/App.jsx with your API key:
`const API_URL = "http://www.omdbapi.com?apikey=YOUR_API_KEY";`
Replace YOUR_API_KEY with your actual OMDB API key.

## Usage

1. Search for Movies: Enter a movie title in the search bar and click the search button.
2. Browse Results: View movie details in the cards that appear.
