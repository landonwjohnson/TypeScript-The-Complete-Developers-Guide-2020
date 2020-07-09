### Definitions

**Type Annotations**
Code we add to tell TypeScript what type of value. Variable will refer to
Typescript tries to figure out what type of value a variable refers to

**Classes**
Blueprint to create an object with some fields(values) and methods (functions) to represent a 'thing'

### Arrays

**Typed Arrays**
Arrays where each element is some consistent type of value

**Why do we care about arrays in Typescript?**

- Typescript can do type inference when extracting values from an array
- Typescript can prevent us from adding incompatible values to an array
- We can get help with 'map', 'forEach', 'reduce' functions
- Flexible - arrays can still contain multiple different types

**Where to used typed Arrays?**
Any time we need to represent a collection of records with some arbitrary sort order

### Tuples

Array like structure where each element represents some property of a record

### Interfaces

Interfaces + Classes = How we get really strong reuse in Typescript

**Interfaces**
Creates a new type, describing the property names and values types of an object

### Classes

**Why do we care about classes in Typescript?**
Interface + Classes = How we get really strong code reuse in Typescript

### Method/Function Modifiers

- **Public**: This method can be called anywhere, any time
- **Private**: This method can only be called by other _methods_ in _this_ class
- **Protected**: This method can be called by other methods in _this_ class, or by other methods in child classes

### Super

_super_ in a child class constuctor is referencing the master class contructor
