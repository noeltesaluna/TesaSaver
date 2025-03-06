export interface Budget {
    budget_id: number;
    created_at: string;
    budget_amount: number;
    start_date: string;
    end_date: string;
    buckets?: Bucket[];
}
  
export interface Bucket {
    bucket_id: number;
    budget_id: number;
    created_at: string;
    bucket_name: string;
    reserves?: Reserve[];
}
  
export interface Reserve {
    reserve_id: number;
    bucket_id: number;
    created_at: string;
    reserve_name: string;
    reserve_amount: number;
    transactions?: Transaction[];
}
  
export interface Transaction {
    transaction_id: number;
    reserve_id: number;
    created_at: string;
    transaction_name: string;
    transaction_description: string;
    transaction_amount: number;
}