export interface EventModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  monsterId: number | null;
}
