class balls {
  getInfo() {
    return {
      id: 'balls',
      name: 'It works!',
      blocks: [
        {
          opcode: 'death',
          blockType: Scratch.BlockType.REPORTER,
          text: 'No'
        }
      ]
    };
  }

  death() {
    return 'Fuck you.';
  }
}

Scratch.extensions.register(new balls());
