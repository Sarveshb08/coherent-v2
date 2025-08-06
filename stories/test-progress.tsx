import React from 'react';
import { Progress } from '../app/ui/components/Progress';

export default function TestProgressPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Progress Component Test</h1>
      
      <div className="space-y-8">
        {/* Determinate Progress */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Determinate Progress</h2>
          <div className="space-y-4">
            <Progress type="determinate" value={25} showLabel />
            <Progress type="determinate" value={50} showLabel color="secondary" />
            <Progress type="determinate" value={75} showLabel color="inherit" />
          </div>
        </section>

        {/* Indeterminate Progress */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Indeterminate Progress</h2>
          <div className="space-y-4">
            <Progress type="indeterminate" color="primary" />
            <Progress type="indeterminate" color="secondary" />
          </div>
        </section>

        {/* Buffer Progress */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Buffer Progress</h2>
          <div className="space-y-4">
            <Progress type="buffer" value={40} valueBuffer={70} showLabel />
            <Progress type="buffer" value={60} valueBuffer={85} color="secondary" />
          </div>
        </section>

        {/* Custom Labels */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Custom Labels</h2>
          <div className="space-y-4">
            <Progress type="determinate" value={30} showLabel label="Loading..." />
            <Progress type="determinate" value={80} showLabel label="Almost done" />
          </div>
        </section>

        {/* Different Widths */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Different Widths</h2>
          <div className="space-y-4">
            <Progress type="determinate" value={50} width="100px" showLabel />
            <Progress type="determinate" value={50} width="300px" showLabel />
            <Progress type="determinate" value={50} width="400px" showLabel />
          </div>
        </section>
      </div>
    </div>
  );
}