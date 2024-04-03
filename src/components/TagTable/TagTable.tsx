import React from "react";
import { observer } from "mobx-react-lite";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from "@mui/material";
import Tag from "../../types/Tag";

export interface TagTableProps {
  handleChangeOrder: (field: "name" | "popular", order: "asc" | "desc") => void;
  orderByField: "name" | "popular";
  orderBy: "asc" | "desc";
  tags: Tag[];
}

const TagTable: React.FC<TagTableProps> = observer(
  ({ handleChangeOrder, orderBy, tags, orderByField }) => {
    const handleSortChange = (field: "name" | "popular") => {
      const order =
        orderByField === field && orderBy === "asc" ? "desc" : "asc";
      handleChangeOrder(field, order);
    };

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              onClick={() => handleSortChange("name")}
              sx={
                orderByField === "name"
                  ? { fontWeight: 900 }
                  : { fontWeight: 600 }
              }
            >
              <TableSortLabel
                active={orderByField === "name"}
                direction={orderBy === "desc" ? "desc" : "asc"}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="right"
              onClick={() => handleSortChange("popular")}
              sx={
                orderByField === "popular"
                  ? { fontWeight: 900 }
                  : { fontWeight: 600 }
              }
            >
              <TableSortLabel
                active={orderByField === "popular"}
                direction={orderBy === "desc" ? "desc" : "asc"}
              >
                Count
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag) => (
            <TableRow key={tag.name}>
              <TableCell>{tag.name}</TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
);

export default TagTable;
