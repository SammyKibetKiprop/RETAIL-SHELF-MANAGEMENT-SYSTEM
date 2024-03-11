import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Shelf } from '@/utils/interfaces';
import { useRouter } from 'next/navigation';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ShelfDataTable = ({ shelves }: { shelves: Shelf[] }) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Shelf Name</StyledTableCell>
            <StyledTableCell>Serial Description</StyledTableCell>
            <StyledTableCell>Shelf ID</StyledTableCell>
            <StyledTableCell>Weight Capacity</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {shelves.map((shelf) => (
            <TableRow
              key={shelf.id}
              className='hover:bg-slate-100 hover:cursor-pointer'
              onClick={() => router.push(`/shelf/${shelf.id}`)}
            >
              <StyledTableCell>{shelf.name}</StyledTableCell>
              <StyledTableCell>{shelf.description}</StyledTableCell>
              <StyledTableCell>{shelf.id}</StyledTableCell>
              <StyledTableCell>{shelf.weight_capacity}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShelfDataTable;
