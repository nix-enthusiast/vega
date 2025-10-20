# Composite data types

Composite data types (CDTs) are used for storing more complex data in a structured composition in the memory.

## Arrays


### List (`[N:t]T`)

Growable array which allocated from heap to store `T` and the optional sentinel `t`, where `t` is `T`, with the minimum size of `N`.

```vega
;;main = |_, _|
x = [1, 2, 3]
x = char['h', 'e', 'l', 'l', 'o']
;;end
```

## Enums

Declared with `'{}` notation.

Enums are both tagged numbers and sum types.

```vega
;;main = |_, _|
Base = '{
  /* C++ - like tagged numbers */
  Base2: 2
  Base8: 8
  Base16: 16
  
  /* Aliasing */
  Binary: Base.Base2
  Octal: Base.Base8
  Hexadecimal: Base.Base16

  /* Sum types */
  Other: u8
}

myHex = Base.Hexadecimal
;;end
```

## Tuples (`{}`)

An ordered set with finite size.

Declared with `{T,V,..,N}`

```vega
;;main = |_, _|
coordinates = {74.5, 91.4}
;;end
```

## Records

Declared with `#{}` notation

Records are the data types to store data in a structured composition.

```vega
;;main = |_, _|
Person = #{
  name: str
  age: u8
  id: any
  faxNumber: ?str
}

Vase(T) = { inner: T }

/*It's not necessary to state fields unless it is necessary to write in a specific order*/
Jan = { 
  "Jan"
  20
  "453-687-923-11"
  nil
}

vaseOfi8 = Vase(i8){ 23 }
;;end
```

## `str`
```vega
;;main = |_, _|
s = "Hello, World!"
s = #['f', 'o', 'o']
s = ('b', 'a', 'r')
;;end
```
