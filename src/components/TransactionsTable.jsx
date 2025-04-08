import TransactionRow from "./TransactionRow"
export default function TransactionsTable(){

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             <TransactionRow/>  
            </tbody>
        </table>
    )

}