import React, { FC } from "react"
import ContentLoader from "react-content-loader"

import classes from './ProductSkeleton.module.scss'

const ProductSkeleton:FC = () => (
  <ContentLoader 
    className={classes.skeleton}
    speed={2}
    width={238}
    height={461}
    viewBox="0 0 238 461"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="21" y="15" rx="10" ry="10" width="193" height="60" /> 
    <rect x="21" y="125" rx="10" ry="10" width="193" height="231" /> 
    <rect x="21" y="420" rx="10" ry="10" width="125" height="32" />
  </ContentLoader>
)

export default ProductSkeleton

