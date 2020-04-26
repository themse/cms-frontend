import React from "react";

import { CategoryNav } from "./category";
import { VendorNav } from "./vendor";

// TODO get from db
const categories = [
  {
    uid: 1,
    name: "Desktops",
    slug: "#",
  },
  {
    uid: 2,
    name: "Laptops &amp; Notebooks",
    slug: "#",
  },
  {
    uid: 3,
    name: "Components",
    slug: "#",
  },
  {
    uid: 4,
    name: "Tablets",
    slug: "#",
  },
  {
    uid: 5,
    name: "Software",
    slug: "#",
  },
  {
    uid: 6,
    name: "Phones &amp; PDAs",
    slug: "#",
  },
  {
    uid: 7,
    name: "Cameras",
    slug: "#",
  },
  {
    uid: 8,
    name: "MP3 Players",
    slug: "#",
  },
];

// TODO get from db
const vendors = [
  {
    uid: 1,
    name: "Apple",
    slug: "#",
  },
  {
    uid: 2,
    name: "Canon",
    slug: "#",
  },
  {
    uid: 3,
    name: "Dell",
    slug: "#",
  },
  {
    uid: 4,
    name: "Hewlett-Packard",
    slug: "#",
  },
  {
    uid: 5,
    name: "HTC",
    slug: "#",
  },
  {
    uid: 6,
    name: "Logitech",
    slug: "#",
  },
  {
    uid: 7,
    name: "Mirosoft",
    slug: "#",
  },
  {
    uid: 8,
    name: "Nikon",
    slug: "#",
  },
  {
    uid: 9,
    name: "Palm",
    slug: "#",
  },
  {
    uid: 10,
    name: "Samsung",
    slug: "#",
  },
  {
    uid: 11,
    name: "Sony",
    slug: "#",
  },
];

export const Navigation = () => {
  return (
    <aside id="column-left">
      <CategoryNav categories={categories} />
      <VendorNav vendors={vendors} />
    </aside>
  );
};
