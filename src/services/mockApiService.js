import { faker } from "@faker-js/faker";

// Function to simulate a network delay
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- Mock API Functions ---

export const getDashboardStats = async () => {
  await sleep(500); // Simulate loading
  return {
    activeUsers: {
      value: faker.number.int({ min: 1000, max: 2000 }),
      trend: faker.number.int({ min: -10, max: 20 }),
    },
    meetupsScheduled: {
      value: faker.number.int({ min: 300, max: 600 }),
      trend: faker.number.int({ min: -10, max: 20 }),
    },
    revenue: {
      value: faker.number.int({ min: 50000, max: 90000 }),
      trend: faker.number.int({ min: -10, max: 20 }),
    },
    referrals: {
      value: faker.number.int({ min: 50, max: 100 }),
      trend: faker.number.int({ min: -10, max: 20 }),
    },
  };
};

export const getUsers = async () => {
  await sleep(1000);
  // Create an array of 10 fake users
  return Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    status: faker.helpers.arrayElement(["Active", "Suspended", "Pending"]),
    meetupsAttended: faker.number.int({ min: 0, max: 25 }),
    walletBalance: faker.finance.amount({ min: 0, max: 2000, dec: 2 }),
  }));
};
