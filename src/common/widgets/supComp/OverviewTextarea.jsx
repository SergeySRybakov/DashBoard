import { React, useState, useEffect } from "react";
import { Textarea, Button } from "@chakra-ui/react";

const OverviewTextarea = ({ data, onChange }) => {
  const [dataOverview, setDataOverview] = useState(data ?? "");

  const [complaint, setComp] = useState("");
  const [baseInf, setBase] = useState("");

  useEffect(() => {
    onChange(dataOverview);
  }, [dataOverview]);

  const handelOverviewDataAddingButtonCkick = () => {
    const inf = complaint
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

    const base = baseInf.split(",").map(item => {
      return item.trim();
    });
    console.log([inf, base]);
    setDataOverview([inf, base]);
  };

  return (
    <>
      <Textarea
        value={complaint}
        placeholder="insert data like complaint:data, ..."
        resize={"none"}
        onChange={e => setComp(e.target.value)}
      />
      <Textarea
        value={baseInf}
        placeholder="insert name of table, interval, percentage interval, constant line percent"
        resize={"none"}
        onChange={e => setBase(e.target.value)}
      />
      <Button onClick={handelOverviewDataAddingButtonCkick}>SaveData</Button>
    </>
  );
};

export default OverviewTextarea;
