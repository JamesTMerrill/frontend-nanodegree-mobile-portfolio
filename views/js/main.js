var pizzaIngredients={meats:"Pepperoni;Sausage;Fennel Sausage;Spicy Sausage;Chicken;BBQ Chicken;Chorizo;Chicken Andouille;Salami;Tofu;Bacon;Canadian Bacon;Proscuitto;Italian Sausage;Ground Beef;Anchovies;Turkey;Ham;Venison;Lamb;Duck;Soylent Green;Carne Asada;Soppressata Picante;Coppa;Pancetta;Bresola;Lox;Guanciale;Chili;Beef Jerky;Pastrami;Kielbasa;Scallops;Filet Mignon".split(";"),nonMeats:"White Onions;Red Onions;Sauteed Onions;Green Peppers;Red Peppers;Banana Peppers;Ghost Peppers;Habanero Peppers;Jalapeno Peppers;Stuffed Peppers;Spinach;Tomatoes;Pineapple;Pear Slices;Apple Slices;Mushrooms;Arugula;Basil;Fennel;Rosemary;Cilantro;Avocado;Guacamole;Salsa;Swiss Chard;Kale;Sun Dried Tomatoes;Walnuts;Artichoke;Asparagus;Caramelized Onions;Mango;Garlic;Olives;Cauliflower;Polenta;Fried Egg;Zucchini;Hummus".split(";"),
cheeses:"American Cheese;Swiss Cheese;Goat Cheese;Mozzarella Cheese;Parmesean Cheese;Velveeta Cheese;Gouda Cheese;Muenster Cheese;Applewood Cheese;Asiago Cheese;Bleu Cheese;Boursin Cheese;Brie Cheese;Cheddar Cheese;Chevre Cheese;Havarti Cheese;Jack Cheese;Pepper Jack Cheese;Gruyere Cheese;Limberger Cheese;Manchego Cheese;Marscapone Cheese;Pecorino Cheese;Provolone Cheese;Queso Cheese;Roquefort Cheese;Romano Cheese;Ricotta Cheese;Smoked Gouda".split(";"),sauces:["Red Sauce","Marinara","BBQ Sauce",
"No Sauce","Hot Sauce"],crusts:["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"]};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};
function getAdj(a){switch(a){case "dark":return"dark morbid scary spooky gothic deviant creepy sadistic black dangerous dejected haunted morose tragic shattered broken sad melancholy somber dark gloomy homicidal murderous shady misty dusky ghostly shadowy demented cursed insane possessed grotesque obsessed".split(" ");case "color":return"blue green purple grey scarlet NeonGreen NeonBlue NeonPink HotPink pink black red maroon silver golden yellow orange mustard plum violet cerulean brown lavender violet magenta chestnut rosy copper crimson teal indigo navy azure periwinkle brassy verdigris veridian tan raspberry beige sandy ElectricBlue white champagne coral cyan".split(" ");
case "whimsical":return"whimsical silly drunken goofy funny weird strange odd playful clever boastful breakdancing hilarious conceited happy comical curious peculiar quaint quirky fancy wayward fickle yawning sleepy cockeyed dizzy dancing absurd laughing hairy smiling perplexed baffled cockamamie vulgar hoodwinked brainwashed".split(" ");case "shiny":return"sapphire opal silver gold platinum ruby emerald topaz diamond amethyst turquoise starlit moonlit bronze metal jade amber garnet obsidian onyx pearl copper sunlit brass brassy metallic".split(" ");
case "noisy":return"untuned loud soft shrieking melodious musical operatic symphonic dancing lyrical harmonic orchestral noisy dissonant rhythmic hissing singing crooning shouting screaming wailing crying howling yelling hollering caterwauling bawling bellowing roaring squealing beeping knocking tapping rapping humming scatting whispered whispering rasping buzzing whirring whistling whistled".split(" ");case "apocalyptic":return"nuclear apocalyptic desolate atomic zombie collapsed grim fallen collapsed cannibalistic radioactive toxic poisonous venomous disastrous grimy dirty undead bloodshot rusty glowing decaying rotten deadly plagued decimated rotting putrid decayed deserted acidic".split(" ");
case "insulting":return"stupid idiotic fat ugly hideous grotesque dull dumb lazy sluggish brainless slow gullible obtuse dense dim dazed ridiculous witless daft crazy vapid inane mundane hollow vacuous boring insipid tedious monotonous weird bizarre backward moronic ignorant scatterbrained forgetful careless lethargic insolent indolent loitering gross disgusting bland horrid unseemly revolting homely deformed disfigured offensive cowardly weak villainous fearful monstrous unattractive unpleasant nasty beastly snide horrible syncophantic unhelpful bootlicking".split(" ");
case "praise":return"beautiful intelligent smart genius ingenious gorgeous pretty witty angelic handsome graceful talented exquisite enchanting fascinating interesting divine alluring ravishing wonderful magnificient marvelous dazzling cute charming attractive nifty delightful superior amiable gentle heroic courageous valiant brave noble daring fearless gallant adventurous cool enthusiastic fierce awesome radical tubular fearsome majestic grand stunning".split(" ");case "scientific":return"scientific technical digital programming calculating formulating cyberpunk mechanical technological innovative brainy chemical quantum astro space theoretical atomic electronic gaseous investigative solar extinct galactic".split(" ");
default:return"scientific technical digital programming calculating formulating cyberpunk mechanical technological innovative brainy chemical quantum astro space theoretical atomic electronic gaseous investigative solar extinct galactic".split(" ")}}
function getNoun(a){switch(a){case "animals":return"flamingo hedgehog owl elephant pussycat alligator dachsund poodle beagle crocodile kangaroo wallaby woodpecker eagle falcon canary parrot parakeet hamster gerbil squirrel rat dove toucan raccoon vulture peacock goldfish rook koala skunk goat rooster fox porcupine llama grasshopper gorilla monkey seahorse wombat wolf giraffe badger lion mouse beetle cricket nightingale hawk trout squid octopus sloth snail locust baboon lemur meerkat oyster frog toad jellyfish butterfly caterpillar tiger hyena zebra snail pig weasel donkey penguin crane buzzard vulture rhino hippopotamus dolphin sparrow beaver moose minnow otter bat mongoose swan firefly platypus".split(" ");case "profession":return"doctor lawyer ninja writer samurai surgeon clerk artist actor engineer mechanic comedian fireman nurse RockStar musician carpenter plumber cashier electrician waiter president governor senator scientist programmer singer dancer director mayor merchant detective investigator navigator pilot priest cowboy stagehand soldier ambassador pirate miner police".split(" ");
case "fantasy":return"centaur wizard gnome orc troll sword fairy pegasus halfling elf changeling ghost knight squire magician witch warlock unicorn dragon wyvern princess prince king queen jester tower castle kraken seamonster mermaid psychic seer oracle".split(" ");case "music":return"violin flute bagpipe guitar symphony orchestra piano trombone tuba opera drums harpsichord harp harmonica accordion tenor soprano baritone cello viola piccolo ukelele woodwind saxophone bugle trumpet sousaphone cornet stradivarius marimbas bells timpani bongos clarinet recorder oboe conductor singer".split(" ");
case "horror":return"murderer chainsaw knife sword murder devil killer psycho ghost monster godzilla werewolf vampire demon graveyard zombie mummy curse death grave tomb beast nightmare frankenstein specter poltergeist wraith corpse scream massacre cannibal skull bones undertaker zombie creature mask psychopath fiend satanist moon fullMoon".split(" ");case "gross":return"slime bug roach fluid pus booger spit boil blister orifice secretion mucus phlegm centipede beetle fart snot crevice flatulence juice mold mildew germs discharge toilet udder odor substance fluid moisture garbage trash bug".split(" ");
case "everyday":return"mirror knife fork spork spoon tupperware minivan suburb lamp desk stereo television TV book car truck soda door video game computer calender tree plant flower chimney attic kitchen garden school wallet bottle".split(" ");case "jewelry":return"earrings ring necklace pendant choker brooch bracelet cameo charm bauble trinket jewelry anklet bangle locket finery crown tiara blingBling chain rosary jewel gemstone beads armband pin costume ornament treasure".split(" ");case "places":return"swamp graveyard cemetery park building house river ocean sea field forest woods neighborhood city town suburb country meadow cliffs lake stream creek school college university library bakery shop store theater garden canyon highway restaurant cafe diner street road freeway alley".split(" ");
case "scifi":return"robot alien raygun spaceship UFO rocket phaser astronaut spaceman planet star galaxy computer future timeMachine wormHole timeTraveler scientist invention martian pluto jupiter saturn mars quasar blackHole warpDrive laser orbit gears molecule electron neutrino proton experiment photon apparatus universe gravity darkMatter constellation circuit asteroid".split(" ");default:return"robot alien raygun spaceship UFO rocket phaser astronaut spaceman planet star galaxy computer future timeMachine wormHole timeTraveler scientist invention martian pluto jupiter saturn mars quasar blackHole warpDrive laser orbit gears molecule electron neutrino proton experiment photon apparatus universe gravity darkMatter constellation circuit asteroid".split(" ")}}
var adjectives="dark color whimsical shiny noise apocalyptic insulting praise scientific".split(" "),nouns="animals everyday fantasy gross horror jewelry places scifi".split(" ");function generator(a,b){var c=getAdj(a),d=getNoun(b),e=parseInt(Math.random()*c.length),f=parseInt(Math.random()*d.length);return"The "+c[e].capitalize()+" "+d[f].capitalize()}
function randomName(){var a=parseInt(Math.random()*adjectives.length),b=parseInt(Math.random()*nouns.length);return generator(adjectives[a],nouns[b])}
var selectRandomMeat=function(){return pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)]},selectRandomNonMeat=function(){return pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)]},selectRandomCheese=function(){return pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)]},selectRandomSauce=function(){return pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)]},selectRandomCrust=
function(){return pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)]},ingredientItemizer=function(a){return"<li>"+a+"</li>"},makeRandomPizza=function(){for(var a="",b=Math.floor(4*Math.random()),c=Math.floor(3*Math.random()),d=Math.floor(2*Math.random()),e=0;e<b;e++)a+=ingredientItemizer(selectRandomMeat());for(b=0;b<c;b++)a+=ingredientItemizer(selectRandomNonMeat());for(c=0;c<d;c++)a+=ingredientItemizer(selectRandomCheese());a+=ingredientItemizer(selectRandomSauce());
return a+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(a){var b,c,d,e;b=document.createElement("div");c=document.createElement("div");d=document.createElement("img");e=document.createElement("div");b.classList.add("randomPizzaContainer");b.style.width="33.33%";b.style.height="325px";b.id="pizza"+a;c.classList.add("col-md-6");d.src="images/pizza.png";d.classList.add("img-responsive");c.appendChild(d);b.appendChild(c);e.classList.add("col-md-6");a=document.createElement("h4");
a.innerHTML=randomName();e.appendChild(a);a=document.createElement("ul");a.innerHTML=makeRandomPizza();e.appendChild(a);b.appendChild(e);return b},resizePizzas=function(a){window.performance.mark("mark_start_resize");a:switch(a){case "1":document.querySelector("#pizzaSize").innerHTML="Small";break a;case "2":document.querySelector("#pizzaSize").innerHTML="Medium";break a;case "3":document.querySelector("#pizzaSize").innerHTML="Large";break a;default:console.log("bug in changeSliderLabel")}var b,c=
document.querySelectorAll(".randomPizzaContainer")[0].offsetWidth;b=document.querySelector("#randomPizzas").offsetWidth;c/=b;a:{switch(a){case "1":a=.25;break a;case "2":a=.3333;break a;case "3":a=.5;break a;default:console.log("bug in sizeSwitcher")}a=void 0}b*=a-c;b=document.querySelectorAll(".randomPizzaContainer")[0].offsetWidth+b+"px";for(a=0;a<document.querySelectorAll(".randomPizzaContainer").length;a++)document.querySelectorAll(".randomPizzaContainer")[a].style.width=b;window.performance.mark("mark_end_resize");
window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");b=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+b[0].duration+"ms")};window.performance.mark("mark_start_generating");for(var i=2;100>i;i++){var pizzasDiv=document.getElementById("randomPizzas");pizzasDiv.appendChild(pizzaElementGenerator(i))}window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0;function logAverageFrame(a){for(var b=a.length,c=0,d=b-1;d>b-11;d--)c+=a[d].duration;console.log("Average time to generate last 10 frames: "+c/10+"ms")}
function updatePositions(){frame++;window.performance.mark("mark_start_frame");for(var a=document.querySelectorAll(".mover"),b=Math.sin(document.body.scrollTop/1250),c=0;c<a.length;c++)a[c].style.left=a[c].basicLeft+100*(b+c%5)+"px";window.performance.mark("mark_end_frame");window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame");0===frame%10&&(a=window.performance.getEntriesByName("measure_frame_duration"),logAverageFrame(a))}window.addEventListener("scroll",updatePositions);
document.addEventListener("DOMContentLoaded",function(){for(var a=0;46>a;a++){var b=document.createElement("img");b.className="mover";b.src="images/pizza.png";b.style.height="100px";b.style.width="73.333px";b.basicLeft=a%8*256;b.style.top=256*Math.floor(a/8)+"px";document.querySelector("#movingPizzas1").appendChild(b)}updatePositions()}); 
