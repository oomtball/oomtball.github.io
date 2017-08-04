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
var rand = function(num) {
    return Math.floor(Math.random() * num);
}

window.onload = function() {
    var game = new Core(1000, 500);
    game.fps = 24;
    game.score = 0;
    var bullet = 5;
    setInterval(function(){bullet++;bulletLabel.text = "Bullet : " + bullet;}, 1200);
    //score board
    scoreLabel = new Label("Score : " + game.score);
    scoreLabel.x = 5;
    scoreLabel.y = 5;
    scoreLabel.color = "white";
    game.rootScene.addChild(scoreLabel);
    //score board
    //bullet board
    bulletLabel = new Label("Bullet : " + bullet);
    bulletLabel.x = 5;
    bulletLabel.y = 30;
    bulletLabel.color = "white";
    game.rootScene.addChild(bulletLabel);
    //bullet board
    game.preload("enchant.js-builds-0.8.3-b/images/chara1.png");
    game.preload("enchant.js-builds-0.8.3-b/images/icon0.png");
    game.preload("enchant.js-builds-0.8.3-b/images/chara2.png");
    game.onload = function() {
        game.rootScene.backgroundColor = 'black';
        //bear
        var Bear = enchant.Class.create(enchant.Sprite, {
            initialize: function() {
                enchant.Sprite.call(this, 32, 32);
                this.image = game.assets["enchant.js-builds-0.8.3-b/images/chara1.png"];
                this.x = 0;
                this.y = 400;
                this.frame = 5;
                game.rootScene.addChild(this);

                var right = true;
                var left = false;
                var jump = false;
                var jump2 = false;
                this.addEventListener(enchant.Event.ENTER_FRAME, function() {
                    if (game.input.right) {
                        if (left == true) {
                            this.tl.scaleTo(1, 1, 1);
                            left = false;
                        }
                        right = true;
                        this.x += 5;
                        this.frame = this.age % 2 + 6;
                    }
                    if (game.input.left) {
                        if (right == true) {
                            this.tl.scaleTo(-1, 1, 1);
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
            }
        });
        //bear
        //punch
        var Apple = enchant.Class.create(enchant.Sprite, {
            initialize: function() {
                enchant.Sprite.call(this, 16, 16);
                this.image = game.assets['enchant.js-builds-0.8.3-b/images/icon0.png']; // set image
                this.moveTo(bear.x + 30, bear.y + 8); // move to the position
                this.frame = 15; // set image data
                game.rootScene.addChild(this); // add to canvas
                if (true) {
                    if (bear.x < 500)
                        this.tl.moveBy(1100, 0, 50);
                    else
                    {
                        this.tl.moveBy(50, 0, 10);
                        this.tl.moveBy(-1200, 0, 10);
                    }
                }
                this.addEventListener('enterframe', function() {
                    if (this.x > 1000 || this.x < 1){
                        game.rootScene.removeChild(this);
                }
                })
            }
        });
        //enemy
        var Enemy = enchant.Class.create(enchant.Sprite, {
            initialize: function() {
                enchant.Sprite.call(this, 32, 32);
                this.image = game.assets["enchant.js-builds-0.8.3-b/images/chara2.png"];
                this.frame = 5;
                this.y = 400 - rand(120);
                this.x = 1000;
                this.speed = 10 - rand(9);
                this.addEventListener('enterframe', function() {
                    this.x -= this.speed;
                    if (this.x < 0) {
                        game.rootScene.removeChild(this);
                        game.end();
                    }
                })
                game.rootScene.addChild(this); // canvas
            }
        });

        var Enemy2 = enchant.Class.create(enchant.Sprite, {
            initialize: function() {
                enchant.Sprite.call(this, 32, 32);
                this.image = game.assets["enchant.js-builds-0.8.3-b/images/chara2.png"];
                this.frame = 5;
                this.y = rand(100);
                this.x = 1000;
                this.speed = 5;
                this.addEventListener('enterframe', function() {
                    this.x -= this.speed;
                    this.tl.moveBy(0, 300, 50).moveBy(0, -300, 50); 
                    if (this.x < 0) {
                        game.rootScene.removeChild(this);
                        game.end();
                    }
                })
                game.rootScene.addChild(this); // canvas
            }
        });

        var bear = new Bear();
        game.rootScene.tl.then(function(){
            var enemy = new Enemy();
        }).delay(30).loop();
        game.rootScene.tl.then(function(){
            var enemy2 = new Enemy2();
        }).delay(30).loop();

        game.rootScene.on('touchstart', function(evt) {
            if (bullet > 0) {
                bullet -= 1;
                var apple = new Apple();
                bulletLabel.text = "Bullet : " + bullet;
            }
        });

        game.rootScene.on('enterframe', function() {
            var hits = Apple.intersect(Enemy);
            for (var i = 0, len = hits.length; i < len; i++) {
                game.rootScene.removeChild(hits[i][0]);
                game.rootScene.removeChild(hits[i][1]);
                game.score++;
                scoreLabel.text = "Score : " + game.score;
            }
            var hits2 = Bear.intersect(Enemy);
            for (var i = 0, len = hits2.length; i < len; i++) {
                game.rootScene.removeChild(hits2[i][0]);
                game.rootScene.removeChild(hits2[i][1]);
                game.end();
            }
            var hits3 = Apple.intersect(Enemy2);
            for (var i = 0, len = hits3.length; i < len; i++) {
                game.rootScene.removeChild(hits3[i][0]);
                game.rootScene.removeChild(hits3[i][1]);
                game.score++;
                scoreLabel.text = "Score : " + game.score;
            }
        });
    };
    game.start();
};