import Ember from 'ember';
import PIXI from 'pixi';
import PixiCanvas from 'ember-cli-pixijs/components/pixi-canvas';

export default PixiCanvas.extend({
  draw() {
    const renderer = this.get('pixiRenderer');
    const stage = new PIXI.Container();

    const graphics = new PIXI.Graphics();

    graphics.beginFill(0xFF3300);
    graphics.lineStyle(10, 0xFFD900, 1);

    graphics.moveTo(50, 50);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(250, 220);
    graphics.lineTo(50, 220);
    graphics.lineTo(50, 50);
    graphics.endFill();

    stage.addChild(graphics);

    renderer.render(stage);
  }
});
