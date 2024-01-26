import { React, useState, useEffect } from "react";
import { Button, Textarea } from "@chakra-ui/react";

const ArrayTextarea = ({ data, onChange }) => {
  const [dataArray, setDataArray] = useState(data ?? "");

  const [colNames, setColNames] = useState("");
  const [Info, setInfo] = useState("");

  useEffect(() => {
    onChange(dataArray);
  }, [dataArray]);

  const handelArrayDataAddingButtonCkick = () => {
    const columns = colNames.split(",").map(item => {
      return item.trim();
    });

    const arrayInfo = Info.split(";")
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
    setDataArray([arrayInfo, columns]);
  };
  return (
    <>
      <Textarea
        placeholder={"Insert column name's"}
        resize={"none"}
        onChange={e => setColNames(e.target.value)}
      />
      <Textarea
        placeholder={"Insert data by spliting lines with ';'"}
        resize={"none"}
        onChange={e => setInfo(e.target.value)}
      />
      <Button onClick={handelArrayDataAddingButtonCkick}>SaveData</Button>
    </>
  );
};

export default ArrayTextarea;
