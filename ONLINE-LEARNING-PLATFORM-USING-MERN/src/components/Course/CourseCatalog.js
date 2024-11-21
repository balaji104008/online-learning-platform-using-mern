import React, { useState, useEffect } from 'react';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <div>
      <h2>Course Catalog</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <a href={`/courses/${course.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default CourseCatalog;
