import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Menu, Icon, Grid, List, Image, Input, Button} from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>

            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Grid container centered columns={2}>
            <Dropdown item text="MEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="KIDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Onesies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Aloha Surf Project</Dropdown.Item>
                <Dropdown.Item>Da Mokes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class BackgroundImage extends React.Component {
  render() {
    return (
        <BackgroundImage src='http://murphyshawaii.com/media/2014/04/murphys-front.jpg'/>

    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3} fitted>
            <Grid.Column>
              NAVIGATION
              <hr/>
              <List>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
                <List.Item>Shipping & Returns</List.Item>
                <List.Item>Terms & Conditions</List.Item>
                <List.Item>Privacy Policy</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              MAIN MENU
              <hr/>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Search</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              CONNECT
              <hr/>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item><Input placeholder="Enter email address" label={<Button color="black">Join</Button>} labelPosition="right"/></List.Item>
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
          <BackgroundImage/>
          <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));