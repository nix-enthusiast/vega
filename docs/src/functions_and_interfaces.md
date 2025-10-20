# Functions and Interfaces

## Functions (`f()`)
```vega
;;main = |_, _|
  runFn = |fn: f(str) -> (), val: str|; fn val; end

  x: f(str) -> () = |name: str| echo "Hi {name}!"; end
  
  runFn x "Vega"
;;end
```

## Interfaces

```vega
T is ToString where
  toString: f(T) -> str
end

Person = #{
  name: str
  age: u8
}

Person is ToString where
  toString = |p: Person| std.fmt.sprintf "Name: %s, Age: %i" p.name p.age end
end

;;main = |_, _|
p = Person {"Joe" ; 23}
std.testing.assertEq "Name: Joe, Age: 23" (toString p)
;;end
```