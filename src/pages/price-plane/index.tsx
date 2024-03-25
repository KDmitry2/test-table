import React from 'react';
import {PRICE_PLANS_DATA} from "../../data";
import Table from "../../components/Table";

export const PricePlanePage = () => {
  return (
    <div>
      <Table rows={PRICE_PLANS_DATA}/>
    </div>
  );
};
