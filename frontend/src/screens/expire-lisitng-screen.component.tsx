import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProperties from "../components/list.component";
import { IProperty } from "../models/property.model";

const ExpireLisitngScreen = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get("/properties?expired=true");

      setProperties(data);
    };
    fetchProperties();
  }, []);
  return (
    <>
      <h2>Expired Properties</h2>
      <ListProperties properties={properties} />
    </>
  );
};

export default ExpireLisitngScreen;
