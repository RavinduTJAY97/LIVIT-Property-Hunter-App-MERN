import React from "react";
import FilterPanel from "./filterPanel";
import PropertyList from "./propertyList";
import { Grid, Box } from "@mui/material";

const Properties = () => {
  return (
    <div>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Grid container spacing={2} padding={5}>
          {/* Filter panel */}
          <Grid item xs={3}>
            <FilterPanel />
          </Grid>
          {/* /Filter panel */}
          {/* Property list */}
          <Grid item xs={9}>
            <PropertyList />
          </Grid>
          {/* /Property list */}
        </Grid>
      </Box>
    </div>
  );
};

export default Properties;
