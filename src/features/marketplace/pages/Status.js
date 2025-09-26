import './style/status.css';
import ProgressTracker from '../components/progressTracker';
import DetailStatus from '../components/DetailStatus';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

function Status() {
    return (
        <div>
            <title>
                Nusea | Order Status
            </title>
            <Navbar/>
            <div className="detailOrderPageContainer">
                <h1>Status Order</h1>
                <div className="progressTrackerContainer">
                    <ProgressTracker />
                </div>

                <div className="detailStatusImageContainer">
                    <div>
                        <DetailStatus />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Status;