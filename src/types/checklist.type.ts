export interface IChecklist {
  id: number;
  name: string;
  userId: number;
}

export interface IChecklistDetail {
  id: number;
  name: string;
  items: IItems[];
}

export interface IItems {
  id: number;
  description: string;
  status: boolean;
  checklistId: number;
  userId: number;
}
