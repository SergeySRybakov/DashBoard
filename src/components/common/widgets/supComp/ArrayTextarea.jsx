import React from "react";
import { Button, Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWidgetsData } from "../../../../store/reducers/widgetDataReducer";

const ArrayTextarea = ({ i, widgetData }) => {
  const dispatch = useDispatch();

  const handelArrayDataAddingButtonCkick = () => {
    const columns = document
      .getElementById(`${i}textareaArrayColumns`)
      .value.split(",")
      .map(item => {
        return item.trim();
      });

    const arrayInfo = document
      .getElementById(`${i}textareaArrayData`)
      .value.split(";")
      .map(arr => {
        return arr.split(",");
      })
      .map(element => {
        return element.map(el => {
          return el.split(":");
        });
      })
      .map(element => {
        return element.map(el => {
          return {
            [el[0].trim()]: el[1].trim(),
          };
        });
      })
      .map(el => {
        return Object.assign({}, ...el);
      })
      .map((item, id) => {
        return {
          ID: id + 1,
          ...item,
        };
      });
    let obj = Object.assign([], widgetData);
    obj[i] = [arrayInfo, columns];
    dispatch(setWidgetsData(obj));
  };
  return (
    <>
      <Textarea
        placeholder={"Insert column name's"}
        resize={"none"}
        id={`${i}textareaArrayColumns`}
      />
      <Textarea
        placeholder={"Insert data by spliting lines with ';'"}
        resize={"none"}
        id={`${i}textareaArrayData`}
      />
      <Button onClick={handelArrayDataAddingButtonCkick}>SaveData</Button>
    </>
  );
};

export default ArrayTextarea;
