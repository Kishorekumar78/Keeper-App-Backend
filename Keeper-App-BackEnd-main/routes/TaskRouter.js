const {Router} = require("express")
const { getTasks,updateTasks,deleteTasks,saveTasks }=require("../controllers/TaskController")
const router=Router()

router.get("/get",getTasks);
router.post("/save",saveTasks);
router.put("/update/:id",updateTasks);
router.delete("/delete/:id",deleteTasks);

module.exports =router