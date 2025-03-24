// Description:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog.
// If this one is an alligator (case-insensitive) return small otherwise return wide.


// Описание:
// Широкоротая лягушка особенно интересуется пищевыми привычками других существ.

// Он просто не может перестать спрашивать у встреченных им существ, что они любят есть. Но потом он встречает аллигатора, который просто ОБОЖАЕТ есть лягушек с разинутыми ртами!

// Когда он встречает аллигатора, тот разевает крошечную пасть.

// Ваша цель в этой задаче — создать метод mouth_size с одним аргументом animal, который соответствует животному, встреченному лягушкой. 
// Если это alligator (без учёта регистра), верните small, иначе верните wide.


function mouthSize(animal) {
    return result = (animal === "alligator" || animal === "ALLIGATOR")? "small" : "wide";
}
console.log(mouthSize("alligator"));