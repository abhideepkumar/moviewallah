# Moviewallah

Moviewallah is a sleek and responsive web application that allows users to search for movies and view details using the OMDb API (Open Movie Database). Built with Next.js and styled with Tailwind CSS, this application emphasizes clean design, usability, and performance.

## Features

- **Movie Search:** Search for movies by title with results limited to 10 per query.
- **Detailed Information:** View detailed information about selected movies, including plot, ratings, and more.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices, offering a seamless user experience across all screen sizes.
- **Error Handling:** Provides user-friendly error messages and loading indicators for a smooth experience.
- **IMDb-Inspired Theme:** Familiar design inspired by IMDb, enhancing usability with a recognizable layout.
- **Server Actions:** Efficient server-side API handling for faster, more secure operations.
- **Slug-Based Routing:** Clean, readable URLs for movie detail pages, improving SEO.
- **Custom SVG Icons:** Custom-designed icons to reduce external dependencies and enhance performance.
- **Secure API Key Storage:** API key management via environment variables for added security.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhideepkumar/moviewallah.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd moviewallah
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env.local` file in the root directory and add your OMDb API key:**
   ```env
   OMDB_API_KEY=your_api_key_here
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open the application in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to start using Moviewallah.

## Usage

1. **Search Movies:** Enter a movie title in the search bar and click the search button.
2. **Browse Results:** View a list of movies matching your search query.
3. **View Details:** Click on any movie to see detailed information, including plot, ratings, and more.
4. **Navigate Back:** Use the "Home" button to return to the search page.

## Technologies Used

- **Next.js:** Framework for building fast, SEO-friendly web applications.
- **React:** JavaScript library for building interactive user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling the application.
- **OMDb API:** Source for movie information, providing data for search results and details.

## Error Handling and Edge Cases

- **No Results Found:** Displays a friendly message when no movies match the search query.
- **API Errors:** Handles API failures gracefully, ensuring the app remains responsive.
- **Missing Images:** Displays a default placeholder when movie posters are unavailable.

## Bonus Features

- **Loading Skeletons:** Provides visual feedback while data is loading, enhancing the user experience.
- **Client-Side Routing:** Ensures smooth, fast transitions between pages without full reloads.
- **Mobile-First Design:** Prioritizes mobile usability while scaling beautifully on larger screens.

## Additional Implementation Details

### IMDb-Inspired Theme

Moviewallah’s design closely resembles the IMDb website, offering users a familiar interface. This recognizable layout improves user engagement and intuitiveness.

### Server Actions for API Handling

Server Actions in Next.js are used to manage API calls, boosting performance by offloading these tasks to the server. This approach enhances both security and client-side efficiency.

### Slug-Based Routing
