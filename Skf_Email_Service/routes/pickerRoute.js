const express = require("express");

const router = express.Router();
const pickerController = require("../controllers/pickerController");
router.get("/warehouseList", pickerController.warehouseList);
router.get("/pickerList", pickerController.pickerList);
router.post("/addPicker", pickerController.addPicker);
router.get("/deletePicker", pickerController.deletePicker);
router.post("/addLocation", pickerController.addLocation);
router.get("/deleteLocation", pickerController.deleteLocation);
router.get("/manageProductDetails", pickerController.manageProductDetails);
router.get("/deleteProduct", pickerController.deleteProduct);
router.post("/addProduct", pickerController.addProduct);
router.post("/updateProduct", pickerController.updateProduct);

module.exports = router;


// http://localhost:7000/picker/warehouseList
// http://localhost:7000/picker/pickerList?WarehouseID=1100000005
// http://localhost:7000/picker/addPicker
// http://localhost:7000/picker/deletePicker?PickerId=1
// http://localhost:7000/picker/addLocation(body :code=AL01&WareHouseID=1100000001)
// http://localhost:7000/picker/deleteLocation?code=AL01&WareHouseID=1100000001
// http://localhost:7000/picker/manageProductDetails?user_id=&product_name=
// http://localhost:7000/picker/deleteProduct?user_id=1&product_Id=1&getDate=2022-01-29
// http://localhost:7000/picker/addProduct(body :product=&pack_code=&box_qty=&commodity=) //product, pack_code, box_qty, commodity, udtTableData

// (pending) After complete update on PT site
// http://localhost:7000/picker/updateProduct(body :product_ID=&product=&pack_code=&box_qty=&commodity=) //product, pack_code, box_qty, commodity, udtTableData