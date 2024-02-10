function getCardNames() {
	return [
		"Adam-III.png",
		"Adam-II.png",
		"Adam.png",
		"Add-lotion-to-my-shopping-list.png",
		"Anneka-III.png",
		"Anneka-II.png",
		"Anneka.png",
		"Becky-III.png",
		"Becky-II.png",
		"Becky.png",
		"Bennett-III.png",
		"Bennett-II.png",
		"Bennett.png",
		"Berat-III.png",
		"Berat-II.png",
		"Berat.png",
		"Brent's-Socket-Knife.png",
		":brown_bottle:-:steve:.png",
		"Camera-Monster.png",
		"Chaiyo's-30-*.png",
		"Chris-III.png",
		"Chris-II.png",
		"Chris.png",
		"Claw-Culture.png",
		"cringe-repost-alert-modCheck.png",
		"Cru's-Day-Tuesday.png",
		"Danielle-III.png",
		"Danielle-II.png",
		"Danielle.png",
		"Deputy-Mike.png",
		"Ellis-III.png",
		"Ellis-II.png",
		"Ellis.png",
		"Ellis's-Spicy-Ramen.png",
		"Fathead-Chris.png",
		"Flop.png",
		"#-free-speech.png",
		"#-garbage-memes.png",
		"#-general.png",
		"Hannah-B-III.png",
		"Hannah-B-II.png",
		"Hannah-B.png",
		"Hannah-H-III.png",
		"Hannah-H-II.png",
		"Hannah-H.png",
		"Hardest-Watest.png",
		"Hayden-III.png",
		"Hayden-II.png",
		"Hayden.png",
		"Homie-Hangout.png",
		"I-Burn.png",
		"🔊-JoinMe.png",
		"Kelsey-III.png",
		"Kelsey-II.png",
		"Kelsey.png",
		"Lightning-McQueen-Crocs.png",
		"Looking-Twice.png",
		"Micah-III.png",
		"Micah-II.png",
		"Micah.png",
		"Monday-Night-Gaming.png",
		"Night-Gone-Wrong.png",
		"Overproof-Rum.png",
		"Parker-III.png",
		"Parker-II.png",
		"Parker.png",
		"🔊-Parker'sCoolCall.png",
		"Parkers-Game-Bag.png",
		"Park-Rangers.png",
		"#-pedantic-arguments.png",
		"#-pogtatious-blog-posting.png",
		"Premarital-Pranks.png",
		"Puffer.png",
		"Puffer-Santa.png",
		"#-quiztime.png",
		"Rats,-Rats,-We-are-the-Rats.png",
		"Right-Here.png",
		"Sippin'-Swap.png",
		"Taser-Shoes.png",
		"🔊-Team-Berat-Pog.png",
		"This-is-my-Favorite-Flavor.png",
		"Thomas-III.png",
		"Thomas-II.png",
		"Thomas.png",
		"Tiffany-III.png",
		"Tiffany-II.png",
		"Tiffany.png",
		"#-voice-chat.png",
		"Water-Wednesday.png",
		"Whiskey-This.png",
		"Whiskey-Thursday.png"
	]
}

function getCards() {
	let cardnames = getCardNames()
	let cards = []
	for(let name of cardnames) {
		cards.push(loadImage("/cards/" + encodeURIComponent(name)));
	}
	return cards
}
