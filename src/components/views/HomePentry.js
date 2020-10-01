import React from "react";
import PageHeader from "../containers/PageHeader";
import Categories from "../containers/Categories";
import AppContext from "../../context.js";

const HomePentry = () => {
  return (
    <AppContext.Consumer>
      {({ data }) => (
        <>
          <PageHeader title="Home Pentry" description="categories" />
          <Categories data={data} />
        </>
      )}
    </AppContext.Consumer>
  );
};

export default HomePentry;
