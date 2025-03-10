export interface Budget {
    budget_id: number;
    budget_name: string;
    created_at: string;
    budget_amount: number;
    start_date: string;
    end_date: string;
    Buckets?: Bucket[];
}
  
export interface Bucket {
    bucket_id: number;
    budget_id: number;
    created_at: string;
    bucket_name: string;
    Reserves?: Reserve[];
}
  
export interface Reserve {
    reserve_id: number;
    bucket_id: number;
    created_at: string;
    reserve_name: string;
    reserve_amount: number;
    Transactions?: Transaction[];
}
  
export interface Transaction {
    transaction_id: number;
    reserve_id: number;
    created_at: string;
    transaction_name: string;
    transaction_description: string;
    transaction_amount: number;
}