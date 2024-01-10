#!/usr/bin/node

const fetch = require('node-fetch');

const ubaUrl = "https://gateway.ubaopenbanking.com/transfer_prototype/1.0/transfer";

const fetchData = async () => {
  try {
    const response = await fetch(ubaUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const text = await response.text();

    // Check if the response is empty
    if (text.trim() === '') {
      console.log('Empty response');
    } else {
      const data = JSON.parse(text);
      console.log(data);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

