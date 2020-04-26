import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";

// TODO remove
const categories = [
  {
    id: 0,
    title: "Some Title 0",
    slug: "some-title-0",
    subcategories: [1, 2, 3, 4],
  },
  {
    id: 1,
    title: "Some Title-1",
    slug: "some-title-1",
    subcategories: [2],
  },
  {
    id: 2,
    title: "Some Title-2",
    slug: "some-title-2",
    subcategories: [3],
  },
  {
    id: 3,
    title: "Some Title 3",
    slug: "some-title-3",
    subcategories: [4],
  },
  {
    id: 4,
    title: "Some Title-4",
    slug: "some-title-4",
    subcategories: [5],
  },
  {
    id: 5,
    title: "Some Title-5",
    slug: "some-title-5",
    subcategories: [6],
  },
  {
    id: 6,
    title: "Some Title-6",
    slug: "some-title-6",
    subcategories: [7],
  },
  {
    id: 7,
    title: "Some Title-7",
    slug: "some-title-7",
    subcategories: [],
  },
];

export const CategoryRouter = ({ match, ...props }) => {
  console.log(props);

  const category = categories.find(
    (item) => item.slug === match.params.categorySlug
  );

  if (!category) {
    // TODO add 404
    return <Fragment />;
  }

  return (
    <Fragment>
      {match.isExact && (
        <Fragment>
          <h1>{category.title}</h1>
          {category.subcategories.map((subcategoryId) => {
            const subcategory = categories.find(
              (category) => category.id === subcategoryId
            );
            return (
              subcategory && (
                <Link
                  key={subcategory.slug}
                  to={`${match.url}/${subcategory.slug}`}
                >
                  {subcategory.title}
                </Link>
              )
            );
          })}
        </Fragment>
      )}
      <Switch>
        <Route
          path={`${match.path}/:categorySlug`}
          component={CategoryRouter}
          exact
        />
      </Switch>
    </Fragment>
  );
};
