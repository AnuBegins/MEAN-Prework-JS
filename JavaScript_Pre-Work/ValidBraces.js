
// Valid Braces
// Objectives:
// Exercise those logic muscles!
// Use data structures (arrays, objects) effectively to complete the challenge.
// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.



function validBraces(braces){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    var stack = [];

    for (var i = 0; i < braces.length; ++i)
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
            stack.push(braces[i]);
        else if (stack[stack.length-1] === pairs[braces[i]])
            stack.pop();
        else
            return false; // catch-all
    if (stack.length === 0) {
        return true;
    }
  //  return stack.length === 0;
}


// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False