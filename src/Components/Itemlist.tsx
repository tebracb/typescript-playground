import React, { Component } from 'react';
import { Item } from './Item';
import './Itemlist.css';

interface ItemListProps {
  items: Item[];
  setSelectedItem: (item: Item) => void;
  selectedItem: any;
}

class Itemlist extends Component<ItemListProps> {
  render() {
    const { items, setSelectedItem, selectedItem } = this.props;

    let itemButtons = items.map((item: Item) => (
      <button
        onClick={() => {
          setSelectedItem(item);
        }}
        className={`buttonDrink ${item === selectedItem ? 'selected' : ''}`}
        key={item.idDrink}
      >
        {item.strDrink}
      </button>
    ));

    return <div className='buttonsDiv'>{itemButtons}</div>;
  }
}

export default Itemlist;
