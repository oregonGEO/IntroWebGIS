// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  desktop_arch: require('../assets/images/desktop_arch.png'),
  desktop_workflow: require('../assets/images/desktop_workflow.png'),
  xerox: require('../assets/images/xerox_map_viewer.png'),
  request_response: require('../assets/images/request_response.png'),
  view_chart: require('../assets/images/view_chart.png'),
  grass_links: require('../assets/images/grass_links.png'),
  view_analysis_chart: require('../assets/images/view_analysis_chart.png'),
  mapquest: require('../assets/images/mapquest.jpg'),
  feature_service: require('../assets/images/feature_service.png'),
  mashup: require('../assets/images/mashup.png'),
  webgis: require('../assets/images/webgis.jpg'),
  org_home: require('../assets/images/org_home.png'),
  problem_oregon: require('../assets/images/problem_oregon.png'),
  agency_admin: require('../assets/images/agency_admin.png'),
  contacts: require('../assets/images/contacts.png'),
  odf_large: require('../assets/images/odf_large.png'),
  cfo: require('../assets/images/cfo.png'),
  raptor: require('../assets/images/raptor.png'),
  osmb: require('../assets/images/osmb.png'),
  dropbox: require('../assets/images/dropbox.png'),
  surf: require('../assets/images/surf.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: "#133C55",
  themeGreen: "#66CC00",
  themeBrightRed: "#FB0439",
  themeRed: "#BC042B",
  themeYellow: "#F5CA2F",
  themeWhite: "#ffffff",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps textColor="themeGreen">
              Introduction to
            </Heading>
            <Heading size={1} fit caps>
              Web GIS
            </Heading>
            <Link href="https://twitter.com/OregonGEO">
              <Text bold caps textColor="themeYellow">@OregonGEO</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeGreen">Joshua Tanner</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="themeYellow">
              GIS
            </Heading>
            <Heading size={1} caps>
              Without The
            </Heading>
            <Heading size={1} caps textColor="themeYellow">
              Web
            </Heading>
          </Slide>
          <Slide>
           <Image src={images.desktop_arch.replace("/", "")} margin="auto" height="600px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Software, Hardware, Storage</Text>
          </Slide>
          <Slide>
           <Image src={images.desktop_workflow.replace("/", "")} margin="auto" height="600px"/>
           <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Left Heavy</Text></Appear>
          </Slide>
          <Slide>
            <Heading caps>Recap Non-Web</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Requires Software Installation</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Data Stored Locally</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Left Heavy Capabilities (Analysis, Viewing)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="themeWhite">
              Web GIS
            </Heading>
            <Heading size={1} caps textColor="themeYellow">
              Early Years
            </Heading>
          </Slide>
          <Slide notes="First Web GIS Application">
           <Image src={images.xerox.replace("/", "")} />
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">1993 - XEROX PARC</Text>
          </Slide>
          <Slide notes="First Web GIS Application">
           <Image src={images.request_response.replace("/", "")} />
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">GIS In a Browser</Text>
           <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeGreen">...kind of</Text></Appear>
          </Slide>
          <Slide>
            <Heading caps>Widely Adopted</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">1994 - Canada National Atlas</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">1995 - USGS Data Clearinghouse</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">1995 - Census TIGER Mapping Service</ListItem></Appear>
            </List>
          </Slide>
          <Slide notes="First Web GIS Application">
           <Image src={images.view_chart.replace("/", "")} margin="auto" width="700px" />
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Empower End Users</Text>
          </Slide>
          <Slide notes="First Web GIS Application">
           <Image src={images.grass_links.replace("/", "")} margin="auto" width="700px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">1995 Susan Huse UC Berkeley, GRASSlinks</Text>
           <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeGreen">SaaS</Text></Appear>
          </Slide>
          <Slide notes="First Web GIS Application">
           <Image src={images.view_analysis_chart.replace("/", "")} margin="auto" width="700px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Empower End Users (viewing, analysis)</Text>
          </Slide>
          <Slide notes="commercial interest in routing and mapping">
           <Image src={images.mapquest.replace("/", "")} margin="auto" width="700px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">1996 - MapQuest (directions, gas prices, ...)</Text>
          </Slide>
          <Slide>
            <Heading caps>Recap The Early Years</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Desktop GIS Software Optional</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Data Available Online</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Complex Analysis through Web</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Building Tools to Empower End-Users</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Public Reliance and Familiarity</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="themeWhite">
              Web
            </Heading>
            <Heading size={1} caps textColor="themeYellow">
              2.0
            </Heading>
          </Slide>
          <Slide notes="First Web GIS Application">
            <BlockQuote>
              <Quote textColor="themeWhite">Cumulative changes in the ways software
              developers and end users use the web</Quote>
            <Cite textColor="themeGreen">Darcy DiNucci - 1999</Cite>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading caps>I. Harnessing Information</Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Reverse Information Flow</Text>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Amazon Reviews</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Wikipedia</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">OpenStreetMap</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
           <Image src={images.feature_service.replace("/", "")} margin="auto" width="700px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Map Feature Services</Text>
          </Slide>
          <Slide>
            <Heading caps>II. Web as a Platform</Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Software Capabilities Delivered as a Service</Text>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Routing</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Geocoding</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Google Street View</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
           <Image src={images.mashup.replace("/", "")} margin="auto" width="700px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">mashup</Text>
          </Slide>
          <Slide>
            <Heading caps>III. Rich Usability Across a Variety of Devices</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Desktop</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Mobile / Tablet</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Wearable, Voice, VR / 3D...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps textColor="themeYellow">
              Web GIS
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Any GIS that uses web technology to communicate between a server and a client</Text>
          </Slide>
          <Slide>
           <Image src={images.webgis.replace("/", "")} margin="auto" height="500px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Web GIS</Text>
          </Slide>
          <Slide>
            <Heading caps>Expectation of End Users</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Need it to work on all devices</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Need to edit data</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Need to perform analysis</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Need more granular control</ListItem></Appear>
              <Appear><ListItem textColor="themeYellow" textSize="1.75em">Need it now!!</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps git>Issues</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Complex - Steep learning curve</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Requires special hardware / software</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Custom development</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Security</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Constantly changing</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary" notes="ArcGIS Online is a suite of tools, services, and apps to better integrate your GIS in the cloud.">
            <Heading size={1} caps textColor="themeWhite">
              ArcGIS
            </Heading>
            <Heading size={1} caps textColor="themeYellow">
              Online
            </Heading>
          </Slide>
          <Slide>
            <Heading caps>GIS in Your Browser</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Add and View Map Services</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Perform Analysis (save results)</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Share Maps and Data with Others</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Reduce need for desktop software</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>A Toolbelt</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Application Templates</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Story Maps</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Hosted Feature Services</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Security Built In</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Rich API</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps>Apps!</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Collector for ArcGIS</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Maps for Office</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Web AppBuilder</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
           <Image src={images.org_home.replace("/", "")} margin="auto" height="500px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">geo.maps.arcgis.com</Text>
          </Slide>
          <Slide>
            <Heading size={1} caps textColor="themeYellow">
              27 State Agencies
            </Heading>
            <Appear>
              <Heading size={1} caps textColor="themeGreen">
                1000+ users
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="themeWhite">
            <Image src={images.problem_oregon.replace("/", "")} margin="auto" height="500px"/>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="primary">Sub-Organizations</Text>
          </Slide>
          <Slide>
            <Heading size={1} caps textColor="themeYellow">
              Available to
            </Heading>
            <Appear>
              <Heading size={1} caps textColor="themeGreen">
                All State Employees
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="themeWhite">
           <Image src={images.agency_admin.replace("/", "")} margin="auto" height="500px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="primary">Emmor Nile, Steve Timbrook</Text>
          </Slide>
          <Slide>
           <Image src={images.contacts.replace("/", "")} margin="auto" height="500px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Documentation</Text>
          </Slide>
          <Slide>
           <Image src={images.odf_large.replace("/", "")} margin="auto" height="500px"/>
           <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="themeWhite">Custom Landing Pages</Text>
          </Slide>
          <Slide>
            <Image src={images.cfo.replace("/", "")} margin="auto" height="600px"/>
          </Slide>
          <Slide>
            <Image src={images.raptor.replace("/", "")} margin="auto" height="600px"/>
          </Slide>
          <Slide>
            <Image src={images.osmb.replace("/", "")} margin="auto" height="600px"/>
          </Slide>
          <Slide>
            <Heading size={1} caps textColor="themeYellow">
              Credits
            </Heading>
            <Text textColor="themeWhite">esri.com/software/arcgis/arcgisonline/credits</Text>
          </Slide>
          <Slide>
            <Heading caps>Credits in AGOL</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">% of existing desktop licenses</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">ODF has 11,000 credits annually</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Default 200 credit cap per user</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Each credit ~10 cents</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Credits are good!</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Image src={images.dropbox.replace("/", "")} margin="auto" height="600px"/>
          </Slide>
          <Slide>
            <Heading caps>Credits Example</Heading>
            <List>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">Voter Dropbox App</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">3900 Views</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">1040 Routing Requests</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">.04 Credits per Route</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">41.6 credits</ListItem></Appear>
              <Appear><ListItem textColor="themeWhite" textSize="1.75em">$4.16</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgImage={images.surf.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps>
              The End
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
