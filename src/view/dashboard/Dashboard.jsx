import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { memo, useContext, useEffect, useState } from "react";

// // static import
import { cashFlow, checkingAccount, invoiceOwned } from "../../data/chartData";
import { AppContext } from "../../context";
import { GraphPaper } from "../../components/dashboard";
import CustomLineChart from "../../components/chart/LineChart";
import CustomBarChart from "../../components/chart/BarChart";
import StackedBarChart from "../../components/chart/StackedBarChart";

function Dashboard() {
  // // context state
  const { month, monthsList, currentMonth } = useContext(AppContext);

  // // local state
  const [currentMonthAcChecking, setCurrentMonthAcChecking] = useState(
    checkingAccount.filter((ele) => ele.graphMonth === month)
  );

  // // table header
  const tableColumn = [
    {
      _id: "account",
      label: "Account",
    },
    {
      _id: "thisMonth",
      label: "This Month",
    },

    {
      _id: "ytd",
      label: "YTD",
    },
  ];

  // // table body
  const tableRow = [
    {
      _id: Math.random(),
      account: "Sales",
      thisMonth: "1194.58",
      ytd: "11,418.29",
    },
    {
      _id: Math.random(),
      account: "Advantage",
      thisMonth: "6879.02",
      ytd: "9271.36",
    },
    {
      _id: Math.random(),
      account: "Inventory",
      thisMonth: "4692.26",
      ytd: "9768.09",
    },
    {
      _id: Math.random(),
      account: "Entreatment",
      thisMonth: "0.00",
      ytd: "0.00",
    },
    {
      _id: Math.random(),
      account: "Product",
      thisMonth: "4652.10",
      ytd: "2529.90",
    },
  ];

  // // lifecycle
  useEffect(() => {
    setCurrentMonthAcChecking(
      checkingAccount.filter((ele) => ele.graphMonth === month)
    );
  }, [month]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <GraphPaper header="Checking account">
          <CustomLineChart data={currentMonthAcChecking} />
        </GraphPaper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <GraphPaper header="Invoices owned to you">
          <CustomBarChart
            data={invoiceOwned.filter(
              (ele) => ele.graphMonth === monthsList[currentMonth].value
            )}
          />
        </GraphPaper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <GraphPaper header="Total cash flow">
          <StackedBarChart data={cashFlow} />
        </GraphPaper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <GraphPaper header="Account watchlist">
          <Table
            sx={{
              width: "100%",
              th: { border: 0, fontWeight: 700, opacity: "0.75" },
            }}
            size="small"
          >
            <TableHead>
              <TableRow>
                {tableColumn.map((cel) => (
                  <TableCell
                    key={cel.label}
                    sx={{
                      color: "var(--secondary-text-color)",
                      pt: 0,
                      "&:first-of-type": {
                        pl: 0,
                      },
                      "&:last-child": {
                        pr: 0,
                      },
                    }}
                  >
                    {cel.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRow.map((row) => (
                <TableRow key={row._id}>
                  {tableColumn.map((col) => (
                    <TableCell
                      component="th"
                      scope="row"
                      key={Math.random()}
                      sx={{
                        "&:first-of-type": {
                          pl: 0,
                          minWidth: { sm: 130, md: 200 },
                        },
                      }}
                    >
                      {row[col._id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GraphPaper>
      </Grid>
    </Grid>
  );
}

export default memo(Dashboard);
