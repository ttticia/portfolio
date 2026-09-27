---
title: Peltier Cooling Patch
subtitle: Fluidic cooling patch prototype
start: Jul 2025
end: Sep 2025
tags: [finite element analysis]
category: Academic
description: Design of a fluidic cooling patch with the use of a peltier heat pump
thumbNail: 'public\img\peltier\peltier thumb-nail.png'
---

Current cooling patches usually require storage in freezers to lower their temperature. They also have a limited duration of use, making conventional cooling patches inefficient. More advanced cooling technologies exist, but they are expensive.

<div class="highlight">
    <p><strong>Problem statement:</strong> How might we develop a low cost cooling patch that can be used for longer durations of time?</p>
</div>

## Component Selection
Components:
- PDMS cooling patch with fluidic channels
- Peltier heat pump to cool the fluid
- Electric pump
- Battery
- Water container

The patch was made from PDMS. Its high conductivity allows it to efficiently remove heat from the skin and its flexibility helps it wrap around curved parts ob the body, maintaining surface contact with the warm skin.

A peltier heat pump was used as the main cooling device because it is compact, relatively cheap and can run for long periods of time.

<br />

## Computer Fluid Simulation
The patch's fluidic channel design was evaluated and optimized using Ansys Fluent. We optimized the design for 4 main features:
1. Low maximum temperature - for better cooling
2. Low variance of temperature on the surface of the patch - ensures uniform cooling
3. High % area below 30°C - cooler surface improves heat transfer
4. High average flow speed - reduces temperature increase of hte fluid as it flows through the patch

With the given dimensions of our prototype patch, the best design was a single serpentine channel that maximized the fluids surface area over the skin.

<div class="multi-image">
    <figure>
        <img
            src="/portfolio/img/peltier/splitter.png"
        />
        <figcaption>
            Split-channel version 1
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/peltier/improved%20splitter.png"
        />
        <figcaption>
            Split-channel version 2
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/peltier/serpentine.png"
        />
        <figcaption>
            Single serpentine channel
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/peltier/double%20serpentine.png"
        />
        <figcaption>
            Double serpentine channel
        </figcaption>
    </figure>
</div>

<br />

## Prototype Fabrication
The PDMS moulds were 3D printed using PLA, which allowed us to iterate on the mould designs quickly. The PDMS patch consisted of a base layer, which contained the channels, and a cover layer. The 2 layers were plasma bonded together. Small PDMS stoppers were added to the inlet and outlet to prevent leakages.

<br />

## Final Prototype
<div class="multi-image">
    <figure>
        <img
            src="/portfolio/img/peltier/final%20prototype.png"
        />
        <figcaption>
            Summary of final prototype
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/peltier/PDMS.png"
        />
        <figcaption>
            Final PDMS patches
        </figcaption>
    </figure>
</div>

**Results:** Our cooling patch resulted in a 2.6°C decrease in temperature.

**Future improvements**
- Fluid could be changed to a one with better thermal conductivity than water
- Cooling system could also be improved, either through the use of more peltier modules or a higher rated peltier, to further reduce the fluid's temperature
- More robust tube connectors to prevent leakages and withstand higher pressure
- Insulation to prevent heat gain from the environment