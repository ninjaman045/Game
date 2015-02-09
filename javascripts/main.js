/* William and Josh made this game. (other copywrite stuff would go here I guess) 
you are welcome to use the codes (even though they are horrible) if you want just dont outright steal ideas and profit off them.
*/


/*To Do: 
Prestige!  (balance and add more tiers and balance those too!)
Science! (more upgrades! and better progression)
Better names and descriptions! (getting there!)
Slightly better balancing!  (harder than I had hoped)
More achievements!			(maybe seperate tabs for different types of achievements)
Make achievements pop up and stuff! (Might be Josh's job have some ideas but waiting for now)
More numbers for prettification!  (this is kinda irrelevant now that I went with scientific notation past tredecillion but perhaps I could add an option for either or in the future?)		 (Will always want more numbers until the game breaks from being too big. then a workaround to said breaking will be needed.)
More buildings!
Saving and Loading! (more or less done but could be updated to fix the null values)
Import and Export!   (Done i think! but same idea as save and loading with the null values)
Show how much each building gives. (per building? total? base?  Did this woo! but could be updated to relfect changes with upgrades also add a total for each type of building)

make gambling not exploitable (ie saves right after gamble and disables import for a few minutes.)
make daily reward counters pretty!

ADD POPUPS TO LET YOU KNOW HOW MUCH STUFF YOU HAVE
ie. if you stacked each of your gold pieces on top of one another they would break out of the stratosphere or some shit.

superscript for scientific notation
*/

/*BUGS
Not starting with gold  (decently worked around)
^^^ saving and autoloading will need altered with each update. release version will only need 1 but after that if new variables are introduced
they will need a bit of code to make sure they dont get messed up. may try to fix this altogether in the future but a workaround should be fine for now
If daily reward is active when getting offline it stays active until you get back online. might just not worry about it for now
*/

function hardReset()				//pretty sure it works now. used to set all values back to original values
{
	gold = 10;							
	population = 0;
	caves = 0;
	cavesPopSec = .1;
	caveBaseCost = 10;
	caveCost = 10;
	dirtHuts = 0;
	dirtHutPopSec = .5;
	dirtHutBaseCost = 80;
	dirtHutCost = 80;
	stickHuts = 0;
	stickHutPopSec = 2;
	stickHutBaseCost = 400;
	stickHutCost = 400;
	sodHouses = 0;
	sodHousePopSec = 7.5;
	sodHouseBaseCost = 2500;
	sodHouseCost = 2500;
	goldPerPop = .1;
	allTimeGold = 10;
	goldPerSec = 0;
	popPerSec = 0;
	
	goldHoarder1 = false;
	goldHoarder2 = false;
	goldHoarder3 = false;
	goldHoarder4 = false;
	goldHoarder5 = false;
	goldHoarder6 = false;
	goldHoarder7 = false;
	tier1Builder1 = false;
	tier1Builder2 = false;
	tier1Builder3 = false;
	tier1Builder4 = false;
	tier1Builder5 = false;
	tier1Builder6 = false;
	tier1Builder7 = false;
	tier2Builder1 = false;
	tier2Builder2 = false;
	tier2Builder3 = false;
	tier2Builder4 = false;
	tier2Builder5 = false;
	tier2Builder6 = false;
	tier2Builder7 = false;
	totalAchievements = 0;
	
	fireUpgrade = false;
	unlockScienceUpgrade = false;
	unlockTier2Upgrade = false;
	amountToBuy = 1;
	localStorage = [];						
	timer = 0;
	dailyRewardActive = false;
	dayActivated = 0;
	currentTime = 0;
	timeLeft = 0;
	science = 0;
	goldToScience = 0;
	sciencePerSec = 0;
	allTimeScience = 0;
	transcendentBeings = 0;
	treehouses = 0;
	treehousePopSec = 20;
	treehouseCost = 9001;
	farms = 0;
	farmCost = 25000;
	farmPopSec = 50;
	stoneBlockHouses = 0;
	stoneBlockHousePopSec = 300;
	stoneBlockHouseCost = 2000000;
	blacksmiths = 0;
	blacksmithPopSec = 500;
	blacksmithCost = 3500000;
	transcendentKnights = 0;
	populationCapacity = 0;
	
	bathHouses = 0;
	bathHousePopSec = 800;
	churches = 0;
	churchPopSec = 1350;
	townHalls = 0;
	townHallPopSec = 2000;
	castles = 0;
	castlePopSec = 3500;
	
	huntingUpgrade = false;
	mudUpgrade = false;
	shovelsUpgrade = false;
	sturdySticksUpgrade = false;
	axesUpgrade = false;
	wizardUpgrade = false;
	adventureUpgrade = false;
	laddersUpgrade = false;
	tallerTreesUpgrade = false;
	hoesUpgrade = false;
	domesticationUpgrade = false;
	cookieUpgrade = false;
	
	goldThisPrestige = 0;
	scienceThisPrestige = 0;

	document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity,2);

	buyMultiple(1);																													//this and below used to reset different numbers back to original values
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	document.getElementById("sodHouses").innerHTML = sodHouses;
	document.getElementById("treehouses").innerHTML = treehouses;
	document.getElementById("farms").innerHTML = farms;
	document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
	document.getElementById("blacksmiths").innerHTML = blacksmiths;
	
	document.getElementById("transcendentBeings").innerHTML = 0;
	document.getElementById("tBsToGain").innerHTML = 0;
	document.getElementById("transcendentKnights").innerHTML = 0;
	document.getElementById("tKsToGain").innerHTML = 0;
	
	document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
};

function confirmReset()			//just confirms person wants to reset
{
	if (confirm("Are you sure you want to hard reset?"))
	{
		hardReset()
	};
};
//setting a fuck-ton of variables. might not be neccesary but why the fuck not.
var gold = 10;							
var population = 0;
var caves = 0;
var cavesPopSec = .1;
var caveBaseCost = 10;
var caveCost = 10;
var cavePopulationCapacity = 3;
var dirtHuts = 0;
var dirtHutPopSec = .5;
var dirtHutBaseCost = 80;
var dirtHutCost = 80;
var dirtHutPopulationCapactiy = 18;
var stickHuts = 0;
var stickHutPopSec = 2;
var stickHutBaseCost = 400;
var stickHutCost = 400;
var stickHutPopulationCapacity = 86;
var sodHouses = 0;
var sodHousePopSec = 7.5;
var sodHouseBaseCost = 2500;
var sodHouseCost = 2500;
var sodHousePopulationCapacity = 390;
var goldPerPop = .1;
var allTimeGold = 10;
var goldPerSec = 0;
var popPerSec = 0;


var goldHoarder1 = false;
var goldHoarder2 = false;
var goldHoarder3 = false;
var goldHoarder4 = false;
var goldHoarder5 = false;
var goldHoarder6 = false;
var goldHoarder7 = false;
var tier1Builder1 = false;
var tier1Builder2 = false;
var tier1Builder3 = false;
var tier1Builder4 = false;
var tier1Builder5 = false;
var tier1Builder6 = false;
var tier1Builder7 = false;
var tier2Builder1 = false;
var tier2Builder2 = false;
var tier2Builder3 = false;
var tier2Builder4 = false;
var tier2Builder5 = false;
var tier2Builder6 = false;
var tier2Builder7 = false;
var totalAchievements = 0;

var fireUpgrade = false;
var unlockScienceUpgrade = false;
var unlockTier2Upgrade = false;
var amountToBuy = 1;
var dayActivated = 0;
var d = new Date();
var day;
var timeLeft;
var localStorage = [];						//not sure if I need this butt-fuck it.
var timer = 0;
var dailyRewardActive = false;
var dayActivated;
var currentTime;
var timeLeft;
var science = 0;
var goldToScience = 0;
var sciencePerSec = 0;
var allTimeScience = 0;
var transcendentBeings = 0;
var tBsToGain = 0;
var betPercent = .5;
var winnings;
var losings;
var roll1;
var roll2;
var roll3;
var treehouses = 0;
var treehousePopSec = 20;
var treehouseBaseCost = 9001;
var treehouseCost = 9001;
var treehousePopulationCapacity = 1200;
var farms = 0;
var farmBaseCost = 25000;
var farmCost = 25000;
var farmPopSec = 50;
var farmPopulationCapacity = 3700;
var stoneBlockHouses = 0;
var stoneBlockHousePopSec = 300;
var stoneBlockHouseBaseCost = 2000000;
var stoneBlockHouseCost = 2000000;
var stoneBlockHousePopulationCapacity = 27000;
var blacksmiths = 0;
var blacksmithPopSec = 500;
var blacksmithBaseCost = 3500000;
var blacksmithCost = 3500000;
var blacksmithPopulationCapacity = 54000;
var bathHouses = 0;
var bathHousePopSec = 800;
var bathHouseBaseCost = 7500000;
var bathHouseCost = 7500000;
var bathHousePopulationCapacity = 100000;
var churches = 0;
var churchPopSec = 1350;
var churchBaseCost = 14000000;
var churchCost = 14000000;
var churchPopulationCapacity = 210000;
var townHalls = 0;
var townHallPopSec = 2000;
var townHallBaseCost = 25000000;
var townHallCost = 25000000;
var townHallPopulationCapacity = 370000;
var castles = 0;
var castlePopSec = 3500;
var castleBaseCost = 65000000;
var castleCost = 65000000;
var castlePopulationCapacity = 780000;

var huntingUpgrade = false;
var mudUpgrade = false;
var shovelsUpgrade = false;
var sturdySticksUpgrade = false;
var axesUpgrade = false;
var wizardUpgrade = false;
var adventureUpgrade = false;
var laddersUpgrade = false;
var tallerTreesUpgrade = false;
var hoesUpgrade = false;
var domesticationUpgrade = false;
var cookieUpgrade = false;

var goldThisPrestige = 0;
var scienceThisPrestige = 0;

var populationCapacity = 0;

var transcendentKnights = 0;
var tKsToGain = 0;
var higherLowerRoll1a;
var higherLowerRoll2a;
var higherLowerRoll3a;
var higherLowerTotala;
var higherLowerRoll1b;
var higherLowerRoll2b;
var higherLowerRoll3b;
var higherLowerTotalb;
var hidden1 = true

var timeBetweenTicks = .1;
var x = new Date();
var time1 = x.getTime();
var y = new Date();
var time2 = y.getTime();
var loopTimer = 100;
var loopDivisor = 10;
var testTimer = 0;


var gameSaved;
preLoad();					//for now used to make sure variables dont get set to 0/(null) values.
function preLoad()
{
	gameSaved1 = JSON.parse(localStorage.getItem("gameSaved1"));
	if (gameSaved1)
	{
		loadGame()
	}
}

/*function onClick(number)						//this is what happens when you click the "Click me!" button
{
	gold = gold + number;				//used number variable in case if clicking ever gets an upgrade
	document.getElementById("gold").innerHTML = gold;	//sends the new information to the html document
} ;*/

