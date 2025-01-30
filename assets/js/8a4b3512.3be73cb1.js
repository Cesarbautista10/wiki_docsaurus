"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2485],{385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Development_boards/Compatibility_Arduino/Arduino","title":"Unit Electronics Package Installation Guide","description":"This guide provides step-by-step instructions for installing the necessary board support packages to program the DualMCU-ONE/DualMCU (RP2040 + ESP32) and Cocket Nova CH552 development boards using the Arduino IDE. These packages enable development within the Arduino environment, ensuring smooth integration with your hardware.","source":"@site/docs/Development_boards/Compatibility_Arduino/Arduino.md","sourceDirName":"Development_boards/Compatibility_Arduino","slug":"/Development_boards/Compatibility_Arduino/Arduino","permalink":"/wiki_docsaurus/docs/Development_boards/Compatibility_Arduino/Arduino","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development_boards/Compatibility_Arduino/Arduino.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Compatibility with Arduino","permalink":"/wiki_docsaurus/docs/category/compatibility-with-arduino"},"next":{"title":"DualMCU Development boards","permalink":"/wiki_docsaurus/docs/category/dualmcu-development-boards"}}');var i=s(4848),t=s(8453);const o={sidebar_position:1},l="Unit Electronics Package Installation Guide",c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Installation",id:"quick-installation",level:2},{value:"1. Installing the DualMCU-ONE Board Package step by step",id:"1-installing-the-dualmcu-one-board-package-step-by-step",level:2},{value:"<strong>Step 1: Install ESP32 Package</strong>",id:"step-1-install-esp32-package",level:3},{value:"<strong>Step 2: Install RP2040 Package</strong>",id:"step-2-install-rp2040-package",level:3},{value:"<strong>Example Screenshot</strong>",id:"example-screenshot",level:4},{value:"2. Installing the Cocket Nova CH552 Board Package",id:"2-installing-the-cocket-nova-ch552-board-package",level:2},{value:"<strong>Example Screenshot</strong>",id:"example-screenshot-1",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"unit-electronics-package-installation-guide",children:"Unit Electronics Package Installation Guide"})}),"\n",(0,i.jsxs)(n.p,{children:["This guide provides step-by-step instructions for installing the necessary board support packages to program the ",(0,i.jsx)(n.strong,{children:"DualMCU-ONE/DualMCU"})," (RP2040 + ESP32) and ",(0,i.jsx)(n.strong,{children:"Cocket Nova CH552"})," development boards using the Arduino IDE. These packages enable development within the Arduino environment, ensuring smooth integration with your hardware."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before proceeding, ensure you have the following tools installed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.arduino.cc/en/software",children:"Arduino IDE"})})," \u2013 Required for programming the boards."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",children:"USB Drivers"})})," \u2013 Required for board communication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Board Support Packages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://uelectronics.com/producto/unit-dualmcu-one-esp32-rp2040/",children:"DualMCU-ONE (ESP32 + RP2040)"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/",children:"Cocket Nova CH552"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"quick-installation",children:"Quick Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Copy and paste the following URLs into the ",(0,i.jsx)(n.strong,{children:"Additional Board Manager URLs"})," field in the Arduino IDE preferences:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json\nhttps://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json\nhttps://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Search for the ",(0,i.jsx)(n.strong,{children:"Unit Electronics"})," boards in the ",(0,i.jsx)(n.strong,{children:"Boards Manager"})," and install all the necessary packages."]}),"\n",(0,i.jsx)(n.p,{children:"or install the packages manually by following the steps below."}),"\n",(0,i.jsx)(n.h2,{id:"1-installing-the-dualmcu-one-board-package-step-by-step",children:"1. Installing the DualMCU-ONE Board Package step by step"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-install-esp32-package",children:(0,i.jsx)(n.strong,{children:"Step 1: Install ESP32 Package"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Arduino IDE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"File > Preferences"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Additional Board Manager URLs"})," field, enter the following URL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-ESP32-Arduino-Package/main/package_Uelectronics_esp32_index.json\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to save the preferences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Tools > Board > Boards Manager"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Search for ",(0,i.jsx)(n.strong,{children:"DualMCU"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once installed, select ",(0,i.jsx)(n.strong,{children:"DualMCU"})," from the ",(0,i.jsx)(n.strong,{children:"Boards"})," menu."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-install-rp2040-package",children:(0,i.jsx)(n.strong,{children:"Step 2: Install RP2040 Package"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Arduino IDE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"File > Preferences"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Additional Board Manager URLs"})," field, enter the following URL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-RP2040-Arduino-Package/main/package_Uelectronics_rp2040_index.json\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to save the preferences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Tools > Board > Boards Manager"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Search for ",(0,i.jsx)(n.strong,{children:"RP2040"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once installed, select ",(0,i.jsx)(n.strong,{children:"RP2040"})," from the ",(0,i.jsx)(n.strong,{children:"Boards"})," menu."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-screenshot",children:(0,i.jsx)(n.strong,{children:"Example Screenshot"})}),"\n",(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/Rabadan-uelectronics/DualMCU-RP2040-Arduino-Package/refs/heads/main/releases/download/0.0.0/BoardsManager.png",width:"600px"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-installing-the-cocket-nova-ch552-board-package",children:"2. Installing the Cocket Nova CH552 Board Package"}),"\n",(0,i.jsxs)(n.p,{children:["To program the ",(0,i.jsx)(n.strong,{children:"Cocket Nova CH552"})," board using the Arduino IDE, follow these steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Arduino IDE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"File > Preferences"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Additional Board Manager URLs"})," field, enter the following URL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/develop/package_duino_mcs51_index.json\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"})," to save the preferences."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Tools > Board > Boards Manager"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Search for ",(0,i.jsx)(n.strong,{children:"Cocket Nova"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once installed, select ",(0,i.jsx)(n.strong,{children:"Cocket Nova"})," from the ",(0,i.jsx)(n.strong,{children:"Boards"})," menu."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-screenshot-1",children:(0,i.jsx)(n.strong,{children:"Example Screenshot"})}),"\n",(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/UNIT-Electronics/Uelectronics-CH552-Arduino-Package/refs/heads/main/images/board_json.png",width:"600px"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You have successfully installed the necessary packages to program the ",(0,i.jsx)(n.strong,{children:"DualMCU-ONE"})," (ESP32 + RP2040) and ",(0,i.jsx)(n.strong,{children:"Cocket Nova CH552"})," development boards in the Arduino IDE. You are now ready to start developing your projects!"]}),(0,i.jsxs)(n.p,{children:["For additional documentation and project ideas, visit ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://uelectronics.com/",children:"UNIT Electronics"})}),"."]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);