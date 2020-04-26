import React from "react";

export const VendorItem = ({ name, slug, image }) => {
  return (
    <div className="item text-center">
      <a href={slug}>
        <img src={image} alt={name} className="img-responsive" />
      </a>
    </div>
  );
};
