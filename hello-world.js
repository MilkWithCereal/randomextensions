class random1 {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'block1',
          blockType: Scratch.BlockType.HAT,
          text: ''
        }
      ]
    };
  }

  hello() {
    return 'const myWindow = window.open("", "", "width=200, height=100"); myWindow.focus();';
  }
}

Scratch.extensions.register(new random1());
