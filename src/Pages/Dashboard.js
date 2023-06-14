import PageTitle from "../Components/PageTitle";
import Cards from "../Components/DashboardComponent/Cards";
import RecentActivity from "../Components/DashboardComponent/RecentActivity";
import RecentApplications from "../Components/DashboardComponent/RecentApplications";
function Dashboard() {
  return (
    <>
      <main id="main" className="main">
        <PageTitle title="Dashboard" home="Home" homePath="/dashboard" />
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
              <div className="col-xxl-4 col-md-6 p-0 m-0">
                <Cards
                  MainDivClassName="card info-card sales-card"
                  CardTitle="New Applications"
                  CardSpan="Today"
                  CardIcon="bi bi-window-plus"
                  CardHeading="145"
                  TxtSuccess="12%"
                  RedirectCate="/dashboard/newapplication"
                />
                </div>

                <div className="col-xxl-4 col-md-6">
                <Cards
                  MainDivClassName="card info-card revenue-card"
                  CardTitle="New Cards"
                  CardSpan="This Month"
                  CardIcon="bi bi-card-heading"
                  CardHeading="150"
                  TxtSuccess="8%"
                  RedirectCate="#"
                />
                </div>
              <div className="col-xxl-4 col-md-6 p-0 m-0">
                <Cards
                  MainDivClassName="card info-card sales-card"
                  CardTitle="New Customers"
                  CardSpan="This Year"
                  CardIcon="bi bi-people"
                  CardHeading="280"
                  TxtSuccess="15%"
                  RedirectCate="#"
                />
              </div>
                <RecentApplications />
                
              </div>
            </div>
            <div className="col-lg-4">
              <RecentActivity />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
