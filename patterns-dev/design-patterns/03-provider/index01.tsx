import React from 'react'

const getData = () => {}

const App = () => {
  const data = getData();

  return (
    <div>
      <SlideBar data={data} />
      <Content data={data} />
    </div>
  );
};

const SlideBar = ({ data }) => <List data={data} />;
const List = ({ data }) => <ListItem data={data} />;
const ListItem = ({ data }) => <span>{data.listItem}</span>;

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
);

const Header = ({ data }) => <div>{data.title}</div>;
const Block = ({ data }) => <Text data={data} />;
const Text = ({ data }) => <h1>{data.text}</h1>;
