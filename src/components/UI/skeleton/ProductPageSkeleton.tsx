import React from "react";
import ContentLoader from "react-content-loader";

const ProductPageSkeleton = () => (
  <ContentLoader
    speed={2}
    width={932}
    height={264}
    viewBox="0 0 932 264"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="26" y="410" rx="10" ry="10" width="193" height="32" />
    <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
    <rect x="248" y="0" rx="10" ry="10" width="260" height="54" />
    <rect x="750" y="0" rx="10" ry="10" width="180" height="40" />
    <rect x="230" y="135" rx="10" ry="10" width="155" height="16" />
    <rect x="230" y="170" rx="10" ry="10" width="523" height="47" />
    <rect x="850" y="135" rx="10" ry="10" width="82" height="82" />
  </ContentLoader>
);

export default ProductPageSkeleton;
