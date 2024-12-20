import BestDeals from "./_components/BestDeals";
import Clients from "./_components/Clients";
import Coupon from "./_components/Coupon";
import DailyDeals from "./_components/DailyDeals";
import HeroCard from "./_components/HeroCard";
import LatestBlogs from "./_components/LatestBlogs";
import LatestProducts from "./_components/LatestProducts";
import MostViewed from "./_components/MostViewed";
import NewItems from "./_components/NewItems";
import SpecialInfo from "./_components/SpecialInfo";
import TopRated from "./_components/TopRated";
import TrendingItems from "./_components/TrendingItems";

const HomePage = () => {
  return (
    <div className="mx-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/***************** Left Sider Section *****************/}

        <div className="col-span-1 flex flex-col gap-5">
          {/* <div className="hidden md:block">
            <Sidebar />
          </div> */}
          <HeroCard
            img="https://images.unsplash.com/photo-1521488674203-62bf581664be?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={96}
          />
          <LatestProducts />
          <SpecialInfo />
          <HeroCard
            img="https://images.unsplash.com/photo-1559631658-9705048d977e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={96}
          />
          <LatestBlogs />
          <TopRated />
        </div>

        {/**************** Right Side Section ***************/}

        <div className="col-span-4 my-6">
          {/* offer section */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2">
              <BestDeals />
            </div>

            <div className="md:col-span-2 lg:col-span-1 flex flex-row justify-between lg:flex-col gap-6">
              <HeroCard
                img="https://images.unsplash.com/photo-1682364853446-db043f643207?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={"h-[200px]"}
              />
              <HeroCard
                img="https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={"h-[200px]"}
              />
            </div>
          </div>

          {/* gift coupon */}
          <div className="my-6 hidden lg:block">
            <Coupon />
          </div>

          {/* daily deals */}
          <div>
            <DailyDeals />
          </div>

          {/* thumbnail */}
          <HeroCard
            img="https://images.unsplash.com/photo-1708381487798-87f5d211b655?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={"h-28"}
          />

          {/* trending Items */}
          <TrendingItems />

          {/* new items */}
          <div>
            <NewItems />
          </div>
        </div>
      </div>
      <Clients />
      <MostViewed />
    </div>
  );
};

export default HomePage;
