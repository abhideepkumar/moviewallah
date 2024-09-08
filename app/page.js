import Searchbar from '@/components/searchbar';

export default function Home() {
    return (
        <div>
            <main>
                {/* Search bar component */}
                <Searchbar />
                {/* Welcome message and instructions */}
                <div className="text-white text-center mt-10">
                    <h1 className="text-2xl font-bold">Welcome to the Movie Database</h1>
                    <p className="text-lg">Search for your favorite movies and TV shows</p>
                    <p className="text-lg">Click on a movie to see more details</p>
                </div>
            </main>
        </div>
    );
}
