import { TaskBoardPage } from './app.po';

describe('task-board App', () => {
  let page: TaskBoardPage;

  beforeEach(() => {
    page = new TaskBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
