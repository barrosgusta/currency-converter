# Currency Converter

A simple Currency Converter application built with React and TypeScript, utilizing Tailwind CSS for styling. The application allows users to convert between different currencies using real-time exchange rates from a public API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)

## Features

- Select two currencies for conversion.
- Input a value to be converted.
- Real-time exchange rates fetched from an external API.
- Input validation for numeric values.
- Responsive design using Tailwind CSS.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- ExchangeRate-API (for fetching exchange rates)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

2. Install dependencies:
   Using npm:

```bash
npm install
```

### Configuration

1. Create a .env file in the root directory of the project:

```
REACT_APP_EXCHANGE_API_KEY=your_actual_api_key_here
```

Replace your_actual_api_key_here with your actual API key obtained from [ExchangeRate-API](https://www.exchangerate-api.com).
For more information on the ExchangeRate-API, visit the [ExchangeRate-API Documentation](https://www.exchangerate-api.com/docs).

### Running the application

To start the development server run:
  
```bash
npm run start
```
