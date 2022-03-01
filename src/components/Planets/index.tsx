import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import Planet from "../Planet"
import { PlaneValueTypes } from "../Planet/types"

type foo = {
 results: []
}
const fetchPlanets = async (page: number) => {
 const { data } = await axios.get(`http://swapi.dev/api/planets/?page=${page}`)

 return data
}

const Planets = (): JSX.Element => {
 const [page, setPage] = useState(1)
 const { data, status, isPreviousData } = useQuery(['planets', page], () => fetchPlanets(page), {
  keepPreviousData: true
 })

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
   <h2>Planets</h2>

   {
    status === 'success' && (
     <>
      <button
       onClick={() => setPage(old => Math.max(old - 1, 0))}
       disabled={page === 1}
      >Previous Page</button>
      <span>{page}</span>
      <button
       onClick={() => {
        if (!isPreviousData && data.results.length > 0) {
         setPage(old => old + 1)
        }
       }}
       disabled={isPreviousData}
      >Next Page</button>
      <div>
       {data?.results.map((planet: PlaneValueTypes) => <Planet key={planet.name} {...{ planet }} />)}
      </div>
     </>
    )
   }
  </div >
 )
}

export default Planets