# Primitives

Primitives are the built-in essential types to build the rest of the language. Other types not mentioned here is derived or build upon these types.

### Integers

|Bits/Sign         |Signed |Unsigned|
|------------------|-------|--------|
|\\(8\\)           |`i8`   |`u8`    |
|\\(16\\)          |`i16`  |`u16`   |
|\\(32\\)          |`i32`  |`u32`   |
|\\(64\\)          |`i64`  |`u64`   |
|\\(128\\)         |`i128` |`u128`  |
|\\(pointer\\)[^1] |`int`  |`uint`  |
|\\(2^{pointer}\\) |`bint` |        |

### Floats
|Bits              |Type     |
|------------------|---------|
|\\(16\\)          |`f16`    |
|\\(32\\)          |`f32`    |
|\\(64\\)          |`f64`    |
|\\(80\\)          |`f80`    |
|\\(128\\)         |`f128`   |
|\\(pointer\\)     |`float`  |
|\\(2^{pointer}\\) |`bfloat` |

### FFI Numbers

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

### `bool`    

Boolean are single-bit values, which can be either `true` or `false`.

Despite their size being 1 bit, they use 1 byte (8 bits), since the smallest memory block is 1 byte.

```vega
;;main = |_, _|
x = true
x = false
;;end
``` 

### `char`
Represents a single [Unicode Scalar Value](https://www.unicode.org/glossary/#unicode_scalar_value) inside `u32`.

```vega
;;main = |_, _|
c = 'a'
c = '🥔'
;;end
```

[^1]: \\(pointer\\) is the pointer size of the system.