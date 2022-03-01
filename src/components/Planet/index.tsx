import { PlanetType } from "./types"

const Planet = ({ planet }: PlanetType): JSX.Element => {
 return (
  <div className="card">
   <h3>{planet.name}</h3>
   <p>Population - {planet.population}</p>
   <p>Terrain - {planet.terrain}</p>
   <p></p>
  </div>
 )
}

export default Planet