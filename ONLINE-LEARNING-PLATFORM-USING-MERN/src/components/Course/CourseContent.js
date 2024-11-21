import React, { useState, useEffect } from 'react';

const CourseContent = ({ courseId }) => {
  const [modules, setModules] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch(`/api/courses/${courseId}/modules`)
      .then(response => response.json())
      .then(data => setModules(data));
  }, [courseId]);

  const updateProgress = async (moduleId) => {
    await fetch(`/api/courses/${courseId}/progress`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ moduleId })
    });
    setProgress((prev) => prev + 1);  // Mocking progress increase
  };

  return (
    <div>
      <h2>Course Modules</h2>
      <progress value={progress} max={modules.length}></progress>
      {modules.map((module, index) => (
        <div key={index} onClick={() => updateProgress(module.id)}>
          <h3>{module.title}</h3>
          <p>{module.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
