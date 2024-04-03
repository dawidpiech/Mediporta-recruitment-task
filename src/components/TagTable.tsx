import { observer } from "mobx-react-lite";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
} from "@mui/material";
import Tag from "../types/Tag";

interface TagTableProps {
  handleChangeOrder: (order: string, field: string) => void;
  orderBy: { field: string; order: string };
  tags: Tag[];
}

const TagTable: React.FC<TagTableProps> = observer(
  ({ handleChangeOrder, orderBy, tags }) => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              onClick={() => {
                orderBy.order === "desc"
                  ? handleChangeOrder("asc", "name")
                  : handleChangeOrder("desc", "name");
              }}
              sx={
                orderBy.field === "name"
                  ? { fontWeight: 900 }
                  : { fontWeight: 600 }
              }
            >
              <TableSortLabel
                active={orderBy.field === "name"}
                direction={orderBy.order === "desc" ? "desc" : "asc"}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="right"
              onClick={() => {
                orderBy.order === "desc"
                  ? handleChangeOrder("asc", "popular")
                  : handleChangeOrder("desc", "popular");
              }}
              sx={
                orderBy.field === "popular"
                  ? { fontWeight: 900 }
                  : { fontWeight: 600 }
              }
            >
              <TableSortLabel
                active={orderBy.field === "popular"}
                direction={orderBy.order === "desc" ? "desc" : "asc"}
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
