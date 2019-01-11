import React, { Component } from 'react';
 
  
class CategoriesListTabs extends Component {
  render () {
    return (
        
      <div className="categories">
        <div className="container">
          <div className="navbar-item">
            <div className="tabs is-boxed">
              <ul>
                <li className="is-active"><a><span>Cat Rounds</span></a></li>
                <li><a><span>Dogs</span></a></li>
                <li><a><span>All Others ...</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoriesListTabs; 