$('#goButton').click(function() {
    $('html,body').animate({ scrollTop: $('#menu').offset().top }, 800);
});
$('.tag1').click(function() {
    $('html,body').animate({ scrollTop: $('.intro1').offset().top }, 800);
});
$('.tag2').click(function() {
    $('html,body').animate({ scrollTop: $('#experience').offset().top }, 800);
});
$('.tag3').click(function() {
    $('html,body').animate({ scrollTop: $('#contact').offset().top }, 800);
});

function changePic() {
    document.getElementById('pic1').src = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/13781871_1048455328525666_8370355559479960474_n.jpg?oh=53f4e5e4c59cac59775e352cdfe8229f&oe=5A03FB78"
}

function changePicBack() {
    document.getElementById('pic1').src = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/16195802_1213495102021687_1668290208568003440_n.jpg?oh=2e6d940c3226056b6164d95203fcabae&oe=59F660D9"
}

function changePic2() {
    document.getElementById('pic2').src = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/19665578_1374474032590459_6883774096802214640_n.jpg?oh=03680cf2eed0b47b4d278b76436b6c21&oe=59FD2B69"
}

function changePicBack2() {
    document.getElementById('pic2').src = "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/14332956_1088203374550861_7434399787886402661_n.jpg?oh=af67cc4f5dc5c581f5fcabb200f1c652&oe=5A30F902"
}

//game part

enchant();
var rand = function(num){
    return Math.floor(Math.random() * num);
}
var enemy = enchant.Class.create(enchant.Sprite, {
    initialize:function(){
        enchant.Sprite.call(this, 16, 16);
        this.image = game.assets["enchant.js-builds-0.8.3-b/images/chara2.png"];
        this.frame = 64;
        this.y = rand(320);
        this.x = 1005;
        this.speed = rand(3);

        this.addEventListener('enterframe', function(){
            this.x -= this.speed;
            if (this.x < 0){
                this.remove();
                game.end(game.score, "Your Score Is : " + game.score);
            }
        })
        game.rootScene.addChild(this);
    },
    remove:function(){
        game.rootScene.removeChild(this);
    }
})
window.onload = function() {
    var game = new Core(1000, 500);
    game.fps = 24;
    game.score = 0;
    scoreLabel = new Label("Score : " + game.score);
    scoreLabel.x = 5;
    scoreLabel.y = 5;
    scoreLabel.color = "white";
    game.rootScene.addChild(scoreLabel);
    game.preload("enchant.js-builds-0.8.3-b/images/chara1.png");
    game.onload = function() {
        bear = new Sprite(32, 32);
        bear.image = game.assets["enchant.js-builds-0.8.3-b/images/chara1.png"];
        bear.x = 0;
        bear.y = 400;
        bear.frame = 5;
        game.rootScene.addChild(bear);
        game.rootScene.backgroundColor = 'black';
        var right = true;
        var left = false;
        var jump = false;
        var jump2 = false;
        bear.addEventListener(enchant.Event.ENTER_FRAME, function() {
            if (game.input.right) {
                if (left == true) {
                    bear.rotate(180);
                    left = false;
                }
                right = true;
                this.x += 5;
                this.frame = this.age % 2 + 6;
            }
            if (game.input.left) {
                if (right == true) {
                    bear.rotate(180);
                    right = false;
                }
                left = true;
                this.x -= 5;
                this.frame = this.age % 2 + 6;
            }
            if (game.input.up && jump == false) {
                jump = true;
                jump2 = true;
            }
            if (jump2 == true) {
                jump2 = false;
                this.tl.moveBy(0, -100, 5).moveBy(0, -40, 6).moveBy(0, 40, 6).moveBy(0, 100, 5);

                function change() {
                    jump = false;
                }
                var timeoutID = setTimeout(change, 850);
            }
            if (this.x > 1000)
                this.x = 0;
            else if (this.x < 0)
                this.x = 999;
        });
        bear.addEventListener("touchstart", function() {
            game.rootScene.removeChild(bear);
        });
    };
    game.start();
};