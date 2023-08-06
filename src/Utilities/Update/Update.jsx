import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Buton/Button";
import { updateDatas } from "../../features/UpdateData/UpdateSlice";

export default function Update() {
  const { count, message } = useSelector((state) => state.updateCount);
  console.log(count, message);
  const dispatch = useDispatch();
  const update = () => {
    dispatch(updateDatas(10));
  };
  return (
    <div>
      <h2>Update Count : {count}</h2>
      <div onClick={update}>
        <Button>Update</Button>
      </div>
    </div>
  );
}
