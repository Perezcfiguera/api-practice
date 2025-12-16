import PropTypes from "prop-types"
export const Card = ({item}) => {

  return (
    <div className="card mb-5 shadow border border-none" style={{ width: "18rem" }}>
      <img src={item?.displayIcon} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item?.displayName}</h5>

        <p className="card-text">
           {`tipo: ${item.category}`}
        </p>
        <p>simbolob:{item.killStreamIcon}</p>
        <p>cadencia: {item.fireRate}</p>
        <p>tiempo de equipado: {item?.weaponStats?.equipTimeSeconds}</p>
        <p>tiempo de recarga: {item.reloadTimeSeconds}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.prototype = {

    item: PropTypes.array
}