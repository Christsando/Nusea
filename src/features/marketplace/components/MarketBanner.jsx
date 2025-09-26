import "./style/component.css";

const MarketBanner = () => {
  const handleScroll = () => {
    const section = document.getElementById("productsSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bannerContainer">

      <h1>Fresh Seafood<br />From Indonesia<br />to The World</h1>

      {/* button untuk shop */}
      <button className="exploreButton" onClick={handleScroll}>
        SHOP NOW
      </button>

    </div>
  );
};

export default MarketBanner;