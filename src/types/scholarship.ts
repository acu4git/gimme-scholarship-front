export type Scholarship = {
  id: number;
  name: string;
  address: string;
  targets: string[];
  target_detail: string;
  amount_detail: string;
  type_detail: string;
  capacity_detail: string;
  deadline_detail: string;
  contact_point: string;
  remark: string;
  posting_date: string;
};

export type Scholarships = Scholarship[];
