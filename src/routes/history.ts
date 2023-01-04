import { Router } from "express";
import { timeline } from "../type/timeline.type";
import * as controller from "../controllers/index";

export const history = Router();
const items: timeline[] = [
    {
      id: 1,
      title: '모건타운 블렌딩 출시',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      date: '2020년 7월',
      type: 'bx-coffee',
    }, 
    {
      id:2,
      title: '파브스 커피 관련 유튜브 컨텐츠',
      content: 'qhWkdNlJVaI',
      date: '',
      type: 'bxl-youtube',
    },
    {
      id:3,
      title: 'GCA 로스팅 대회 참여',
      content:'',
      date: '2022년',
      type: 'bx-world',
    },
    {
      id: 1,
      title: '은평구 아티스트들과 재능기부 공연 ',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      date: '2022년 ',
      type: 'bx-music',
    }, {
      id: 1,
      title: 'R&B공연과 Jazz공연 진행',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      date: '2022년 ',
      type: 'bx-music',
    }, {
      id: 1,
      title: '파나마 게이샤 레드카투아이 다이렉트 트레이딩',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      date: '2022년 12월',
      type: 'bx-coffee',
    }, {
      id: 1,
      title: '명지전문대 창업특강 ',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
      date: '2022년 12월',
      type: 'bxs-school',
    },
  ];
history.get("/", (req, res) => {
    res.send(items);
});
