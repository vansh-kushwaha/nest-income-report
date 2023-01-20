import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { data, Report, ReportType } from './data';

@Controller('/report/income')
export class AppController {
  @Get()
  getAllIncome() {
    return data.report;
  }

  @Get(':id')
  getIncomeById(@Param('id') id: string) {
    return data.report.find((r) => r.id === id) || 'Not Found';
  }

  @Post()
  createIncome(@Body() body: { amount: number; source: string }) {
    const newReport: Report = {
      id: data.report.length
        ? parseInt(data.report[data.report.length - 1].id) + 1 + ''
        : '1',
      type: ReportType.INCOME,
      amount: body.amount,
      source: body.source,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    data.report.push(newReport);
    return newReport;
  }

  @Patch(':id')
  updateIncome(
    @Param('id') id: string,
    @Body() body: { amount?: number; source?: string },
  ) {
    const index = data.report.findIndex((r) => r.id === id);
    if (index === -1) return 'Not Found';

    Object.keys(body).forEach((key) => {
      data.report[index][key] = body[key];
    });
    data.report[index].updatedAt = new Date();

    return data.report[index];
  }

  @Delete(':id')
  deleteIncome(@Param('id') id: string) {
    const index = data.report.findIndex((r) => r.id === id);
    if (index === -1) return 'Not Found';

    const deleted = data.report[index];
    data.report.splice(index, 1);

    return { deleted };
  }
}
