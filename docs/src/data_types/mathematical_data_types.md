# Algebraic Data Types

### Rationals

|Bits              |Type      |
|------------------|----------|
|\\(8\\)           |`r8`      |
|\\(16\\)          |`r16`     |
|\\(32\\)          |`r64`     |
|\\(64\\)          |`r32`     |
|\\(128\\)         |`r128`    |
|\\(pointer\\)     |`rat`     |
|\\(2^{pointer}\\) |`brat`    |

### Complex

|Bits              |Type      |
|------------------|----------|
|\\(8\\)           |`c8`      |
|\\(16\\)          |`c16`     |
|\\(32\\)          |`c64`     |
|\\(64\\)          |`c32`     |
|\\(128\\)         |`c128`    |
|\\(pointer\\)     |`cpx`     |
|\\(2^{pointer}\\) |`bcpx`    |

### Matrix (`#[L:W]T`)
A special list with the optional length of `L` and width of `W`, for advanced mathematical calculations.
  
```vega
;;Main := |_, _|
matrix_1 := #[1, 2, 3; 4, 5, 6; 7, 8, 9] 

matrix_2 := [3:3]int#[ 1 2 3
               4 5 6
               7 8 9 ]  
;;end               
```