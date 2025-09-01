export default function UnsplashImg({ results }) {
    return (
        <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {results.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`Result ${index}`}
                    className="w-full h-auto rounded-lg shadow-md" />
            ))}
        </div>
    )
}