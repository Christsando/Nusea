import { Star } from "lucide-react";
import Avatar from "@mui/material/Avatar";
import "./style/component.css";
import "./style/reviewDetail.css";

const ReviewDetail = ({ review }) => {
    // Default placeholder kalau review kosong
    if (!review) return null;

    return (
        <div className="reviewDetailContainer">
            <div className="reviewContainer">
                {/* Profile + Username */}
                <div className="profileContainer">
                    <Avatar
                        alt={review.username || "User"}
                        className="Avatar"
                        src={review.avatar || "/static/images/avatar/1.jpg"}
                    />
                    <h4>{review.username || "Pengguna Anonim"}</h4>
                </div>

                {/* Rating & Date */}
                <div className="starContainer">
                    <div className="ratingContainer">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={
                                    star <= review.rating ? "starIconFull" : "starIconEmpty"
                                }
                            />
                        ))}
                    </div>

                    <div className="dateGivenRating">
                        <p>{review.date || "—"}</p>
                    </div>
                </div>

                {/* Review Text */}
                <div className="reviewTextContainer">
                    <p>{review.review || "Belum ada ulasan."}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;
