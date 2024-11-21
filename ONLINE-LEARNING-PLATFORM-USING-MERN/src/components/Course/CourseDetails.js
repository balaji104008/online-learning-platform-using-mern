import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then(response => response.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>Enroll</button>
    </div>
  );
};

export default CourseDetails;
