import * as React from "react";
import PlasmicLoader from '@plasmicapp/loader';


// function Header_(props, ref) {

// return <PlasmicLoader
// component="Header"
// componentProps={{
// style: {
// position: 'sticky',
// top: 0,
// zIndex: 999
// }
// }}
// />;
// }

// const Header = React.forwardRef(Header_);

// export default Header;

import * as React from "react";
import PlasmicLoader from '@plasmicapp/loader';


export default function stickyHeader(props) {

return ( <PlasmicLoader projectId="9iimoy7wzgc1dArVcAeqDv"
component="Header"
componentProps={{
style: {
position: 'sticky',
top: 0,
zIndex: 999
}
}}
/>
);
}


// export default function Header() {
// return <PlasmicLoader projectId="9iimoy7wzgc1dArVcAeqDv"
// component="Header"
// componentProps={{
// style: {
// position: 'fixed',
// top: 0,
// zIndex: 999
// }
// }}
// />;
// }

