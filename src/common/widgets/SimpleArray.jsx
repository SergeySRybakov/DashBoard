import React from "react";
import { DataGrid } from "devextreme-react/data-grid";

const SimpleArray = ({ columns, dataSource }) => {
  let columnsNew = [...columns];
  let dataSourceNew = [...dataSource];
  return (
    <DataGrid
      dataSource={dataSourceNew}
      keyExpr="ID"
      defaultColumns={columnsNew}
      showBorders={true}
      height={"100%"}
    />
  );
};

export default SimpleArray;
