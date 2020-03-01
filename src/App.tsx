import React from 'react';
import * as d3 from 'd3';
import Itemlist from './Components/Itemlist';
import { Item } from './Components/Item';
import ItemChart from './Components/ItemChart';

interface AppState {
  items: Item[];
  selectedItem: any;
}

class App extends React.Component<{}, AppState> {
  readonly state = {
    items: [],
    selectedItem: {}
  };

  setSelectedItem = (item: any) => {
    this.setState({
      selectedItem: item
    });
  };

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then((results: Response) => {
        return results.json();
      })
      .then((results: any) => {
        console.log(results);
        this.setState({
          items: results.drinks
        });
      })
      .catch((error: any) => {
        console.log('error: ' + error);
      });

    d3.selectAll('h1').style('color', 'blue');

    let scale = d3
      .scaleLinear()
      .domain([0, 1600])
      .range([0, 1600]);

    let xAxis: any = d3.axisBottom(scale);
    d3.select('#xAxis').call(xAxis);

    let yAxis: any = d3.axisLeft(scale);
    d3.select('#yAxis').call(yAxis);
  }

  render() {
    return (
      <div className='App'>
        <h1>Hoi</h1>
        <Itemlist
          items={this.state.items}
          setSelectedItem={this.setSelectedItem}
          selectedItem={this.state.selectedItem}
        />
        <ItemChart selectedItem={this.state.selectedItem} />
      </div>
    );
  }
}
export default App;
