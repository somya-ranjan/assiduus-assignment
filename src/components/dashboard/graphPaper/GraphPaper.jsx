import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { memo, useContext, useState } from "react";

// // static import
import RenderIf from "../../RenderIf";
import CustomModal from "../../customModal/CustomModal";
import { AppContext } from "../../../context";
import "./style.scss";

function GraphPaper({ children, header }) {
  // // context state
  const { month, setMonth, currentMonth, monthsList } = useContext(AppContext);

  // // local state
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { sm: "center" },
            p: 2,
            flexDirection: {
              xs:
                header === "Checking account" ||
                header === "Invoices owned to you"
                  ? "column"
                  : "row",
              sm: "row",
            },
            rowGap: 1,
          }}
        >
          <Typography variant="body1" sx={{ opacity: 0.85, fontWeight: "700" }}>
            {header}
          </Typography>
          <RenderIf render={header === "Checking account"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormControl sx={{ mr: 1, minWidth: 130, width: "100%" }}>
                <Select
                  size="small"
                  displayEmpty
                  value=""
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">Manage</MenuItem>
                  <MenuItem value={1} disabled>
                    N/A
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ ml: 1, minWidth: 130, width: "100%" }}>
                <Select
                  size="small"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {monthsList?.slice(0, currentMonth + 1)?.map((ele) => (
                    <MenuItem value={ele.value} key={Math.random()}>
                      {ele.key}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </RenderIf>
          <RenderIf render={header === "Invoices owned to you"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                onClick={() => setModalOpen(true)}
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "var(--primary-bg)",
                  color: "var(--highlight-bg)",
                  boxShadow: "none",
                  "&:hover": {
                    background: "var(--highlight-bg)",
                    color: "var(--primary-bg)",
                  },
                }}
              >
                New Sales Invoices
              </Button>
            </Box>
          </RenderIf>
          <RenderIf render={header === "Total cash flow"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                columnGap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: 1,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    background: "var(--second-highlight-bg)",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, opacity: 0.7 }}
                >
                  In
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  columnGap: 1,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    background: "var(--highlight-bg)",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, opacity: 0.7 }}
                >
                  Out
                </Typography>
              </Box>
            </Box>
          </RenderIf>
        </Box>
        <Divider />

        <Box p={2} width="100%" height={270}>
          {children}
        </Box>
      </Paper>

      <CustomModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        label="Upload Your Invoice"
      >
        <div className="file_attachment_container">
          <label htmlFor="file-input">
            <div className="text-center d-flex justify-content-center align-items-center">
              <i className="uil uil-link" />
              <p>Add files here</p>
            </div>
            <input
              type="file"
              id="file-input"
              name="fileAttach"
              accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            />
          </label>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "var(--primary-bg)",
              color: "var(--highlight-bg)",
              display: "block",
              "&:hover": {
                color: "var(--primary-bg)",
                background: "var(--highlight-bg)",
              },
              mt: 2,
              mx: "auto",
              px: 10,
            }}
            onClick={() => setModalOpen(false)}
          >
            Upload
          </Button>
        </div>
      </CustomModal>
    </>
  );
}

export default memo(GraphPaper);
