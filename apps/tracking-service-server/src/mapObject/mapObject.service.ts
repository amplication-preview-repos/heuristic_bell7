import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapObjectServiceBase } from "./base/mapObject.service.base";

@Injectable()
export class MapObjectService extends MapObjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
