import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coherent-v2 Design System
          </h1>
          <p className="text-xl font-bold text-gray-700">
            A comprehensive design system for modern web applications
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About Coherent-v2
          </h2>
          <p className="text-lg font-bold text-gray-700 mb-4">
            Coherent-v2 is a modern design system built on Material-UI (MUI) components, 
            providing a robust foundation for scalable web applications.
          </p>
          <p className="text-lg font-bold text-gray-700 mb-4">
            Our system leverages GitHub Copilot coding agents to streamline the development 
            pipeline, ensuring consistent code quality and accelerated delivery.
          </p>
          <p className="text-lg font-bold text-gray-700">
            Integrated with Figma MCP (Model Context Protocol), Coherent-v2 enables 
            seamless Figma-to-code translation and automated code review processes, 
            bridging the gap between design and development.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-gray-600">
            Built for developers, designed for users
          </p>
        </div>
      </div>
    </div>
  );
}
