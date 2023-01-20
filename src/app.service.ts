import { Injectable } from '@nestjs/common/decorators';
import { data, Report, ReportType } from './data';

@Injectable()
export class AppService {
  getAllIncome() {
    return data.report;
  }
  getIncomeById(id: string) {
    data.report.find((r) => r.id === id) || 'Not Found';
  }
  createIncome(body: { amount: number; source: string }) {
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
  updateIncome(id: string, body: { amount?: number; source?: string }) {
    const index = data.report.findIndex((r) => r.id === id);
    if (index === -1) return 'Not Found';

    Object.keys(body).forEach((key) => {
      data.report[index][key] = body[key];
    });
    data.report[index].updatedAt = new Date();

    return data.report[index];
  }

  deleteIncome(id: string) {
    const index = data.report.findIndex((r) => r.id === id);
    if (index === -1) return 'Not Found';

    const deleted = data.report[index];
    data.report.splice(index, 1);

    return { deleted };
  }
}
