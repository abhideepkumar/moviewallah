const Skeleton = () => {
    return (
        <div className="bg-zinc-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-start m-4">
                    <div>
                        <div className="h-10 w-64 bg-gray-700 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-48 bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-8">
                            <div className="h-4 w-24 bg-gray-700 rounded mb-2 animate-pulse"></div>
                            <div className="h-6 w-32 bg-gray-700 rounded mb-1 animate-pulse"></div>
                            <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className="relative mb-4 h-[450px] overflow-hidden rounded bg-gray-700 animate-pulse">
                    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                    <div className="relative h-full flex justify-center items-center">
                        <div className="h-[450px] w-[300px] bg-gray-600 rounded animate-pulse"></div>
                    </div>
                </div>
                <div className="mb-4 flex">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-6 w-20 bg-gray-700 rounded-full mr-2 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
