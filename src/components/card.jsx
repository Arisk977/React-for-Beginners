function Card(props){
    return  <div className="card" style={{ width: '18rem'}}>
  <img src={"/assets/img/" + props.image} className="card-img-top" alt="tomatos"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text"> Füge {props.description} in den Warenkorb hinzu</p>
    <button onClick={props.onAdd} className="btn btn-primary">Hinzufügen</button>
  </div>
</div>
}

export default Card;
