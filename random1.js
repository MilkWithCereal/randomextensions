class balls {
  getInfo() {
    return {
      id: 'balls',
      name: 'man',
      blocks: [
        {
          opcode: 'death',
          blockType: Scratch.BlockType.HAT,
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
