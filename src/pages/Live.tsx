import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'
function Live() {
  const images = useQuery(api.functions.list, {})
  console.log(JSON.stringify(images))
  return (
    <>
    {
        images ? 
      images.map((image) => {
        if (image.url){
          return (
            <img src={image.url} alt="Sample" />
          )
        }
      }) : <>Still loading</>
    }
    </>
  )
}

export default Live
