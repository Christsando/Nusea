import HistoryTable from "../components/HistoryTable"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import "./style/history.css"

function History() {
    return (
        <div className="historyPage">
            <Navbar/>

            <div className="historyContainer">
                <h1>History Order</h1>
                <HistoryTable />
            </div>
            <Footer/>
        </div>
    );
};

export default History;