import BudgetAmount from "./BudgetAmount"
import BucketComponent from "./BucketComponent"
import useFetch from "../../api/useFetch"
import { useState } from "react"
import type { Budget } from "../../types/types"
const Budget = () => {
    const {data, error} = useFetch('budgets/1')

    const budget = data as Budget
    const {Buckets, budget_name} = budget
    
    console.log(data)
    return (
        <div className="flex min-w-dvw justify-center pt-16">
            <div className="flex flex-col min-w-3xl gap-4">
                <h1 className="text-5xl font-bold text-blue-500">{budget_name}</h1>
                <p>Let's get started with your budget.</p>
                <BudgetAmount amount={10}/>
                {Buckets?.map((bucket) => <BucketComponent {...bucket}/>)}
                
            </div>
        </div>
    )
}

export default Budget
