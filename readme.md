## Basic JavaScript Course

#### ¿ What is a variable ?

It's a space in memory where you can store information depending on the type of data supported by the language.

#### ¿ What is the difference between declaring and initializing a variable ? 

Declare a variable create a variable without giving it an initial value.
Initialize a variable is to give a value to that variable.

### ¿ How to know the type of data of a value?

We have to use the reserved word typeof

## Examples

```javascript

typeof "Hi, World"
typeof true
typeof 25
typeof [1,2,3]

```


## Keywords to create variables

- var
- let
- const

## Data Types 

The data types tell me what values will be supported by that variable.

## Primitive data

- number 
- string
- boolean
- null
- undefined
- bigint
- symbol

| Primitive data |  Description  | Example |
| :-------- | :--------------------- | :------------------------------------------ |
| number    | Integers and decimals  | 10 **or** 10.5                              |
| string    | Chars Chain            | "Hi, World"                                 |
| boolean   | Logical value          | true **or** false                           |
| null      | Null value             | **null**                                    | 
| undefined | Value not defined      | **undefined**                               |
| bigint    | Numeric values which are too large  | **BigInt**("9007199254740991") |
| symbol    | Object whose constructor returns symbol | **Symbol**("foo");         |

## Object Type

- function
- object

| Primitive data |  Description  | Example |
| :-------- | :--------------------------- | :------------------------------------ |
| function  | Representation of a function | function add(){}                      |
| object    | Representation of a object   | { name: "TEONFT" }                    |

## Functions 

#### ¿ What is a function ?

Functions allow us to create blocks of code which we can reuse when we need them. 

- Functions receive parameters when we create them, when we call them we send them arguments, however functions can be created with or without parameters.

- Functions can return values, but it is not obligatory


## Define a function 

```javascript

function functionName() {

}

```

## Call a function 

```javascript

functionName();

```

## Define a function with parameters

```javascript

function add(number_1,number_2) {
  return number_1 + number_2
}

```

## Call a function with arguments

```javascript

add(5,2);

```

## Declarative functions

Use the reserved word **function** to declare the function

Declarative functions are **hoisted**, this means that we can call the function before and then declare it

```javascript

add(2,5);

function add(number_1,number_2) {
  return number_1 + number_2
}

```

## Expressive function

Function will be stored in a variable.

```javascript

const greet = function(){
  return "Hi"
}

greet()

```

Declarative functions are  not **hoisted**

## Global Scope 

Environment where global variables can be accessed from anywhere in our program.

## Local Scope 

Are those that are declared within the code blocks or functions.

## Coercion

Coercion consists of transforming from one data type to another of a variable.

- Implicit
- Explicit

#### ¿ What is implicit coercion ?

Implicit coercion consists in the transformation of data types using JavaScript Help.

#### ¿ What is explicit coercion ?

Explicit coercion is the transformation of controlled data types

## Example

| Coercion type |  Code    | Result   |
| :-------- | :---------   | :------- |
| Implicit  | 5 + "7"      |  "57"    |
| Implicit  | 6 + true     |  7       |
| Implicit  | true + true  |  2       |
| Implicit  | false + 1    |  1       |
| Explicit  | Number("77") |  77      |
| Explicit  | Boolean(1)   |  true    |
| Explicit  | String(97)   |  "97"    |
