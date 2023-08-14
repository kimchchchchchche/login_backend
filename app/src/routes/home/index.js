"use strict";

// 라우팅 분리

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router ; // 해당 모듈을 외부로 던져줌