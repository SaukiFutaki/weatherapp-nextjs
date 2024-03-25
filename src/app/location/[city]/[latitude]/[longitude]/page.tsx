
import { getClient } from "../../../../../../apollo-client";
import fetchWeatherQuery from "../../../../../../graphql/queries/fetchWeatherQueries";

type Props = {
  params : {
    city : string;
    latitude : string;
    longitude : string;
  }
}

export default async function Page({params} : Props){
  const client = getClient()
  const {city, latitude, longitude} = params;

  const {data} = await client.query({
    query : fetchWeatherQuery,
    variables : {
      current_weather : "true",
      longitude : longitude,
      latitude : latitude,
      timezone : "GMT"
    }
  })

  const result = data.myQuery

  console.log(result)
 
  return(
    <div>
   <h1>{city} {latitude}{longitude}</h1>
    </div>
  )
}