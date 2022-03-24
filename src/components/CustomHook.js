import React from 'react'
import { useEffect } from 'react'

export const useTitle = (record) => {
  useEffect(
      () =>{
          document.title = `Record ${record}`
      },
      [record]
  )
}

