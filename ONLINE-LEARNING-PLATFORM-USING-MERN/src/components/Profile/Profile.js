import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>{profile.name}'s Profile</h2>
      <h3>Completed Courses</h3>
      {profile.completedCourses.map(course => (
        <div key={course.id}>
          <p>{course.title}</p>
          <button onClick={() => window.open(`/api/certificate/${course.id}`, '_blank')}>Download Certificate</button>
        </div>
      ))}
    </div>
  );
};

export default Profile;
