import { React, useState, useEffect } from "react";
import { Textarea, Button } from "@chakra-ui/react";

const OverviewTextarea = ({ data, onChange }) => {
  const [dataOverview, setDataOverview] = useState(data ?? "");

  const [complaint, setComp] = useState(data[0] ?? "");
  const [baseInf, setBase] = useState(data[1] ?? "");

  useEffect(() => {
    onChange(dataOverview);
  }, [dataOverview]);

  const handelOverviewDataAddingButtonCkick = () => {
    const inf = complaint.value
      .split(",")
      .map(function (inf) {
        return inf.trim().split(":");
      })
      .map(map => {
        return {
          complaint: map[0],
          count: +map[1],
        };
      });

    const base = baseInf.value.split(",").map(item => {
      return item.trim();
    });
    setDataOverview([inf, base]);
  };

  return (
    <>
      <Textarea
        placeholder="insert data like complaint:data, ..."
        resize={"none"}
        onChange={e => setComp(e.target.value)}
      />
      <Textarea
        placeholder="insert name of table, interval, percentage interval, constant line percent"
        resize={"none"}
        onChange={e => setBase(e.target.value)}
      />
      <Button onClick={handelOverviewDataAddingButtonCkick}>SaveData</Button>
    </>
  );
};

export default OverviewTextarea;
