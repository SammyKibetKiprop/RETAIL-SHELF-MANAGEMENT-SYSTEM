import Link from 'next/link';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface Shelf {
  productName: string;
  serialNumber: string;
  shelfId: string;
  date: string;
}

const ShelfDataTable = ({ shelves }: { shelves: Shelf[] }) => {
  return (
    <div className='flex flex-col justify-between items-start gap-10 col-start-1 col-span-1 md:col-span-2 row-start-1 row-span-1'>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell>Shelf ID</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {shelves.map((shelf) => (
              <TableRow key={shelf.shelfId}>
                <StyledTableCell>{shelf.productName}</StyledTableCell>
                <StyledTableCell>
                  {shelf.serialNumber}
                </StyledTableCell>
                <StyledTableCell>{shelf.shelfId}</StyledTableCell>
                <StyledTableCell>{shelf.date}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link href='/shelf/add'>
        <button className='bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-sm text-white self-end text-sm'>
          Add Shelf
        </button>
      </Link>
    </div>
  );
};

export default ShelfDataTable;
