import { useRouter } from 'next/navigation';

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

import { Product } from '@/utils/interfaces';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ProductsTable = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Product Description</StyledTableCell>
            <StyledTableCell>Product Price</StyledTableCell>
            <StyledTableCell>Shelf ID</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Weight</StyledTableCell>
            <StyledTableCell>Stock</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              className='hover:bg-slate-100 hover:cursor-pointer'
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <StyledTableCell>{product.name}</StyledTableCell>
              <StyledTableCell>{product.description}</StyledTableCell>
              <StyledTableCell>{product.price}</StyledTableCell>
              <StyledTableCell>{product.shelf}</StyledTableCell>
              <StyledTableCell>{product.image_url}</StyledTableCell>
              <StyledTableCell>{product.weight}</StyledTableCell>
              <StyledTableCell>{product.stock}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
