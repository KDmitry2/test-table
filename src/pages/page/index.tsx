import React from 'react';
import {PAGES_DATA} from "../../data";
import Table from "../../components/Table";

export const Page = () => {
  return (
    <div>
      <Table rows={PAGES_DATA}/>
    </div>
  );
};
