# Notations

Notations are short prefixes or suffixes to distinguish ambiguous literal values or prevent the compiler from using the default type for that literal.

## Binary Notation (`0b`)
Binary notation is mostly used for [bit flags](https://developer.mozilla.org/en-US/docs/Glossary/Bitwise_flags).

```vega
;;import std/testing/Assert
HAS_SWORD := 0b10000000
HAS_WAND := 0b01000000
HAS_ARROW := 0b00100000
HAS_ARMOR := 0b00010000
HAS_MINION := 0b00001000
MAGE := 0b00000100
WARRIOR := 0b00000010
ARCHER := 0b00000001

;;Main := _, _ ::
/*Let's create a fellow archer with an armor, minion, and arrow*/
archer := 0b00111001

Assert archer and HAS_ARROW
Assert archer and HAS_ARMOR
Assert archer and HAS_MINION
Assert archer and ARCHER
;;end
```

## Octal Notation (`0o`)
Octal notation is mostly used for [file permissions](https://developer.mozilla.org/en-US/docs/Glossary/Bitwise_flags) of [POSIX](https://en.wikipedia.org/wiki/POSIX)-compliant systems.

```vega
;;import std/testing/Assert
;;import std/num/Bitshift
EXEC := 0o1
WRITE := 0o2
READ := 0o4
RWX := 0o7
RE := 0o5

;;Main := _, _ ::
perm := 0o755

user := (Bitshift perm 16) and RWX
group := (Bitshift perm 8 and 0xFF) and RE
other := (perm and 0xFF) and RE

Assert user = RWX
Assert group = RE
Assert other = RE
;;end
```

## Hexadecimal Notation (`0x`)
Hexadecimal notation is mostly used for reading/writing raw data as bytes.

```vega
;;import std/testing/Assert
;;import std/io/Read
MAGIC := [0x7f, 0x45, 0x4C, 0x46]

;;Main := _, _ ::
read_bytes := Read("my_elf")

Assert read_bytes[..4] = MAGIC
;;end
```

## Integer notation (`_iN` or `_uN`)

Integer notation is used for disambiguating a written compile-time integer to the requested type. `N` stands for the [bit size of the integer](./data_types/primitives.md#integers).

```vega
;;import std/testing/Assert
;;Main := _, _ ::
number := 12.34_i16
number_big := 12.34_ibig

Assert number is i16
Assert number_big is ibig
;;end
```

## Float notation (`_fN`)

Float notation is used for disambiguating a written compile-time float to the requested type. `N` stands for the [bit size of the float](./data_types/primitives.md#floats).

```vega
;;import std/testing/Assert
;;Main := _, _ ::
number := 12.34_f16
number_big := 12.34_fbig

Assert number is f16
Assert number_big is fbig
;;end
```

## Thousands Separator (`_`)

[Thousands Separator](https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping) is used to assist the readability of big integers.

```vega
;;import std/testing/Assert
;;Main := _, _ ::
Assert 100000000 = 100_000_000
;;end
```
