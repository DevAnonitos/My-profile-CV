import React from 'react'
import { signInWithGoogle } from '../../firebase'
import { Typography, AppBar, Toolbar} from '@mui/material'

// components MUI
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './login.scss'


// func DATA table
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

// table row components
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="big"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{fontSize: 16}}>
          {row.name}
        </TableCell>
        <TableCell align="right" sx={{fontSize: 16}}>{row.calories}</TableCell>
        <TableCell align="right" sx={{fontSize: 16}}>{row.fat}</TableCell>
        <TableCell align="right" sx={{fontSize: 16}}>{row.carbs}</TableCell>
        <TableCell align="right" sx={{fontSize: 16}}>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{fontSize: 16}}>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div">
                History
              </Typography>
              <Table size="big" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontSize: 12}}>Date</TableCell>
                    <TableCell sx={{fontSize: 10}}>Customer</TableCell>
                    <TableCell align="right" sx={{fontSize: 12}}>Amount</TableCell>
                    <TableCell align="right" sx={{fontSize: 12}}>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" sx={{fontSize: 12}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell sx={{fontSize: 12}}>{historyRow.customerId}</TableCell>
                      <TableCell align="right" sx={{fontSize: 12}}>{historyRow.amount}</TableCell>
                      <TableCell align="right" sx={{fontSize: 12}}>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// props key 
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
// 
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];


const Login = () => {
  return (
    <>
      <div>
        {/* app bar with loggin */}
        <AppBar position='relative' sx={{marginLeft: 10, display: 'flex', justifyContent: 'space-between', backgroundColor: ''}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h2" color="initial">
              My Current Project
            </Typography>
            <button onClick={signInWithGoogle} className='Login-btn'>
              Sign in with Google
            </button>
          </Toolbar>
        </AppBar>

        {/* table container */}

        <TableContainer component={Paper} sx={{display: 'flex', flexDirection:'column', width: 1500, height: 400, justifyContent: 'center', alignItems:'center', marginLeft: 18, marginTop: 10}} className='animate'>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell sx={{fontSize: 20}}>Dessert (100g serving)</TableCell>
                <TableCell align="right" sx={{fontSize: 20}}>Calories</TableCell>
                <TableCell align="right" sx={{fontSize: 20}}>Fat&nbsp;(g)</TableCell>
                <TableCell align="right" sx={{fontSize: 20}}>Carbs&nbsp;(g)</TableCell>
                <TableCell align="right" sx={{fontSize: 20}}>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Login