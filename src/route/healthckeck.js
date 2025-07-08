import { Router } from "express";

import { helthchek} from "../controll/heltchcheck.controller.js";

const router=Router()
router.route("/").get(helthchek)

export default router