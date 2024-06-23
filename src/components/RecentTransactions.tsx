import Link from 'next/link';
import BankInfo from './BankInfo';
import { BankTabItem } from './BankTabItem';
import { Pagination } from './Pagination';
import TransactionTable from './TransactionsTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>
        <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">
          View all
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId} className="">
              <BankTabItem key={account.id} account={account} appwriteItemId={appwriteItemId} />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account) => (
          <TabsContent value={account.appwriteItemId} key={account.id} className="space-y-4">
            <BankInfo account={account} appwriteItemId={appwriteItemId} type="full" />
            <TransactionTable transactions={currentTransactions} />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination page={page} totalPages={totalPages} />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
