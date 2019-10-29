import React from 'react';
import Plot from 'react-plotly.js';

class PlotPerformance extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
          },
        ]}
        layout={ {
          autosize: true,
          title: 'Performance For linked list'} }
      />
    );
  }
}

export default PlotPerformance;