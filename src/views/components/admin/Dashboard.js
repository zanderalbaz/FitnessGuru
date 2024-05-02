import React from "react";

// components

import CardLineChart from "../Cards/CardLineChart.js";
import CardBarChart from "../Cards/CardBarChart.js";
import HeaderStats from "../Headers/HeaderStats.js";

function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <HeaderStats />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-[-32px]">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4 mt-[-32px]">
          <CardBarChart />
        </div>
        <div className="flex flex-auto justify-center pt-16">
        <a href="/manage-members" className="mx-5 px-4 py-2 bg-[darkred] text-white rounded-xl hover:bg-[red] font-bold text-3xl">Manage Members</a>
        <a href="/manage-staff" className="mx-5 px-4 py-2 bg-[darkred] text-white rounded-xl hover:bg-[red] font-bold text-3xl">Manage Staff</a>
        <a href="/manage-courses" className="mx-5 px-4 py-2 bg-[darkred] text-white rounded-xl hover:bg-[red] font-bold text-3xl">Manage Training</a>
        </div>
      </div>

      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;