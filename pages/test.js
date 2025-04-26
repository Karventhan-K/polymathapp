// pages/index.js

import { useState, useContext } from 'react';
import { ChatContext } from '@/context/ChatContext'; // Update the path if necessary
import CourseFlow from '@/components/CourseFlow';

export default function Home() {
  const [inputTitle, setInputTitle] = useState('');
  const [courseContent, setCourseContent] = useState(null);
  const { createNewSession, setCourseTitleForActiveSession, addMessageToActiveSession } = useContext(ChatContext);

  const generateCourse = async () => {
    if (!inputTitle.trim()) {
      alert('Please enter a course title');
      return;
    }

    createNewSession(inputTitle);
    setCourseTitleForActiveSession(inputTitle);

    try {
      const res = await fetch('/api/generateCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseTitle: inputTitle }),
      });

      const data = await res.json();

      if (data?.courseContent) {
        setCourseContent(data.courseContent);
        addMessageToActiveSession("assistant", data.courseContent);
      } else {
        alert('Failed to generate course content.');
      }
    } catch (error) {
      console.error('Error generating course:', error);
      alert('Error generating course.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create Your Custom Full Stack Course</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          placeholder="Enter course title (e.g., Python Full Stack)"
          style={{ padding: '10px', width: '300px' }}
        />
        <button
          onClick={generateCourse}
          style={{ padding: '10px 20px', marginLeft: '10px' }}
        >
          Generate Course
        </button>
      </div>

      {/* {courseContent && (
        <div>
          <h2>Generated Course Content</h2>
          <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '20px' }}>
            {courseContent}
          </pre>
        </div>
      )} */}
      <CourseFlow/>
    </div>
  );
}
