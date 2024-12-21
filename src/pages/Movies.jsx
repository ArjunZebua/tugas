import { useState } from "react";
import { ThumbsDown, MessageCircle, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const movies = [
  { 
    id: 1, 
    title: "Spiderman 3", 
    genre: "Action", 
    description: "Peter Parker becomes Spiderman.", 
    videoUrl: "https://www.youtube.com/watch?v=e5wUilOeOmg" 
  },
  { 
    id: 2, 
    title: "Iron Man", 
    genre: "Action", 
    description: "Tony Stark becomes Iron Man.", 
    videoUrl: "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc"
  },
  { 
    id: 3, 
    title: "The Dark Knight", 
    genre: "Action", 
    description: "Batman faces Joker in Gotham.", 
    videoUrl: "https://www.youtube.com/watch?v=8zBAw3_AXe8"
  },
  { 
    id: 4, 
    title: "Avengers: Endgame", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=8gcRTMr-rlg"
  },
  { 
    id: 5, 
    title: "Guardians of the Galaxy", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=rLM-bmdTuy0"
  },
  { 
    id: 6, 
    title: "Thor: Ragnarok", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=-mHaq88BAV4"
  },
  { 
    id: 7, 
    title: "Captain America: Civil War", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=O5QESUEx7dI"
  },
  { 
    id: 8, 
    title: "Black Panther", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=coJgk8y3JJs"
  },
  { 
    id: 9, 
    title: "Doctor Strange", 
    genre: "Action", 
    description: "The Avengers fight Thanos.", 
    videoUrl: "https://www.youtube.com/watch?v=yknvwyHiz4Q"
  },
];

const Movies = () => {
  const [movieState, setMovieState] = useState(
    movies.map((movie) => ({
      id: movie.id,
      likes: 0,
      dislikes: 0,
      comments: [],
    }))
  );
  const [commentModal, setCommentModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [newComment, setNewComment] = useState("");

  const handleLike = (id) => {
    setMovieState((prevState) =>
      prevState.map((movie) =>
        movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovieState((prevState) =>
      prevState.map((movie) =>
        movie.id === id ? { ...movie, dislikes: movie.dislikes + 1 } : movie
      )
    );
  };

  const handleOpenCommentModal = (id) => {
    setSelectedMovieId(id);
    setCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setCommentModal(false);
  };

  const handleAddComment = () => {
    setMovieState((prevState) =>
      prevState.map((movie) =>
        movie.id === selectedMovieId
          ? { ...movie, comments: [...movie.comments, newComment] }
          : movie
      )
    );
    setNewComment(""); 
    setCommentModal(false); 
  };

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12">
        Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {movies.map((movie) => {
          const state = movieState.find((m) => m.id === movie.id);
          return (
            <div
              key={movie.id}
              className="bg-black p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {movie.title}
              </h2>
              <p className="text-white mb-2">{movie.genre}</p>
              <p className="text-white mb-6">{movie.description}</p>

              <div className="relative mb-6 group">
                <div className="bg-gradient-to-tr from-blue-500 to-indigo-600 p-1 rounded-lg">
                  {movie.videoUrl.includes("youtube.com") ||
                  movie.videoUrl.includes("youtu.be") ? (
                    <iframe
                      className="w-full h-64 rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      src={`https://www.youtube.com/embed/${movie.videoUrl.split(
                        "v="
                      )[1]}`}
                      title={movie.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="w-full h-64 rounded-lg shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      controls
                    >
                      <source src={movie.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>

              <div className="flex justify-around items-center mt-4">
                <button
                  onClick={() => handleLike(movie.id)}
                  className="flex flex-col items-center text-green-500 hover:text-green-600 transition"
                >
                  <ThumbsUp size={24} />
                  <span className="text-white">{state.likes}</span>
                </button>
                <button
                  onClick={() => handleDislike(movie.id)}
                  className="flex flex-col items-center text-red-500 hover:text-red-600 transition"
                >
                  <ThumbsDown size={24} />
                  <span className="text-white">{state.dislikes}</span>
                </button>
                <button
                  onClick={() => handleOpenCommentModal(movie.id)}
                  className="flex flex-col items-center text-blue-500 hover:text-blue-600 transition"
                >
                  <MessageCircle size={24} />
                </button>
              </div>

              <div className="mt-4 text-center">
                <Link
                  to={`/movies/${movie.id}`}
                  className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg font-medium"
                >
                </Link>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-white">Comments</h3>
                <ul className="space-y-2">
                  {state.comments.map((comment, idx) => (
                    <li key={idx} className="text-white">{comment}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {commentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold text-white mb-4">Add Comment</h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg"
              rows="4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddComment}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Comment
              </button>
              <button
                onClick={handleCloseCommentModal}
                className="px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
