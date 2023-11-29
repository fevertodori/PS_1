
// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {

    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
         this.add.image(D_WIDTH/2, D_HEIGHT/2, 'background');
        // taroの画像を物理演算を持った画像にする
        const taro = this.physics.add.image(D_WIDTH/3, D_HEIGHT*4/5, 'taro');
        this.taro = taro
        this.taro.angle = 0

        this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
    }
    
    //   毎フレーム実行される繰り返し処理
    update(time, delta) {
         // 回転角度を更新
         this.taro.angle += 5;

        // this.taro.setVelocityX(200);
        // this.taro.setVelocityY(-200);
   }
}