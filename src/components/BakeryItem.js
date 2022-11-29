// TODO: create a component that displays a single bakery item


  export default function BakeryItem(props) {
    return(
        <div ClassName = "bakedItem">
            <div ClassName = "outerFlex">
        <div>
        <h3>{props.name}</h3>
        <img
          src={props.image}
          alt={props.description}
          width = "100"
          height = "100"
          ></img>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
        </div>
        </div>
    )
}