function buyMultiple(number) 				//function to calculate buying multiple of a building.
{
	amountToBuy = number;				//sets this so i can reference it when i need to increase the building number
	document.getElementById("amountToBuy").innerHTML = amountToBuy;
	caveCost = caveBaseCost;				//resets the base value each time you click it so reclicking buy 10 or whatever doesnt increase the price
	dirtHutCost = dirtHutBaseCost;		//^^^^^
	stickHutCost = stickHutBaseCost;
	sodHouseCost = sodHouseBaseCost;
	treehouseCost = treehouseBaseCost;
	farmCost = farmBaseCost;
	stoneBlockHouseCost = stoneBlockHouseBaseCost;
	blacksmithCost = blacksmithBaseCost;
	bathHouseCost = bathHouseBaseCost;
	churchCost = churchBaseCost;
	townHallCost = townHallBaseCost;
	castleCost = castleBaseCost;
	
	if (number === 1)							//checks to see how many are trying to be bought
	{
		caveCost = caveCost*Math.pow(1.2,caves);									//youve essentially seen this somewhere else im pretty sure
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2, dirtHuts);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2, stickHuts);
		prettyStickHutCost = prettify(stickHutCost,3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2, sodHouses);
		prettySodHouseCost = prettify(sodHouseCost,3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2, treehouses);
		prettytreehouseCost = prettify(treehouseCost,3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2, farms);
		prettyfarmCost = prettify(farmCost,3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2, stoneBlockHouses);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost,3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2, blacksmiths);
		prettyblacksmithCost = prettify(blacksmithCost,3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
		
		bathHouseCost = bathHouseCost*Math.pow(1.2, bathHouses);
		document.getElementById("bathHouseCost").innerHTML = prettify(bathHouseCost, 3);
		
		churchCost = churchCost*Math.pow(1.2, churches);
		document.getElementById("churchCost").innerHTML = prettify(churchCost, 3);
		
		townHallCost = townHallCost*Math.pow(1.2, townHalls);
		document.getElementById("townHallCost").innerHTML = prettify(townHallCost, 3);
		
		castleCost = castleCost*Math.pow(1.2, castles);
		document.getElementById("castleCost").innerHTML = prettify(castleCost, 3);
	};
	if (number >= 10)
	{
		caveCost = caveCost*Math.pow(1.2,caves+number -1) + caveCost*Math.pow(1.2,caves+number - 2)			//long and gross but works. dont question it.
		+ caveCost*Math.pow(1.2,caves+number - 3) + caveCost*Math.pow(1.2,caves+number - 4) + caveCost*Math.pow(1.2,caves+number - 5)
		+ caveCost*Math.pow(1.2,caves+number - 6) + caveCost*Math.pow(1.2,caves+number - 7) + caveCost*Math.pow(1.2,caves+number - 8)
		+ caveCost*Math.pow(1.2,caves+number - 9) + caveCost*Math.pow(1.2,caves+number - 10);
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2,dirtHuts+number -1) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 2)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 3) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 4) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 5)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 6) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 7) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 8)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 9) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 10);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2,stickHuts+number -1) + stickHutCost*Math.pow(1.2,stickHuts+number - 2)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 3) + stickHutCost*Math.pow(1.2,stickHuts+number - 4) + stickHutCost*Math.pow(1.2,stickHuts+number - 5)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 6) + stickHutCost*Math.pow(1.2,stickHuts+number - 7) + stickHutCost*Math.pow(1.2,stickHuts+number - 8)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 9) + stickHutCost*Math.pow(1.2,stickHuts+number - 10);
		prettyStickHutCost = prettify(stickHutCost, 3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2,sodHouses+number -1) + sodHouseCost*Math.pow(1.2,sodHouses+number - 2)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 3) + sodHouseCost*Math.pow(1.2,sodHouses+number - 4) + sodHouseCost*Math.pow(1.2,sodHouses+number - 5)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 6) + sodHouseCost*Math.pow(1.2,sodHouses+number - 7) + sodHouseCost*Math.pow(1.2,sodHouses+number - 8)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 9) + sodHouseCost*Math.pow(1.2,sodHouses+number - 10);
		prettySodHouseCost = prettify(sodHouseCost, 3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2,treehouses+number -1) + treehouseCost*Math.pow(1.2,treehouses+number - 2)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 3) + treehouseCost*Math.pow(1.2,treehouses+number - 4) + treehouseCost*Math.pow(1.2,treehouses+number - 5)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 6) + treehouseCost*Math.pow(1.2,treehouses+number - 7) + treehouseCost*Math.pow(1.2,treehouses+number - 8)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 9) + treehouseCost*Math.pow(1.2,treehouses+number - 10);
		prettytreehouseCost = prettify(treehouseCost, 3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2,farms+number -1) + farmCost*Math.pow(1.2,farms+number - 2)
		+ farmCost*Math.pow(1.2,farms+number - 3) + farmCost*Math.pow(1.2,farms+number - 4) + farmCost*Math.pow(1.2,farms+number - 5)
		+ farmCost*Math.pow(1.2,farms+number - 6) + farmCost*Math.pow(1.2,farms+number - 7) + farmCost*Math.pow(1.2,farms+number - 8)
		+ farmCost*Math.pow(1.2,farms+number - 9) + farmCost*Math.pow(1.2,farms+number - 10);
		prettyfarmCost = prettify(farmCost, 3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number -1) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 2)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 3) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 4) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 5)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 6) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 7) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 8)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 9) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 10);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost, 3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2,blacksmiths+number -1) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 2)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 3) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 4) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 5)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 6) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 7) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 8)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 9) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 10);
		prettyblacksmithCost = prettify(blacksmithCost, 3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
		
		bathHouseCost = bathHouseCost*Math.pow(1.2,bathHouses+number -1) + bathHouseCost*Math.pow(1.2,bathHouses+number - 2)
		+ bathHouseCost*Math.pow(1.2,bathHouses+number - 3) + bathHouseCost*Math.pow(1.2,bathHouses+number - 4) + bathHouseCost*Math.pow(1.2,bathHouses+number - 5)
		+ bathHouseCost*Math.pow(1.2,bathHouses+number - 6) + bathHouseCost*Math.pow(1.2,bathHouses+number - 7) + bathHouseCost*Math.pow(1.2,bathHouses+number - 8)
		+ bathHouseCost*Math.pow(1.2,bathHouses+number - 9) + bathHouseCost*Math.pow(1.2,bathHouses+number - 10);
		document.getElementById("bathHouseCost").innerHTML = prettify(bathHouseCost, 3);
		
		churchCost = churchCost*Math.pow(1.2,churches+number -1) + churchCost*Math.pow(1.2,churches+number - 2)
		+ churchCost*Math.pow(1.2,churches+number - 3) + churchCost*Math.pow(1.2,churches+number - 4) + churchCost*Math.pow(1.2,churches+number - 5)
		+ churchCost*Math.pow(1.2,churches+number - 6) + churchCost*Math.pow(1.2,churches+number - 7) + churchCost*Math.pow(1.2,churches+number - 8)
		+ churchCost*Math.pow(1.2,churches+number - 9) + churchCost*Math.pow(1.2,churches+number - 10);
		document.getElementById("churchCost").innerHTML = prettify(churchCost, 3);
		
		townHallCost = townHallCost*Math.pow(1.2,townHalls+number -1) + townHallCost*Math.pow(1.2,townHalls+number - 2)
		+ townHallCost*Math.pow(1.2,townHalls+number - 3) + townHallCost*Math.pow(1.2,townHalls+number - 4) + townHallCost*Math.pow(1.2,townHalls+number - 5)
		+ townHallCost*Math.pow(1.2,townHalls+number - 6) + townHallCost*Math.pow(1.2,townHalls+number - 7) + townHallCost*Math.pow(1.2,townHalls+number - 8)
		+ townHallCost*Math.pow(1.2,townHalls+number - 9) + townHallCost*Math.pow(1.2,townHalls+number - 10);
		document.getElementById("townHallCost").innerHTML = prettify(townHallCost, 3);
		
		castleCost = castleCost*Math.pow(1.2,castles+number -1) + castleCost*Math.pow(1.2,castles+number - 2)
		+ castleCost*Math.pow(1.2,castles+number - 3) + castleCost*Math.pow(1.2,castles+number - 4) + castleCost*Math.pow(1.2,castles+number - 5)
		+ castleCost*Math.pow(1.2,castles+number - 6) + castleCost*Math.pow(1.2,castles+number - 7) + castleCost*Math.pow(1.2,castles+number - 8)
		+ castleCost*Math.pow(1.2,castles+number - 9) + castleCost*Math.pow(1.2,castles+number - 10);
		document.getElementById("castleCost").innerHTML = prettify(castleCost, 3);
	};
};

