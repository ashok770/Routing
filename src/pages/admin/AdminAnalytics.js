import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getAdminStats } from "../../api/adminApi";

const AdminAnalytics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getAdminStats();
        setStats(res.data.stats);
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading analytics...</p>;
  if (!stats) return <p>No data available</p>;

  const chartData = [
    { name: "Users", count: stats.users },
    { name: "Admins", count: stats.admins },
    { name: "Total", count: stats.totalUsers },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>📊 Admin Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#0a5c36" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminAnalytics;
