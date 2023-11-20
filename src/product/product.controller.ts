import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Delete,
  Patch,
  HttpCode
} from "@nestjs/common";
import { ProductModel } from "./product.model/product.model";
import { FindProductDto } from "./dto/find.product.dto";

@Controller("product")
export class ProductController {
  @Post("create")
  async create(@Body() dto: Omit<ProductModel, "_id">) {
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
  async patch(@Param("id") id: string, @Body() dto: ProductModel) {
    id;
    dto;
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    dto;
  }
}
