import { defineCommand } from '@jujulego/jill';

// Command
export default defineCommand({
  command: 'hello',
  handler: () => {
    console.log('Hello world!')
  }
});
