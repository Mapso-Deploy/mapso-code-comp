
import * as React from "react";
import PlasmicLoader from '@plasmicapp/loader';


export default function stickyHeader(props) {

return ( <PlasmicLoader
    component="Header White" projectId="9iimoy7wzgc1dArVcAeqDv"
    componentProps={{
      variants: {
        white: true
      },
      //
      style: {
        position: 'fixed',
        top: 0,
        zIndex: 999
        }
        //
    }}
  />
);
}