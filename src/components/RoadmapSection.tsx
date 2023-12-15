import React from 'react'
import { useWindowDimensions } from '../utils'
import { RoadmapMobile } from './RoadmapMobile'
import { RoadmapWeb } from './RoadmapWeb'

const RoadmapSection = () => {
  const { width } = useWindowDimensions()
  return width && width < 768 ? (<RoadmapMobile />) : (<RoadmapWeb />)
}

export { RoadmapSection }