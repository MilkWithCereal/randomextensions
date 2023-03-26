class random1 {
  getInfo() {
    return {
      id: '1',
      name: 'Create Window',
      color1: '#ff0000', // pure red
      color2: '#00ff00', // pure green
      color3: '#0000ff',
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
