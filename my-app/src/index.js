import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Menu, Icon, Grid, List, Image} from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>

            <Menu.Item fitted position="right">Home</Menu.Item>

            <Dropdown item text="About Us" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
                <Dropdown.Item>Upcoming Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>St. Patrick’s Day</Menu.Item>

            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch</Dropdown.Item>
                <Dropdown.Item>Dinner</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item fitted>Bar</Menu.Item>

            <Menu.Item><Icon name="search" /></Menu.Item>


          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="grad-background">
            <Grid container columns={2} style={gridStyle}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
              </Grid.Column>

              <Grid.Column>
                <h2>
                  <p>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</p>
                </h2>
              </Grid.Column>
            </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3} fitted>
            <Grid.Column>
              Lunch
              <hr/>
              <List>
                <List.Item>Monday - Saturday:</List.Item>
                <List.Item>Monday - Saturday:</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              Bar
              <hr/>
              <List>
                <List.Item>Monday - Saturday:</List.Item>
                <List.Item>Monday - Saturday:</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              Dinner
              <hr/>
              <List>
                <List.Item>Monday - Saturday:</List.Item>
                <List.Item>Monday - Saturday:</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));