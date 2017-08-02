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

enchant(); //the magic words that start enchant.js
window.onload = function() {
    game = new Game();
    game.onload = function() { //Prepares the game
        hello = new Label("Hello,Bear"); //Create a new label with the words "Hello,Bear"
        hello.x = 10; //Place the label 10 pixels to the right (0 will always be the left border)
        hello.y = 100; //Place the label 150 pixels from the top (0 will always be the top border)
        game.rootScene.addChild(hello); //Show the label on the active screen
    }
    game.start(); //Begin the game
}
