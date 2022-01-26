import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../Items/ItemList";

function ItemListContainer(props) {
  const onAdd = (amount) => {
    console.log(amount);
  };

  return (
    <div>
      <div style={{ backgroundColor: "orange" }}>
        <h3>{props.greeting}</h3>
      </div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
