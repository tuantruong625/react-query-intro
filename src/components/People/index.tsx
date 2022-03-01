import axios from "axios"
import { useQuery } from "react-query"
import Person from "../Person"
import { PersonValueType } from "../Person/types"

const fetchPeople = async () => {
 const { data } = await axios.get('http://swapi.dev/api/people/')

 return data
}

const People = (): JSX.Element => {
 const { data, status } = useQuery('people', fetchPeople)

 if (status === 'loading') {
  return (
   <div>Loading data...</div>
  )
 }

 if (status === 'error') {
  return (
   <div>Error fetching data</div>
  )
 }

 return (
  <div>
   <h2>People</h2>

   {
    status === 'success' && (
     <div>
      {data.results.map((person: PersonValueType) => <Person key={person.name} {...{ person }} />)}
     </div>
    )
   }
  </div>
 )
}

export default People