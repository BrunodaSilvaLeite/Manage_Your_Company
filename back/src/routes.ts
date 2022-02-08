import { Router } from "express"
//Create items
import { CreateCompanyController } from "./controller/CreateCompanyController";
import { CreateUnitController } from "./controller/CreateUnitController";
import { UpdateAssetController } from "./controller/UpdateAssetController";
//List ALL items
import { ListCompanyController } from "./controller/ListCompanyController";
import { ListUnitController } from "./controller/ListUnitController";
import { ListAssetController } from "./controller/ListAssetController";

// List Id items
import { IdCompanyController } from "./controller/IdCompanyController";
import { IdUnitController } from "./controller/IdUnitCompany";

//Update items
import { UpdateUnitController } from "./controller/UpdateUnitController";
import { UpdateCompanyController } from "./controller/UpdateCompanyController";

//Delete items
import { DeletUnitController } from "./controller/DeletUnitController";
import { DeleteCompanyController } from "./controller/DeleteCompanyController";
import { DeleteAssetController } from "./controller/DeleteAssetController";
//authenticate user

const router = Router();

//Create items
const createCompanyController = new CreateCompanyController();
const createUnitController = new CreateUnitController();
const createAssetController = new UpdateAssetController();

//List ALL items
const listUnitController = new ListUnitController();
const listCompanyController = new ListCompanyController();
const listAssetController = new ListAssetController();

//List id
const idCompanyController = new IdCompanyController();
const idUnitController = new IdUnitController();

//Update items
const updateUnitController = new UpdateUnitController();
const updateCompanyController = new UpdateCompanyController();

//Delete items
const deletUnitController = new DeletUnitController();
const deleteCompanyController = new DeleteCompanyController();
const deleteAssetController = new DeleteAssetController();

//authenticate user


//Create items
router.post("/company", createCompanyController.handle);
router.post("/unit", createUnitController.handle);
router.post("/asset", createAssetController.handle);

//list all
router.get("/ListCompany", listCompanyController.handle);
router.get("/ListUnit/:companyId", listUnitController.handle);
router.get("/ListAsset/:unitId", listAssetController.handle);

//list by id
router.get("/company/:id", idCompanyController.handle);
router.get("/unit/:id", idUnitController.handle);

//Update items
router.put("/unit/:id", updateUnitController.handle);
router.put("/company/:id", updateCompanyController.handle);

//Delete items
router.delete("/unit/:id", deletUnitController.handle);
router.delete("/company/:id", deleteCompanyController.handle);
router.delete("/asset/:id", deleteAssetController.handle);


export { router }
