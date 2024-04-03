export async function fetchRevenue() {

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    return [
      { month: '7197', revenue: 2000 },
      { month: '9312', revenue: 1800 },
      { month: '2611', revenue: 2200 },
      { month: '8300', revenue: 2500 },
      { month: '2144', revenue: 2300 },
      { month: '1234', revenue: 3200 },
      { month: '8974', revenue: 3500 },
      { month: '6543', revenue: 3700 },
      { month: '1237', revenue: 2500 },
      { month: '9985', revenue: 2800 },
      { month: '4553', revenue: 3000 },
      { month: '8456', revenue: 4800 },
    ];


  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}