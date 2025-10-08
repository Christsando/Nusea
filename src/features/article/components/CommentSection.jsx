import CommentCard from "./CommentCard";
import { useState } from "react";

const CommentForm = ({ onCommentSubmit }) => {
    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !commentText.trim()) return;

        onCommentSubmit({
            name: name,
            location: "Pengguna Tamu",
            comment: commentText,
        });

        setName("");
        setCommentText("");
    };
    return (
        <form onSubmit={handleSubmit} className="mb-12 p-6 bg-gray-100 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Beri Komentar</h3>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Komentar Anda
                </label>
                <textarea id="comment" rows="4" value={commentText} onChange={(e) => setCommentText(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Kirim Komentar
            </button>
        </form>
    );
};

function CommentSection({ comments, onAddComment }) {
    return (
        <div className="text-center mt-10 py-8">
            <h2 className="text-4xl font-extrabold mb-2 text-blue-700">Ruang Diskusi</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm">
                Tanya & berbagi pengalaman seputar artikel: <i>Belajar Perikanan Berkelanjutan & Akses Pasar Global</i>
            </p>
            <div>
                <CommentForm onCommentSubmit={onAddComment} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                {comments.map((comment, index) => (
                    <CommentCard key={index} data={comment} />
                ))}
            </div>
        </div>
    );
}

export default CommentSection;
