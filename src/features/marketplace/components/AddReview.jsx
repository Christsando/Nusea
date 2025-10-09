import { useState } from 'react';
import { X, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/reviewSlice'; // ✅ import action
import './style/addReview.css';

const AddReview = ({ isOpen, onClose, product }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [review, setReview] = useState('');
    const dispatch = useDispatch(); // ✅ redux

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (rating === 0) {
            alert('Silakan berikan rating terlebih dahulu');
            return;
        }

        // ✅ Kirim ke Redux
        dispatch(
            addReview({
                orderNo: product?.orderNo,
                name: product?.name,
                image: product?.image,
                price: product?.price,
                rating,
                review,
                date: new Date().toLocaleDateString('id-ID'),
            })
        );

        alert('Terima kasih atas ulasan Anda!');
        handleClose();
    };

    const handleClose = () => {
        setRating(0);
        setHoveredRating(0);
        setReview('');
        onClose();
    };

    return (
        <div className="review-overlay" onClick={handleClose}>
            <div className="review-modal" onClick={(e) => e.stopPropagation()}>
                <div className="review-header">
                    <div>
                        <h2>Seafood Anda Telah Sampai</h2>
                        <p>Beri ulasan agar kami dapat terus meningkatkan kualitas produk & layanan</p>
                    </div>
                    <button className="close-btn" onClick={handleClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="review-content">
                    <div className="product-info">
                        <img src={product?.image} alt={product?.name} />
                        <div>
                            <h3>{product?.name}</h3>
                            <p>{product?.price}</p>
                        </div>
                    </div>

                    <div className="rating-section">
                        <label>Rating Produk</label>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="star-btn"
                                >
                                    <Star
                                        size={32}
                                        className={star <= (hoveredRating || rating) ? 'star-filled' : 'star-empty'}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="review-section">
                        <label>Ulasan Anda</label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Tuliskan ulasan Anda..."
                            rows="4"
                        />
                    </div>

                    <div className="action-buttons">
                        <button className="submit-btn" onClick={handleSubmit}>
                            Kirim Ulasan
                        </button>
                        <button className="skip-btn" onClick={handleClose}>
                            Lewati
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
