import PropTypes from "prop-types"
export const Card = ({item}) => {

  return (
    <div className="card mb-5 shadow border border-none" style={{ width: "18rem" }}>
      <img src={item?.displayIcon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item?.displayName}</h5>

      
        <p>Categoria: {item?.shopData?.category}</p>
        <p>cadencia: {item?.weaponStats?.fireRate}</p>
        <p>tamaño de cargador: {item?.weaponStats?.magazineSize}</p>
        <p>tiempo de equipado: {item?.weaponStats?.equipTimeSeconds}</p>
        <p>tiempo de recarga: {item?.weaponStats?.reloadTimeSeconds}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object
};