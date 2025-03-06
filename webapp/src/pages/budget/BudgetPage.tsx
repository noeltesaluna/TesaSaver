import BudgetAmount from "./BudgetAmount"
import Bucket from "./Bucket"
const Budget = () => {
  return (
        <div className="flex min-w-dvw justify-center pt-16">
            <div className="flex flex-col min-w-3xl gap-4">
                <h1 className="text-5xl font-bold text-blue-500">Budget</h1>
                <p>Let's get started with your budget.</p>
                <BudgetAmount amount={10}/>
                <Bucket bucketname={'Needs'} amount={10}/>
            </div>
        </div>
    )
}

export default Budget
