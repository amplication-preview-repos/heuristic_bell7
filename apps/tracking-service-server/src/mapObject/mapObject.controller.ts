import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapObjectService } from "./mapObject.service";
import { MapObjectControllerBase } from "./base/mapObject.controller.base";

@swagger.ApiTags("mapObjects")
@common.Controller("mapObjects")
export class MapObjectController extends MapObjectControllerBase {
  constructor(
    protected readonly service: MapObjectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
