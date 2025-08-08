import React from 'react';
import { Button } from './ui/components';

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

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Button Component Demo
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button size="small" color="primary">Small</Button>
                <Button size="medium" color="primary">Medium</Button>
                <Button size="large" color="primary">Large</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="small" color="primary">Small</Button>
                <Button variant="secondary" size="medium" color="primary">Medium</Button>
                <Button variant="secondary" size="large" color="primary">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Color Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="error">Error</Button>
                <Button color="warning">Warning</Button>
                <Button color="info">Info</Button>
                <Button color="success">Success</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Disabled States</h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled color="primary">Disabled Primary</Button>
                <Button disabled variant="secondary" color="primary">Disabled Secondary</Button>
              </div>
            </div>
          </div>
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
