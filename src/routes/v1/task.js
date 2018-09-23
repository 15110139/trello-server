const router = require("express").Router();

//import middleware
import authentication from "../../middlewares/authentication";

//import controller
import TaskController from "../../controllers/task";
let taskController = new TaskController();

//Routers method GET
router.post(
  "/createNewTask",
  authentication,
  taskController.createNewTask
);

router.put(
  "/addMemberToTask",
  authentication,
  taskController.addMemberToTask
);

router.put("/removeMembersToTask",authentication,taskController.removeMembersToTask)


export default router;