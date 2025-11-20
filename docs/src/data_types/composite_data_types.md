# Composite data types

Composite data types (CDTs) are used for storing more complex data in a structured composition in the memory.

## Arrays


### Lists

Declared using `[N:t]T`

Lists are growable arrays which are allocated from heap to store `T` and the optional sentinel `t`, where `t` is `T`, with the minimum size of `N`.

```vega
;;Main := _, _ ::
x := [1, 2, 3]
x := char['h', 'e', 'l', 'l', 'o']
;;end
```

## Tuples

Declared using `{T,V,..,N}`

Tuples are ordered sets with a finite size.

```vega
;;Main := _, _ ::
coordinates := {74.5, 91.4}
;;end
```

## Enums

Declared using `'{}` notation.

Enums are both tagged numbers and sum types.

```vega
;;Main := _, _ ::
Base := '{
  /* C++ - like tagged numbers */
  Base2 i8 := 2
  Base8 i8 := 8
  Base16 i8 := 16
  
  /* Aliasing (type of the right hand side will be used) */
  Binary := Base.Base2
  Octal := Base.Base8
  Hexadecimal := Base.Base16

  /* Sum types */
  Other u8
}

myHex := Base.Hexadecimal
;;end
```

## Records

Declared using `#{}` notation

Records are the data types to store data in a structured composition.

```vega
;;Main := _, _ ::
Person := #{
  name str
  age u8
  id any
  faxNumber ?str
}

Vase(T) := #{ inner: T }

/*It's not necessary to state fields unless it is necessary to write in a specific order*/
Jan := { 
  "Jan"
  20
  "8675309"
  nil
}

vaseOfi8 := Vase(i8){ 23 }
;;end
```

## `str`

Declared using `""` notation.

`str` is basically an immutable and [internable](https://en.wikipedia.org/wiki/String_interning) `[]u8` and used for containing information in text with [UTF-8](https://www.unicode.org/glossary/#UTF_8) encoding.

```vega
;;Main := _, _ ::
msg := "Hello, World!"
;;end
```
