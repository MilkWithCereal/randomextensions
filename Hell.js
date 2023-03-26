class random1 {
  getInfo() {
    return {
      id: '1',
      name: 'Create Window',
      blocks: [
        {
          opcode: 'block1',
          blockType: Scratch.BlockType.COMMAND,
          text: ''
        }
      ]
    };
  }

  hello() {
    return 'parent.document.body.style.backgroundColor = "lightblue"';
  }
}

Scratch.extensions.register(new random1());
