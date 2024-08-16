import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchAdData } from "../api/api";
import MetaAdsCharts from "../components/MetaAdsCharts";
import { filterAdData } from "../utils/filterUtils";
import home from "../assets/home.png";
import metaBlack from "../assets/meta-black.png";

const MetaAds = () => {
  const [startDate, setStartDate] = useState("2024-07-01");
  const [endDate, setEndDate] = useState("2024-07-20");
  const [campaignType, setCampaignType] = useState("");
  const [segment, setSegment] = useState("");

  const { data, error, isLoading } = useQuery("adData", fetchAdData);
  const navigate = useNavigate();

  if (isLoading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-600">
        Error loading data: {error.message}
      </p>
    );

  const filteredAdData = filterAdData(
    data.anuncios,
    startDate,
    endDate,
    campaignType,
    segment
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <button
          className="px-4 py-2 flex items-center bg-button-bg text-white rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
          onClick={() => navigate("/")}
        >
          <img className="w-12 h-7 object-contain" src={home} alt="Home" />
        </button>
        <div className="text-3xl flex items-center font-heading font-bold text-primary">
          <img src={metaBlack} alt="Meta Ads" className="w-48 h-16" />
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Campaign Types</option>
            <option value="Display">Display</option>
            <option value="Search">Search</option>
            <option value="Social Media">Social Media</option>
          </select>

          <select
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Segments</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
          </select>
        </div>

        <div className="w-full">
          <MetaAdsCharts adData={filteredAdData} />
        </div>
      </div>
    </div>
  );
};

export default MetaAds;
