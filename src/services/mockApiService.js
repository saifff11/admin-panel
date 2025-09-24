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

export const getDailyMeetups = async () => {
  await sleep(300); // Simulate loading
  const data = [
    { day: "Sun", meetups: faker.number.int({ min: 50, max: 100 }) },
    { day: "Mon", meetups: faker.number.int({ min: 100, max: 180 }) },
    { day: "Tue", meetups: faker.number.int({ min: 80, max: 150 }) },
    { day: "Wed", meetups: faker.number.int({ min: 180, max: 240 }) },
    { day: "Thu", meetups: faker.number.int({ min: 160, max: 220 }) },
    { day: "Fri", meetups: faker.number.int({ min: 220, max: 280 }) },
    { day: "Sat", meetups: faker.number.int({ min: 150, max: 200 }) },
  ];
  return data;
};

export const getTrendingCategories = async () => {
  await sleep(200);
  const categories = [
    { name: "Tea", value: 90 },
    { name: "Walk", value: 85 },
    { name: "Lifestyle", value: 80 },
    { name: "Party", value: 75 },
    { name: "Study", value: 70 },
  ];
  return categories;
};
