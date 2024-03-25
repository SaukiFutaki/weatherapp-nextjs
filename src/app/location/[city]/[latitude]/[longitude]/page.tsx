type Props = {
  params : {
    city : string;
    latitude : string;
    longitude : string;
  }
}

export default function Page({params} : Props){
  const {city, latitude, longitude} = params;
 
  return(
    <div>
   <h1>{city} {latitude}{longitude}</h1>
    </div>
  )
}