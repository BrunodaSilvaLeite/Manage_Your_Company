import { Router } from "express"
//Create items
import { CreateCompanyController } from "./controller/CreateCompanyController";
import { CreateUserController } from "./controller/CreateUserController";
import { CreateUnitController } from "./controller/CreateUnitController";

//List ALL items
import { ListCompanyController } from "./controller/ListCompanyController";
import { ListUserController } from "./controller/ListUserController";
import { ListUnitController } from "./controller/ListUnitController";
import { ListAssetController } from "./controller/ListAssetController";

// List Id items
import { IdCompanyController } from "./controller/IdCompanyController";
import { IdUnitController } from "./controller/IdUnitCompany";
import { IdUserController } from "./controller/IdUserController";

//Update items
import { UpdateUnitController } from "./controller/UpdateUnitController";
import { UpdateCompanyController } from "./controller/UpdateCompanyController";
import { UpdateAssetController } from "./controller/UpdateAssetController";
import { UpdateUserController } from "./controller/UpdateUserController";
//Delete items
import { DeletUnitController } from "./controller/DeletUnitController";
import { DeleteCompanyController } from "./controller/DeleteCompanyController";
import { DeleteAssetController } from "./controller/DeleteAssetController";
import { DeleteUserController } from "./controller/DeleteUserController";
//authenticate user
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
const router = Router();

//Create items
const createUserController = new CreateUserController();
const createCompanyController = new CreateCompanyController();
const createUnitController = new CreateUnitController();
const createAssetController = new UpdateAssetController();

//List ALL items
const listUserController = new ListUserController();
const listUnitController = new ListUnitController();
const listCompanyController = new ListCompanyController();
const listAssetController = new ListAssetController();

//List id
const idCompanyController = new IdCompanyController();
const idUnitController = new IdUnitController();
const idUserController = new IdUserController();

//Update items
const updateUnitController = new UpdateUnitController();
const updateCompanyController = new UpdateCompanyController();
const updateAssetController = new UpdateAssetController();
const updateUserController = new UpdateUserController();
//Delete items
const deletUnitController = new DeletUnitController();
const deleteCompanyController = new DeleteCompanyController();
const deleteAssetController = new DeleteAssetController();
const deleteUserController = new DeleteUserController();
//authenticate user
const authenticateUserController = new AuthenticateUserController();

//Create items
router.post("/user", createUserController.handle);
router.post("/company", createCompanyController.handle);
router.post("/unit", createUnitController.handle);
router.post("/asset", createAssetController.handle);

//list all
router.get("/ListUser",listUserController.handle);
router.get("/ListCompany", listCompanyController.handle);
router.get("/ListUnit/:companyId", listUnitController.handle);
router.get("/ListAsset/:unitId", listAssetController.handle);

//list by id
router.get("/company/:id", idCompanyController.handle);
router.get("/unit/:id", idUnitController.handle);
router.get("/user/:id", idUserController.handle);

//Update items
router.put("/unit/:id", updateUnitController.handle);
router.put("/company/:id", updateCompanyController.handle);
router.put("/asset/:id", updateAssetController.handle);
router.put("/user/:id", updateUserController.handle);

//Delete items
router.delete("/unit/:id", deletUnitController.handle);
router.delete("/company/:id", deleteCompanyController.handle);
router.delete("/asset/:id", deleteAssetController.handle);
router.delete("/user/:id", deleteUserController.handle);
router.post("/login", authenticateUserController.handle);

export { router }