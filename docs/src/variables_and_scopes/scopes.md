# Scopes

Scopes enforce lexical separation between language constructs to maintain logical and behavioral coherence. Vega provides four scope types to support this.

## Function Scopes

Function scopes begin at the function signature (`T :: R`) and end with `end`, defining which expressions are evaluated within the function.

```vega
;;import std/io/Puts
SayHi := :: () 
  Puts "Hi %!" 
end
```

## Conditional and Branch Scopes

Conditional scopes begin with `cond` and end with `end`, defining which expressions are evaluated within it, while each branch under it forms its own scope, starting at `=>` and ending at `end`.

```vega
;;import std/io/Puts
cond
  x < 5 => Puts "< 5" ; end
  x @ 5..10 => Puts "5 <= x < 10" ; end
end 
```

## Composite and Mathematical Data Type Scopes

Composite and mathematical data types use curly braces `{}` and brackets `[]` to delimit which fields, elements, or values belong to the structure.

```vega
Tuple := {1, 4.5}
Temperature := '{Fahrenheit ; Celsius }
Person := #{name str ; age u8}

List := [1, 2, 3]
Matrix := #[4, 7, 2; 1, 9, 6; 3, 8, 6]
```
