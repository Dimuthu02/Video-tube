import { Router } from "express";

import { helthchek} from "../controll/heltchcheck.controller.js";

const router=Router()
router.route("/").get(helthchek)
router.route("/test").get(helthchek);
export default router