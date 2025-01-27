"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8943],{1752:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"UNIT-MATTER","metadata":{"permalink":"/wiki_docsaurus/blog/UNIT-MATTER","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-16-UNIT-MATTER.md","source":"@site/blog/2025-01-16-UNIT-MATTER.md","title":"Matter IoT Line","description":"UNIT Matter IoT Line implenting ESP32C6.","date":"2025-01-16T00:00:00.000Z","tags":[{"inline":false,"label":"Matter","permalink":"/wiki_docsaurus/blog/tags/matter","description":"Matter tag description"},{"inline":false,"label":"ESP32","permalink":"/wiki_docsaurus/blog/tags/esp32","description":"ESP32 tag description"}],"readingTime":1.18,"hasTruncateMarker":true,"authors":[{"name":"Cesar Bautista","title":"Embedded Software Engineer","github":"Cesarbautista10","url":"https://github.com/Cesarbautista10","imageURL":"/wiki_docsaurus/img/unnamed.png","key":"cesar","page":null}],"frontMatter":{"slug":"UNIT-MATTER","title":"Matter IoT Line","authors":"cesar","tags":["matter","esp32"]},"unlisted":false,"nextItem":{"title":"Espressif idf","permalink":"/wiki_docsaurus/blog/Tutorial-Espressif"}},"content":":::tip\\nUNIT Matter IoT Line implenting ESP32C6.\\n:::\\n\x3c!-- truncate --\x3e\\n\\n\\n## Introduction\\n\\n\\nUNIT Matter IoT Line is a series of development boards based on the ESP32-C6 microcontroller. The ESP32-C6 is a highly integrated Wi-Fi 6 (802.11ax) and Bluetooth Low Energy (BLE) SoC with a dual-core CPU, designed for IoT applications. The Matter IoT Line boards are designed to provide a simple and cost-effective solution for developing IoT devices that are compatible with the Matter protocol.\\n\\n\\nMatter connectivity is a new open-source standard for smart home devices, developed by the Connectivity Standards Alliance (CSA). It aims to provide a unified and secure way for smart home devices to communicate with each other, regardless of the manufacturer or communication protocol. The Matter protocol is based on IP and is designed to work over Wi-Fi, Thread, and Ethernet networks.\\n\\n\\n## Espressif Matter Solutions\\n\\n![Solution_architecture](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/_images/solution_architecture.png)\\n\\n## First Results \\n\\nFor the new desing development board, we have the first results of the new ESP32-C6 microcontroller. The new ESP32-C6 is a highly integrated Wi-Fi 6 (802.11ax) and Bluetooth Low Energy (BLE) SoC with a dual-core CPU, designed for IoT applications. The ESP32-C6 is based on the RISC-V architecture and features a dual-core CPU with a clock speed of up to 160 MHz. The ESP32-C6 also features a rich set of peripherals, including UART, SPI, I2C, I2S, PWM, and ADC interfaces, as well as a built-in temperature sensor and a security accelerator."},{"id":"Tutorial-Espressif","metadata":{"permalink":"/wiki_docsaurus/blog/Tutorial-Espressif","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-16-espressif-sdk.md","source":"@site/blog/2025-01-16-espressif-sdk.md","title":"Espressif idf","description":"This tutorial will guide you through the process of flashing a firmware to a development board using Espressif idf.","date":"2025-01-16T00:00:00.000Z","tags":[{"inline":false,"label":"Flash","permalink":"/wiki_docsaurus/blog/tags/flash","description":"Programming microcontrollers tag description"}],"readingTime":0.385,"hasTruncateMarker":true,"authors":[{"name":"Adrian","title":"Team Lead Hardware Design Engineer","github":"adrianliaw","url":"https://thisweekinreact.com","key":"adrian","page":null}],"frontMatter":{"slug":"Tutorial-Espressif","title":"Espressif idf","authors":"adrian","tags":["flash"]},"unlisted":false,"prevItem":{"title":"Matter IoT Line","permalink":"/wiki_docsaurus/blog/UNIT-MATTER"},"nextItem":{"title":"OpenOCD","permalink":"/wiki_docsaurus/blog/Tutorial-OpenOCD"}},"content":"This tutorial will guide you through the process of flashing a firmware to a development board using Espressif idf.\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n## Introduction\\n\\nEspressif IDF (IoT Development Framework) is the official development framework for the ESP32 and ESP32-S series of microcontrollers. It provides a set of tools, libraries, and APIs for developing applications on Espressif\'s Wi-Fi and Bluetooth-enabled microcontrollers. The IDF is based on FreeRTOS and provides a flexible and powerful environment for developing IoT applications."},{"id":"Tutorial-OpenOCD","metadata":{"permalink":"/wiki_docsaurus/blog/Tutorial-OpenOCD","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-16-openocd.md","source":"@site/blog/2025-01-16-openocd.md","title":"OpenOCD","description":"This tutorial will guide you through the process of flashing a firmware to a development board using OpenOCD.","date":"2025-01-16T00:00:00.000Z","tags":[{"inline":false,"label":"Flash","permalink":"/wiki_docsaurus/blog/tags/flash","description":"Programming microcontrollers tag description"}],"readingTime":1.125,"hasTruncateMarker":true,"authors":[{"name":"Cesar Bautista","title":"Embedded Software Engineer","github":"Cesarbautista10","url":"https://github.com/Cesarbautista10","imageURL":"/wiki_docsaurus/img/unnamed.png","key":"cesar","page":null}],"frontMatter":{"slug":"Tutorial-OpenOCD","title":"OpenOCD","authors":"cesar","tags":["flash"]},"unlisted":false,"prevItem":{"title":"Espressif idf","permalink":"/wiki_docsaurus/blog/Tutorial-Espressif"},"nextItem":{"title":"Welcome to Wiki Unit Electronics","permalink":"/wiki_docsaurus/blog/lauch"}},"content":"This tutorial will guide you through the process of flashing a firmware to a development board using OpenOCD.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Introduction\\n\\nOpenOCD (Open On-Chip Debugger) is an open-source software that provides debugging and in-system programming for embedded target devices. It supports a wide range of hardware interfaces and target devices, making it a versatile tool for embedded development.\\n\\nIn this tutorial, we will use OpenOCD to flash a firmware to a development board. We will cover the installation of OpenOCD, configuration of the target device, and flashing of the firmware.\\n\\n\\n## Prerequisites\\n\\nBefore you begin, make sure you have the following:\\n\\n- A development board with an appropriate hardware interface (e.g., JTAG, SWD).\\n- A firmware file in a supported format (e.g., ELF, HEX).\\n- A computer with OpenOCD installed.\\n\\n\\n\\n## Installation\\n\\nTo install OpenOCD, follow the instructions for your operating system:\\n\\n- **Linux**: OpenOCD is available in most package managers. You can install it using the following command:\\n\\n  ```bash\\n  sudo apt-get install openocd\\n  ```\\n\\n- **Windows**: Download the latest OpenOCD binary from the [official website](\\n\\n- **macOS**: OpenOCD can be installed using [Homebrew](https://brew.sh/). Run the following command:\\n\\n  ```bash\\n  brew install openocd\\n  ```\\n\\nOnce OpenOCD is installed, you can verify the installation by running the following command:\\n\\n```bash\\nopenocd --version\\n```\\n\\nYou should see the version number of OpenOCD displayed in the terminal."},{"id":"lauch","metadata":{"permalink":"/wiki_docsaurus/blog/lauch","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-01-17-launch/index.md","source":"@site/blog/2024-01-17-launch/index.md","title":"Welcome to Wiki Unit Electronics","description":"wiki unit electronics","date":"2024-01-17T00:00:00.000Z","tags":[{"inline":false,"label":"ESP32","permalink":"/wiki_docsaurus/blog/tags/esp32","description":"ESP32 tag description"},{"inline":false,"label":"Hello","permalink":"/wiki_docsaurus/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/wiki_docsaurus/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.52,"hasTruncateMarker":true,"authors":[{"name":"Adrian","title":"Team Lead Hardware Design Engineer","github":"adrianliaw","url":"https://thisweekinreact.com","key":"adrian","page":null},{"name":"Cesar Bautista","title":"Embedded Software Engineer","github":"Cesarbautista10","url":"https://github.com/Cesarbautista10","imageURL":"/wiki_docsaurus/img/unnamed.png","key":"cesar","page":null}],"frontMatter":{"slug":"lauch","title":"Welcome to Wiki Unit Electronics","authors":["adrian","cesar"],"tags":["esp32","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"OpenOCD","permalink":"/wiki_docsaurus/blog/Tutorial-OpenOCD"}},"content":":::tip\\nwiki unit electronics\\n:::\\n\\n\\n\x3c!-- truncate --\x3e\\n\\n# Wiki Unit Electronics\\n\\n## Introduction\\n\\n\\nWelcome to Wiki Unit Electronics, a place where you can find all the information you need to start working with our products. We are a company that is dedicated to the development of electronic products and we are always looking for new ways to improve our products and services. We are constantly updating our website with new information and resources to help you get started with our products. If you have any questions or need help with anything, please feel free to contact us. We are always happy to help."}]}}')}}]);