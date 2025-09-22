import './App.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from '../../../assets/images/crab.png';
import { Star, Heart } from "lucide-react";
import Button from '@mui/material/Button';
import ButtonQuantity from '../components/ButtonQuantity';
import Review from "../components/Review"
import { Truck, Package } from "lucide-react";
import ProductsCard from '../components/ProductsCard';
import HistoryTable from '../components/HistoryTable';

function Detail() {
    const { id } = useParams();
    // const [product, setProduct] = useState(null);

    return (
        <div className="DetailApp">
            <title>Nusea | Detail Produk</title>

            <main>
                <div className='upperContainer'>
                    {/* image section */}
                    <div className='imageContainer'>
                        <img src={Image} alt='ImageHolder' />
                    </div>

                    {/* detail section */}
                    <div className='detailContainer'>
                        {/* change with API if already have */}

                        <div className='productNameContainer'>
                            {/* product name */}
                            <h2>Keptingan Rajungan</h2>
                            <Heart className="heartIcon" />
                        </div>

                        <div className='priceAndRatingContainer'>
                            <p>Rp 180.000,00 / Kg | </p>

                            <div className="ratingContainer">
                                <Star className="starIcon" />
                                <Star className="starIcon" />
                                <Star className="starIcon" />
                                <Star className="starIcon" />
                                <Star className="starIcon" />

                                <span className="ratingNumber">(32 ulasan)</span>
                            </div>
                        </div>

                        {/* create line separator */}
                        <hr className='lineSeparator' />

                        {/* description section */}
                        <div className='descriptionContainer'>
                            <p>
                                Kepiting rajungan adalah jenis kepiting yang banyak ditemukan di perairan Asia Tenggara, termasuk Indonesia. Kepiting ini dikenal dengan cangkangnya yang berwarna biru kehijauan dan dagingnya yang lezat. Rajungan biasanya hidup di dasar laut berlumpur atau berpasir, dan sering kali ditemukan di muara sungai atau daerah pesisir.
                            </p>

                            {/* keunggulan produk */}
                            <p className='keunggulanProduk'>
                                Keunggulan Produk: <br />
                                - Daging yang Manis dan Gurih.<br />
                                - Tekstur yang Lembut<br />
                                - Kaya Nutrisi<br />
                                - Serbaguna dalam Masakan
                            </p>
                        </div>

                        <div className='couponContainer'>
                            <span><Truck size={24} className="couponIcon" />Gratis Ongkir untuk pembelian di atas Rp500.000</span>
                            <span><Package size={24} className="couponIcon" />Estimasi pengiriman: 6-8 hari kerja</span>
                        </div>

                        <div className='buttonContainer'>
                            <div className='addToCartContainer'>
                                <ButtonQuantity />
                                <Button variant="contained" color="error" sx={{ borderRadius: 20 }} className='addToCartButton'>
                                    Tambah ke Keranjang
                                </Button>
                            </div>
                            <Button variant="outlined" sx={{ borderRadius: 20 }} className='buyNowButton'>
                                Beli Sekarang
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ulasan user */}
                <div className='ulasanContainer'>
                    <h3>Rating dan Ulasan </h3>
                    <div className='listUlasanContainer'>
                        <Review />
                        <Review />
                        <a href='#'>Lihat lebih banyak ulasan &gt;</a>
                    </div>
                </div>

                <div>
                    <HistoryTable/>
                </div>
            </main>
        </div>
    );
}

export default Detail;