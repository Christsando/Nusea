import { FaCommentDots } from "react-icons/fa";

function CommentButton({ onClick }) {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button
                onClick={onClick}
                className="flex items-center gap-3 bg-blue-500 text-white font-bold px-5 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-opacity-75"
                aria-label="Beri Komentar"
            >
                <FaCommentDots className="text-xl" />
            </button>
        </div>
    );
}

export default CommentButton;
