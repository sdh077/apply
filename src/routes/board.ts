import { Router } from "express";
import * as controller from "../controllers/index";
import { Board } from "../type/board.type";

export const board = Router();
const items: Board[] = [
  {
    id: 1,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 2,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
  {
    id: 3,
    register_date: "2022-04-06",
    name: "김땡땡",
    title: "Test 1",
  },
];

board.get("/", (req, res) => {
  const pageNo = Number(req.query.pageNo);
  res.send({ items, pageSize: 10, pageNo: pageNo });
});
