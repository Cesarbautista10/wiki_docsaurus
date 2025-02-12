---
sidebar_position: 1
---


# Haptic Motor Driver Module 


Haptic Motor Driver Module is a module that can be used to drive a haptic motor. The module is based on the DRV2605L haptic motor driver IC. The DRV2605L is a versatile haptic driver that can be used to drive a linear resonant actuator (LRA) or an eccentric rotating mass (ERM) motor, providing a wide range of haptic effects. The module is designed to be used with compatible STEMMA QT connectors and qwiic connectors. 

<div style={{ textAlign: "center" }}>
  <img src="/img/module/haptic_motor_driver_module.jpg" alt="Haptic Motor Driver Module" width="60%" />
</div>



## Getting Started

### Using the Module with **Cocket Nova**
The module is compatible with the Cocket Nova board using the SDCC compiler. To get started, follow the official documentation to install the necessary tools and drivers:

- [Cocket Nova Getting Started Guide](https://unit-electronics.github.io/CH55x_SDCC_Doc/install_linux.html)

Additional examples are available in the [CH55X_SDCC_Examples repository](https://github.com/UNIT-Electronics/CH55x_SDCC_Examples).


### Using the Module with **ESP32 and MicroPython**
The module is also compatible with the DualMCU development board using MicroPython. Follow the official documentation to set up the environment:

- [DualMCU ESP32 & RP2040 Getting Started Guide](https://unit-electronics.github.io/DualMCU-ONE/env.html#micropython-installation-on-dualmcu)



## Licensing

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)** for all original work and modifications for Cocket NOVA.
However, portions of the code are based on [MCU Templates](https://github.com/wagiminator/MCU-Templates) by wagiminator, which are licensed under the **Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0)**.

For more details, see:
- [CC BY-SA 3.0 License](http://creativecommons.org/licenses/by-sa/3.0/)
- [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)

This project is open source! Both the hardware and software are licensed under the MIT License for MicroPython:
- **Software:** [MIT License](https://opensource.org/licenses/MIT)


## Credits and References

- **Datasheet:** [DRV2605L Datasheet](https://www.ti.com/lit/ds/symlink/drv2605l.pdf)
- **Product Page:** [DRV2605L Product Page](https://www.ti.com/product/DRV2605L)
- **GitHub Repository:** [DRV2605L GitHub Repository](https://github.com/UNIT-Electronics/UNIT_DRV2605L_Haptic_Motor_Driver)

Special thanks to:
- [Stefan Wagner](https://github.com/wagiminator) for support with microcontroller CH552G and CH55x series.


## About Unit Electronics
The DRV2605L Haptic Motor Driver Module is developed and maintained by **Unit Electronics**, dedicated to creating open-source hardware and software solutions for embedded systems.

For questions, feedback, or contributions, feel free to reach out or submit issues through the [GitHub repository](https://github.com/UNIT-Electronics).