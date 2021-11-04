import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </div>
    </div>
  );
};

export default Product;