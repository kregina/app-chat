export const colors = ['#f44437', '#2296f3', '#4daf50', '#ff9800', '#9b27b0', '#FFA07A'];
export const userColors: { [key: string]: string } = {};

export const assignColorToUser = (userId: number) => {
  if (!userColors[userId]) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    userColors[userId] = color;
  }
  return userColors[userId];
};
