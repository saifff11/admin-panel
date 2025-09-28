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
    {
      id: 1,
      date: "2024-01-15",
      rewardType: "Referral Reward",
      previousAmount: 10,
      newAmount: 5,
      changedBy: "Admin",
      reason: "Cost optimization",
    },
    {
      id: 2,
      date: "2024-01-10",
      rewardType: "Host Reward",
      previousAmount: 5,
      newAmount: 10,
      changedBy: "Super Admin",
      reason: "Incentivize hosting",
    },
    // Add more mock data if you wish
  ];
};

export const getCategoryStats = async () => {
  await sleep(100);
  return {
    totalCategories: { value: 23, subtitle: "48 subcategories" },
    activeMeetups: { value: 32, subtitle: "+23 this week" },
    popularCategory: {
      value: "Spiritual Gathering",
      subtitle: "67 active meetups",
    },
    totalLocations: { value: 0, subtitle: "Available options" },
  };
};

export const getFullCategories = async () => {
  await sleep(600);
  return [
    {
      id: 1,
      name: "Food & Beverage Meetups",
      icon: "🍔",
      status: "Active",
      description:
        "Casual or planned meetups over tea, coffee, meals, or snacks in various settings.",
      stats: { activeMeetups: 21, totalUsers: 202, subcategories: 7 },
      subcategories: [
        "Tea",
        "Coffee",
        "Soft Drink",
        "Pizza",
        "Fast Food",
        "+2 more",
      ],
    },
    {
      id: 2,
      name: "Social Hangouts & Gupshup",
      icon: "👥",
      status: "Active",
      description:
        "Friendly social gatherings, chit-chats, and casual hangouts with friends or groups.",
      stats: { activeMeetups: 194, totalUsers: 194, subcategories: 6 },
      subcategories: [
        "Friends",
        "Get-together",
        "Chit-Chat",
        "Community",
        "+2 more",
      ],
    },
  ];
};

export const getNotificationTemplates = async () => {
  await sleep(100);
  return [
    { id: 1, name: "Welcome Message" },
    { id: 2, name: "Meetup Reminder" },
    { id: 3, name: "You're Late Alert" },
    { id: 4, name: "Payment Successful" },
  ];
};

export const getRecentNotifications = async () => {
  await sleep(300);
  return [
    {
      id: 1,
      title: "New Feature Update",
      target: "All Users",
      time: "2 hours ago",
      status: "Delivered",
    },
    {
      id: 2,
      title: "Meetup Reminder",
      target: "45 Users",
      time: "1 day ago",
      status: "Delivered",
    },
    {
      id: 3,
      title: "Weekly Summary",
      target: "All Users",
      time: "3 days ago",
      status: "Scheduled",
    },
  ];
};

export const getWalletTransactions = async () => {
  await sleep(700);
  return Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    date: faker.date.recent({ days: 60 }),
    user: faker.person.fullName(),
    type: faker.helpers.arrayElement(["Credit", "Refund", "Penalty"]),
    amount: faker.finance.amount({ min: -50, max: 200, dec: 2 }),
    balanceAfter: faker.finance.amount({ min: 100, max: 500, dec: 2 }),
    admin: faker.helpers.arrayElement(["System", "Admin"]),
    reason: faker.lorem.words(3),
    status: "Completed",
  }));
};

export const getReportStats = async () => {
  await sleep(100);
  return {
    newReports: { value: 12, trend: 5 },
    inProgress: { value: 9, trend: -2 },
    resolvedToday: { value: 5, trend: 3 },
    falseReports: { value: 10, trend: 1 },
  };
};

export const getUserReports = async () => {
  await sleep(600);
  return Array.from({ length: 5 }, (_, i) => ({
    id: `RPT-00${i + 1}`,
    reportedBy: faker.person.fullName(),
    reportedUser: faker.person.fullName(),
    type: faker.helpers.arrayElement([
      "USER BEHAVIOR",
      "INAPPROPRIATE CONTENT",
      "PAYMENT ISSUES",
      "FAKE PROFILE",
      "HARASSMENT",
    ]),
    priority: faker.helpers.arrayElement(["HIGH", "MEDIUM", "LOW"]),
    date: faker.date.recent({ days: 10 }),
    status: faker.helpers.arrayElement(["NEW", "IN PROGRESS", "RESOLVED"]),
  }));
};

export const getTeamMembers = async () => {
  await sleep(400);
  return [
    {
      id: 1,
      name: "Admin User",
      email: "admin@vybein.com",
      role: "SUPER ADMIN",
      permissions: "Full Access",
      lastActive: "Just now",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Support Staff",
      email: "support@vybein.com",
      role: "MODERATOR",
      permissions: "User Management, Reports",
      lastActive: "2 hours ago",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Content Manager",
      email: "content@vybein.com",
      role: "EDITOR",
      permissions: "Categories, Notifications",
      lastActive: "1 day ago",
      status: "ACTIVE",
    },
    {
      id: 4,
      name: "Financial Admin",
      email: "finance@vybein.com",
      role: "FINANCE MANAGER",
      permissions: "Wallet, Analytics, Reports",
      lastActive: "3 hours ago",
      status: "SUSPENDED",
    },
  ];
};
