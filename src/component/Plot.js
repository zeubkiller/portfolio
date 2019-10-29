import React from 'react';
import Plot from 'react-plotly.js';

import {test_performance_100_type} from './../datastructure/linked_list_performance'

class PlotPerformance extends React.Component {
  render() {
    const dataAll = test_performance_100_type();

    const x = dataAll[0];
    const y = dataAll[1];


    return (
      <Plot
        data={[
          {
            x: x,
            y: y,
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