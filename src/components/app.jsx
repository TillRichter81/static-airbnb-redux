import React from 'react';
import Map from '../containers/map';
import FlatList from '../containers/flat_list'

const App = () => {
  return (
    <div className="row">
    <FlatList />
    <Map />
    </div>
  );
};

export default App;



// import React from 'react';
// import FlatList from '../containers/flat_list';
// import Map from '../containers/map';
// const App = () => {
//  return (
//  <div className="row">
//  <FlatList />
//  <Map />
//  </div>
//  );
// };
// export default App;
