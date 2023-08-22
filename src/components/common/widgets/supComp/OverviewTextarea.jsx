import React from "react";
import { Textarea, Button, useAccordion } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWidgetsData } from "../../../../store/reducers/widgetDataReducer";

const OverviewTextarea = ({ i, widgetData }) => {
  const dispatch = useDispatch();

  const handelOverviewDataAddingButtonCkick = () => {
    const inf = document
      .getElementById(`${i}textareaOverview`)
      .value.split(",")
      .map(function (inf) {
        return inf.trim().split(":");
      })
      .map(map => {
        return {
          complaint: map[0],
          count: +map[1],
        };
      });

    const base = document
      .getElementById(`${i}textareaOverviewBase`)
      .value.split(",")
      .map(item => {
        return item.trim();
      });
    let obj = Object.assign([], widgetData);
    obj[i] = [inf, base];
    dispatch(setWidgetsData(obj));
  };

  return (
    <>
      <Textarea
        placeholder="insert data like complaint:data, ..."
        resize={"none"}
        id={`${i}textareaOverview`}
      />
      <Textarea
        placeholder="insert name of table, interval, percentage interval, constant line percent"
        resize={"none"}
        id={`${i}textareaOverviewBase`}
      />
      <Button onClick={handelOverviewDataAddingButtonCkick}>SaveData</Button>
    </>
  );
};

export default OverviewTextarea;
