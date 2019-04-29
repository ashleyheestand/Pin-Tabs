import React, { Component } from 'react';
import './list-view.css';
import randomId from 'uuid/v4';
import ItemView from './ItemView';

export default class ListView extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: ['Shoes', 'Clothes', 'Makeup', 'Accessories'],
    };
  }
  renderTabs() {
    if (this.props.tabs.length < 1) {
      return <h2 className="empty-list">No tabs to show :(</h2>;
    }
    return this.props.tabs.map(tab => {
      return (
        <ItemView
          key={randomId()}
          tab_url={tab.tab[0].url}
          tab_title={tab.tab[0].title}
          tab_icon={tab.tab[0].favIconUrl}
          deleteTab={this.props.deleteTab}
          categories={this.state.categories}
          category={tab.tab[0].category}
          addCategory={this.props.addCatgory}
          // expiry={tab.expiry}
          // expirySettings={this.props.expirySettings}
          // expired={this.props.expired}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          {' '}
          <h3> Filter by category</h3>
          <select
            onChange={() =>
              this.props.tabs.filter(tab => tab.category === this.value)
            }
          >
            {' '}
            {this.state.categories.map(category => {
              return <option key={category.id}>{category}</option>;
            })}
          </select>
        </div>
        <div>{this.renderTabs()}</div>
        {/* const defaultOption = this.state.categories[0] */}
      </div>
    );
  }
}
