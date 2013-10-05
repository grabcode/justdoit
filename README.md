TODO

Action CRUD
Context CRUD
Objectives CRUD
Action link to context
Action link to objectives



## JUST DO IT

authors: [Alexandre Girard](https://github.com/grabcode)

This is an implementation of the ["Getting things done"](http://en.wikipedia.org/wiki/Getting_Things_Done) methodoly.

Anecdote: my 10 years old niece visited us in Sydney, and I wanted to trigger her interest for programming. The Web stack would be her starting point, and after the exellent (although limited) "Hello world", she started the Todo list. I'm adding some layers (vendors) before publishing it on the Play Store:
- underscore, backbone : library, maintainability 
- require.js : structure flavor and "compilation"
- zepto.js: used mostly for easy DOM manipulation
- topcoat.io : light and modular css components
- animate.css : effects in pure css3


Use bower

/**
  * Just do it - a "getting things done" implementation
  * Time to act and achieve - stop dreaming or planning
  * App that gives list of actions depending on context, and shared goal
  * Action: A1, Next action: A2
  */

Introducing an action implies fitting a goal
Otherwise, this is an unecessary action

Views:
CRUD actions
CRUD goals
CRUD context
Bijectif link goals to actions
Bijectif link actions to context
Action list unsorted
Action list by goal, by "goal occurency", by context, by status



/**
  * Call it goal or project, this is things you wish to achieve
  * example: get VISA, become Tech lead, run Marathon, buy House
  */
var goals = {
	_id: {
		label: '',
		actions_id: [],
		state: 'draft, active, pending, archived'
	}
};

/**
  * Action are the actual concrete steps to achieve your goal
  * actions are the core of the method
  * Important: an action is not "splittable" in action, an action could benefit many goals
  * example: publish JustDoIt app, run 10k a day for 3 months, stop smoking (consequence: saving money which is good to buy the house, and health benefit which is good for the marathon goal)
  */
var actions = {
	_id: {
		label: '',
		state: 'todo, done'
	}
}

var context = {
	_id: {
		label: 'Quiet home',
		requirements: [
			{
				type: 'geographical, time',
				details : {
					where: 'house',
					//when: 'after 6pm'
					plus: ['quiet room']
				}
			}
		]
	}
}

