import { Star, Heart } from "lucide-react";
import Avatar from '@mui/material/Avatar';
import "./component.css";

const Review = () => {
    return (
        <div className="reviewContainer">
            <div className="profileContainer">
                {/* change alt with API username */}
                <Avatar alt="Remy Sharp" className="Avatar" src="/static/images/avatar/1.jpg" />
                <h4>Remy Sharp</h4>
            </div>
            <div className="starContainer">
                <div>
                    <Star className="starIconFull" />
                    <Star className="starIconFull" />
                    <Star className="starIconFull" />
                    <Star className="starIconFull" />
                    <Star className="starIconEmpty" />
                </div>

                <div className="dateGivenRating">   
                    <p>01/09/2025</p>
                </div>
            </div>

            <div className="reviewTextContainer">
                <p>
                    Kepiting rajungan adalah jenis kepiting yang banyak ditemukan di perairan Asia Tenggara, termasuk Indonesia. Kepiting ini dikenal dengan cangkangnya yang berwarna biru kehijauan dan dagingnya yang lezat. Rajungan biasanya hidup di dasar laut berlumpur atau berpasir, dan sering kali ditemukan di muara sungai atau daerah pesisir.
                </p>
            </div>

        </div>
    );
};

export default Review;