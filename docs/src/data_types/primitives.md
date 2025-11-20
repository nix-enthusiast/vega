# Primitives

Primitives are the built-in essential types to build the rest of the language. Other types not mentioned here are either derived or built upon these primitives.

## Integers
Integers are binary representations of whole values.

|Bits/Sign         |Signed |Unsigned|
|------------------|-------|--------|
|\\(8\\)           |`i8`   |`u8`    |
|\\(16\\)          |`i16`  |`u16`   |
|\\(32\\)          |`i32`  |`u32`   |
|\\(64\\)          |`i64`  |`u64`   |
|\\(128\\)         |`i128` |`u128`  |
|\\(pointer\\)[^1] |`int`  |`uint`  |
|\\(2^{pointer}\\) |`ibig` |        |

## Floats
The [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)-compliant binary representation of real values with limited precision.

|Bits              |Type     |
|------------------|---------|
|\\(16\\)          |`f16`    |
|\\(32\\)          |`f32`    |
|\\(64\\)          |`f64`    |
|\\(80\\)          |`f80`    |
|\\(128\\)         |`f128`   |
|\\(pointer\\)     |`float`  |
|\\(2^{pointer}\\) |`fbig`   |

## FFI Numbers
The aliases of integer and float primitives used to import numeric types in their appropriate [C](https://en.wikipedia.org/wiki/C_(programming_language)) representation from external libraries.

|C             |Signed          |Unsigned        |
|--------------|----------------|----------------|
|`char`        |`c_char`        |`c_u_char`      |
|`short`       |`c_short`       |`c_u_short`     |
|`int`         |`c_int`         |`c_u_int`       |
|`long`        |`c_long`        |`c_u_long`      |
|`long long`   |`c_long_long`   |`c_u_long_long` |
|`float`       |`c_float`       |                |
|`double`      |`c_double`      |                |
|`long double` |`c_long_double` |                |

## `bool`    
A single-bit value which can be either `true` or `false`.

Although one bit suffices for a boolean compiler has to allocate one byte for it, since the smallest memory block is 1 byte.

```vega
;;Main := _, _ ::
good := true
bad := false
;;end
``` 

## `char`
An `u32` value that represents a single [Unicode Scalar Value](https://www.unicode.org/glossary/#unicode_scalar_value).

```vega
;;Main := _, _ ::
a := 'a'
potato := '🥔'
;;end
```

[^1]: \\(pointer\\) is the pointer size of the system.