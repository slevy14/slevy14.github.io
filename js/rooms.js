var rooms = {
    // START PATH
    "start" : {
        "description" : "You awake in an ominous forest. Just like, ominous vibes. NOT chill. You're surrounded by trees on all sides, except for dark path <b>forward</b>.",
        "directions"  : {
            "forward" : "dark-path",    
        },
        "npcs" : {
            
        },
        "items" : {
            
        }
    },
    "dark-path" : {
        "description" : "As you walk along the dark path, you notice a faint glow in the distance. <b>Forward</b> still seems to be the only way to go. There is a <b>mushroom</b> on the ground.",
        "directions"  : {
            "forward" : "rune-ruins",
        },
        "items" : {
            "mushroom" : {
                "name" : "mushroom",
                "examination" : "it\'s a mushroom."
            }
        },
        "npcs" : {
            
        }
    },
    "rune-ruins" : {
        "description" : "You approach a clearing in the forest. At its center sits a ruined stone structure; at its heart is a <b>crystal</b> emmitting a shimmering blue halo and illuminating the four stone pillars that surround it. A voice enters your thoughts, suggesting that you <b>talk</b> to the <b>crystal</b>. How ominous.",
        "directions"  : {
            "north" : "laboratory",
            "east"  : "cabin",
            "south" : "woodland-theater",
            "west"  : "bridge"
        },
        "items" : {
            
        },
        "npcs" : {
            "crystal" : "You get closer to the crystal. As you take each step forward, it begins to spin faster and faster, glowing brighter and brighter. After being temporarily stunned by the light, you reopen your eyes to a glowing blue expanse, nothing as far as the eye can see. A voice speaks to you, the same as before, but now coming from all around you.<br><br>\"hey,\" it says \"glad someone finally found me. i'm sammy, the guy who's website you're on. a wizard trapped me here years ago for eating his mango. it was his fault for leaving it out in the first place, but that's beside the point.\" <br><br> The voices surrounding you begin to converge to a single point, and the light manifests into the rough outline of someone you think you've met before. \"anyways, he said the only way that i could be freed was by someone who truly knew me. obviously, not a lot of people come wandering into an ominous forest, so it's up to you to break the curse. i need you to find the four relics of my life that were scattered throughout the ominous forest and bring them back here as an offering to the ruined runes of runelius. good luck!\"<br><br>With the final words, the light around you shrinks back to a point, and you find yourself back at the ruined runes.<br><br>The way you came from appears to have been closed off by the trees, but four other paths seem to have opened up. One to each direction: <b>north, south, east, west</b>. Ominously enough, the same number of paths as there are relics. Something to think about." 
        }
    },

    // LABORATORY PATH
    "laboratory" : {
        "description" : "Following the path to the north, you come across a large building. It seems out of place in an ominous forest, but hey, that makes it more ominous. Through large windows you can see into the recently polished entryway, as well as a peek into some of the <i>projects</i> inside. The door is open, you could easily go <b>through</b>. You can always also go <b>back</b>, if you'd like.",
        "directions"  : {
            "back"    : "rune-ruins",
            "through" : "lab-entrance"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "lab-entrance" : {
        "description" : "Stepping through the doorway, the fluorescent lights take you by surprise. As your eyes adjust, you notice a figure in a labcoat tinkering with an apparently damaged cluster of wires. A <b>scientist</b>, as it would seem.",
        "directions"  : {
            "left"  : "arcade",
            "right" : "experiments",
            "back"  : "laboratory"
        },
        "items" : {

        },
        "npcs" : {
            "scientist" : "You tap the scientist on the shoulder. Startled, he falls back into the cluster of wires. In the most cliche fashion, his skeleton is made visible by the electric shock. After an uncomfortable moment, a now spiky-haired scientist stands back up.<br><br>\"What a rush! I haven't felt a shock like that in ages!\" The shocked man shakes your hand, and you feel a jolt pass between your fingers. \"Incredible! I'll have to write this down for later. Were you sent here by that crystal? It's a shame what happened to him. Interesting data, though. Hypothesis: stealing Runelius's mango will get you turned into a crystal.\"<br><br>\"In any case, welcome to the laboratory! One of Sammy's relics can be found here, along with many of his projects. While you're here, you should check them out. Through that door to the <b>left</b> is the Arcade, where you can find some games he's made, and to the <b>right</b> is the Experimentation Wing, where you can find some of his other projects. Now if you'll excuse me, I have some top secret research to conduct. Oh, and if you come across a raccoon, tell them I <i>know</i> they cheated in catan last week and it <i>will</i> get ugly if they don't admit it. So long!\"<br><br>Hurriedly, the scientist returns to his pile of wires."
        }
    },
    "arcade" : {
        "description" : "You walk down the hallway to the left. The sounds of lasers, pinball machines, and the beep-boops of classic arcade machines flood your ears. Laughing children run past you from game to game as their annoyed parents try to keep up. A few games catch your eye, along with strange figures standing nearby:<br><br>An action-platformer with a <b>frog</b> leaning against the machine.<br>A text-based adventure (not this one, but how meta!) currently being played by a <b>kid</b> dressed as Harry Potter.<br>A roguelike with a <b>snake</b> wrapped around the joystick.<br>An out-of-order MMO being worked on by a creature that can only be described as looking something like <b>bigfoot</b>.<br><br>An overly-enthusiastic <b>employee</b> can be seen standing at a prize desk. You can also go <b>back</b> to the entrance.",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {
            "keyboard" : {
                "name" : "Keyboard of Legend (keyboard)",
                "examination" : "A <b>relic</b> recieved from visiting the lab. Go back if you want to play some games!"
            }

        },
        "npcs" : {
            "employee" : "\"HIYA THERE!\" shouts the overly-enthusiastic employee. \"Welcome to the arcade! We have lots of games for you to play, just talk to the people by the cabinets. You can go also <b>back</b> to the entrance if you want to visit the experimentation wing, but we'll miss ya! Oh, and you can get the relic, the <b>Keyboard</b> of Legend, here from me too!",
            "frog" : "You approach the frog. \"How's it going,\" he starts, \"the name's Claude. Despite my appearence, I'm actually a traveling musician. At least, I was, until my instruments were stolen. Come with me on a quest around the world to recover my stolen instruments in the demo for <a href=\"https://leafguy.itch.io/one-frog-band\" target=\"_blank\" rel=\"noopener noreferrer\">One Frog Band</a>, a game created by Sammy Levy, Max Cheng, Bryanna Hernandez, and Nick Novak! The game was made in Unity 2023 in a game design class, with a full Game Design Document alongside it.\"",
            "kid" : "\"Abra Kadabra!\" yells the kid as he turns around. \"At least, I think that's a spell. Anyways, <a href=\"https://slevy14.github.io/twine/youngwizards.html\" target=\"_blank\" rel=\"noopener noreferrer\">Young Wizards</a> is a game created by Sammy in the Twine engine that explores the experience of being a child on a playground. Short but sweet!\"",
            "snake" : "\"Howdy, pardner!\" the snake hisses as you approach, tipping her cowboy hat with her tail. \"I just finished a run of <a href=\"https://leafguy.itch.io/custom-snake-2019\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Snake</a>, a game that Sammy created in high school for an AP Computer Science class. It's an implementation of the classic Snake as a roguelike. Score big, get upgrades, get bigger scores, get bigger upgrades, and so on! Check it out!\"",
            "bigfoot" : "Yep, that's bigfoot. He approaches you with a stack of papers. \"Sorry, machine's out of order. <a href=\"https://slevy14.github.io/Inn_Conspicuous_GDD.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Inn Conspicuous</a> is an MMO created by Sammy and some friends in a software engineering course. While the game was never built beyond very early prototypes, the Game Design Document was largely completed. Give it a read if you want some behind-the-scenes info!",
        }
    },
    "experiments" : {
        "description" : "You walk down the hallway to the right. Stepping into even brighter fluorescent light, you see strange contraptions all around you. Various machines whir and click at seemingly random intervals. A <b>gnome</b> with safety goggles on presses a button, which causes something to blow up. You can also go <b>back</b> to the entrance.",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {

        },
        "npcs" : {
            "gnome" : "\"Ohoho, welcome to the experimentation wing!\" exclaims the gnome, excitedly shaking both of your hands at the same time. \"Sammy's big project here was the <a href=\"https://slevy14.github.io/mac250-screenshots.html\" target=\"_blank\" rel =\"noopener noreferrer\">MAC 250 AR Experience</a>, a mobile app built in unity that used Augmented Reality and Map Data to showcase digital art installations around his college campus. Click on the link for screenshots!\" The gnome scampers away, finding another button to press, causing another explosion.",
        }
    },

    // CABIN PATH
    "cabin" : {
        "description" : "You venture to the east. Through a gap in the trees, you notice a log cabin with smoke coming out of its chimney. A lantern casts a faint glow on the front porch through the window. If you go <b>forward</b>, you can investigate this ominous structure. You can always turn around and go <b>back</b>",
        "directions"  : {
            "back"    : "rune-ruins",
            "forward" : "cabin-porch"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "cabin-porch" : {
        "description" : "A comforting voice invites you into the cabin. Stepping onto the porch, you see a rustic looking table set with two cups of tea. A lumberjack waves to you and gestures to a chair opposite him. You can go <b>to table</b>, or turn around and go <b>back</b>",
        "directions"  : {
            "back"  : "cabin",
            "table" : "table",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "table" : {
        "description" : "The lumberjack greets you with a warm smile. You take a sip of the tea, experiencing a flavor palette unfamiliar to you. \"It's a custom blend,\" he starts, \"Sammy found it recently at a <a href=\"https://www.racertea.com/\" target=\"_blank\" rel=\"noopener noreferrer\">local tea shop.</a> Tastes like a banana nut muffin. Wild.\" The <b>lumberjack</b> takes a sip of his tea.",
        "directions"  : {
            "back"  : "cabin-porch",
            "couch" : "couch"
        },
        "items" : {

        },
        "npcs" : {
            "lumberjack" : "You introduce yourself to the lumberjack. \"Oh, I know who you are. Another relic seeker. Yep, got one here too. I'm an old friend of Sammy's. In fact, I know everything about him.\" His gaze turns to a photo hanging on the wall of Sammy with some friends in middle school. \"Good times. Y'know, he used to wear that goofy hat all the time. Glad he finally came around on that one, he has much cooler hats now.\"<br><br>The lumberjack takes another sip of his tea, burning his mouth just a little bit. \"Well, let's start with what you probably already know. Sammy is a Computer Science major at Occidental College in LA. He's also minoring in Education and Math, and is interested in pursuing game design and/or CS education. If you want to learn more about his game design endeavors, you should head over to the lab when you're done here.\"<br><br>He finishes his tea with a final loud sip, and continues. \"If you want the relic though, you'll have to learn a little bit more. Ever played two truths and a lie? Answer correctly, and you'll find yourself with another relic.\" He sets his mug down gently and moves to the <b>couch</b>",
        }
    },
    "couch" : {
        "description" : "\"Alright,\" the lumbejack says as he makes himself comfortable on the couch, \"here's how this is going to work. I'm going to give you 3 facts about Sammy, but one of them will be a lie. If you think you've spotted the lie, <b>go with</b> that answer. Ready? Which of these is a lie:<ul><li>He can solve a Rubik's <b>cube</b> in under a minute.</li><li>He drinks a lot of Mountain <b>Dew</b></li><li>He enjoys making logos and graphics in <b>Photoshop</b></li></ul> Remember to <b>go with</b> the <i>lie</i>\"",
        "directions"  : {
            "dew"       : "right-1",
            "cube"      : "wrong",
            "photoshop" : "wrong",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "right-1" : {
        "description" : "\"That's it! His record with the cube is about 38 seconds, and he's been working with photoshop for years. Mountain Dew, on the other hand, he finds unappealing.\" The lumberjack reaches for where a mug would be, but he realizes that he left it at the table and gives up. \"Next one:<ul><li>He's <b>rewatched</b> Parks and Rec many many times</li><li>He's a <b>cat</b> person</li><li>He's been doing <b>improv</b> for 10 years</li></ul> Remember to <b>go with</b> the <i>lie</i>\"",
        "directions"  : {
            "cat"       : "right-2",
            "rewatched" : "wrong",
            "improv"    : "wrong",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "right-2" : {
        "description" : "\"Right again! Parks and Rec has been a favorite since middle school, which is coincidentally around when he started doing improv too. He's actually a dog person, not a cat person.\" The lumberjack adjusts the pillow behind his back but is ultimately unable to find a comfortable position. He just sits there, slightly uncomfortable. \"Last one:<ul><li>His favorite <b>movie</b> is Fantastic Mr. Fox</li><li>He loves to <b>crochet</b></li><li>He plays <b>piano</b></li></ul> Remember to <b>go with</b> the <i>lie</i>\"",
        "directions"  : {
            "piano"   : "win-quiz",
            "movie"   : "wrong",
            "crochet" : "wrong",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "win-quiz" : {
        "description" : "\"You know him so well! Fantastic Mr. Fox is a classic, and he's been crocheting for a few years now. He played a tiiiiny bit of piano as a kid, but other hobbies took precedence.\" The lumberjack reaches into his pocket and pulls out a Rubik's <b>Cube</b>. \"The next relic. <b>Take</b> it, you earned it! Don't leave without it, but there's a shortcut <b>through</b> this door that takes you back to the Rune Ruins.\" The lumberjack shakes your hand, and gives you an approving nod.",
        "directions"  : {
            "through" : "rune-ruins"
        },
        "items" : {
            "cube" : {
                "name" : "The Spectral Cube (cube)",
                "examination" : "A <b>relic</b> recieved from visiting the cabin. Go back if you want to learn about Sammy!"
            }
        },
        "npcs" : {
            
        }
    },
    "wrong" : {
        "description" : "\"Oh, that one is actually true! Wanna give it another go?\" You can go <b>back</b> to try again.",
        "directions"  : {
            "couch" : "couch",
            "back"  : "couch",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },

    // THEATER PATH
    "woodland-theater" : {
        "description" : "You start down a winding path to the south. Enveloped in the sounds of nature, you meander along as raccoons, squirrels, mice, and bears scamper past you in the same direction. Soon, you stumble upon their destination: a cobblestone plaza, with a large fountain at its center. Wooland creatures converse on benches, stroll around the plaza, and share ice creams with one another. You watch as they trickle into a central building at the <b>west</b> side of the plaza, giggling and chattering excitedly as they enter. You can also go <b>back</b>.",
        "directions"  : {
            "back" : "rune-ruins",
            "west" : "theater-entrance"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "theater-entrance" : {
        "description" : "Comedy and tradgedy masks carved into large acorns hang above the door, informing you that this is the Woodland Theater. A board on the wall lists showtimes for movies such as \"Squirrels on a Plane\", \"Call Tree By Your Name\", and \"Forest Gump\". The <b>raccoon</b> at the ticketing booth calls for the next person in line. Hey, that's you! You can also turn around and go <b>back</b>.",
        "directions"  : {
            "back" : "woodland-theater",
            "west" : "theater-entrance",
            "through" : "lobby"
        },
        "items" : {

        },
        "npcs" : {
            "raccoon" : "\"Hey, youse there! Can I help youse?\" The disgruntled raccoon with a poker visor clicks around on a computer from the inside of the ticketing booth. From the frantic clicks and rapid typing on the keyboard, it's clear that the raccoon doesn't know how to use a computer. He slams his fist on the enter key and turns back to you. \"Ya here to see a show? Boy, you're in luck! I'll tell ya -- Sammy's been involved in the theater world for a while. He's been doing improv for years, and has recently been writing performing sketch comedy. The showings here are from his personal projects, you can watch them all inside. And who knows, maybe you'll pick up a relic along the way.\"<br>The raccoon hits another button on his keyboard, printing a ticket and handing it to you. \"This'll getcha into any of the shows inside. Come back often to see what's new!\"<br><br>\"Oh, and anotha thing,\" the raccoon says before you can head inside, \"If youse see a scientist around these woods, youse tell him that I *did not* cheat at Catan last week, sometimes ya just roll a lot of fours!\"<br><br>Ticket in hand, you can now go <b>through</b> the main doors",
        }
    },
    "lobby" : {
        "description" : "A concessions stand in the lobby sells pinecones for your enjoyment during the shows, but despite the many squirrels lined up, they don't seem all that appealing. You can <b>go to</b> the show's in any of these theaters:<ul><li><b>1</b>:  \"I Thought You Said\" (Filmed Performance, Writer, 2023)</li><li><b>2</b>:  \"Lost in the Library\" (Script, Writer, 2022)</li><li><b>3</b>:  \"Snow\" (Filmed Performance, Actor, 2023)</li></ul>",
        "directions"  : {
            "1" : "itys",
            "2" : "lil",
            "3" : "snow",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "itys" : {
        "description" : "<a href=\"https://www.youtube.com/watch?v=k-u8g8_H6pM\" target=\"_blank\" rel=\"noopener noreferrer\">\"I Thought You Said\"</a>, written by Sammy Levy, performed in 2023 by 2 Paws Up Sketch Comedy! Click the link to watch!<br><br>You also see a <b>pin</b> on the ground with the theater's acorn-mask logo on it. You can <b>take</b> it, go <b>forward</b> through the exit back to the plaza, or go <b>back</b> to see another show.",
        "directions"  : {
            "forward" : "woodland-theater",
            "back" : "lobby",
        },
        "items" : {
            "pin" : {
                "name" : "The Pin of Comedy and Tradgedy (pin)",
                "examination" : "A <b>relic</b> recieved from visiting the theater. Go back if you want to watch some sketches!"
            }
        },
        "npcs" : {
            
        }
    },
    "lil" : {
        "description" : "<a href=\"https://slevy14.github.io/lost_in_the_library.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">\"Lost in the Library\"</a>, written by Sammy Levy, performed (not filmed) in 2022 by 2 Paws Up Sketch Comedy! Click the link to read the script.<br><br>You also see a <b>pin</b> on the ground with the theater's acorn-mask logo on it. You can <b>take</b> it, go <b>forward</b> through the exit back to the plaza, or go <b>back</b> to see another show.",
        "directions"  : {
            "forward" : "woodland-theater",
            "back" : "lobby",
        },
        "items" : {
            "pin" : {
                "name" : "The Pin of Comedy and Tradgedy (pin)",
                "examination" : "A <b>relic</b> recieved from visiting the theater. Go back if you want to watch some sketches!"
            }
        },
        "npcs" : {
            
        }
    },
    "snow" : {
        "description" : "<a href=\"https://www.youtube.com/watch?v=Dl6sYwfsPhM\" target=\"_blank\" rel=\"noopener noreferrer\">\"Snow\"</a>, written by Sarah Williams, performed in 2023 by Sammy Levy with 2 Paws Up Sketch Comedy! Click the link to watch!<br><br>You also see a <b>pin</b> on the ground with the theater's acorn-mask logo on it. You can <b>take</b> it, go <b>forward</b> through the exit back to the plaza, or go <b>back</b> to see another show.",
        "directions"  : {
            "forward" : "woodland-theater",
            "back" : "lobby",
        },
        "items" : {
            "pin" : {
                "name" : "The Pin of Comedy and Tradgedy (pin)",
                "examination" : "A <b>relic</b> recieved from visiting the theater. Go back if you want to watch some sketches!"
            }
        },
        "npcs" : {
            
        }
    },

    // BRIDGE PATH
    "bridge" : {
        "description" : "To the west you hear the babbling of a brook. The dirt beneath your feet turns to mud, and soon turns into a constructed stone path as ground around it becomes submerged. The only way <b>forward</b> is across an ominously placed stone bridge. You can also always go <b>back</b>.",
        "directions"  : {
            "back" : "rune-ruins",
            "forward" : "on-the-bridge"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "on-the-bridge" : {
        "description" : "\"HALT!\" Cries a very professional voice as you reach the exact midpoint of the bridge. Confused, you look around to discover the source of the voice to have come from below the bridge. The bridge begins to shake, and, as you stabilize yourself, an eight-foot tall man with green skin in a suit and tie rises from the brook. \"As the Troll of Business, it is my duty to guard these woods from anyone unprofessional.\" He shudders at the word \'unprofessional\'. The <b>Troll</b> of Business appears to be waiting for you to initate a profesional conversation. You can also always go <b>back</b>.",
        "directions"  : {
            "back" : "rune-ruins",
            "forward" : "across"
        },
        "items" : {
            "tome" : {
                "name" : "The Tome of Knowledge (tome)",
                "examination" : "A <b>relic</b> recieved from visiting the Troll of Business. <a href=\"https://slevy14.github.io/Resume_Current.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">View Sammy's resume here</a>!"
            }
        },
        "npcs" : {
            "troll" : "You initate a professional conversation with the Troll of Business by telling him <i>a little bit about yourself</i>. \"A pleasure to make your acquaintance,\" the troll starts, \"I bet you're thinking \'oh, he's going to make me answer his riddles three, isn't he\'? Well, I will have you know that not all trolls have riddles. No, though we all have different requirements to cross our bridges. As the Troll of Business, mine is simply a professional conversation. You would be surprised to see how many have failed, and you don't want to know what happens to those who fail.\"<br><br>The Troll of Business clears his throat, straightens his back, and opens his briefcase. \"In here is a relic: The <b>Tome</b> of Knowledge, also known as Sammy's Resume. I am a busy troll; I have no time for nonsense. Look at it, take it, and continue <b>forward</b> across my bridge. Good day.\" The business troll tosses his briefcase to you before curling back up under the brdige. How he fits under there without wrinkling his shirt remains a mystery.<br><br><a href=\"https://slevy14.github.io/Resume_Current.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">View Sammy's resume here,</a> and don't forget to <b>take the tome</b> as well before you go <b>forward</b>."
        }
    },
    "across" : {
        "description" : "Though you've crossed the bridge, you've somehow ended up on the side you started. Going <b>forward</b> will take you to the Rune Ruins, but so will going <b>back</b>. How ominous!",
        "directions"  : {
            "back" : "rune-ruins",
            "forward" : "rune-ruins"
        },
        "items" : {

        },
        "npcs" : {

        }
    },

    // ENDING
    "ending" : {
        "description" : "You place the four relics in each of the cardinal directions surrounding the crystal at perfect 90 degree increments. As you precisely place the final relic, the whole forest goes ominously silent. A moment passes, but it feels like years.<br><br>A high pitched noise begins to eminate from the crystal. It grows louder, glows brighter, spins faster. Suddenly, in a burst of light and a deafening crack, all falls silent again. A figure stands before you, roughly 5\'11\" and dressed like he's planning to go the beach later, but not just yet. He holds a half-eaten mango.<br><br>\"Oh, cool!\" The beachy-looking guy exclaims. \"Wasn't sure I'd ever make it out of there. Want a bite of magic mango?\" A wizard trapped him in a crystal for it, but he's still determined to eat this mango. But hey, at least he's willing to share. You take a bite from the mango. It is the tastiest, juiciest, magical-est mango you've ever tasted. Overwhelmed by glorious mango flavor, you don't notice the flash of light behind you as Runelius appears! Before the wizard has a chance to turn <i>you</i> into a crystal with a magic blast, Sammy takes the mango out of your hand and throws it at Runelius, knocking him off balance. The wizard's blast narrowly misses your head, bouncing off each of the pillars of the rune ruins before sealing his fate: hitting himself square in the forehead, forever rendering Runelius a floating crystal.<br><br>Sammy knows the way out of the forest, and the two of you walk out together to get brunch, instantly best friends.<br><br>Congratulations! You have made it out of the ominous forest! Your score was a perfect 1.2847x10^17! <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">Click here</a> to go back to the home page.",
        "directions"  : {
            "back" : "rune-ruins",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
}




// var old_rooms = {
//     "start" : {
//         "description" : "You are on a beach. You see a wooden shack to the <b>north</b> and a cliff to the <b>south</b>.",
//         "directions"  : {
//             "north" : "shack-outside",
//             "south" : "cliff"        
//         }
//     },
//     "shack-outside" : {
//         "description" : "You approach the weathered wooden shack. Some of the wood has begun to rot, but it seems functional. The rusty doorknob has a keyhole, but it seems to be <b>locked</b> The rest of the beach is to the <b>south</b>.",
//         "directions"  : {
//             "south" : "start"
//         }
//     },
//     "cliff" : {
//         "description" : "You arrive at a towering rocky cliff, with seemingly no way to reach the top. To the <b>north</b> is the rest of the beach, and to the <b>west</b> is the ocean",
//         "directions"  : {
//             "north" : "start",
//             "west"  : "ocean"
//         }
//     },
//     "ocean" : {
//         "description" : "You stare out at the ocean. It <b>stares</b> back at you. To the <b>east</b> are the cliffs, and to the <b>north</b> is the rest of the beach.",
//         "directions"  : {
//             "east"  : "cliff",
//             "north" : "start",
//         }
//     }
// }