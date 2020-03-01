import React, { Component } from 'react';
import './ItemChart.css';

interface ItemChartProps {
  selectedItem: any;
}

export class ItemChart extends Component<ItemChartProps> {
  render() {
    return (
      <div className='chartDiv'>
        <h1>{this.props.selectedItem.strDrink}</h1>
      </div>
    );
  }
}

export default ItemChart;
