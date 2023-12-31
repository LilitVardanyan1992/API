import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  HttpCode
} from "@nestjs/common";
import { TopPageModel } from "./top-page.model/top-page.model";
import { FindTopPageDto } from "./dto/find-top-page-dto";

@Controller("top-page")
export class TopPageController {
  @Post("create")
  async create(@Body() dto: Omit<TopPageModel, "_id">) {
    dto;
  }

  @Get(":id")
  async get(@Param("id") id: string) {
    id;
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    id;
  }

  @Patch(":id")
  async patch(@Param("id") id: string, @Body() dto: TopPageModel) {
    id;
    dto;
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    dto;
  }
}
