"use client";

import React, { Fragment, useCallback, useState, useRef } from 'react';
import ReactFlow, { useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import RightPanel from '../RightPanel';

// Edge styles
const animatedEdgeStyle = {
  stroke: 'black',
  strokeWidth: 1,
  strokeDasharray: '5,5',
  animation: 'dash-animation 1s linear infinite',
};

const staticEdgeStyle = {
  stroke: 'black',
  strokeWidth: 1,
};

const initialNodes = [
  { id: '1', data: { label: 'Start Your Web Dev Journey' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'HTML & CSS Basics' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'JavaScript Fundamentals' }, position: { x: 400, y: 100 } },
  { id: '4', data: { label: 'Git & Version Control' }, position: { x: 250, y: 200 } },
  { id: '5', data: { label: 'React Basics' }, position: { x: 250, y: 300 } },
  { id: '6', data: { label: 'State Management (e.g., Redux)' }, position: { x: 100, y: 400 } },
  { id: '7', data: { label: 'React Hooks & Advanced Concepts' }, position: { x: 400, y: 400 } },
  { id: '8', data: { label: 'Next.js & Server-Side Rendering' }, position: { x: 250, y: 500 } },
  { id: '9', data: { label: 'Build Full-Stack React Apps' }, position: { x: 250, y: 600 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: false, style: staticEdgeStyle },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: animatedEdgeStyle },
  { id: 'e2-4', source: '2', target: '4', animated: false, style: staticEdgeStyle },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: animatedEdgeStyle },
  { id: 'e4-5', source: '4', target: '5', animated: false, style: staticEdgeStyle },
  { id: 'e5-6', source: '5', target: '6', animated: false, style: staticEdgeStyle },
  { id: 'e5-7', source: '5', target: '7', animated: false, style: staticEdgeStyle },
  { id: 'e6-8', source: '6', target: '8', animated: false, style: staticEdgeStyle },
  { id: 'e7-8', source: '7', target: '8', animated: false, style: staticEdgeStyle },
  { id: 'e8-9', source: '8', target: '9', animated: true, style: animatedEdgeStyle },
];

const FlowChart = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [translateRight, setTranslateRight] = useState(false);
  const [panelWidth, setPanelWidth] = useState(600); // Initial width of the right panel
  const isResizing = useRef(false);

  const onNodeClick = useCallback(() => {
    setTranslateRight((prev) => !prev);
  }, []);

  const startResizing = (e) => {
    e.preventDefault();
    isResizing.current = true;
  };

  const stopResizing = () => {
    isResizing.current = false;
  };

  const resize = (e) => {
    if (isResizing.current) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 300 && newWidth < window.innerWidth - 100) { // Set min and max width
        setPanelWidth(newWidth);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, []);

  return (
    <Fragment>
      <div style={{ width: translateRight ? `calc(100vw - (${parseInt(panelWidth)}px))` : "100%" }}>
        <div style={{ width: '100%', height: '600px' }} className="bg-white lg:pl-[250px] lg:pt-[50px] min-h-screen">
          <ReactFlow
            nodes={nodes}
            key={String(translateRight) + String(panelWidth)}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            onNodeClick={onNodeClick}
          />

          <style jsx>{`
          @keyframes dash-animation {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -10; }
          }
        `}</style>
        </div>
      </div>
      {translateRight && (
        <div className="fixed z-[1000] top-0 right-0 h-full bg-white shadow-lg flex" style={{ width: panelWidth }}>
          {/* Drag Handle */}
          <div
            onMouseDown={startResizing}
            className="w-2 cursor-col-resize bg-gray-200 hover:bg-gray-400"
          />
          {/* Right Panel Content */}
          <div className="flex-1 overflow-auto">
            <RightPanel onNodeClick={onNodeClick} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default FlowChart;
