"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9987],{5859:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Modules/haptic_motor_driver","title":"Haptic Motor Driver Module","description":"Haptic Motor Driver Module is a module that can be used to drive a haptic motor. The module is based on the DRV2605L haptic motor driver IC. The DRV2605L is a versatile haptic driver that can be used to drive a linear resonant actuator (LRA) or an eccentric rotating mass (ERM) motor, providing a wide range of haptic effects. The module is designed to be used with compatible STEMMA QT connectors and qwiic connectors.","source":"@site/docs/Modules/haptic_motor_driver.md","sourceDirName":"Modules","slug":"/Modules/haptic_motor_driver","permalink":"/wiki_docsaurus/docs/Modules/haptic_motor_driver","draft":false,"unlisted":false,"editUrl":"https://github.com/UNIT-Electronics/docs/Modules/haptic_motor_driver.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"UNIT - Modules","permalink":"/wiki_docsaurus/docs/category/unit---modules"},"next":{"title":"LiPo Charger Boost & I2C Monitor","permalink":"/wiki_docsaurus/docs/Modules/lipo_module"}}');var o=i(4848),r=i(8453);const s={sidebar_position:1},a="Haptic Motor Driver Module",c={},d=[{value:"Code Example",id:"code-example",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Using the Module with <strong>Cocket Nova</strong>",id:"using-the-module-with-cocket-nova",level:3},{value:"Using the Module with <strong>ESP32 and MicroPython</strong>",id:"using-the-module-with-esp32-and-micropython",level:3},{value:"Licensing",id:"licensing",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"haptic-motor-driver-module",children:"Haptic Motor Driver Module"})}),"\n",(0,o.jsx)(t.p,{children:"Haptic Motor Driver Module is a module that can be used to drive a haptic motor. The module is based on the DRV2605L haptic motor driver IC. The DRV2605L is a versatile haptic driver that can be used to drive a linear resonant actuator (LRA) or an eccentric rotating mass (ERM) motor, providing a wide range of haptic effects. The module is designed to be used with compatible STEMMA QT connectors and qwiic connectors."}),"\n",(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("img",{src:"https://raw.githubusercontent.com/UNIT-Electronics/UNIT_DRV2605L_Haptic_Motor_Driver/refs/heads/main/Resources/drv2605l.jpg",width:"300px"}),(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.h2,{id:"code-example",children:"Code Example"}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsx)(t.mdxAdmonitionTitle,{}),(0,o.jsxs)(t.p,{children:["The next example is only demostrative, you can find more examples in the ",(0,o.jsx)(t.a,{href:"https://github.com/UNIT-Electronics/UNIT_DRV2605L_Haptic_Motor_Driver/tree/main/Software",children:"DRV2605L GitHub Repository"})]})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from machine import I2C, Pin\nimport time\n\n# Initialize I2C\ni2c = I2C(0, scl=Pin(13), sda=Pin(12))  # Use appropriate pins for your board, e.g. RP2040 (Pico)\ndrv = DRV2605L(i2c)\n\n# Example usage\nprint("Initializing DRV2605L...")\ndrv.set_voltage(0x80, 0x90)  # Set voltage for 3.3V operation \ndrv.select_library(1)        # Use ERM library\n\n# Example: Ramp Effect\nprint("Playing ramp effect...")\ndrv.set_waveform(0, 47)  # Increment effect\ndrv.set_waveform(1, 48)  # Decrement effect\ndrv.set_waveform(2, 0)   # End sequence\ndrv.go()\ntime.sleep(1)  # Vibrates for 1 second\ndrv.stop()\nprint("Ramp effect completed.")\n'})}),"\n",(0,o.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.h3,{id:"using-the-module-with-cocket-nova",children:["Using the Module with ",(0,o.jsx)(t.strong,{children:"Cocket Nova"})]}),"\n",(0,o.jsx)(t.p,{children:"The module is compatible with the Cocket Nova board using the SDCC compiler. To get started, follow the official documentation to install the necessary tools and drivers:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://unit-electronics.github.io/CH55x_SDCC_Doc/install_linux.html",children:"Cocket Nova Getting Started Guide"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Additional examples are available in the ",(0,o.jsx)(t.a,{href:"https://github.com/UNIT-Electronics/CH55x_SDCC_Examples",children:"CH55X_SDCC_Examples repository"}),"."]}),"\n",(0,o.jsxs)(t.h3,{id:"using-the-module-with-esp32-and-micropython",children:["Using the Module with ",(0,o.jsx)(t.strong,{children:"ESP32 and MicroPython"})]}),"\n",(0,o.jsx)(t.p,{children:"The module is also compatible with the DualMCU development board using MicroPython. Follow the official documentation to set up the environment:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://unit-electronics.github.io/DualMCU-ONE/env.html#micropython-installation-on-dualmcu",children:"DualMCU ESP32 & RP2040 Getting Started Guide"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"licensing",children:"Licensing"}),"\n",(0,o.jsxs)(t.p,{children:["This project is licensed under the ",(0,o.jsx)(t.strong,{children:"GNU General Public License v3.0 (GPL-3.0)"})," for all original work and modifications for Cocket NOVA.\nHowever, portions of the code are based on ",(0,o.jsx)(t.a,{href:"https://github.com/wagiminator/MCU-Templates",children:"MCU Templates"})," by wagiminator, which are licensed under the ",(0,o.jsx)(t.strong,{children:"Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0)"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"For more details, see:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"http://creativecommons.org/licenses/by-sa/3.0/",children:"CC BY-SA 3.0 License"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.gnu.org/licenses/gpl-3.0.en.html",children:"GPL-3.0 License"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This project is open source! Both the hardware and software are licensed under the MIT License for MicroPython:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Software:"})," ",(0,o.jsx)(t.a,{href:"https://opensource.org/licenses/MIT",children:"MIT License"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);