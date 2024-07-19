import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MapObjectModuleBase } from "./base/mapObject.module.base";
import { MapObjectService } from "./mapObject.service";
import { MapObjectController } from "./mapObject.controller";
import { MapObjectResolver } from "./mapObject.resolver";

@Module({
  imports: [MapObjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [MapObjectController],
  providers: [MapObjectService, MapObjectResolver],
  exports: [MapObjectService],
})
export class MapObjectModule {}
