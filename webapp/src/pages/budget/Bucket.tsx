const Bucket = ({amount, bucketname}: {amount: number, bucketname:string}) => {
    return (
        <div className="bg-white px-8 py-4 rounded-xl flex flex-col shadow">
            <div className="flex justify-between flex-row">
                <h1 className="font-bold text-3xl">{bucketname}</h1>
                <div className="flex flex-row items-end gap-1">
                    <p className="text-2xl font-bold">${amount} </p>
                    <p className="text-lg font-bold">total budget</p>
                </div>
            </div>     
            <table className="w-full">
                <thead className="text-xs text-gray-700">
                <tr className="text-lg">
                    <th scope="col" className="py-3 text-left">
                        Reserve
                    </th>
                    <th scope="col" className="py-3 text-right">
                        Amount
                    </th>
                    <th scope="col" className="px-1"></th>
                </tr>
            </thead>
            </table>       
        </div>
    )
}

export default Bucket
