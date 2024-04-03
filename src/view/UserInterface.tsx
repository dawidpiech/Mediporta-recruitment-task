import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { CircularProgress, Pagination, TextField } from "@mui/material";
import tagStore from "../stores/TagStore";
import TagTable from "../components/TagTable/TagTable";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const UserInterface: React.FC = observer(() => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrder] = useState<{
    field: "name" | "popular";
    order: "asc" | "desc";
  }>({
    field: "name",
    order: "desc",
  });

  useEffect(() => {
    tagStore.fetchTags(
      `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${rowsPerPage}&order=${orderBy.order}&sort=${orderBy.field}&site=stackoverflow`
    );
  }, [page, rowsPerPage, orderBy]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleChangeOrder = (
    field: "name" | "popular",
    order: "asc" | "desc"
  ) => {
    setOrder({ field: field, order: order });
  };

  return (
    <>
      {tagStore.error ? (
        <ErrorMessage
          message={tagStore.error}
          borderColor="#e68e8e"
          fontColor="#333"
        />
      ) : (
        <>
          <TextField
            id="filled-number"
            label="Rows per page"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth={true}
            variant="outlined"
            onChange={handleChangeRowsPerPage}
            defaultValue={rowsPerPage}
            sx={{ margin: "20px" }}
          />
          {tagStore.loading ? (
            <CircularProgress />
          ) : (
            <>
              <TagTable
                handleChangeOrder={handleChangeOrder}
                orderBy={orderBy.order}
                orderByField={orderBy.field}
                tags={tagStore.tags}
              ></TagTable>
              <Pagination
                count={page + 3}
                page={page}
                onChange={handleChangePage}
                boundaryCount={0}
                siblingCount={1}
                showFirstButton={true}
                sx={{ display: "flex", justifyContent: "center", m: "20px" }}
              />
            </>
          )}
        </>
      )}
    </>
  );
});

export default UserInterface;
