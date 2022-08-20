import React from 'react'

const DataContext = React.createContext();
const getData = () => {}

const App = () => {
  const data = getData();

  return (
    <div>
      <DataContext.Provider value={data}>
        <SlideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
};

// ---

const Content = () => <div>content</div>
const SlideBar = () => <List />;
const List = () => <ListItem />;
const ListItem = () => {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
};
