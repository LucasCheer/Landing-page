import { Amazon, Dible, HubSpot, Notion, Netflix, Zoom } from "../assets/images/companys/index.js"
import '../styles/Logotype.scss'
export default function Logotype() {
  return (
    <div className="logotype-container">
        <img className="logotype-image" src={Amazon} alt="Imagen Logotype" />
        <img className="logotype-image" src={Dible} alt="Imagen Logotype" />
        <img className="logotype-image" src={HubSpot} alt="Imagen Logotype" />
        <img className="logotype-image" src={Notion} alt="Imagen Logotype" />
        <img className="logotype-image" src={Netflix} alt="Imagen Logotype" />
        <img className="logotype-image" src={Zoom} alt="Imagen Logotype" />
    </div>
  )
}
