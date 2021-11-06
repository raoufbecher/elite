import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Bienvenue chez Elite Sport Sousse</h1>
        <p className="pl-desc">
        Elite Sport Sousse est une section « initiation football» visant à encadrer et soutenir les enfants
         à partir de 04 ans et à leur permettre de pouvoir commencer à jouer au football sans obligatoirement
          être affilié à un club de football. Sa finalité n‘est pas uniquement sportive, mais aussi éducative et sociale.
           C’est un complément important pour la famille et l’école, et un moyen de compréhension,
            d’intégration et de réussite.  Vos enfants seront pris en charge par des entraîneurs hautement qualifiés. 
            L'initiation est évidement basée sur l'apprentissage de la maîtrise de balle et de la psychomotricité. 
            Notre but c’est d’améliorer chaque joueur individuellement et techniquement.  
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;