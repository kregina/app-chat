import { assignColorToUser, colors, userColors } from './assignColorToUser';

describe('assignColorToUser', () => {
  beforeEach(() => {
    for (const user in userColors) {
      delete userColors[user];
    }
  });

  it('assigns a color to a user', () => {
    const userId = 1;
    const color = assignColorToUser(userId);
    expect(color).toBeDefined();
    expect(colors).toContain(color);
  });
});
