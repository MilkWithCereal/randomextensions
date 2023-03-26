class MilkTools {
  getInfo() {
    return {
      id: 'milktools',
      name: 'Milk',
      blocks: [
        {
          opcode: 'open',
          blockType: Scratch.BlockType.COMMAND,
          text: 'New Window'
        }
      ]
    };
  }

  open() {
    return 'myWindow = window.open('', '', 'width=400, height=400');';
  }
}

Scratch.extensions.register(new MilkTools());
