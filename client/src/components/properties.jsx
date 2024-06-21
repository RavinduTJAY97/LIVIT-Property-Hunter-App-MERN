import React, { useState, useEffect } from "react";
import FilterPanel from "./filterPanel";
import PropertyList from "./propertyList";
import { Grid, Box } from "@mui/material";
import EventEmitter from "eventemitter3";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const emitter = new EventEmitter();

const Properties = () => {
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();
  const util = require("../util");

  useEffect(() => {
    const role = util.checkUserRole();
    setUserRole(role);
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
      {userRole === "admin" && (
        <Box mr={4} mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Fab
            aria-label="add"
            sx={{ background: "#fe5c00", color: "white" }}
            onClick={() => navigate("/properties-add")}
          >
            <AddIcon />
          </Fab>
        </Box>
      )}

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
