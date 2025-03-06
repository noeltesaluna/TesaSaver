const BudgetAmount = ({amount}: {amount: number}) => {
    return (
        <div className="bg-white px-8 py-4 rounded-xl flex justify-between items-center shadow">
            <h1 className="font-bold text-3xl">Budget Amount</h1>
            <p className="text-xl">${amount}</p>
        </div>
    )
}

export default BudgetAmount
