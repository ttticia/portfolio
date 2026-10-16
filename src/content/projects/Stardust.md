---
title: Stardust Express
subtitle: SUTD Mindsports Game Jam 2024 submission
start: Oct 2024
end: Oct 2024
tags: [game dev]
category: Extracurricular
description: Developed a space themed game in 1 week in the Godot game engine
thumbNail: 'public\img\stardust\thumb.png'
---

## Project Description

<div class="highlight">
    <p>Won <strong>Best Game (Individual - Novice)</strong></p>
    <br />
    <img style="margin: 1rem; width: 600px; justify-self: center;" src="/portfolio/img/stardust/award.png" />
</div>

I participated in a game jam hosted by SUTD Mindsports, a board games and game development club. I joined under the Individual Novice category.

Each team is given 6 days to create a game adhering to the theme of “space”. On the submission day, each team had to present a working demo to the panel of judges.

<br />

## Gameplay

<div class="highlight">
    <p><strong>Goal:</strong> Earn as many credits as possible by completing missions before any mission timer runs out</p>
    <br />
    <img style="margin: 1rem; width: 600px; justify-self: center;" src="/portfolio/img/stardust/gameplay.png" />
</div>

**1. Story**

My initial idea was a game where you explore different planets. Since I only had 6 days, I decided to make an arcade game where you play as an intergalactic mailman and deliver orders to different planets.

**2. Background**

The background is made of 3 layers and a parallax modifier. The layers move at different speeds to create an illusion of depth. The bigger objects, like the rocks, are in the lower layers so they move slower. The background uses a pastel colour palette to create a cozy aesthetic. The background is generated in a repeating pattern around the player as the players moves.

<div class="multi-image">
    <figure>
        <img
            src="/portfolio/img/stardust/base.png"
        />
        <figcaption>
            Base layer
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/stardust/layer1.png"
        />
        <figcaption>
            Layer 2
        </figcaption>
    </figure>
    <figure>
        <img
            src="/portfolio/img/stardust/layer2.png"
        />
        <figcaption>
            Layer 3
        </figcaption>
    </figure>
</div>

**3. Missions**

<figure class="solo-image">
    <img src="/portfolio/img/stardust/missions.png" />
    <figcaption>Example of generated missions</figcaption>
</figure>

The missions are randomly generated. There are always 3 missions running at the same time to challenge the player’s time management and strategic thinking skills. 

Each mission shows the timer, target planet, name of the recipient, items being delivered and the credits that will be paid upon completion. The names and items are randomly selected from a list. The timer and credits awarded scale depending on how far the player is from the target planet when the mission is created.

The missions menu can be hidden or shown by pressing “J” so the player can choose if they do not want the screen blocked by the missions.

**4. Mini Map**

<figure class="solo-image">
    <img src="/portfolio/img/stardust/map.png" />
    <figcaption>Example of map during gameplay</figcaption>
</figure>

The mini map helps the player navigate. The player icon is hidden in the mini map to make navigation more challenging. The map can be toggled by holding down the “m” key.

The mini map is generated using a sub-viewport, creating a smaller screen within the main game screen. The sub-viewport has a camera that follows the player. The camera is zoomed out so that the player can see more of their surroundings.

<br />

## Reflection

Developing my own video game taught me project management and independent working skills. Before this project, I had minimal experience with game development and the Godot game engine. I enjoyed challenging both my technical and creative skills and am proud of what I accomplished.