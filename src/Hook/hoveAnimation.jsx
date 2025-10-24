import { hover } from "motion"
import { useRef, useEffect } from "react"

const  Usehover=()=> {
  const ref = useRef(null)

  useEffect(() => {
    return hover(ref.current, () => {
      console.log("on hover start")

      return () => console.log("on hover end")
    })
  }, [])

  return  {ref} 
}

export default usehover;
