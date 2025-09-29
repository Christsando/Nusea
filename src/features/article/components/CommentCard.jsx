import Avatar from "../../../assets/images/article/Circle Avatar.svg";

function CommentCard({ data }) {
    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
                <img src={Avatar} alt="date icon" className="h-10 w-10 mr-1.5" />
                <div className="flex flex-col">
                    <strong className="text-sm text-gray-500 font-semibold">{data.name}</strong>
                    <span className="text-xs text-gray-400 font-semibold">{data.location}</span>
                </div>
            </div>
            <p className="text-sm text-gray-500">{data.comment}</p>
        </div>
    );
}

export default CommentCard