function buyCave()			//what happens when you click "Buy Cave" button
{
	//var caveCost = Math.floor(10*Math.pow(1.2,caves));		//calculates the cost of the building (will probably change values later)
	if (gold >= caveCost)													//checks to see if user has enough money to buy
	{
		caves = caves + amountToBuy;													//adds x caves
		gold = gold - caveCost;											//takes away the money
		buyMultiple(amountToBuy);
		document.getElementById("caves").innerHTML = caves;	//sends shit to html
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;		//^^^^^^^^^
		populationCapacity = populationCapacity + (cavePopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	};
	//var nextCaveCost = Math.floor(10*Math.pow(1.2,caves));			//calculates the cost of the next cave
	//var nextCaveCost = buyMultiple(amountToBuy);
	//document.getElementById("caveCost").innerHTML = nextCaveCost;		//sens that shit to html
};

function buyDirtHut()
{
	//var dirtHutCost = Math.floor(1000*Math.pow(1.2,dirtHuts));
	if (gold >= dirtHutCost)
	{
		dirtHuts = dirtHuts + amountToBuy;
		gold = gold - dirtHutCost;
		buyMultiple(amountToBuy);
		document.getElementById("dirtHuts").innerHTML = dirtHuts;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
		populationCapacity = populationCapacity + (dirtHutPopulationCapactiy * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	};
	//var nextDirtHutCost = Math.floor(1000*Math.pow(1.2,dirtHuts));
	//var nextDirtHutCost = buyMultiple(amountToBuy);
	//document.getElementById("dirtHutCost").innerHTML = nextDirtHutCost;
};

function buyStickHut()
{
	if (gold >= stickHutCost)
	{
		stickHuts = stickHuts + amountToBuy;
		gold = gold - stickHutCost;
		buyMultiple(amountToBuy);
		document.getElementById("stickHuts").innerHTML = stickHuts;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
		populationCapacity = populationCapacity + (stickHutPopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	};
};

function buySodHouse()
{
	if (gold >= sodHouseCost)
	{
		sodHouses = sodHouses + amountToBuy;
		gold = gold - sodHouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("sodHouses").innerHTML = sodHouses;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
		populationCapacity = populationCapacity + (sodHousePopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyTreehouse()
{
	if (gold >= treehouseCost)
	{
		treehouses = treehouses + amountToBuy;
		gold = gold - treehouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("treehouses").innerHTML = treehouses;
		document.getElementById("gold").innerHTML = prettify(gold);
		populationCapacity = populationCapacity + (treehousePopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyFarm()
{
	if (gold >= farmCost)
	{
		farms = farms + amountToBuy;
		gold = gold - farmCost;
		buyMultiple(amountToBuy);
		document.getElementById("farms").innerHTML = farms;
		document.getElementById("gold").innerHTML = prettify(gold);
		populationCapacity = populationCapacity + (farmPopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyStoneBlockHouse()
{
	if (gold >= stoneBlockHouseCost)
	{
		stoneBlockHouses = stoneBlockHouses + amountToBuy;
		gold = gold - stoneBlockHouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
		document.getElementById("gold").innerHTML = prettify(gold);
		populationCapacity = populationCapacity + (stoneBlockHousePopulationCapacity * amountToBuy)
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyBlacksmith()
{
	if (gold >= blacksmithCost)
	{
		blacksmiths = blacksmiths + amountToBuy;
		gold = gold - blacksmithCost;
		buyMultiple(amountToBuy);
		document.getElementById("blacksmiths").innerHTML = blacksmiths;
		document.getElementById("gold").innerHTML = prettify(gold);
		populationCapacity = populationCapacity + (blacksmithPopulationCapacity * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyBathHouse()
{
	if (gold >= bathHouseCost)
	{
		bathHouses = bathHouses + amountToBuy;
		gold = gold - bathHouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("bathHouses").innerHTML = bathHouses;
		populationCapacity = populationCapacity + (bathHousePopulationCapacity * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyChurch()
{
	if (gold >= churchCost)
	{
		churches = churches + amountToBuy;
		gold = gold - churchCost;
		buyMultiple(amountToBuy);
		document.getElementById("churches").innerHTML = churches;
		populationCapacity = populationCapacity + (churchPopulationCapacity * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyTownHall()
{
	if (gold >= townHallCost)
	{
		townHalls = townHalls + amountToBuy;
		gold = gold - townHallCost;
		buyMultiple(amountToBuy);
		document.getElementById("townHalls").innerHTML = townHalls;
		populationCapacity = populationCapacity + (townHallPopulationCapacity * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buyCastle()
{
	if (gold >= castleCost)
	{
		castles = castles + amountToBuy;
		gold = gold - castleCost;
		buyMultiple(amountToBuy);
		document.getElementById("castles").innerHTML = castles;
		populationCapacity = populationCapacity + (castlePopulationCapacity * amountToBuy);
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
	}
}

function buildingPopulation(numberOfBuilding, populationPerBuilding)		//function to calculate the population gains
{
	if (population > populationCapacity*2)
	{
		population = population + (numberOfBuilding*populationPerBuilding*.001);
		prettyPop = prettify(population, 2)
		document.getElementById("population").innerHTML = prettyPop;
	}
	
	else if (population > populationCapacity)
	{
		population = population + (numberOfBuilding*populationPerBuilding*.05);
		prettyPop = prettify(population, 2)
		document.getElementById("population").innerHTML = prettyPop;
	}
	
	else 
	{
		population = population + (numberOfBuilding*populationPerBuilding);
		prettyPop = prettify(population, 2)
		document.getElementById("population").innerHTML = prettyPop;
	}
};

function increaseScience()			//pretty self explanatory honestly...
{
	if (goldToScience < 1)
	{
		goldToScience = Math.round((goldToScience + .05)*100)/100;
		document.getElementById("goldToScienceRatio").innerHTML = (goldToScience * 100).toFixed(0);
	};
};

function decreaseScience()
{
	if (goldToScience > 0)
	{
		goldToScience = Math.round((goldToScience - .05)*100)/100;
		document.getElementById("goldToScienceRatio").innerHTML = (goldToScience * 100).toFixed(0);
	};
};

function increaseBet()   			//almost exactly the same code as increase science
{
	if (betPercent < 1)
	{
		betPercent = Math.round((betPercent + .05)*100)/100;
		document.getElementById("betPercent").innerHTML = (betPercent*100).toFixed(0);
	}
}

function decreaseBet()
{
	if (betPercent > 0)
	{
		betPercent = Math.round((betPercent - .05)*100)/100;
		document.getElementById("betPercent").innerHTML = (betPercent*100).toFixed(0);
	}
}

function slot()					//gamble function (duh) perhaps update winning and losing chances and values of each and what not to make it more exiting. at the moment overall loss would be 50% if you gambled a lot.
{
	bet = gold*betPercent			//determines how much gold you are betting
	roll1 = convert()						//sets the rolls equal to the output of the convert function
	roll2 = convert()
	roll3 = convert()
	function convert()					//the convert function!
	{
		roll = Math.random()			//sets a random value between 0 and 1
		if (roll < .5)								//checks to see if the value is less than .5, essentially giving it a 50% chance to be this.
		{
			return "Cave"
		}
		
		else if (roll < .75)				//if its not less than .5 it checks to  see if its less than .75, essentially a 25% chance.
		{
			return "Dirt Hut"
		}
		
		else if (roll < .875)				//12.5% chance.
		{
			return "Stick Hut"
		}
		
		else if (roll < .9375)				//6.25% chance...
		{
			return "Transcendent Being"
		}
		
		else 										//also a 6.25% chance
		{
			return "Transcendent God"
		}
	}

	document.getElementById("roll1").innerHTML = roll1					//outputs each roll
	document.getElementById("roll2").innerHTML = roll2					//may put a timer in here somewhere to build suspense.
	document.getElementById("roll3").innerHTML = roll3
	
	if (roll1 === roll2 && roll2 === roll3)							//checks to see if all rolls are the same.
	{
		switch (roll1)								//if they are switch function sees which roll it is.
		{
			case "Cave":										//if its "Cave" it does this
				winnings = prettify(bet * 3, 3)				//calculates the winnings and makes them pretty.
				document.getElementById("slotWinnings").innerHTML = "You won with Caves and earned " + winnings + " gold!"   	//outputs the winnings.
				gold = gold + bet * 3				//actually calculates and adds the winnings to your gold.
				break;
			
			case "Dirt Hut":     					//same same
				winnings = prettify(bet * 25, 3)
				document.getElementById("slotWinnings").innerHTML = "You won with Dirt Huts and earned " + winnings + " gold!"
				gold = gold + bet * 25
				break;
			
			case "Stick Hut":
				winnings = prettify(bet * 200, 3)
				document.getElementById("slotWinnings").innerHTML = "You won with Stick Huts and earned " + winnings + " gold!"
				gold = gold + bet * 200
				break;
			
			case "Transcendent Being":
				winnings = prettify(bet * 1500, 3)
				document.getElementById("slotWinnings").innerHTML = "You won with Transcendent Beings and earned " + winnings + " gold!"
				gold = gold + bet * 1500
				break;
				
			case "Transcendent God":
				winnings = prettify(bet * 2000, 3)
				document.getElementById("slotWinnings").innerHTML = "You won with Transcendent Gods and earned " + winnings + " gold!"
				gold = gold + bet * 2000
				break;
		}
	}
	
	else				//what happens if all 3 rolls arent the same.
	{
		losings = prettify(bet, 3);  					//calculates and prettifies losings
		document.getElementById("slotWinnings").innerHTML = "Sorry, but you lost " + losings + " gold!"   		//consolation message.
		gold = gold - bet				//calculates losses.
	}
}

function populationGold(goldPerPop1)									//function to calculate gold gains and science
{
	gold = gold + (population*goldPerPop1 - population*goldPerPop1*goldToScience);		
	prettyGold = prettify(gold, 3)
	document.getElementById("gold").innerHTML = prettyGold;
	science = science + (population*goldPerPop1*goldToScience);
	prettyScience = prettify(science, 3);
	document.getElementById("science").innerHTML = prettyScience;
};

function checkAchieve()				//function to check and award achievements if requirements are met
{												//need to come up with clever names later
	if (gold > 1000 && (!goldHoarder1))		//checks if gold is above 100 and if this ahievement has been earned before
	{
		goldPerPop = goldPerPop * 1.02; 		// Either all achievements/upgrades regarding gold per pop should probably be multiplicative or additive
															// for simplistic maths. might have a way to workaround that I dont know of. but basically if some were
															// additive and some were multiplicative it could be advantageous to get them in different orders.
		goldHoarder1 = true;								//makes it so you dont reget the achievement
		totalAchievements = totalAchievements + 1; 
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder1)
	{
		document.getElementById("goldHoarder1Status").innerHTML = "Completed";
	};
	if (!goldHoarder1)
	{
		document.getElementById("goldHoarder1Status").innerHTML = " "
	}
	
	if (gold > 1000000 && (!goldHoarder2))			// more of the same
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder2 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder2)
	{
		document.getElementById("goldHoarder2Status").innerHTML = "Completed"
	};
	if (!goldHoarder2)
	{
		document.getElementById("goldHoarder2Status").innerHTML = " "
	};
	
	if (gold > 1000000000 && (!goldHoarder3))
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder3 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder3)
	{
		document.getElementById("goldHoarder3Status").innerHTML = "Completed"
	};
	if (!goldHoarder3)
	{
		document.getElementById("goldHoarder3Status").innerHTML = " "
	};
	
	if (gold > 1000000000000 && (!goldHoarder4))
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder4 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder4)
	{
		document.getElementById("goldHoarder4Status").innerHTML = "Completed"
	};
	if (!goldHoarder4)
	{
		document.getElementById("goldHoarder4Status").innerHTML = " "
	};
	
	if (gold > 1000000000000000 && (!goldHoarder5))
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder5 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder5)
	{
		document.getElementById("goldHoarder5Status").innerHTML = "Completed"
	};
	if (!goldHoarder5)
	{
		document.getElementById("goldHoarder5Status").innerHTML = " "
	};
	
	if (gold > 1000000000000000000 && (!goldHoarder6))
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder6 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder6)
	{
		document.getElementById("goldHoarder6Status").innerHTML = "Completed"
	};
	if (!goldHoarder6)
	{
		document.getElementById("goldHoarder6Status").innerHTML = " "
	};
	
	if (gold > 1000000000000000000000 && (!goldHoarder7))
	{
		goldPerPop = goldPerPop * 1.02;
		goldHoarder7 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (goldHoarder7)
	{
		document.getElementById("goldHoarder7Status").innerHTML = "Completed"
	};
	if (!goldHoarder7)
	{
		document.getElementById("goldHoarder7Status").innerHTML = " "
	};
	
	if ((caves >= 1) && (dirtHuts >= 1) && (stickHuts >= 1) && (sodHouses >= 1) && (treehouses >= 1) && (farms >= 1) && (!tier1Builder1))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder1 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder1)
	{
		document.getElementById("tier1Builder1Status").innerHTML = "Completed"
	};
	if (!tier1Builder1)
	{
		document.getElementById("tier1Builder1Status").innerHTML = " "
	};
	
	if ((caves >= 5) && (dirtHuts >= 5) && (stickHuts >= 5) && (sodHouses >= 5) && (treehouses >= 5) && (farms >= 5) && (!tier1Builder2))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder2 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder2)
	{
		document.getElementById("tier1Builder2Status").innerHTML = "Completed"
	};
	if (!tier1Builder2)
	{
		document.getElementById("tier1Builder2Status").innerHTML = " "
	};
	
	if ((caves >= 10) && (dirtHuts >= 10) && (stickHuts >= 10) && (sodHouses >= 10) && (treehouses >= 10) && (farms >= 10) && (!tier1Builder3))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder3 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder3)
	{
		document.getElementById("tier1Builder3Status").innerHTML = "Completed"
	};
	if (!tier1Builder3)
	{
		document.getElementById("tier1Builder3Status").innerHTML = " "
	};
	
	if ((caves >= 25) && (dirtHuts >= 25) && (stickHuts >= 25) && (sodHouses >= 25) && (treehouses >= 25) && (farms >= 25) && (!tier1Builder4))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder4 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder4)
	{
		document.getElementById("tier1Builder4Status").innerHTML = "Completed"
	};
	if (!tier1Builder4)
	{
		document.getElementById("tier1Builder4Status").innerHTML = " "
	};
	
	if ((caves >= 50) && (dirtHuts >= 50) && (stickHuts >= 50) && (sodHouses >= 50) && (treehouses >= 50) && (farms >= 50) && (!tier1Builder5))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder5 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder5)
	{
		document.getElementById("tier1Builder5Status").innerHTML = "Completed"
	};
	if (!tier1Builder5)
	{
		document.getElementById("tier1Builder5Status").innerHTML = " "
	};
	
	if ((caves >= 75) && (dirtHuts >= 75) && (stickHuts >= 75) && (sodHouses >= 75) && (treehouses >= 75) && (farms >= 75) && (!tier1Builder6))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder6 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder6)
	{
		document.getElementById("tier1Builder6Status").innerHTML = "Completed"
	};
	if (!tier1Builder6)
	{
		document.getElementById("tier1Builder6Status").innerHTML = " "
	};
	
	if ((caves >= 100) && (dirtHuts >= 100) && (stickHuts >= 100) && (sodHouses >= 100) && (treehouses >= 100) && (farms >= 100) && (!tier1Builder7))
	{
		goldPerPop = goldPerPop * 1.02;
		tier1Builder7 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier1Builder7)
	{
		document.getElementById("tier1Builder7Status").innerHTML = "Completed"
	};
	if (!tier1Builder7)
	{
		document.getElementById("tier1Builder7Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 1) && (blacksmiths >= 1) && (bathHouses >= 1) && (churches >= 1) && (townHalls >= 1) && (castles >= 1) && (!tier2Builder1))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder1 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder1)
	{
		document.getElementById("tier2Builder1Status").innerHTML = "Completed"
	};
	if (!tier2Builder1)
	{
		document.getElementById("tier2Builder1Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 5) && (blacksmiths >= 5) && (bathHouses >= 5) && (churches >= 5) && (townHalls >= 5) && (castles >= 5) && (!tier2Builder2))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder2 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder2)
	{
		document.getElementById("tier2Builder2Status").innerHTML = "Completed"
	};
	if (!tier2Builder2)
	{
		document.getElementById("tier2Builder2Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 10) && (blacksmiths >= 10) && (bathHouses >= 10) && (churches >= 10) && (townHalls >= 10) && (castles >= 10) && (!tier2Builder3))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder3 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder3)
	{
		document.getElementById("tier2Builder3Status").innerHTML = "Completed"
	};
	if (!tier2Builder3)
	{
		document.getElementById("tier2Builder3Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 25) && (blacksmiths >= 25) && (bathHouses >= 25) && (churches >= 25) && (townHalls >= 25) && (castles >= 25) && (!tier2Builder4))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder4 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder4)
	{
		document.getElementById("tier2Builder4Status").innerHTML = "Completed"
	};
	if (!tier2Builder4)
	{
		document.getElementById("tier2Builder4Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 50) && (blacksmiths >= 50) && (bathHouses >= 50) && (churches >= 50) && (townHalls >= 50) && (castles >= 50) && (!tier2Builder5))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder5 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder5)
	{
		document.getElementById("tier2Builder5Status").innerHTML = "Completed"
	};
	if (!tier2Builder5)
	{
		document.getElementById("tier2Builder5Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 75) && (blacksmiths >= 75) && (bathHouses >= 75) && (churches >= 75) && (townHalls >= 75) && (castles >= 75) && (!tier2Builder6))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder6 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder6)
	{
		document.getElementById("tier2Builder6Status").innerHTML = "Completed"
	};
	if (!tier2Builder6)
	{
		document.getElementById("tier2Builder6Status").innerHTML = " "
	};
	
	if ((stoneBlockHouses >= 100) && (blacksmiths >= 100) && (bathHouses >= 100) && (churches >= 100) && (townHalls >= 100) && (castles >= 100) && (!tier2Builder7))
	{
		goldPerPop = goldPerPop * 1.02;
		tier2Builder7 = true;
		totalAchievements = totalAchievements + 1;
		document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	};
	if (tier2Builder7)
	{
		document.getElementById("tier2Builder7Status").innerHTML = "Completed"
	};
	if (!tier2Builder7)
	{
		document.getElementById("tier2Builder7Status").innerHTML = " "
	};
};

function stats()					// creates and outputs different stats
{
	goldPerSec = population * goldPerPop - population*goldPerPop*goldToScience;
	prettyGPS = prettify(goldPerSec, 3)
	document.getElementById("goldPerSec").innerHTML = prettyGPS;
	//document.getElementById("goldPerSec2").innerHTML = prettyGPS;
	
	prettyGPP = prettify((goldPerPop - goldToScience*goldPerPop), 3);
	document.getElementById("goldPerPop").innerHTML = prettyGPP;
	
	prettySPP = prettify((goldPerPop*goldToScience), 3);
	document.getElementById("sciencePerPop").innerHTML = prettySPP;
	
	sciencePerSec =  (population*goldPerPop*goldToScience);
	prettySPS = prettify(sciencePerSec, 3)
	document.getElementById("sciencePerSec").innerHTML = prettySPS;
	//document.getElementById("sciencePerSec2").innerHTML = prettySPS;
	
	allTimeGold = allTimeGold + goldPerSec*timeBetweenTicks;
	prettyATG = prettify(allTimeGold, 3);
	document.getElementById("allTimeGold").innerHTML = prettyATG;
	
	goldThisPrestige = goldThisPrestige + goldPerSec*timeBetweenTicks;
	
	allTimeScience = allTimeScience + sciencePerSec*timeBetweenTicks;
	prettyATS = prettify(allTimeScience, 3);
	document.getElementById("allTimeScience").innerHTML = prettyATS;
	
	scienceThisPrestige = scienceThisPrestige + sciencePerSec*timeBetweenTicks;
	
	if (population > populationCapacity*2)
	{
		popPerSec = ((caves * cavesPopSec) + (dirtHuts * dirtHutPopSec) + (stickHuts * stickHutPopSec) + (sodHouses * sodHousePopSec) + (treehouses * treehousePopSec) + (farms * farmPopSec) + (stoneBlockHouses * stoneBlockHousePopSec) + (blacksmiths * blacksmithPopSec) + (bathHouses * bathHousePopSec) + (churches * churchPopSec) + (townHalls * townHallPopSec) + (castles * castlePopSec))*.001;
		document.getElementById("popPerSec").innerHTML = prettify(popPerSec, 2);
	}
	
	else if (population > populationCapacity)
	{
		popPerSec = ((caves * cavesPopSec) + (dirtHuts * dirtHutPopSec) + (stickHuts * stickHutPopSec) + (sodHouses * sodHousePopSec) + (treehouses * treehousePopSec) + (farms * farmPopSec) + (stoneBlockHouses * stoneBlockHousePopSec) + (blacksmiths * blacksmithPopSec) + (bathHouses * bathHousePopSec) + (churches * churchPopSec) + (townHalls * townHallPopSec) + (castles * castlePopSec))*.05;
		document.getElementById("popPerSec").innerHTML = prettify(popPerSec, 2);
	}
	
	else
	{
		popPerSec = ((caves * cavesPopSec) + (dirtHuts * dirtHutPopSec) + (stickHuts * stickHutPopSec) + (sodHouses * sodHousePopSec) + (treehouses * treehousePopSec) + (farms * farmPopSec) + (stoneBlockHouses * stoneBlockHousePopSec) + (blacksmiths * blacksmithPopSec) + (bathHouses * bathHousePopSec) + (churches * churchPopSec) + (townHalls * townHallPopSec) + (castles * castlePopSec));
		document.getElementById("popPerSec").innerHTML = prettify(popPerSec, 2);
	}
};

function buyFireUpgrade()				//upgrade function. May be able to use one function for all upgrades but cant think of a way yet
{
	if (science >= 100)			//can probably remove the upgrade1 false stuff after the upgrades are removed after purchase.
	{
		populationCapacity = populationCapacity + 15; 		//same as gold per pop needs to be either multiply or add for future stuff
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 100;
		fireUpgrade = true;
		document.getElementById("fireUpgrade").style.display="none";
	};
};

function buyUnlockScience()
{
	if (gold >= 100)
	{
		unlockScienceUpgrade = true
		gold = gold - 100;
		document.getElementById("unlockScienceUpgrade").style.display = "none";
		document.getElementById("scienceStuff1").style.display = "inline-block"
		document.getElementById("scienceStuff2").style.display = "inline-block"
		document.getElementById("scienceStuff3").style.display = "inline-block"
		document.getElementById("scienceStuff4").style.display = "inline-block"
	};
};

function buyUnlockTier2Upgrade()
{
	if (science >= 1000000)
	{
		document.getElementById("tier1to2Button").style.display = "inline-block";
		science = science - 1000000;
		goldPerPop = goldPerPop * 2
		document.getElementById("unlockTier2Upgrade").style.display = "none";
		unlockTier2Upgrade = true
	};
};

function buyHuntingUpgrade()
{
	if (science >= 250)
	{
		populationCapacity = populationCapacity + 25;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 250;
		document.getElementById("huntingUpgrade").style.display = "none";
		huntingUpgrade = true;
	}
}

function buyMudUpgrade()
{
	if (science >= 400)
	{
		populationCapacity = populationCapacity + 50;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 400;
		document.getElementById("mudUpgrade").style.display = "none";
		mudUpgrade = true;
	}
}

function buyShovelsUpgrade()
{
	if (science >= 700)
	{
		populationCapacity = populationCapacity + 80;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 700;
		document.getElementById("shovelsUpgrade").style.display = "none";
		shovelsUpgrade = true;
	}
}

function buySturdySticksUpgrade()
{
	if (science >= 1000)
	{
		populationCapacity = populationCapacity + 125;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 1000;
		document.getElementById("sturdySticksUpgrade").style.display = "none";
		sturdySticksUpgrade = true;
	}
}

function buyAxesUpgrade()
{
	if (science >= 1500)
	{
		populationCapacity = populationCapacity + 150;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 1500;
		document.getElementById("axesUpgrade").style.display = "none";
		axesUpgrade = true;
	}
}

function buyWizardUpgrade()
{
	if (science >= 3000)
	{
		populationCapacity = populationCapacity + 500;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 3000;
		document.getElementById("wizardUpgrade").style.display = "none";
		wizardUpgrade = true;
	}
}

function buyAdventureUpgrade()
{
	if (science >= 5000)
	{
		populationCapacity = populationCapacity + 750;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 5000;
		document.getElementById("adventureUpgrade").style.display = "none";
		adventureUpgrade = true;
	}
}

function buyLaddersUpgrade()
{
	if (science >= 20000)
	{
		populationCapacity = populationCapacity + 3000;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 20000;
		document.getElementById("laddersUpgrade").style.display = "none";
		laddersUpgrade = true;
	}
}

function buyTallerTreesUpgrade()
{
	if (science >= 30000)
	{
		populationCapacity = populationCapacity + 5000;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 30000;
		document.getElementById("tallerTreesUpgrade").style.display = "none";
		tallerTreesUpgrade = true;
	}
}

function buyHoesUpgrade()
{
	if (science >= 50000)
	{
		populationCapacity = populationCapacity + 8000;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 50000;
		document.getElementById("hoesUpgrade").style.display = "none";
		hoesUpgrade = true;
	}
}

function buyDomesticationUpgrade()
{
	if (science >= 75000)
	{
		populationCapacity = populationCapacity + 15000;
		document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity, 2);
		science = science - 75000;
		document.getElementById("domesticationUpgrade").style.display = "none";
		domesticationUpgrade = true;
	}
}

function buyCookieUpgrade()
{
	if (science >= 500000)
	{
		science = science - 500000
		document.getElementById("cookieUpgrade").style.display = "none";
		cookieUpgrade = true;
		document.getElementById("gamblingTab").style.display = "inline-block";
		//relapseAchievment = true; 								//add this in later;
	}
}

function dailyReward()			//function for daily reward
{
	if (day >= dayActivated + 86400000 && (!dailyRewardActive))		// only lets you do it once a day and not have it activated multiple times at once
	{
		dayActivated = d.getTime();
		timer = 0;
		goldPerPop = goldPerPop * 2;
		dailyRewardActive = true;
	};
};

function checkDailyReward()					//does all the stuff to make sure you only activate once a day and that it turns off properly
{
	if (dailyRewardActive && (timer > 900000))
	{
		dailyRewardActive = false;
		goldPerPop = goldPerPop/2;
	}
	if (dailyRewardActive)						//used to show how much time till it ends
	{
		document.getElementById("timer").innerHTML = (900000 - timer)/1000;
		timer = timer + 1000*timeBetweenTicks;
	}
	if (day < dayActivated + 86400000)					//used to show how long till you can activate it again
	{
		day = d.getTime();
		timeLeft = ((dayActivated+86400000) - day)/1000;
		document.getElementById("timeLeft").innerHTML = timeLeft;
	}
	if (day > dayActivated + 86400000)
	{
		document.getElementById("timeLeft").innerHTML = 0;
	}
	if (!dailyRewardActive)
	{
		document.getElementById("timer").innerHTML = 0;
	}
};

function transcend()						//essentially the prestige as of now
{
	if ((Math.floor((Math.pow(allTimeGold/1000000000, 1/3) - 10))) >= 1)
	{
		tKsToGain = prettify(tKsToGain, 3)
		tBsToGain = prettify(tBsToGain, 3)
		if (confirm("This time youll gain "+tKsToGain+" Transcendent Knights as well. Each Transcendent Knight gives you another 10% increase. Transcendent Beings to earn: "+tBsToGain))
		{
			transcendentKnights = Math.floor((Math.pow(allTimeGold/1000000000, 1/3) - 10));
			transcendentBeings = Math.floor((Math.pow(allTimeGold/1000000, 1/2) - 10));
			gold = 10;
			population = 0;
			caves = 0;
			cavesPopSec = .1;
			caveCost = 10;
			dirtHuts = 0;
			dirtHutPopSec = .5;
			dirtHutCost = 80;
			stickHuts = 0;
			stickHutPopSec = 2;
			stickHutCost = 400;
			sodHouses = 0;
			sodHousePopSec = 7.5;
			sodHouseCost = 2500;
			goldPerPop = .1*(transcendentBeings*.05+1) * (transcendentKnights*.10+1) * (Math.pow(1.01, totalAchievements));
			fireUpgrade = false;
			unlockScienceUpgrade = false;
			unlockTier2Upgrade = false;
			science = 0;
			treehouses = 0;
			treehousePopSec = 20;
			treehouseCost = 9001;
			farms = 0;
			farmPopSec = 50;
			farmCost = 25000;
			stoneBlockHouses = 0;
			stoneBlockHousePopSec = 300;
			stoneBlockHouseCost = 2000000;
			blacksmiths = 0;
			blacksmithPopSec = 500;
			blacksmithCost = 3500000;
			bathHouses = 0;
			bathHousePopSec = 800;
			churches = 0;
			churchPopSec = 1350;
			townHalls = 0;
			townHallPopSec = 2000;
			castles = 0;
			castlePopSec = 3500;
			
			huntingUpgrade = false;
			mudUpgrade = false;
			shovelsUpgrade = false;
			sturdySticksUpgrade = false;
			axesUpgrade = false;
			wizardUpgrade = false;
			adventureUpgrade = false;
			laddersUpgrade = false;
			tallerTreesUpgrade = false;
			hoesUpgrade = false;
			domesticationUpgrade = false;
			cookieUpgrade = false;
			
			goldThisPrestige = 0;
			scienceThisPrestige = 0;
			
			buyMultiple(amountToBuy);
			
			goldToScience = 0;
			document.getElementById("goldToScienceRatio").innerHTML = (goldToScience * 100).toFixed(0);
			
			populationCapacity = 0;
			document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity,2);
			
			document.getElementById("gold").innerHTML = prettify(gold, 3);
			document.getElementById("science").innerHTML = prettify(science, 3);
			document.getElementById("population").innerHTML = prettify(population, 3);
			document.getElementById("caves").innerHTML = prettify(caves, 3);
			document.getElementById("caveCost").innerHTML = prettify(caveCost, 3);
			document.getElementById("dirtHuts").innerHTML = prettify(dirtHuts, 3);
			document.getElementById("dirtHutCost").innerHTML = prettify(dirtHutCost, 3);
			document.getElementById("stickHuts").innerHTML = prettify(stickHuts, 3);
			document.getElementById("stickHutCost").innerHTML = prettify(stickHutCost, 3);
			document.getElementById("sodHouses").innerHTML = prettify(sodHouses, 3);
			document.getElementById("sodHouseCost").innerHTML = prettify(sodHouseCost, 3);
			document.getElementById("treehouses").innerHTML = prettify(treehouses, 3);
			document.getElementById("treehouseCost").innerHTML = prettify(treehouseCost, 3);
			document.getElementById("farms").innerHTML = prettify(farms, 3);
			document.getElementById("farmCost").innerHTML = prettify(farmCost, 3);
			document.getElementById("stoneBlockHouses").innerHTML = prettify(stoneBlockHouses, 3);
			document.getElementById("stoneBlockHouseCost").innerHTML = prettify(stoneBlockHouseCost, 3);
			document.getElementById("blacksmiths").innerHTML = prettify(blacksmiths, 3);
			document.getElementById("blacksmithCost").innerHTML = prettify(blacksmithCost, 3);
			document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
			document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
			
			$("#tier1").slideDown("slow");
			document.getElementById("tier2").style.display = "none";
			document.getElementById("tier3").style.display = "none";
			document.getElementById("tier1to2Button").style.display = "none";
			
			checkHidden();
		}
	}
	
	else if ((Math.floor((Math.pow(allTimeGold/1000000, 1/2) - 10))) >= 1)				//checks to make sure youd actually get something before letting you do it.
	{
		tBsToGain = prettify(tBsToGain, 3)
		if (confirm("Are you sure you want to transcend? You will lose all your gold, science, buildings, and upgrades. But will earn "+tBsToGain+" Transcendent Beings which give you 5% more gold per population."))			//makes sure you want to transcend
		{
			transcendentBeings = Math.floor((Math.pow(allTimeGold/1000000, 1/2) - 10))				//calculates how many transcendent beings you get
			gold = 10;									//all of these just reset values to beginning values except for gold/pop which gets increased by how many transcendent beings you earned.
			population = 0;
			caves = 0;
			cavesPopSec = .1;
			caveCost = 10;
			dirtHuts = 0;
			dirtHutPopSec = .5;
			dirtHutCost = 80;
			stickHuts = 0;
			stickHutPopSec = 2;
			stickHutCost = 400;
			sodHouses = 0;
			sodHousePopSec = 7.5;
			sodHouseCost = 2500;
			goldPerPop = .1*(transcendentBeings*.05+1) * (Math.pow(1.01, totalAchievements));
			fireUpgrade = false;
			unlockScienceUpgrade = false;
			unlockTier2Upgrade = false;
			science = 0;
			treehouses = 0;
			treehousePopSec = 20;
			treehouseCost = 9001;
			farms = 0;
			farmPopSec = 50;
			farmCost = 25000;
			stoneBlockHouses = 0;
			stoneBlockHousePopSec = 300;
			stoneBlockHouseCost = 2000000;
			blacksmiths = 0;
			blacksmithPopSec = 500;
			blacksmithCost = 3500000;
			bathHouses = 0;
			bathHousePopSec = 800;
			churches = 0;
			churchPopSec = 1350;
			townHalls = 0;
			townHallPopSec = 2000;
			castles = 0;
			castlePopSec = 3500;
			
			huntingUpgrade = false;
			mudUpgrade = false;
			shovelsUpgrade = false;
			sturdySticksUpgrade = false;
			axesUpgrade = false;
			wizardUpgrade = false;
			adventureUpgrade = false;
			laddersUpgrade = false;
			tallerTreesUpgrade = false;
			hoesUpgrade = false;
			domesticationUpgrade = false;
			cookieUpgrade = false;
			
			goldThisPrestige = 0;
			scienceThisPrestige = 0;
			
			buyMultiple(amountToBuy);
			
			goldToScience = 0;
			document.getElementById("goldToScienceRatio").innerHTML = (goldToScience * 100).toFixed(0);
			
			populationCapacity = 0;
			document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity,2);
			
			document.getElementById("gold").innerHTML = prettify(gold, 3);
			document.getElementById("science").innerHTML = prettify(science, 3);
			document.getElementById("population").innerHTML = prettify(population, 3);
			document.getElementById("caves").innerHTML = prettify(caves, 3);
			document.getElementById("caveCost").innerHTML = prettify(caveCost, 3);
			document.getElementById("dirtHuts").innerHTML = prettify(dirtHuts, 3);
			document.getElementById("dirtHutCost").innerHTML = prettify(dirtHutCost, 3);
			document.getElementById("stickHuts").innerHTML = prettify(stickHuts, 3);
			document.getElementById("stickHutCost").innerHTML = prettify(stickHutCost, 3);
			document.getElementById("sodHouses").innerHTML = prettify(sodHouses, 3);
			document.getElementById("sodHouseCost").innerHTML = prettify(sodHouseCost, 3);
			document.getElementById("treehouses").innerHTML = prettify(treehouses, 3);
			document.getElementById("treehouseCost").innerHTML = prettify(treehouseCost, 3);
			document.getElementById("farms").innerHTML = prettify(farms, 3);
			document.getElementById("farmCost").innerHTML = prettify(farmCost, 3);
			document.getElementById("stoneBlockHouses").innerHTML = prettify(stoneBlockHouses, 3);
			document.getElementById("stoneBlockHouseCost").innerHTML = prettify(stoneBlockHouseCost, 3);
			document.getElementById("blacksmiths").innerHTML = prettify(blacksmiths, 3);
			document.getElementById("blacksmithCost").innerHTML = prettify(blacksmithCost, 3); 
			document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
			
			$("#tier1").slideDown("slow");
			document.getElementById("tier2").style.display = "none";
			document.getElementById("tier3").style.display = "none";
			document.getElementById("tier1to2Button").style.display = "none";
			
			checkHidden();
		}
	}
	
	else							//what happens if you dont have enough all time gold to gain from a transcend.
	{
		alert("You don't have enough all time gold to transcend!")
	}
}

function prestigeChecker()			//used to show what youd get without actually updating the values.
{
	tBsToGain = Math.floor((Math.pow(allTimeGold/1000000, 1/2) - 10)) - transcendentBeings;
	if (tBsToGain > 0)
	{
		document.getElementById("tBsToGain").innerHTML = prettify(tBsToGain,3)
	}
	if (tBsToGain <= 0)
	{
		document.getElementById("tBsToGain").innerHTML = 0;
	}
	tKsToGain = Math.floor((Math.pow(allTimeGold/1000000000, 1/3) - 10)) - transcendentKnights;
	if (tKsToGain > 0)
	{
		document.getElementById("tKsToGain").innerHTML = prettify(tKsToGain, 3)
	}
	else
	{
		document.getElementById("tKsToGain").innerHTML = 0
	}
}

function calculateOffline()			//at the moment only increases gold (science) gains. might keep it like that as an incentive to stay online.
{												//pretty sure it works
	if (dailyRewardActive)
	{
		d = new Date();
		newDay = d.getTime();
		gold = (((goldPerPop)*population/2) * ((newDay - day)/1000) + gold) - ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000));
		allTimeGold = ((goldPerPop)*population/2) * ((newDay - day)/1000) + allTimeGold  - ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000));
		goldThisPrestige = ((goldPerPop)*population/2) * ((newDay - day)/1000) + goldThisPrestige  - ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000));
		science = ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000)) + science;
		allTimeScience =  ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000)) + allTimeScience;
		scienceThisPrestige =  ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000)) + scienceThisPrestige;
	};
	
	if (!dailyRewardActive)
	{
		d = new Date();
		newDay = d.getTime();
		gold = (((goldPerPop)*population) * ((newDay - day)/1000) + gold) - ((population*goldPerPop*goldToScience)*((newDay - day)/1000));
		allTimeGold = ((goldPerPop)*population) * ((newDay - day)/1000) + allTimeGold  - ((population*goldPerPop*goldToScience)*((newDay - day)/1000));
		goldThisPrestige = ((goldPerPop)*population) * ((newDay - day)/1000) + goldThisPrestige  - ((population*goldPerPop*goldToScience)*((newDay - day)/1000));
		science = ((population*goldPerPop*goldToScience)*((newDay - day)/1000)) + science;
		allTimeScience =  ((population*goldPerPop*goldToScience)*((newDay - day)/1000)) + allTimeScience;
		scienceThisPrestige =  ((population*goldPerPop*goldToScience)*((newDay - day)/1000)) + scienceThisPrestige;
	};
};

function saveGame()         //Better but still needs some work. purpose is self explanatory...
{
	/*localStorage["gold"] = JSON.encode(gold);
	localStorage["population"] = JSON.encode(population);
	localStorage["caves"] = JSON.encode(caves);
	localStorage["cavesPopSec"] = JSON.encode(cavesPopSec); */
	localStorage.setItem("gold", JSON.stringify(gold));				 //THIS WORKS I THINK!!!!
	localStorage.setItem("population", JSON.stringify(population));
	localStorage.setItem("goldPerPop", JSON.stringify(goldPerPop));			//hopefully each of these saves certain relevant values
	localStorage.setItem("allTimeGold", JSON.stringify(allTimeGold));
	localStorage.setItem("caves", JSON.stringify(caves));
	localStorage.setItem("cavesPopSec", JSON.stringify(cavesPopSec));
	localStorage.setItem("caveCost", JSON.stringify(caveCost));
	localStorage.setItem("dirtHuts", JSON.stringify(dirtHuts));
	localStorage.setItem("dirtHutPopSec", JSON.stringify(dirtHutPopSec));
	localStorage.setItem("dirtHutCost", JSON.stringify(dirtHutCost));
	localStorage.setItem("stickHuts", JSON.stringify(stickHuts));
	localStorage.setItem("stickHutPopSec", JSON.stringify(stickHutPopSec));
	localStorage.setItem("stickHutCost", JSON.stringify(stickHutCost));
	
	localStorage.setItem("goldHoarder1", JSON.stringify(goldHoarder1));
	localStorage.setItem("goldHoarder2", JSON.stringify(goldHoarder2));
	localStorage.setItem("goldHoarder3", JSON.stringify(goldHoarder3));
	localStorage.setItem("goldHoarder4", JSON.stringify(goldHoarder4));
	localStorage.setItem("goldHoarder5", JSON.stringify(goldHoarder5));
	localStorage.setItem("goldHoarder6", JSON.stringify(goldHoarder6));
	localStorage.setItem("goldHoarder7", JSON.stringify(goldHoarder7));
	localStorage.setItem("tier1Builder1", JSON.stringify(tier1Builder1));
	localStorage.setItem("tier1Builder2", JSON.stringify(tier1Builder2));
	localStorage.setItem("tier1Builder3", JSON.stringify(tier1Builder3));
	localStorage.setItem("tier1Builder4", JSON.stringify(tier1Builder4));
	localStorage.setItem("tier1Builder5", JSON.stringify(tier1Builder5));
	localStorage.setItem("tier1Builder6", JSON.stringify(tier1Builder6));
	localStorage.setItem("tier1Builder7", JSON.stringify(tier1Builder7));
	localStorage.setItem("tier2Builder1", JSON.stringify(tier2Builder1));
	localStorage.setItem("tier2Builder2", JSON.stringify(tier2Builder2));
	localStorage.setItem("tier2Builder3", JSON.stringify(tier2Builder3));
	localStorage.setItem("tier2Builder4", JSON.stringify(tier2Builder4));
	localStorage.setItem("tier2Builder5", JSON.stringify(tier2Builder5));
	localStorage.setItem("tier2Builder6", JSON.stringify(tier2Builder6));
	localStorage.setItem("tier2Builder7", JSON.stringify(tier2Builder7));
	
	localStorage.setItem("totalAchievements", JSON.stringify(totalAchievements));
	
	localStorage.setItem("fireUpgrade", JSON.stringify(fireUpgrade));
	localStorage.setItem("unlockScienceUpgrade", JSON.stringify(unlockScienceUpgrade));
	localStorage.setItem("unlockTier2Upgrade", JSON.stringify(unlockTier2Upgrade));
	localStorage.setItem("dayActivated", JSON.stringify(dayActivated));
	localStorage.setItem("timer", JSON.stringify(timer));
	localStorage.setItem("dailyRewardActive", JSON.stringify(dailyRewardActive));
	localStorage.setItem("day", JSON.stringify(day));
	localStorage.setItem("science", JSON.stringify(science));
	localStorage.setItem("allTimeScience", JSON.stringify(allTimeScience));
	localStorage.setItem("goldToScience", JSON.stringify(goldToScience));
	localStorage.setItem("transcendentBeings", JSON.stringify(transcendentBeings));
	localStorage.setItem("sodHouses", JSON.stringify(sodHouses));
	localStorage.setItem("sodHousePopSec", JSON.stringify(sodHousePopSec));
	localStorage.setItem("sodHouseCost", JSON.stringify(sodHouseCost));
	localStorage.setItem("treehouses", JSON.stringify(treehouses));
	localStorage.setItem("treehousePopSec", JSON.stringify(treehousePopSec));
	localStorage.setItem("treehouseCost", JSON.stringify(treehouseCost));
	localStorage.setItem("farms", JSON.stringify(farms));
	localStorage.setItem("farmPopSec", JSON.stringify(farmPopSec));
	localStorage.setItem("farmCost", JSON.stringify(farmCost));
	localStorage.setItem("stoneBlockHouses", JSON.stringify(stoneBlockHouses));
	localStorage.setItem("stoneBlockHousePopSec", JSON.stringify(stoneBlockHousePopSec));
	localStorage.setItem("stoneBlockHouseCost", JSON.stringify(stoneBlockHouseCost));
	localStorage.setItem("blacksmiths", JSON.stringify(blacksmiths));
	localStorage.setItem("blacksmithPopSec", JSON.stringify(blacksmithPopSec));
	localStorage.setItem("blacksmithCost", JSON.stringify(blacksmithCost));
	localStorage.setItem("transcendentKnights", JSON.stringify(transcendentKnights));
	localStorage.setItem("bathHouses", JSON.stringify(bathHouses));
	localStorage.setItem("bathHousePopSec", JSON.stringify(bathHousePopSec));
	localStorage.setItem("churches", JSON.stringify(churches));
	localStorage.setItem("churchPopSec", JSON.stringify(churchPopSec));
	localStorage.setItem("townHalls", JSON.stringify(townHalls));
	localStorage.setItem("townHallPopSec", JSON.stringify(townHallPopSec));
	localStorage.setItem("castles", JSON.stringify(castles));
	localStorage.setItem("castlePopSec", JSON.stringify(castlePopSec));
	
	localStorage.setItem("huntingUpgrade", JSON.stringify(huntingUpgrade));
	localStorage.setItem("mudUpgrade", JSON.stringify(mudUpgrade));
	localStorage.setItem("shovelsUpgrade", JSON.stringify(shovelsUpgrade));
	localStorage.setItem("sturdySticksUpgrade", JSON.stringify(sturdySticksUpgrade));
	localStorage.setItem("axesUpgrade", JSON.stringify(axesUpgrade));
	localStorage.setItem("wizardUpgrade", JSON.stringify(wizardUpgrade));
	localStorage.setItem("adventureUpgrade", JSON.stringify(adventureUpgrade));
	localStorage.setItem("laddersUpgrade", JSON.stringify(laddersUpgrade));
	localStorage.setItem("tallerTreesUpgrade", JSON.stringify(tallerTreesUpgrade));
	localStorage.setItem("hoesUpgrade", JSON.stringify(hoesUpgrade));
	localStorage.setItem("domesticationUpgrade", JSON.stringify(domesticationUpgrade));
	localStorage.setItem("cookieUpgrade", JSON.stringify(cookieUpgrade));
	
	localStorage.setItem("goldThisPrestige", JSON.stringify(goldThisPrestige));
	localStorage.setItem("scienceThisPrestige", JSON.stringify(scienceThisPrestige));
	
	localStorage.setItem("populationCapacity", JSON.stringify(populationCapacity));
	
	gameSaved1 = true
	localStorage.setItem("gameSaved1", JSON.stringify(gameSaved1));
};

function loadGame()			//again self explanatory.
{
	/*var gold = JSON.decode(localStorage["gold"]);
	var population = JSON.decode(localStorage["population"]);
	var caves = JSON.decode(localStorage["caves"]);
	var cavesPopSec = JSON.decode(localStorage["cavesPopSec"]) */
	gold = JSON.parse(localStorage.getItem("gold"));
	population = JSON.parse(localStorage.getItem("population"));						//loads each value
	goldPerPop= JSON.parse(localStorage.getItem("goldPerPop"));
	allTimeGold = JSON.parse(localStorage.getItem("allTimeGold"));						//need to add some stuff so it auto updates things like
	caves = JSON.parse(localStorage.getItem("caves"));											//how many caves i own, price of upgrades.
	cavesPopSec = JSON.parse(localStorage.getItem("cavesPopSec"));
	caveCost = JSON.parse(localStorage.getItem("caveCost"));
	dirtHuts = JSON.parse(localStorage.getItem("dirtHuts"));
	dirtHutPopSec = JSON.parse(localStorage.getItem("dirtHutPopSec"));
	dirtHutCost = JSON.parse(localStorage.getItem("dirtHutCost"));
	stickHuts = JSON.parse(localStorage.getItem("stickHuts"));
	stickHutPopSec = JSON.parse(localStorage.getItem("stickHutPopSec"));
	stickHutCost = JSON.parse(localStorage.getItem("stickHutCost"));
	
	goldHoarder1 = JSON.parse(localStorage.getItem("goldHoarder1"));
	goldHoarder2 = JSON.parse(localStorage.getItem("goldHoarder2"));
	goldHoarder3 = JSON.parse(localStorage.getItem("goldHoarder3"));
	goldHoarder4 = JSON.parse(localStorage.getItem("goldHoarder4"));
	goldHoarder5 = JSON.parse(localStorage.getItem("goldHoarder5"));
	goldHoarder6 = JSON.parse(localStorage.getItem("goldHoarder6"));
	goldHoarder7 = JSON.parse(localStorage.getItem("goldHoarder7"));
	tier1Builder1 = JSON.parse(localStorage.getItem("tier1Builder1"));
	tier1Builder2 = JSON.parse(localStorage.getItem("tier1Builder2"));
	tier1Builder3 = JSON.parse(localStorage.getItem("tier1Builder3"));
	tier1Builder4 = JSON.parse(localStorage.getItem("tier1Builder4"));
	tier1Builder5 = JSON.parse(localStorage.getItem("tier1Builder5"));
	tier1Builder6 = JSON.parse(localStorage.getItem("tier1Builder6"));
	tier1Builder7 = JSON.parse(localStorage.getItem("tier1Builder7"));
	tier2Builder1 = JSON.parse(localStorage.getItem("tier2Builder1"));
	tier2Builder2 = JSON.parse(localStorage.getItem("tier2Builder2"));
	tier2Builder3 = JSON.parse(localStorage.getItem("tier2Builder3"));
	tier2Builder4 = JSON.parse(localStorage.getItem("tier2Builder4"));
	tier2Builder5 = JSON.parse(localStorage.getItem("tier2Builder5"));
	tier2Builder6 = JSON.parse(localStorage.getItem("tier2Builder6"));
	tier2Builder7 = JSON.parse(localStorage.getItem("tier2Builder7"));
	
	totalAchievements = JSON.parse(localStorage.getItem("totalAchievements"));
	
	fireUpgrade = JSON.parse(localStorage.getItem("fireUpgrade"));
	unlockScienceUpgrade = JSON.parse(localStorage.getItem("unlockScienceUpgrade"));
	unlockTier2Upgrade = JSON.parse(localStorage.getItem("unlockTier2Upgrade"));
	dayActivated = JSON.parse(localStorage.getItem("dayActivated"));
	timer = JSON.parse(localStorage.getItem("timer"));
	dailyRewardActive = JSON.parse(localStorage.getItem("dailyRewardActive"));
	day = JSON.parse(localStorage.getItem("day"));
	science = JSON.parse(localStorage.getItem("science"));
	allTimeScience = JSON.parse(localStorage.getItem("allTimeScience"));
	goldToScience = JSON.parse(localStorage.getItem("goldToScience"));
	transcendentBeings = JSON.parse(localStorage.getItem("transcendentBeings"));
	sodHouses = JSON.parse(localStorage.getItem("sodHouses"));
	sodHousePopSec = JSON.parse(localStorage.getItem("sodHousePopSec"));
	sodHouseCost = JSON.parse(localStorage.getItem("sodHouseCost"));
	treehouses = JSON.parse(localStorage.getItem("treehouses"));
	treehousePopSec = JSON.parse(localStorage.getItem("treehousePopSec"));
	treehouseCost = JSON.parse(localStorage.getItem("treehouseCost"));
	farms = JSON.parse(localStorage.getItem("farms"));
	farmPopSec = JSON.parse(localStorage.getItem("farmPopSec"));
	farmCost = JSON.parse(localStorage.getItem("farmCost"));
	stoneBlockHouses = JSON.parse(localStorage.getItem("stoneBlockHouses"));
	stoneBlockHousePopSec = JSON.parse(localStorage.getItem("stoneBlockHousePopSec"));
	stoneBlockHouseCost = JSON.parse(localStorage.getItem("stoneBlockHouseCost"));
	blacksmiths = JSON.parse(localStorage.getItem("blacksmiths"));
	blacksmithPopSec = JSON.parse(localStorage.getItem("blacksmithPopSec"));
	blacksmithCost = JSON.parse(localStorage.getItem("blacksmithCost"));
	transcendentKnights = JSON.parse(localStorage.getItem("transcendentKnights"));
	bathHouses = JSON.parse(localStorage.getItem("bathHouses"));
	bathHousePopSec = JSON.parse(localStorage.getItem("bathHousePopSec"));
	churches = JSON.parse(localStorage.getItem("churches"));
	churchPopSec = JSON.parse(localStorage.getItem("churchPopSec"));
	townHalls = JSON.parse(localStorage.getItem("townHalls"));
	townHallPopSec = JSON.parse(localStorage.getItem("townHallPopSec"));
	castles = JSON.parse(localStorage.getItem("castles"));
	castlePopSec = JSON.parse(localStorage.getItem("castlePopSec"));
	
	huntingUpgrade = JSON.parse(localStorage.getItem("huntingUpgrade"));
	mudUpgrade = JSON.parse(localStorage.getItem("mudUpgrade"));
	shovelsUpgrade = JSON.parse(localStorage.getItem("shovelsUpgrade"));
	sturdySticksUpgrade = JSON.parse(localStorage.getItem("sturdySticksUpgrade"));
	axesUpgrade = JSON.parse(localStorage.getItem("axesUpgrade"));
	wizardUpgrade = JSON.parse(localStorage.getItem("wizardUpgrade"));
	adventureUpgrade = JSON.parse(localStorage.getItem("adventureUpgrade"));
	laddersUpgrade = JSON.parse(localStorage.getItem("laddersUpgrade"));
	tallerTreesUpgrade = JSON.parse(localStorage.getItem("tallerTreesUpgrade"));
	hoesUpgrade = JSON.parse(localStorage.getItem("hoesUpgrade"));
	domesticationUpgrade = JSON.parse(localStorage.getItem("domesticationUpgrade"));
	cookieUpgrade = JSON.parse(localStorage.getItem("cookieUpgrade"));
	
	
	goldThisPrestige = JSON.parse(localStorage.getItem("goldThisPrestige"));
	scienceThisPrestige = JSON.parse(localStorage.getItem("scienceThisPrestige"))
	
	populationCapacity = JSON.parse(localStorage.getItem("populationCapacity"));
	document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity,2);
	
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
	document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
	document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
	
	calculateOffline()						//adds what you wouldve gained while you were offline.
	
	
	buyMultiple(1);
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	document.getElementById("sodHouses").innerHTML = sodHouses;
	document.getElementById("treehouses").innerHTML = treehouses;
	document.getElementById("farms").innerHTML = farms;
	document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
	document.getElementById("blacksmiths").innerHTML = blacksmiths;
	document.getElementById("bathHouses").innerHTML = bathHouses;
	document.getElementById("churches").innerHTML = churches;
	document.getElementById("townHalls").innerHTML = townHalls;
	document.getElementById("castles").innerHTML = castles;
	
	document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	
	checkHidden();
};

function exportGame()			//could very easily have some unknown problem but for now i believe it works!
{
	window.prompt("Copy this and keep it safe!", window.btoa(JSON.stringify([gold , population, goldPerPop, allTimeGold, caves, cavesPopSec, caveCost, dirtHuts, dirtHutPopSec, dirtHutCost, stickHuts, stickHutPopSec, stickHutCost, goldHoarder1, goldHoarder2, goldHoarder3, fireUpgrade, unlockScienceUpgrade, unlockTier2Upgrade, dayActivated, timer, dailyRewardActive, day, science, allTimeScience, goldToScience, transcendentBeings, sodHouses, sodHousePopSec, sodHouseCost, treehouses, treehousePopSec, treehouseCost, farms, farmPopSec, farmCost, stoneBlockHouses, stoneBlockHousePopSec, stoneBlockHouseCost, blacksmiths, blacksmithPopSec, blacksmithCost, transcendentKnights, populationCapacity, bathHouses, bathHousePopSec, churches, churchPopSec, townHalls, townHallPopSec, castles, castlePopSec, huntingUpgrade, mudUpgrade, shovelsUpgrade, sturdySticksUpgrade, axesUpgrade, wizardUpgrade, adventureUpgrade, laddersUpgrade, tallerTreesUpgrade, hoesUpgrade, domesticationUpgrade, cookieUpgrade, totalAchievements, goldHoarder4, goldHoarder5, goldHoarder6, goldHoarder7, tier1Builder1, tier1Builder2, tier1Builder3, tier1Builder4, tier1Builder5, tier1Builder6, tier1Builder7, tier2Builder1, tier2Builder2, tier2Builder3, tier2Builder4, tier2Builder5, tier2Builder6, tier2Builder7])))																																				
	//basically whats going on here is:
	//made an array with all important variables saved in it
	//stringified the array with JSON.stringify
	//converted to 64bit something or another with window.btoa
	//and outputted it as a big mess of code
};

function importGame()
{
		//here user inputs their messy code
	gameData = window.prompt("Paste your export code here!", "placeholder")
		//here the messy 64bit or whatever code is made into a string with window.atob
		//then JSON.parse turns it back into an array
		//then i go through each array value and set it to its proper variable.
		//may have some kinks but i believe it is good enough for now!
	saveArray = JSON.parse(window.atob(gameData)) 	
	gold = saveArray[0]
	population = saveArray[1]
	goldPerPop = saveArray[2]
	allTimeGold = saveArray[3]
	caves = saveArray[4]
	cavesPopSec = saveArray[5]
	caveCost = saveArray[6]
	dirtHuts = saveArray[7]
	dirtHutPopSec = saveArray[8]
	dirtHutCost = saveArray[9]
	stickHuts = saveArray[10]
	stickHutPopSec = saveArray[11]
	stickHutCost = saveArray[12]
	goldHoarder1 = saveArray[13]
	goldHoarder2 = saveArray[14]
	goldHoarder3 = saveArray[15]
	fireUpgrade = saveArray[16]
	unlockScienceUpgrade = saveArray[17]
	unlockTier2Upgrade = saveArray[18]
	dayActivated = saveArray[19]
	timer = saveArray[20]
	dailyRewardActive = saveArray[21]
	day = saveArray[22]
	science = saveArray[23]
	allTimeScience = saveArray[24]
	goldToScience = saveArray[25]
	transcendentBeings = saveArray[26]
	sodHouses = saveArray[27]
	sodHousePopSec = saveArray[28]
	sodHouseCost = saveArray[29]
	treehouses = saveArray[30]
	treehousePopSec = saveArray[31]
	treehouseCost = saveArray[32]
	farms = saveArray[33]
	farmPopSec = saveArray[34]
	farmCost = saveArray[35]
	stoneBlockHouses = saveArray[36]
	stoneBlockHousePopSec = saveArray[37]
	stoneBlockHouseCost = saveArray[38]
	blacksmiths = saveArray[39]
	blacksmithPopSec = saveArray[40]
	blacksmithCost = saveArray[41]
	transcendentKnights = saveArray[42]
	populationCapacity = saveArray[43]
	bathHouses = saveArray[44]
	bathHousePopSec = saveArray[45]
	churches = saveArray[46]
	churchPopSec = saveArray[47]
	townHalls = saveArray[48]
	townHallPopSec = saveArray[49]
	castles = saveArray[50]
	castlePopSec = saveArray[51]
	huntingUpgrade = saveArray[52]
	mudUpgrade = saveArray[53]
	shovelsUpgrade =  saveArray[54]
	sturdySticksUpgrade = saveArray[55]
	axesUpgrade = saveArray[56]
	wizardUpgrade = saveArray[57]
	adventureUpgrade = saveArray[58]
	laddersUpgrade = saveArray[59]
	tallerTreesUpgrade = saveArray[60]
	hoesUpgrade = saveArray[61]
	domesticationUpgrade = saveArray[62]
	cookieUpgrade = saveArray[63]
	totalAchievements = saveArray[64]
	goldHoarder4 = saveArray[65]
	goldHoarder5 = saveArray[66]
	goldHoarder6 = saveArray[67]
	goldHoarder7 = saveArray[68]
	tier1Builder1 = saveArray[69]
	tier1Builder2 = saveArray[70]
	tier1Builder3 = saveArray[71]
	tier1Builder4 = saveArray[72]
	tier1Builder5 = saveArray[73]
	tier1Builder6 = saveArray[74]
	tier1Builder7 = saveArray[75]
	tier2Builder1 = saveArray[76]
	tier2Builder2 = saveArray[77]
	tier2Builder3 = saveArray[78]
	tier2Builder4 = saveArray[79]
	tier2Builder5 = saveArray[80]
	tier2Builder6 = saveArray[81]
	tier2Builder7 = saveArray[82]
	
	document.getElementById("populationCapacity").innerHTML = prettify(populationCapacity,2);
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
	document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
	document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
	
	calculateOffline()						//adds what you wouldve gained while you were offline.
	
	
	buyMultiple(1);
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	document.getElementById("sodHouses").innerHTML = sodHouses;
	document.getElementById("treehouses").innerHTML = treehouses;
	document.getElementById("farms").innerHTML = farms;
	document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
	document.getElementById("blacksmiths").innerHTML = blacksmiths;
	document.getElementById("bathHouses").innerHTML = bathHouses;
	document.getElementById("churches").innerHTML = churches;
	document.getElementById("townHalls").innerHTML = townHalls;
	document.getElementById("castles").innerHTML = castles;
	
	document.getElementById("achievementBoost").innerHTML = prettify(Math.pow(1.02, totalAchievements)*100, 2);
	
	checkHidden()
}

function prettify(number, decPlaces)			//makes the numbers pretty!!
{
	x = 0
	while (number >= 999.999)							//checks to see if the number is above 1000. if it is it makes it smaller.
	{
		number = number / 1000;					
		x = x + 1;										//used to record how many times it is made smaller.
	};
	switch(x)					//depending on how many times the number is made smaller it gets a name after it!
	{
		case 0:
			x = ""
			break;
		case 1:
			x = "Thousand"
			break;
		case 2:
			x = "Million"
			break;
		case 3:
			x = "Billion"
			break;
		case 4:
			x = "Trillion"
			break;
		case 5:
			x = "Quadrillion"
			break;
		case 6:
			x = "Quintillion"
			break;
		case 7:
			x = "Sextillion"
			break;
		case 8:
			x = "Septillion"
			break;
		case 9:
			x = "Octillion"
			break;
		case 10:
			x = "Nonillion"
			break;
		case 11:
			x = "Decillion"
			break;
		case 12:
			x = "Undecillion"
			break;
		case 13:
			x = "Duodecillion"
			break;
		case 14:
			x = "Tredecillion"
			break;
		default:											//used so if someone gets too high of a number it will still show something rather than nothing.
			x = "*10^"+(x*3)
	};
	return (number.toFixed(decPlaces)+" "+x)		//finishes it all up with how many decimal places i think a number needs based on what i sent it.
};

checkHidden()

function checkHidden()
{
	if (goldThisPrestige > 20)
	{
		$(document).ready(function()
		{
			$("#dirtHut").fadeIn(1000);
		});
		document.getElementById("dirtHut").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 20)
	{
		document.getElementById("dirtHut").style.display = "none";
	}
	
	if (goldThisPrestige > 100)
	{
		$(document).ready(function()
		{
			$("#stickHut").fadeIn(1000);
		});
		document.getElementById("stickHut").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 100)
	{
		document.getElementById("stickHut").style.display = "none";
	}
	
	if (goldThisPrestige > 500)
	{
		$(document).ready(function()
		{
			$("#sodHouse").fadeIn(1000);
		});
		document.getElementById("sodHouse").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 500)
	{
		document.getElementById("sodHouse").style.display = "none";
	}
	
	if (goldThisPrestige > 4000)
	{
		$(document).ready(function()
		{
			$("#treehouse").fadeIn(1000);
		});
		document.getElementById("treehouse").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 4000)
	{
		document.getElementById("treehouse").style.display = "none";
	}
	
	if (goldThisPrestige > 13000)
	{
		$(document).ready(function()
		{
			$("#farm").fadeIn(1000);
		});
		document.getElementById("farm").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 13000)
	{
		document.getElementById("farm").style.display = "none";
	}
	
	if (goldThisPrestige > 15000)
	{
		$(document).ready(function()
		{
			$("#tier1to2Button").fadeIn(1000);
		});
		document.getElementById("tier1to2Button").style.display = "inline-block";
	}
	
	if (goldThisPrestige > 2000000)
	{
		$(document).ready(function()
		{
			$("#blacksmith").fadeIn(1000);
		});
		document.getElementById("blacksmith").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 2000000)
	{
		document.getElementById("blacksmith").style.display = "none";
	}
	
	if (goldThisPrestige > 3500000)
	{
		$(document).ready(function()
		{
			$("#bathHouse").fadeIn(1000);
		});
		document.getElementById("bathHouse").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 3500000)
	{
		document.getElementById("bathHouse").style.display = "none";
	}
	
	if (goldThisPrestige > 7500000)
	{
		$(document).ready(function()
		{
			$("#church").fadeIn(1000);
		});
		document.getElementById("church").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 7500000)
	{
		document.getElementById("church").style.display = "none";
	}
	
	if (goldThisPrestige > 14000000)
	{
		$(document).ready(function()
		{
			$("#townHall").fadeIn(1000);
		});
		document.getElementById("townHall").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 14000000)
	{
		document.getElementById("townHall").style.display = "none";
	}
	
	if (goldThisPrestige > 25000000)
	{
		$(document).ready(function()
		{
			$("#castle").fadeIn(1000);
		});
		document.getElementById("castle").style.display = "inline-block";
	}
	
	if (goldThisPrestige < 25000000)
	{
		document.getElementById("castle").style.display = "none";
	}
	
	if (fireUpgrade)
	{
		document.getElementById("fireUpgrade").style.display="none";
	}
	
	if (unlockScienceUpgrade)
	{
		document.getElementById("scienceStuff1").style.display = "inline-block"
		document.getElementById("scienceStuff2").style.display = "inline-block"
		document.getElementById("scienceStuff3").style.display = "inline-block"
		document.getElementById("scienceStuff4").style.display = "inline-block"
		document.getElementById("unlockScienceUpgrade").style.display = "none"
	}
	
	if (!unlockScienceUpgrade)
	{
		document.getElementById("unlockScienceUpgrade").style.display = "inline-block"
		document.getElementById("scienceStuff1").style.display = "none"
		document.getElementById("scienceStuff2").style.display = "none"
		document.getElementById("scienceStuff3").style.display = "none"
		document.getElementById("scienceStuff4").style.display = "none"
	}
	
	if (scienceThisPrestige > 0 && (!fireUpgrade))
	{
		$(document).ready(function()
		{
			$("#fireUpgrade").fadeIn(1000);
		});
		document.getElementById("fireUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 100 && (!huntingUpgrade))
	{
		$(document).ready(function()
		{
			$("#huntingUpgrade").fadeIn(1000);
		});
		document.getElementById("huntingUpgrade").style.display = "inline-block";
	}
	
	if (huntingUpgrade)
	{
		document.getElementById("huntingUpgrade").style.display = "none";
	}
	
	if (scienceThisPrestige > 250 && (!mudUpgrade))
	{
		$(document).ready(function()
		{
			$("#mudUpgrade").fadeIn(1000);
		});
		document.getElementById("mudUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 400 && (!shovelsUpgrade))
	{
		$(document).ready(function()
		{
			$("#shovelsUpgrade").fadeIn(1000);
		});
		document.getElementById("shovelsUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 700 && (!sturdySticksUpgrade))
	{
		$(document).ready(function()
		{
			$("#sturdySticksUpgrade").fadeIn(1000);
		});
		document.getElementById("sturdySticksUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 1000 && (!axesUpgrade))
	{
		$(document).ready(function()
		{
			$("#axesUpgrade").fadeIn(1000);
		});
		document.getElementById("axesUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 1500 && (!wizardUpgrade))
	{
		$(document).ready(function()
		{
			$("#wizardUpgrade").fadeIn(1000);
		});
		document.getElementById("wizardUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 3000 && (!adventureUpgrade))
	{
		$(document).ready(function()
		{
			$("#adventureUpgrade").fadeIn(1000);
		});
		document.getElementById("adventureUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 5000 && (!laddersUpgrade))
	{
		$(document).ready(function()
		{
			$("#laddersUpgrade").fadeIn(1000);
		});
		document.getElementById("laddersUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 20000 && (!tallerTreesUpgrade))
	{
		$(document).ready(function()
		{
			$("#tallerTreesUpgrade").fadeIn(1000);
		});
		document.getElementById("tallerTreesUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 30000 && (!hoesUpgrade))
	{
		$(document).ready(function()
		{
			$("#hoesUpgrade").fadeIn(1000);
		});
		document.getElementById("hoesUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 50000 && (!domesticationUpgrade))
	{
		$(document).ready(function()
		{
			$("#domesticationUpgrade").fadeIn(1000);
		});
		document.getElementById("domesticationUpgrade").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 75000 && (!cookieUpgrade))
	{
		$(document).ready(function()
		{
			$("#cookieUpgrade").fadeIn(1000);
		});
		document.getElementById("cookieUpgrade").style.display = "inline-block";
	}
	
	if (cookieUpgrade)
	{
		document.getElementById("gamblingTab").style.display = "inline-block";
	}
	
	if (scienceThisPrestige > 250000 && (!unlockTier2Upgrade))
	{
		$(document).ready(function()
		{
			$("#unlockTier2Upgrade").fadeIn(1000);
		});
		document.getElementById("unlockTier2Upgrade").style.display = "inline-block";
	}
	
	if (unlockTier2Upgrade)
	{
		document.getElementById("tier1To2Notification").innerHTML = " "
	}
	
	if (goldThisPrestige > 100)
	{
		document.getElementById("upgradesTab").style.display = "inline-block";
		$("upgradesTab").fadeIn();
	}
	
	if (allTimeGold > 100000000)
	{
		document.getElementById("transcendTab").style.display = "inline-block";
		$("transcendTab").fadeIn();
	}
}


$(document).ready(function()       				//tier 1 to 2 button
{
	$("#tier1to2Button").click(function()
	{
		if (unlockTier2Upgrade)
		{
			$("#tier1").slideUp("slow");
			//$("#tier2").fadeIn(2000);
			$("#tier2").slideDown("slow");
		}
	});
});

$(document).ready(function()						//tier 2 to 1 button
{
	$("#tier2to1Button").click(function()
	{
		$("#tier2").slideUp("slow");
		//$("#tier1").fadeIn();
		$("#tier1").slideDown("slow");
	});
});

$(document).ready(function()						//tier 2 to 3 button
{
	$("#tier2to3Button").click(function()
	{
		$("#tier2").slideUp("slow");
		//$("#tier1").fadeIn();
		$("#tier3").slideDown("slow");
	});
});

$(document).ready(function()						//tier 3 to 2 button
{
	$("#tier3to2Button").click(function()
	{
		$("#tier3").slideUp("slow");
		//$("#tier1").fadeIn();
		$("#tier2").slideDown("slow");
	});
});



//tabs stuff below. lengthy but pretty simple

function buildingsTab()
{
	//document.getElementById("buildings").style.display = "inline";
	$("#buildings").fadeIn();
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("achievements").style.display = "none";
	document.getElementById("transcendence").style.display = "none";
	document.getElementById("gambling").style.display = "none";
	document.getElementById("settings").style.display= "none";
	document.getElementById("buildingsTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("upgradesTab").style.backgroundColor = "#dedbde";
	document.getElementById("achievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("transcendTab").style.backgroundColor = "#dedbde";
	document.getElementById("gamblingTab").style.backgroundColor = "#dedbde";
	document.getElementById("settingsTab").style.backgroundColor = "#dedbde";
}

function buildingMouseOver()
{
	//$("#buildings").fadeIn();
}

function buildingMouseOut()
{
	//$("#buildings").fadeOut(100);
}

function upgradeMouseOver()
{
	//$("#upgrades").fadeIn();
}

function upgradeMouseOut()
{
	//$("#upgrades").fadeOut(100);
}

function upgradesTab()
{
	document.getElementById("buildings").style.display = "none";
	//document.getElementById("upgrades").style.display = "inline";
	$("#upgrades").fadeIn();
	document.getElementById("achievements").style.display = "none";
	document.getElementById("transcendence").style.display = "none";
	document.getElementById("gambling").style.display = "none";
	document.getElementById("settings").style.display= "none";
	document.getElementById("buildingsTab").style.backgroundColor = "#dedbde";
	document.getElementById("upgradesTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("achievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("transcendTab").style.backgroundColor = "#dedbde";
	document.getElementById("gamblingTab").style.backgroundColor = "#dedbde";
	document.getElementById("settingsTab").style.backgroundColor = "#dedbde";
}

function achievementsTab()
{
	document.getElementById("buildings").style.display = "none";
	document.getElementById("upgrades").style.display = "none";
	//document.getElementById("achievements").style.display = "inline";
	$("#achievements").fadeIn();
	document.getElementById("transcendence").style.display = "none";
	document.getElementById("gambling").style.display = "none";
	document.getElementById("settings").style.display= "none";
	document.getElementById("buildingsTab").style.backgroundColor = "#dedbde";
	document.getElementById("upgradesTab").style.backgroundColor = "#dedbde";
	document.getElementById("achievementsTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("transcendTab").style.backgroundColor = "#dedbde";
	document.getElementById("gamblingTab").style.backgroundColor = "#dedbde";
	document.getElementById("settingsTab").style.backgroundColor = "#dedbde";
}

function goldHoarderTab()
{
	$("#goldHoarderAchievements").fadeIn();
	document.getElementById("tier1Achievements").style.display = "none";
	document.getElementById("tier2Achievements").style.display = "none";
	
	document.getElementById("goldHoarderTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("tier1AchievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("tier2AchievementsTab").style.backgroundColor = "#dedbde";
}

function tier1AchievementsTab()
{
	document.getElementById("goldHoarderAchievements").style.display = "none";
	$("#tier1Achievements").fadeIn();
	document.getElementById("tier2Achievements").style.display = "none";
	
	document.getElementById("goldHoarderTab").style.backgroundColor = "#dedbde";
	document.getElementById("tier1AchievementsTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("tier2AchievementsTab").style.backgroundColor = "#dedbde";
}

function tier2AchievementsTab()
{
	document.getElementById("goldHoarderAchievements").style.display = "none";
	document.getElementById("tier1Achievements").style.display = "none";
	$("#tier2Achievements").fadeIn();
	
	document.getElementById("goldHoarderTab").style.backgroundColor = "#dedbde";
	document.getElementById("tier1AchievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("tier2AchievementsTab").style.backgroundColor = "#f1f0ee";
}

function transcendTab()
{
	document.getElementById("buildings").style.display = "none";
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("achievements").style.display = "none";
	//document.getElementById("transcendence").style.display = "inline";
	$("#transcendence").fadeIn();
	document.getElementById("gambling").style.display = "none";
	document.getElementById("settings").style.display= "none";
	document.getElementById("buildingsTab").style.backgroundColor = "#dedbde";
	document.getElementById("upgradesTab").style.backgroundColor = "#dedbde";
	document.getElementById("achievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("transcendTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("gamblingTab").style.backgroundColor = "#dedbde";
	document.getElementById("settingsTab").style.backgroundColor = "#dedbde";
}

function gamblingTab()
{
	document.getElementById("buildings").style.display = "none";
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("achievements").style.display = "none";
	document.getElementById("transcendence").style.display = "none";
	//document.getElementById("gambling").style.display = "inline";
	$("#gambling").fadeIn();
	document.getElementById("settings").style.display= "none";
	document.getElementById("buildingsTab").style.backgroundColor = "#dedbde";
	document.getElementById("upgradesTab").style.backgroundColor = "#dedbde";
	document.getElementById("achievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("transcendTab").style.backgroundColor = "#dedbde";
	document.getElementById("gamblingTab").style.backgroundColor = "#f1f0ee";
	document.getElementById("settingsTab").style.backgroundColor = "#dedbde";
}

function settingsTab()
{
	document.getElementById("buildings").style.display = "none";
	document.getElementById("upgrades").style.display = "none";
	document.getElementById("achievements").style.display = "none";
	document.getElementById("transcendence").style.display = "none";
	document.getElementById("gambling").style.display = "none";
	//document.getElementById("settings").style.display= "inline";
	$("#settings").fadeIn();
	document.getElementById("buildingsTab").style.backgroundColor = "#dedbde";
	document.getElementById("upgradesTab").style.backgroundColor = "#dedbde";
	document.getElementById("achievementsTab").style.backgroundColor = "#dedbde";
	document.getElementById("transcendTab").style.backgroundColor = "#dedbde";
	document.getElementById("gamblingTab").style.backgroundColor = "#dedbde";
	document.getElementById("settingsTab").style.backgroundColor = "#f1f0ee";
}

function mOver(obj)									//function to make menu popup when mousing over stuff
{
	$(document).mousemove(function(event){
		$(obj).css({"top":event.pageY+15, "left":event.pageX+15});
	});
	$(obj).fadeIn();
}

function mOverTier2Bar(obj)
{
	if (!unlockTier2Upgrade)
	{
		$(document).mousemove(function(event){
		$(obj).css({"top":event.pageY+15, "left":event.pageX+15});
		});
		$(obj).fadeIn();
	}
}

function mOut(obj)										//function to make pop up menus go away
{
	$(obj).fadeOut(0);
}

function mOutTier2Bar(obj)
{
	
	$(obj).fadeOut(0);

}

function higherLowerStart()
{
	
	higherLowerRoll1a = Math.ceil(6*Math.random())
	higherLowerRoll2a = Math.ceil(6*Math.random())
	higherLowerRoll3a = Math.ceil(6*Math.random())
	higherLowerTotala = higherLowerRoll1a + higherLowerRoll2a + higherLowerRoll3a
	document.getElementById("higherLowerRolls").style.display = "inline";
	document.getElementById("higherLowerRoll1").innerHTML = "Roll 1: "+higherLowerRoll1a;
	document.getElementById("higherLowerRoll2").innerHTML = "Roll 2: "+higherLowerRoll2a;
	document.getElementById("higherLowerRoll3").innerHTML = "Roll 3: "+higherLowerRoll3a;
	document.getElementById("higherLowerTotal").innerHTML = "Total: "+higherLowerTotala;
	document.getElementById("higherLowerStart").style.display = "none";
}

function higher()
{
	bet = betPercent * gold
	higherLowerRoll1b = Math.ceil(6*Math.random())
	higherLowerRoll2b = Math.ceil(6*Math.random())
	higherLowerRoll3b = Math.ceil(6*Math.random())
	higherLowerTotalb = higherLowerRoll1b + higherLowerRoll2b + higherLowerRoll3b
	document.getElementById("higherLowerRoll1").innerHTML = "Roll 1: "+higherLowerRoll1b;
	document.getElementById("higherLowerRoll2").innerHTML = "Roll 2: "+higherLowerRoll2b;
	document.getElementById("higherLowerRoll3").innerHTML = "Roll 3: "+higherLowerRoll3b;
	document.getElementById("higherLowerTotal").innerHTML = "Total: "+higherLowerTotalb;
	if (higherLowerTotalb > higherLowerTotala)
	{
		document.getElementById("higherLowerWinnings").innerHTML = "Winnings: "+prettify(bet, 3)+" Gold";
		gold = bet + gold;
		//document.getElementById("higherLowerStart").style.display = "inline"
		higherLowerTotala = higherLowerTotalb
	}
	
	else
	{
		document.getElementById("higherLowerWinnings").innerHTML = "Sorry you lost: "+prettify(bet, 3)+ " Gold";
		gold = gold - bet;
		//document.getElementById("higherLowerStart").style.display = "inline"
		higherLowerTotala = higherLowerTotalb
	}
}

function lower()
{
	bet = betPercent * gold
	higherLowerRoll1b = Math.ceil(6*Math.random())
	higherLowerRoll2b = Math.ceil(6*Math.random())
	higherLowerRoll3b = Math.ceil(6*Math.random())
	higherLowerTotalb = higherLowerRoll1b + higherLowerRoll2b + higherLowerRoll3b
	document.getElementById("higherLowerRoll1").innerHTML = "Roll 1: "+higherLowerRoll1b;
	document.getElementById("higherLowerRoll2").innerHTML = "Roll 2: "+higherLowerRoll2b;
	document.getElementById("higherLowerRoll3").innerHTML = "Roll 3: "+higherLowerRoll3b;
	document.getElementById("higherLowerTotal").innerHTML = "Total: "+higherLowerTotalb;
	
	if (higherLowerTotalb < higherLowerTotala)
	{
		document.getElementById("higherLowerWinnings").innerHTML = "Winnings: "+prettify(bet, 3)+" Gold";
		gold = bet + gold;
		//document.getElementById("higherLowerStart").style.display = "inline"
		higherLowerTotala = higherLowerTotalb
	}
	
	else
	{
		document.getElementById("higherLowerWinnings").innerHTML = "Sorry you lost: "+prettify(bet, 3)+ " Gold";
		gold = gold - bet;
		//document.getElementById("higherLowerStart").style.display = "inline"
		higherLowerTotala = higherLowerTotalb
	}
}


window.setInterval(function()
{
	checkHidden();
	checkAchieve();
}, 1000)



window.setInterval(function()			//main game function as of now. 
{
	y = new Date();				//gets the time when the interval starts
	time2 = y.getTime();			//converts the time to a value
	
	timeBetweenTicks = Math.round(((time2-time1)/1000)*1000)/1000  			//finds the differences between times and rounds it. used to calculate gains regardless of how fast the interval is actually running. should be accurate to within 1 thousandth of a second
	
	x = new Date();						//gets the time at the end of the interval
	time1 = x.getTime();			//makes it a value
	
	buildingPopulation(caves, cavesPopSec*timeBetweenTicks);		//activates the gaining pop function
	populationGold(goldPerPop*timeBetweenTicks);						//activates the gaining gold function
	stats();							//activates the stats function
	buildingPopulation(dirtHuts, dirtHutPopSec*timeBetweenTicks);
	buildingPopulation(stickHuts, stickHutPopSec*timeBetweenTicks);
	buildingPopulation(sodHouses, sodHousePopSec*timeBetweenTicks);
	buildingPopulation(treehouses, treehousePopSec*timeBetweenTicks);
	buildingPopulation(farms, farmPopSec*timeBetweenTicks);
	buildingPopulation(stoneBlockHouses, stoneBlockHousePopSec*timeBetweenTicks);
	buildingPopulation(blacksmiths, blacksmithPopSec*timeBetweenTicks);
	buildingPopulation(bathHouses, bathHousePopSec*timeBetweenTicks);
	buildingPopulation(churches, churchPopSec*timeBetweenTicks);
	buildingPopulation(townHalls, townHallPopSec*timeBetweenTicks);
	buildingPopulation(castles, castlePopSec*timeBetweenTicks);
	d = new Date();
	day = d.getTime();
	checkDailyReward();					//checks and updates daily reward info
	prestigeChecker();				//checks and updates prestige info
	
	
	testTimer = testTimer + 1*timeBetweenTicks;
	document.getElementById("testTimer").innerHTML = testTimer;
	
	
}, 1000/15);	 		//attempts to run interval 15 times every second.


window.setInterval(function()			//autosaves. every 10 secs as of now.
{
	saveGame();
}, 10000)
