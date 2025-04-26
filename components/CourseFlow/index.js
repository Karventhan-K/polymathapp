'use client'; // if using Next.js app router

import React, { useState, useEffect } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

// Your JSON data
const courseData = {
  course_title: "Learnin' Python with Cap'n Codebeard",
  description: "Set sail on a grand adventure...",
  chapters: [
    {
      id: "ch1",
      title: "Settin' Sail: Introduction to Python",
      description: "Unfurl the sails and set course...",
      estimated_time: "2 hours",
      difficulty_level: "Beginner",
      key_takeaways: ["Understanding of what Python is"],
      reputation_links: [],
      subchapters: [
        {
          id: "ch1.1",
          title: "Choosing the Right Spyglass: Python 2 vs Python 3",
          description: "Like pirate fleets that roam the seas...",
          estimated_time: "1 hour",
          difficulty_level: "Beginner",
          key_takeaways: ["Knowledge of Python 2"],
          reputation_links: []
        },
        {
          id: "ch1.2",
          title: "Writing Your Pirate's Code: Python Syntax Basics",
          description: "Every pirate has their code...",
          estimated_time: "1.5 hours",
          difficulty_level: "Beginner",
          key_takeaways: ["Introduction to Python Syntax"],
          reputation_links: []
        }
      ]
    }
  ]
};

const CourseFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const nodesArray = [];
    const edgesArray = [];

    // Root Node (Course Title)
    nodesArray.push({
      id: 'course',
      data: { label: courseData.course_title },
      position: { x: 0, y: 0 },
      style: { background: '#f0f0f0', padding: 10, borderRadius: 5 },
    });

    let yOffset = 200; // Start below root node

    courseData.chapters.forEach((chapter, chapterIndex) => {
      // Chapter Node
      nodesArray.push({
        id: chapter.id,
        data: { label: chapter.title },
        position: { x: chapterIndex * 300, y: yOffset },
        style: { background: '#d0e8ff', padding: 10, borderRadius: 5 },
      });

      // Edge from course to chapter
      edgesArray.push({
        id: `e-course-${chapter.id}`,
        source: 'course',
        target: chapter.id,
      });

      if (chapter.subchapters) {
        chapter.subchapters.forEach((subchapter, subIndex) => {
          // Subchapter Node
          nodesArray.push({
            id: subchapter.id,
            data: { label: subchapter.title },
            position: { x: chapterIndex * 300 + subIndex * 150, y: yOffset + 200 },
            style: { background: '#ffd9d9', padding: 10, borderRadius: 5 },
          });

          // Edge from chapter to subchapter
          edgesArray.push({
            id: `e-${chapter.id}-${subchapter.id}`,
            source: chapter.id,
            target: subchapter.id,
          });
        });
      }
    });

    setNodes(nodesArray);
    setEdges(edgesArray);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CourseFlow;
