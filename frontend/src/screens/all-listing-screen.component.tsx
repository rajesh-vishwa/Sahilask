import React, { useEffect, useState } from "react";
import axios from "axios";

import { IProperty } from "../models/property.model";
import ListProperties from "../components/list.component";

const AllLisitngScreen = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get("/properties");

      setProperties(data);
    };
    fetchProperties();
  }, []);
  return (
    <>
      <h2>All Properties</h2>
      <ListProperties properties={properties} />
    </>
  );
};

export default AllLisitngScreen;
