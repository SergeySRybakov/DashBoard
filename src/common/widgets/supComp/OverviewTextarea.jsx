import React from "react";
import { Textarea, Button, useAccordion } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addWidgetDataElement } from "../../../store/reducers/widgetDataReducer";

const OverviewTextarea = ({ i }) => {
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
    dispatch(addWidgetDataElement({ i, text: [inf, base] }));
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
