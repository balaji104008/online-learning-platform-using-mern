import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    fetch('/api/admin/analytics')
      .then(response => response.json())
      .then(data => setAnalytics(data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Users: {analytics.totalUsers}</p>
      <p>Total Courses: {analytics.totalCourses}</p>
      <p>Total Enrollments: {analytics.totalEnrollments}</p>
    </div>
  );
};

export default Dashboard;
