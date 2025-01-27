"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1602],{5341:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Modules/lipo_module","title":"LiPo Charger Boost & I2C Monitor","description":"The UNIT LiPo Charger Boost & I2C Monitor is an advanced charging and monitoring module for single-cell LiPo batteries (3.7V to 4.2V). It integrates a TP4056 charger, an MT3608 voltage booster with output limited to 27V, and a MAX17048 battery monitor over I2C. This module is ideal for applications requiring efficient charging and real-time battery monitoring.","source":"@site/docs/Modules/lipo_module.md","sourceDirName":"Modules","slug":"/Modules/lipo_module","permalink":"/wiki_docsaurus/docs/Modules/lipo_module","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/lipo_module.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Haptic Motor Driver Module","permalink":"/wiki_docsaurus/docs/Modules/haptic_motor_driver"},"next":{"title":"Lumiknob Module","permalink":"/wiki_docsaurus/docs/Modules/lumiknob"}}');var r=i(4848),o=i(8453);const s={sidebar_position:2},l="LiPo Charger Boost & I2C Monitor",c={},d=[{value:"Module Features",id:"module-features",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Front Pinout",id:"front-pinout",level:3},{value:"Back Pinout",id:"back-pinout",level:3},{value:"Pin Connection Table",id:"pin-connection-table",level:2},{value:"Additional Specifications",id:"additional-specifications",level:2},{value:"Fritzing Models",id:"fritzing-models",level:2},{value:"Purchase Links",id:"purchase-links",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Example in MicroPython",id:"example-in-micropython",level:3},{value:"Usage Notes",id:"usage-notes",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"lipo-charger-boost--i2c-monitor",children:"LiPo Charger Boost & I2C Monitor"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"UNIT LiPo Charger Boost & I2C Monitor"})," is an advanced charging and monitoring module for single-cell LiPo batteries (3.7V to 4.2V). It integrates a TP4056 charger, an MT3608 voltage booster with output limited to 27V, and a MAX17048 battery monitor over I2C. This module is ideal for applications requiring efficient charging and real-time battery monitoring."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"LiPo Battery Charging"}),": Two selectable charging currents (200 mA or 1 A) via solder pads."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Step-up Converter MT3608"}),": Boosts battery voltage or USB Type C input up to 27V with a maximum output power of 4W, depending on input voltage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Battery Monitoring"}),": The MAX17048 allows real-time battery level and voltage monitoring via I2C."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Qwiic/Stemma Compatibility"}),": Includes a JST connector to power Qwiic modules through the system voltage bus (VSYS -> VBAT-6V max)."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"module-features",children:"Module Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Input Voltage (VIN)"}),": USB Type C at 5V or via solder pads (maximum 6V)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Battery Charging Voltage"}),": 3.7V nominal (4.2V max)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Output Power"}),": Up to 4W through the MT3608 step-up converter, with efficiency depending on input voltage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Connectors"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2.0 mm JST for LiPo battery."}),"\n",(0,r.jsx)(n.li,{children:"2-pin header (2.54 mm) for battery voltage output."}),"\n",(0,r.jsx)(n.li,{children:"2-pin header (2.54 mm) for step-up voltage output."}),"\n",(0,r.jsxs)(n.li,{children:["5-pin header for the MAX17048 I2C battery monitor: ",(0,r.jsx)(n.code,{children:"SDA"}),", ",(0,r.jsx)(n.code,{children:"SCL"}),", ",(0,r.jsx)(n.code,{children:"GND"}),", ",(0,r.jsx)(n.code,{children:"QST"})," (reset), and ",(0,r.jsx)(n.code,{children:"ALT"})," (alert)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Charging Current Selection"}),": Backside solder pad to select 200 mA or 1 A charging current."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Qwiic/Stemma Output Compatibility"}),": Connects I2C lines (",(0,r.jsx)(n.code,{children:"SDA"}),", ",(0,r.jsx)(n.code,{children:"SCL"}),") and ground (",(0,r.jsx)(n.code,{children:"GND"}),") to the Qwiic/Stemma connector. A jumper pad allows routing system voltage (VSYS) to the Qwiic/Stemma bus, which varies between battery voltage (3.7V) and up to 6V (VIN)."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Since Qwiic operates at 3.3V, a voltage regulator is recommended after the JST output to step down VSYS to 3.3V, protecting connected Qwiic devices."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pinout",children:"Pinout"}),"\n",(0,r.jsx)(n.h3,{id:"front-pinout",children:"Front Pinout"}),"\n",(0,r.jsx)("a",{href:"https://www.uelectronics.com",children:(0,r.jsx)("img",{src:"/img/module/PinoutTop_EN.jpg",width:"600px"})}),"\n",(0,r.jsx)(n.h3,{id:"back-pinout",children:"Back Pinout"}),"\n",(0,r.jsx)("a",{href:"https://www.uelectronics.com",children:(0,r.jsx)("img",{src:"/img/module/PinoutBottom_EN.jpg",width:"600px"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pin-connection-table",children:"Pin Connection Table"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"PIN"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Function on MAX17048"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SDA"}),(0,r.jsx)(n.td,{children:"I2C data line"}),(0,r.jsx)(n.td,{children:"Connect to SDA on the MCU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SCL"}),(0,r.jsx)(n.td,{children:"I2C clock line"}),(0,r.jsx)(n.td,{children:"Connect to SCL on the MCU"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GND"}),(0,r.jsx)(n.td,{children:"Ground"}),(0,r.jsx)(n.td,{children:"Connect to MCU ground"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"QST"}),(0,r.jsx)(n.td,{children:"MAX17048 reset"}),(0,r.jsx)(n.td,{children:"Optional reset pin"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ALT"}),(0,r.jsx)(n.td,{children:"Battery level alert"}),(0,r.jsx)(n.td,{children:"Optional alert pin"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"additional-specifications",children:"Additional Specifications"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Step-Up Characteristics"}),": Output power and current curves for the MT3608 step-up converter with input voltages of 3.4V, 3.5V, and 3.7V. Efficiency depends on input voltage, with:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Output near 27V and a battery at 3.4V: Power limited to ~2-3W."}),"\n",(0,r.jsx)(n.li,{children:"Output near 5V: Stable power output around 4W, even with a battery at 3.4V."}),"\n",(0,r.jsx)(n.li,{children:"Battery voltage above 3.7V: Efficiency improves, maintaining ~4W output."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Note"}),": For optimal performance, use a LiPo battery within 3.7V to 4.2V. Alternatively, provide 5V through USB Type C or VIN pads, with a maximum input of 6V."]}),"\n"]}),"\n",(0,r.jsx)("a",{href:"/img/module/PvsV_EN.png",children:(0,r.jsx)("img",{src:"/img/module/PvsV.png",width:"500px"})}),"\n",(0,r.jsx)("a",{href:"/img/module/IvsV_EN.png",children:(0,r.jsx)("img",{src:"/img/module/IvsV.png",width:"500px"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fritzing-models",children:"Fritzing Models"}),"\n",(0,r.jsxs)(n.p,{children:["Find the Fritzing models for this module in the ",(0,r.jsx)(n.a,{href:"https://github.com/UNIT-Electronics/UNIT-LiPo-Charger-Boost-I2C-Monitor/tree/main/resources/Fritzing",children:"Fritzing repository"}),", making it easy to integrate into your project diagrams."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"purchase-links",children:"Purchase Links"}),"\n",(0,r.jsxs)(n.p,{children:["You can purchase the ",(0,r.jsx)(n.strong,{children:"UNIT LiPo Charger Boost & I2C Monitor"})," directly from ",(0,r.jsx)(n.a,{href:"https://www.uelectronics.com",children:"UNIT Electronics"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MAX1704X Library"}),": This repository contains a library for controlling the MAX17048 with Arduino IDE and MicroPython. It allows you to read battery voltage, charge percentage, and discharge status."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/UNIT-Electronics/MAX1704X_lib",children:"MAX1704X Library Repository"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Technical Documentation"}),": Explore more details in the ",(0,r.jsx)(n.a,{href:"https://unit-electronics.github.io/UNIT-LiPo-Charger-Boost-I2C-Monitor/",children:"technical documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Arduino IDE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"MicroPython"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.h3,{id:"example-in-micropython",children:"Example in MicroPython"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Connections"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Connect ",(0,r.jsx)(n.code,{children:"SDA"})," to the microcontroller's ",(0,r.jsx)(n.code,{children:"SDA"})," pin."]}),"\n",(0,r.jsxs)(n.li,{children:["Connect ",(0,r.jsx)(n.code,{children:"SCL"})," to the microcontroller's ",(0,r.jsx)(n.code,{children:"SCL"})," pin."]}),"\n",(0,r.jsxs)(n.li,{children:["Connect ",(0,r.jsx)(n.code,{children:"GND"})," to the microcontroller's ",(0,r.jsx)(n.code,{children:"GND"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Library Installation"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Download the MAX1704X library from the repository and add it to your project."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example Code"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from max17048 import MAX17048\nfrom machine import I2C, Pin\n\ni2c = I2C(1, scl=Pin(22), sda=Pin(21))  # Adjust pins as per your MCU\nbattery_monitor = MAX17048(i2c)\n\n# Read battery voltage\nvoltage = battery_monitor.get_voltage()\nprint("Battery Voltage:", voltage, "V")\n\n# Read battery charge percentage\ncharge = battery_monitor.get_charge()\nprint("Battery Charge:", charge, "%")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Charging Current"}),": Use the solder pads to select:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"200 mA: Slow charging to extend battery life."}),"\n",(0,r.jsx)(n.li,{children:"1 A: Fast charging for quicker cycles."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.strong,{children:"UNIT LiPo Charger Boost & I2C Monitor"}),", you can monitor battery status, power Qwiic modules, and achieve stable output voltage for applications requiring higher voltage."]}),"\n",(0,r.jsx)(n.p,{children:"Start your battery charging and monitoring project today!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);