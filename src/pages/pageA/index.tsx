import React, { FC } from "react";
import { Button, TablePagination } from "@mui/material";

const PageA: FC = () => {
  return (
    <>
      <Button>Styled Components</Button>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={100}
        rowsPerPage={2}
        page={1}
        onPageChange={() => {
          console.log(1);
        }}
        onRowsPerPageChange={() => {
          console.log(1);
        }}
      />
    </>
  );
};

export default PageA;
