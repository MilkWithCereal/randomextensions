class random1 {
  getInfo() {
    return {
      id: 'milk1',
      name: 'Create Window',
      blocks: [
        {
          opcode: 'block1',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Cock and ball torture'
        }
      ]
    };
  }

  block1() {
    return 'From the Wikipedia, The free encyclopedia.;
  }
}

Scratch.extensions.register(new random1());
