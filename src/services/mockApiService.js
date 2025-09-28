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
  return Array.from({ length: 5 }, () => ({
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

export const getUserDistribution = async () => {
  await sleep(150);
  const data = [
    { name: "Male", value: 450, users: 450, color: "#3b82f6" },
    { name: "Female", value: 350, users: 350, color: "#ec4899" },
    { name: "Non-Binary", value: 150, users: 150, color: "#a855f7" },
    { name: "Unspecified", value: 50, users: 50, color: "#a1a1aa" },
  ];
  return data;
};

export const getMeetups = async () => {
  await sleep(800);

  return Array.from({ length: 5 }, () => {
    const capacity = faker.number.int({ min: 3, max: 10 });
    const participants = faker.number.int({ min: 1, max: capacity });

    return {
      id: faker.number.int({ min: 100, max: 999 }), // simple numeric ID like in screenshot
      title: faker.lorem.words(3),
      category: faker.helpers.arrayElement([
        "Tea/Coffee",
        "Walk",
        "Trip",
        "Workshop",
      ]),
      participants,
      capacity,
      date: faker.date.future(),
      status: faker.helpers.arrayElement(["CONFIRMED", "PENDING", "CANCELLED"]),
    };
  });
};

export const getRewardPriceHistory = async () => {
  await sleep(400);
  return [
    { id: 1, date: '2024-01-15', rewardType: 'Referral Reward', previousAmount: 10, newAmount: 5, changedBy: 'Admin', reason: 'Cost optimization' },
    { id: 2, date: '2024-01-10', rewardType: 'Host Reward', previousAmount: 5, newAmount: 10, changedBy: 'Super Admin', reason: 'Incentivize hosting' },
    // Add more mock data if you wish
  ];
};
