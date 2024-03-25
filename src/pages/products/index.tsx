import React from 'react';
import Table from "../../components/Table";
import {PRODUCTS_DATA} from "../../data";

export const ProductsPage = () => {

  return (
    <div>
      <Table rows={PRODUCTS_DATA}/>
    </div>
  );
};
