setGame("1200x600");
game.folder = "assets", "Items", "Fruits", "Main_Characters", "Virtual_Guy";
//file gambar yang dipakai dalam game
var gambar = {
	logo:"logo.png",
	startBtn:"tombolStart.png",
	cover:"cover.jpg",
	pilihKarakter:"Background/Pilih_Hero.png",
	playBtn:"btn-play.png",
	maxBtn:"maxBtn.png",
	minBtn:"minBtn.png",
	tileset:"Terrain.png",
	bg:"Blue.png",
	// characters
	NF:"Main_Characters/Ninja_Frog/NF.png",
	NFidle:"Main_Characters/Ninja_Frog/NFIdle.png",
	NFrun:"Main_Characters/Ninja_Frog/NFRun.png",
	NFjump:"Main_Characters/Ninja_Frog/NFJump.png",
	NFfall:"Main_Characters/Ninja_Frog/NFFall.png",
	NFhit:"Main_Characters/Ninja_Frog/NFHit.png",
	VG:"Main_Characters/Virtual_Guy/VG.png",
	VGidle:"Main_Characters/Virtual_Guy/VGIdle.png",
	VGrun:"Main_Characters/Virtual_Guy/VGRun.png",
	VGjump:"Main_Characters/Virtual_Guy/VGJump.png",
	VGfall:"Main_Characters/Virtual_Guy/VGFall.png",
	VGhit:"Main_Characters/Virtual_Guy/VGHit.png",
	PM:"Main_Characters/Pink_Man/PM.png",
	PMidle:"Main_Characters/Pink_Man/PMIdle.png",
	PMrun:"Main_Characters/Pink_Man/PMRun.png",
	PMjump:"Main_Characters/Pink_Man/PMJump.png",
	PMfall:"Main_Characters/Pink_Man/PMFall.png",
	PMhit:"Main_Characters/Pink_Man/PMHit.png",
	MD:"Main_Characters/Mask_Dude/MD.png",
	MDidle:"Main_Characters/Mask_Dude/MDIdle.png",
	MDrun:"Main_Characters/Mask_Dude/MDRun.png",
	MDjump:"Main_Characters/Mask_Dude/MDJump.png",
	MDfall:"Main_Characters/Mask_Dude/MDFall.png",
	MDhit:"Main_Characters/Mask_Dude/MDHit.png",

	// items
	item1:"Items/Fruits/Strawberry.png",
	item2:"Kiwi.png",
	trophy:"Trophy.png",
	// musuh
	mushroomIdle:"Idle_Enemy.png",
	mushroomRun:"Run_Enemy.png",
	mushroomHit:"Hit_Enemy.png"
}
//file suara yang dipakai dalam game
var suara = {
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen(){	
	hapusLayar("#87CEFA");
	tampilkanGambar(dataGambar.logo, 600, 250);
	var startBtn = tombol(dataGambar.startBtn, 600, 350);
	if (tekan(startBtn)){
		jalankan(halamanCover);
	}
	resizeBtn(1150,50);
}
function halamanCover(){
	hapusLayar("#67d2d6");
	gambarFull(dataGambar.cover);
	var playBtn = tombol(dataGambar.playBtn, 1100, 500);
	if (tekan(playBtn)){
		jalankan(pilihHero);
	}	
	resizeBtn(1150,50);
}
let chossen_char;
function pilihHero(){
	hapusLayar("#000000");
	gambarFull(dataGambar.pilihKarakter);
	var NF = tombol(dataGambar.NF,380, 300);
	var VG = tombol(dataGambar.VG,550, 300);
	var PM = tombol(dataGambar.PM,720, 300);
	var MD = tombol(dataGambar.MD,880, 300);
	if (tekan(NF)){
		chossen_char = "NF";
		setAwal(dataGambar.NFidle, dataGambar.NFjump, dataGambar.NFrun, dataGambar.NFfall, dataGambar.NFhit);
		jalankan(gameLoop);
	}
	if (tekan(VG)){
		chossen_char = "VG";
		setAwal(dataGambar.VGidle, dataGambar.VGjump, dataGambar.VGrun, dataGambar.VGfall, dataGambar.VGhit);
		jalankan(gameLoop);
	}
	if (tekan(PM)){
		chossen_char = "PM";
		setAwal(dataGambar.PMidle, dataGambar.PMjump, dataGambar.PMrun, dataGambar.PMfall, dataGambar.PMhit);
		jalankan(gameLoop);
	}
	if (tekan(MD)){
		chossen_char = "MD";
		setAwal(dataGambar.MDidle, dataGambar.MDjump, dataGambar.MDrun, dataGambar.MDfall, dataGambar.MDhit);
		jalankan(gameLoop);
	}
	resizeBtn(1150,50);
}

function setAwal(charIdle, charJump, charRun,charFall,charHit){
	game.hero = setSprite(charIdle, 32, 32);
	game.skalaSprite = 2;
	game.hero.animDiam = charIdle;
	game.hero.animLompat = charJump;
	game.hero.animJalan = charRun;
	game.hero.animJatuh = charFall;
	game.hero.animMati = charHit;
	setPlatform(this["map_"+game.level], dataGambar.tileset, 32, game.hero);
	game.gameOver = ulangiPermainan;
	// set item
	setPlatformItem(1, dataGambar.item1);
	setPlatformItem(2, dataGambar.item2);
	// set musuh
	var mushroom = {};
	mushroom.animDiam = dataGambar.mushroomIdle;
	mushroom.animJalan = dataGambar.mushroomRun;
	mushroom.animMati = dataGambar.mushroomHit;
	setPlatformEnemy(1, mushroom,);
	// trigger
	setPlatformTrigger(1, dataGambar.trophy);
	
}

function ulangiPermainan(){
	game.aktif = true;
	switch (chossen_char) {
		case "VG":
			setAwal(dataGambar.VGidle, dataGambar.VGjump, dataGambar.VGrun, dataGambar.VGfall, dataGambar.VGhit);
			break;
		case "NF":
			setAwal(dataGambar.NFidle, dataGambar.NFjump, dataGambar.NFrun, dataGambar.NFfall, dataGambar.NFhit);
			break;
		case "PM":
			setAwal(dataGambar.PMidle, dataGambar.PMjump, dataGambar.PMrun, dataGambar.PMfall, dataGambar.PMhit);
			break;
		case "MD":
			setAwal(dataGambar.MDidle, dataGambar.MDjump, dataGambar.MDrun, dataGambar.MDfall, dataGambar.MDhit);
			break;
	}
	
	jalankan(gameLoop);
	game.score = 0;
}

function gameLoop(){
	hapusLayar();
	if (game.kanan){
		gerakLevel(game.hero, 3, 0);
	}else if (game.kiri){
		gerakLevel(game.hero, -3, 0);
	}
	if (game.atas){
		gerakLevel(game.hero, 0, -10);
	}
	latar(dataGambar.bg, 0, 0.5);
	buatLevel();
	cekItem();
	teks(game.score, 40, 60, "Calibri-bold-20pt-left-biru");
	resizeBtn(1150,50);
}

function cekItem(){
	if (game.itemID > 0){
		tambahScore(5);
		game.itemID = 0;
	}
	if (game.musuhID != 0){
		tambahScore(25);
		game.musuhID = 0;
	}
	if (game.triggerID == 1){
		game.triggerID = 0;
		game.aktif = false;
		game.level++;
		setTimeout(ulangiPermainan);
	}
}
