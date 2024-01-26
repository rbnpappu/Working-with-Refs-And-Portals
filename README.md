# Working-with-Refs-And-Portals
# TimeChallenger Project

This project was created to explore the distinctions between state and refs in React. It leverages the use of refs to implement dynamic behavior and provides a module for managing challenges with predefined time constraints.

## Overview

The TimeChallenger project introduces challenges that start a timer and do not allow users to stop it before the specified execution time. The use of `useRef` simplifies tracking and reduces the need for multiple `useState` instances. Unlike `useState`, `useRef` does not trigger component re-renders upon changes, making it suitable for scenarios where re-renders are not necessary.

## Features

- **Dynamic Timer**: Challenges initiate a timer that cannot be stopped before the specified execution time.
- **Efficient State Management**: `useRef` is employed for efficient state tracking, reducing the reliance on multiple `useState` instances.
- **Forward Refs**: Utilization of `useRef` for forward refs to facilitate interaction between parent and child components.

## Getting Started

To set up the project, follow these steps:

```bash
npm install
npm run dev
