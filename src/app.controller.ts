import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller('/report/income')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncome() {
    return this.appService.getAllIncome();
  }

  @Get(':id')
  getIncomeById(@Param('id') id: string) {
    return this.appService.getIncomeById(id);
  }

  @Post()
  createIncome(@Body() body: { amount: number; source: string }) {
    return this.appService.createIncome(body);
  }

  @Patch(':id')
  updateIncome(
    @Param('id') id: string,
    @Body() body: { amount?: number; source?: string },
  ) {
    return this.appService.updateIncome(id, body);
  }

  @Delete(':id')
  deleteIncome(@Param('id') id: string) {
    return this.appService.deleteIncome(id);
  }
}
