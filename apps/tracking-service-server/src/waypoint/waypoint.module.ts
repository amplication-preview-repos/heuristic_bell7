import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaypointModuleBase } from "./base/waypoint.module.base";
import { WaypointService } from "./waypoint.service";
import { WaypointController } from "./waypoint.controller";
import { WaypointResolver } from "./waypoint.resolver";

@Module({
  imports: [WaypointModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaypointController],
  providers: [WaypointService, WaypointResolver],
  exports: [WaypointService],
})
export class WaypointModule {}
