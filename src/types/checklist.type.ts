export interface IChecklist {
  id: number;
  name: string;
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
}
