import ItemCount from "../ItemCount/ItemCount";

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
    </div>
  );
}

export default ItemListContainer;
