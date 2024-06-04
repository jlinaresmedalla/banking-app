import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalance';

const Home = () => {
  const loggedIn = { firstName: 'Juan', lastName: 'Linares', email: 'jlinaresmedalla@gmail.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 125 }, { currentBalance: 580 }]}
      />
    </section>
  );
};

export default Home;
