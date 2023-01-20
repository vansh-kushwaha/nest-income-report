export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Report {
  id: number;
  source: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  type: ReportType;
}
interface Data {
  report: Report[];
}
export const data: Data = {
  report: [],
};
