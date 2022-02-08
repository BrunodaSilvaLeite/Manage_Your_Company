import noaseetimg from "../img/noaseetimg.png";
import imgTeste from "../img/imgTeste.png"
export function Asset(item: any) {
 
  return (
  
    <div className="info-container">
    
      <strong >{item.name}</strong>
      <hr />
      <div id="conatainer-img-info-asset">
        <div className="image-asset">
          {!item.image ?<img src={noaseetimg} width="200px" alt="asset image " />:<img src={imgTeste} width="190px" alt="asset image " /> }
        </div>
        <div className="info-asset">

          <ul>
            <li>
              <i className="bi bi-gear"></i> <strong>Model:</strong><p>{item.model}</p>
            </li>
            <li>
              <i className="bi bi-person"></i><strong >owner:</strong><p>{item.owner}</p>
            </li>
            <li>
              <i className="bi bi-tools"></i><strong>status:</strong><p id={item.status}>{item.status}</p>
            </li>
            <li>
              <i className="bi bi-battery-full"></i><strong>healthLevel:</strong><p>{item.healthLevel}%</p>
            </li>
            <li>
              <i className="bi bi-card-list"></i> <strong>Description:</strong><p>{item.description}</p>
            </li> 
          </ul>
        </div>
      </div>
    
    </div>

  );
}