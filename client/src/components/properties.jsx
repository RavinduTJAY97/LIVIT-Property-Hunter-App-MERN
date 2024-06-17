import React, { useState, useEffect } from "react";
import FilterPanel from "./filterPanel";
import PropertyList from "./propertyList";
import { Grid, Box } from "@mui/material";
import EventEmitter from "eventemitter3";

const emitter = new EventEmitter();

const Properties = () => {
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handlePropertyTypeChange = (type) => {
      setPropertyType(type);
    };
    const handleStatusChange = (status) => {
      setStatus(status);
    };
    const handleSearch = (search) => {
      setSearch(search);
    };

    emitter.on("propertyType", handlePropertyTypeChange);
    emitter.on("status", handleStatusChange);
    emitter.on("search", handleSearch);

    return () => {
      emitter.off("propertyType", handlePropertyTypeChange);
      emitter.off("status", handleStatusChange);
      emitter.off("search", handleSearch);
    };
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Grid container spacing={2} padding={5}>
          <Grid item xs={3}>
            <FilterPanel emitter={emitter} />
          </Grid>
          <Grid item xs={9}>
            <PropertyList
              propertyType={propertyType}
              status={status}
              search={search}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Properties;
