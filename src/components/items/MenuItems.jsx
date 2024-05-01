import PropTypes from "prop-types"

const MenuItems = ({ image, name, content, price }) => {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h5 style={{ marginTop: "0px" }}>{content}</h5>
      <p>
        <i style={{ color: "red", fontSize: "large" }}>{price} TL</i>
      </p>
    </div>
  )
}

export default MenuItems

MenuItems.propTypes = {
  image: PropTypes.any,
  name: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
}