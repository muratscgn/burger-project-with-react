import "../../styles/Menu.css"
import { Data } from "../../data/Data"
import MenuItems from "../items/MenuItems"

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">BURGERLERİMİZ</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItems
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Menu